###### tags: `price`

# Price discovery

[toc]

## TLDR

1. Mint PRICE, assign percentage to price discovery. Define how much liquidity do we want to bootstrap in order to define aprox price given the auctioned amount.
2. Only one auction for price discovery + liquidity bootstrap: USDC/PRICE.
3. We use that liquidity + ours to init the other pools with the corresponding price (chainlink).
4. Initialize the pool with a price of PRICE slightly higher (5-10%) to incentivize auctioneeers. Small lose to IL, price to pay for marketing.
5. Decreasing price dutch auction with limit orders and min price. All succesfull bids pay last passing price.
6. Auctioned PRICE is not inmediatly claimed, but only after the auction is completed. This avoids frontrunning and allows last passing price.
7. Optional: If successfull, "sell" our methods to protocols + init our pools.

## Introduction

In order to initialize a pool, an **initial price** has to be set. We have to set a price discovery method for

- PRICE itself.
- Protocols (optional). They can run their own price discovery mechanism. Alternatively, we can provide a framework for them to launch properly and initialize the pool in a safer way (library).

## PRICE's price discovery

Before jumping to the mechanism, some general considerations:

PRICE minting will only take place

- At init.
- When people locks PRICE.

This dynamic will makes it so that

- We cannot manipulate the price by minting-burning.
- As people lock PRICE, the price should increase initially (remember that PRICE locking is overcollateralized, so locking 100 PRICE for mintingo 80 PRICE means a net -20 PRICE available in the market). This should incentivize early adopters, even though the speed of this process depends on the speed of adoption and is a priori unknown.
- For the same reason, the price should strongly go down if many users withdraw fast. As a lot of PRICE unlocks and get available for selling.

It is super hard for the market to price PRICE. I don't even know how I would do tbh.

We don't really care about the initial value of PRICE. We can set how many tokens to mint by hand and the market should adapt the target price to each total supply.

**Do we care about bootstrapping liquidity?** If we dont care at all, we will be mostrly focused on finding the most fair price. If we want to attract some liquidity, we might want to make the FOMO spike. In my opinion, we don't loose anything by attempting to do a liquidity bootstrap.

The initial goal should be to create 2 or 3 core pools: USDC/PRICE, ETH/PRICE and DAI/PRICE.

