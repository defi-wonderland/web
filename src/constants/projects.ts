export interface Project {
  name: string;
  description: string;
  github?: string;
  docs?: string;
  twitter?: string;
  web?: string;
}

export const PARTNER_PROJECTS: Project[] = [
  {
    name: 'OpOO (with Optimism)',
    description:
      'Modular optimistic oracle solution, built alongside Optimism. Enables secure, permissionless delivery of real-world data and attestations.',
  },
  {
    name: 'HAI (with Reflexer)',
    description: 'Fork of the RAI protocol in Optimism that supports new collaterals such as OP, LSD, and RAI.',
    github: 'https://github.com/hai-on-op',
    docs: '',
    twitter: 'https://twitter.com/letsgethai',
    web: 'https://www.letsgethai.com',
  },
  {
    name: 'Optimistic Roots (with Connext)',
    description:
      'The current canonical bridge implementations are quite expensive. This project aims to reduce costs and increase transfer speeds by implementing an Optimistic approach with cross-chain Merkle root aggregations.',
    github: 'https://github.com/connext',
    twitter: 'https://twitter.com/ConnextNetwork',
    web: 'https://www.connext.network/',
  },
  {
    name: 'Crosschain Governance (with Connext)',
    description:
      "User-friendly React component library that enables users to deploy and manage their Avatar's Zodiac Connext Module and easily build the transaction data required for executing desired actions through an xcall function in Connext.",
    github: 'https://github.com/defi-wonderland/crosschain-widget',
  },
  {
    name: 'xTokens (with Connext)',
    description:
      'xTokens is a standard for bridged tokens. A common interface to be used across different implementations of bridges to keep liquidity concentrated and improve user experience on-chain.',
    github: 'https://github.com/defi-wonderland/xTokens',
  },
  {
    name: 'Amphora (with Adam Cochran)',
    description:
      'Amphora is a lending market, forked from Interest Protocol, that supports various types of collateral, such as single-type collateral like ETH and liquidity provider tokens from Curve, including TriCrypto2. It also provides a USDA stablecoin.',
    docs: 'https://amphora-protocol.gitbook.io/amphora-protocol/',
    twitter: 'https://twitter.com/amphoraprotocol',
  },
  {
    name: 'Keep3r Network v2',
    description:
      'Decentralized and permissionless network for projects that need external DevOps. We rebuilt the protocol from scratch, improving the code quality, gas usage, tokenomics and adding automatic credit mining.',
    github: 'https://github.com/keep3r-network/keep3r-network-v2',
    twitter: 'https://twitter.com/thekeep3r',
    web: 'https://keep3r.network',
  },
  {
    name: 'Royalties Support (with Sudoswap)',
    description:
      'The Router is a separate mechanism that issues royalties by querying the Manifold.xyz Royalty Registry. The team was responsible for designing the solution and developing the smart contracts. The Router is now deployed and being leveraged by Reservoir.',
    github: 'https://github.com/sudoswap/lssvm/pull/35',
  },
];

export const PUBLIC_GOODS = [
  {
    name: 'Price Oracle',
    description:
      'Price is a permissionless and reliable oracle solution that provides safe token price quotes by leveraging Uniswap V3 and automation. The team was responsible for the architecture and tokenomics design, UI, off-chain scripts, and smart contract development.',
    website: 'https://oracles.rip',
    docs: 'https://docs.oracles.rip',
    github: 'https://github.com/price-oracle',
    twitter: 'https://twitter.com/price_oracle',
  },
  {
    name: 'Smock',
    description:
      "Smock is a testing framework for Hardhat that is used by around 800 repositories. It is a Solidity mocking library and a plugin for Hardhat that allows developers to create mock Solidity contracts using JavaScript or TypeScript. Smock makes it easier to test smart contracts and eliminates the need to write mock contracts in Solidity. Smock is inspired by sinon, sinon-chai, and Python's unittest.mock and currently only works with Hardhat. However, the team plans to extend support to other testing frameworks like Truffle in the future.",
    github: 'https://github.com/defi-wonderland/smock',
    docs: 'https://smock.readthedocs.io/en/latest/',
  },
  {
    name: 'Sidechain Oracle (with Keep3r Network)',
    description:
      'This mechanism provides the price history of Uniswap V3 pools to chains where the pair may not be available or has insufficient liquidity. This is achieved by creating a virtual Uniswap V3 pool with bridged data from the Mainnet. The team was responsible for the architecture design, off-chain scripts, and smart contract development. The mechanism has recently been launched and is already working on Optimism and Polygon.',
    github: 'https://github.com/defi-wonderland/sidechain-oracles',
  },
];