1. From 1 pool: small additional liquidity bootstrap.

   After minting the init amount, we will use a fraction to perform price discovery against USDC (or ETH, we will use USDC in this example but it's kinda arbitrary). We can do this just with 1 pool, as the initial price for the remaining pools can be derived from this one and chainlink information (one time call). Several approaches:

   - From incoming USDC, we can set the USDC-PRICE pool. From our pockets, or by trading this liquidity on the market, we add the USDC/DAI/ETH necessary for full init.
     - Pros: easy to do, no liquidity fragmentation. This is my preferred method.
     - Cons: We are..well.. using our bank.
   - From incoming USDC, we can set the USDC-PRICE pool. In order to get DAI and ETH, we buy USDC from this pool with iddle PRICE and trade USDC for ETH/DAI in the Uni pool.
     - Pros: no liquidity fragmentation for the auction.
     - Cons: we are dumping a lot of PRICE on our own pool, which would deincentivize auction participants. This is the worst method IMHO.

2. From several pools: relevant additional liquidity bootstrap.
   Another option would be to run 3 separate auctions, which can be done one after the other or simultaneously. One would guess that when the price of the auction is lower than the right price, arbitrageeeers would come to avoid an inbalance. - Pros: no dumping, dont use our money. - Cons: Not sure if it makes any sense when the price is already known.

I think the best method would be to use our pockets, but try to achieve as much liquidity as possible with the first launch. **To discuss.**

We can also consider decreasing the initial pools from 3 to 2 (removing DAI) to help make all of this easier. It might be even better for the protocol to have fewer more liquid pools.

If we do care at least something about bootstrapping liquidity, we want to get as many USDC as possible, aka sell high. This is not because we are getting the tokens for us, but because in this way we can initialize a full range with more liquidity. The price of USDC is fixed beforehand. So, to get some examples, if the protocol sells

- 10 PRICE for 1 USDC, then initialize a pool with 10 additional PRICE and 1 USDC -> $10*1 = L^2$. The value of this position is 2 USDC.
- 10 PRICE for 20 USDC, then initialize with 10 additional PRICE and 20 USDC -> $10*20 = L^2$. The value of this position is 40 USDC.

This liquidity does not change if people swap afterwards and will make the protocol stronger.

## Mechanism

### Plan

The auctioned PRICE should not be released immediately as people auction, but unlocked after the process is completed. This is to avoid people from starting the pool before us. We should be able to start and provide liquidity to the 3 starting pools before releasing the PRICE.

:::success
Something that does happen here (different from tardfi/other protocols or NFTs) is that tokens will be available later, as we are literally creating the pool with the final price. The **final price of the pool can not be the lowest passing price from the auction**, as no one would participate in the first place. The motivation to participate in the auction will come from bidding a lower price than the market.
:::

There are two ways of doing this:

1. Initialize the pool with a price which is slightly higher than the final price. We would loose just a little due to IL, but would increment the participation in exchange.
2. Some people pay above, some below the target price. We can achieve this with a private dutch auction (no one sees the rest) and a non last price (we don't make everyone pay the same).

As private auctions are really odd, especially on-chain, I would better go with the first option.

Example of 1: We sell 10 PRICE for 20 USDC. We initialize the pool at 2,1 instead of 2 (a 5% difference, just an example here) by using these 20 USDC and $x=\frac{20}{2,1}=9.5$ PRICE. Original bidders might arb against the pool till equilibrium. Impermanent loss for this variation is really small and can be considered a tradeoff for incentivizing auction participation.

The remaining 0.5 PRICE can be used to

- Create a concentrated position to the right of the active tick. It's added to the minted amount basically.
- Saved as an emergency reserve (usable to arbitrage external pool inits for instance).

To give some numbers, a 5% higher price would mean 0.0297 % in IL. A 10% an IL of 0.1134%.

### Dutch Auction

An auction in which the auctioneer begins with a high asking price in the case of selling, and lowers it until some participant accepts the price, or it reaches a predetermined reserve price.

There are many ways of performing a Dutch Auction, and I go into more detail in the Appendix. The most commonly used in crypto is the **decreasing price dutch auction**.

In this method, ERC20s are offered for sale at a set maximum price. The price is then gradually lowered over a fixed interval of time until a bid is made, securing the item for the bidder at the current price. Bidders must trade-off between certainty and price: bid early to secure the item and you pay a premium; bid later at a lower price but risk losing to another bidder.

We can use a custom function, such as

$$p(t) = k.e^{-\lambda t}$$

where $k$ is the starting price and $\lambda$ corresponds to the speed of the exponential decay.

Check the MISO contracts for ref: [stupid and sensual SUSHI](https://github.com/sushiswap/miso/blob/canary/contracts/Auctions/DutchAuction.sol)

Given the fact that we are already locking the PRICE for the participants of the auction, I think it would be better to use a last price auction, where people do not pay exactly their offer, but pay for the last passing price if and only if the initial offer was higher than the last passing price. This might seem inconvenient at first order, but it is not necessarily true, as people would be incentivized to "safely offer more".

#### Wonder's touch of magic

Some ideas to innovate, to build on top of traditional price decreasing dutch:

- I think it would be wise to make a mash-up with the [Gnosis Dutch auction](https://github.com/gnosis/ido-contracts) and introduce limit orders (in addition to the spot-buying). This would mean the best of both worlds.
- This method does not have normally a min price, but we can add one by adding a constant to the price function.

  $p(t) = k.e^{-\lambda t} +p_{min}$

#### Why not LBP

LBPs are the AMM version of this (without limit orders).

This I have to discuss with you guys. I don't know if it's viable, because if I understand correctly this method would mean creating a Balancer smart pool. Or can it be done externally?

#### Why not batch?

Well, if we don't care about liquidity at all, then batch could be a better option. Prices are generally fairer here, the problem is that it is much more difficult to incentivize players here. Final price will always be the last price.

Dutch auctions create higher prices than Batch on average, as there is no FOMO.

https://cognitiveresearchjournal.springeropen.com/articles/10.1186/s41235-020-00259-w

#### Why not a crowd auction?

We could conduct a crowdsale as well, with a predefined price from our side. The problem is that this does not solve the issue of initializing a pool, as there is no price discovery. We could set a completely off price.

#### Questions

- credits to @gas1cent: Can Wonder join the auction?

#### Notes

- An auction can be done directly in uni by creating positions, but it would be really expensive and unnecessary.

#### tokenA's price discovery

Same mechanism we used for PRICE, but changing USDC for PRICE and PRICE for tokenA. The protocol sells their tokenA in an auction in exchange for PRICE tokens which will in turn be used to initialize the full range position.

## Important comment about pool init

The question we have been rumbling about for a time now, catch us once again here: what happens if someone initializes a pool with a wrong starting price?

For the main pools of PRICE this shouldn't be a problem, as this only happens at init and we can release the PRICE token only once the auction and pool init is completed.

For other tokens it might seem problematic, but it would be strange as they can be arbed strongly.

- If the price of PRICE is set super high, people can come and sell expensive PRICE for cheap tokenA.
- If the price of tokenA is set super high, people can come and sell expensive tokenA for cheap PRICE.

Low liquidity positions are easily rebalanced. Larger liquidities can be, in most cases, slowly arbed back. In order to avoid an attack from these larg liquidities, there should be a delay between pool init and it being used as an oracle to prevent this attack on a lending pool. **The contract should check if the pool exists, and halt the oracle init until manual approval.**

The only scenario which will never be arbed back would be if tokenA has no secondary market apart from our pool and the protocol would not want to use their tokensA. There is no other access to tokenA in this case and an attacker could set the pool at an extremely high price for tokenA. This attack can happen in general, but it can be deactivated at pool init by introducing the oracle halting. For general cases some thoughts have to be put into.

We, as Wonderland, can perform some arb if we want to. If we are interested, we can think of ways to bootstrap this, but we can even use the reserves intended to be used as full range to arb. - If the price of PRICE is high, we use the PRICE given by the protocol to buy cheap tokenA. - If the price of tokenA is high, we use the tokenA given by the protocol to buy cheap PRICE.

Protocols can also arb with their tokenA if they want. We might consider having a PRICE reserve for these situations and arb the other direction.

# Appendix

## Dutch auction

An auction in which the auctioneer begins with a high asking price in the case of selling, and lowers it until some participant accepts the price, or it reaches a predetermined reserve price.

There are two main ways of doing this.

- Last price: the price that each bidder pays is based on the lowest price of all the allotted bidders, or essentially the last successful bid. Therefore, even if you bid $100 for your 1,000 shares, if the last successful bid is $80, you will only have to pay $80 for your 1,000 shares. Final price will be the lowest passing price.
- Non last price: each one pays their offer. Final price will be determined from the amount of PRICE received for those $N$ tokenA tokens.

Note that the last price has higher offers on average from people wanting to buy for sure. This game theory does not happen at the last price. It also seems more fair for the participants to do the last price.

This method is really good for both transparency and price discovery. In a Dutch Auction, each bidder has complete visibility as to the total available supply, current price, and changes in price over time. This mechanism achieves price discovery — every participant can bid for any amount of the supply at what they believe to be the correct price, and each bid is visible, so every subsequent bidder benefits immediately from the bid information in making their own decision about the correct price. It’s a quintessential example of an open and transparent market mechanism that efficiently facilitates price discovery.

Pros:

- The biggest benefit of such auctions is that they are meant to democratize public offerings.
- Supposed to minimize the difference between offering and actual listing prices.
- Predetermined amount of tokenA selled at the same price.
- Bots can not be manipulated.

Cons:

- There is a danger that participants may perform less rigorous analysis as compared to investment bankers and come with a price estimate that may not accurately reflect the company's prospects.
- Winner's curse: In this, a stock's price may crash immediately after listing when investors, who had bid a higher price earlier, realize that they may have miscalculated or overbid. Such investors may try to sell the stock to get out of their holding, leading to a crash in the share's price. This is what we kinda desire from our method of setting the price higher.

There are also several methods to do this. All methods are similar in their final result:

### Simultaneous bids

For example, an investor may place a bid for 100 shares at $100 while another investor offers $95 for 500 shares.

Once all the bids are submitted, the allotted placement is assigned to the bidders from the highest bids down, until all of the allotted shares are assigned.

### [Gnosis Dutch Auction](https://blog.gnosis.pm/announcing-gnosis-auction-launch-390124d56248)

Small variation on Dutch auction. Bidders can place limit orders at any time during the auction without having to wait for the auction to reach their desired price.
At its core, Gnosis Auction uses batch auctions, which enables matching limit orders of buyers and sellers with the same clearing price for all participants.

![](https://i.imgur.com/1vq60Ra.png)

Really similar to simultaneous bids, but it seems better thought for web3.

https://github.com/gnosis/ido-contracts

### Decreasing price

Tokens are offered for sale at a set maximum price. The price is then gradually lowered over a fixed interval of time until a bid is made, securing the item for the bidder at the current price. Bidders must trade-off between certainty and price: bid early to secure the item and you pay a premium; bid later at a lower price but risk losing to another bidder.

It creates more FOMO than the two previous models, but it does not set a min price, which could backfire.

This method is Non last price by definition, which is in turn better for the protocol as long as it does not disincentivize participation.

We can use a custom function, such as

$$p(t) = k.e^{-\lambda t}$$

where $k$ is the starting price and $\lambda$ corresponds to the speed of the exponential decay.

Check the MISO contracts for ref: https://github.com/sushiswap/miso/blob/canary/contracts/Auctions/DutchAuction.sol

### LBP

This is a decreasing price Dutch auction done on-chain in a smart pool by Balancer LBP: https://docs.balancer.fi/v/v1/guides/smart-pool-templates-gui/liquidity-bootstrapping-pool

https://medium.com/balancer-protocol/building-liquidity-into-token-distribution-a49d4286e0d4

![](https://i.imgur.com/ZKZ92Bi.png)
https://medium.com/balancer-protocol/a-primer-on-fair-token-launches-and-liquidity-bootstrapping-pools-11bab5ff33a2

## Batch Auction

A Batch Auction distributes an amount of tokens to users that is proportional to their contribution to the pool. The token price is then determined based on the total amount raised at the end of the auction.

- Batch does not have min or max price.
- People will pay less than in a Dutch auction

## Crowdsale

Fixed price and fixed amount of tokens. No price discovery, impossible to set up a pool afterwards.

## Paradigm's GDA

Ultra fair, but ultra gas ineficient https://www.paradigm.xyz/2022/04/gda
