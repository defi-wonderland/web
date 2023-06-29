import { calcSkeleDay } from '~/utils/misc';

export const MEMBERS = [
  {
    name: 'Mati',
    position: 'Co-founder & CEO',
    description:
      "- 3x Startup founder & CEO\n- Founder & GP at a $50m deep-tech VC\n\nFun fact: Used to run a tenebrio molitor farm and has become somewhat of an expert on breeding mealworms. Bet you didn't see that one coming!",
  },
  {
    name: 'Pepo',
    position: 'Co-founder & Strategist',
    description: '- Your hot-takes friend from DeFi summer',
  },
  {
    name: 'Skele',
    position: 'Co-founder & Architect',
    description:
      '- First contract deployed 2049 days ago (TODO: make this dynamic)\n- Likes breaking things\n\nFun fact: Never went to space',
  },
  {
    name: 'Gorilla',
    position: 'CTO',
    description:
      '- 10+ years in Software Development\n- Addicted to scalability and conventions\n\nFun fact: His OCD forces him to make the dishwasher look like a Tetris game!',
  },
  {
    name: 'Billy',
    position: 'COO',
    description:
      '- Addicted to meetings and context switching\n\nFun fact: Loves scaring buns. Have you seen one around?',
  },
  {
    name: 'Parti',
    position: 'Lead Researcher',
    description:
      '- Managed to get a PhD in Physics, specializing in quantum information theory.\n- Changed particles for nodes now: "Pls parti, stop asking about the Beacon Chain\'s entropy."\n- Average chaos enjoyer.\n- Definitely not a Furry.\nSad fact: Die-hard Boca Juniors fan.',
  },
  {
    name: 'Joxes',
    position: 'Researcher',
    description:
      "- Background in Engineering\n- Incubated four different communities to concentrate knowledge on Ethereum\n\nFun fact: Yes, I enjoy life but I love to comment on DeFi and Ethereum's scaling solutions all the day",
  },
  {
    name: 'Mono',
    position: 'Researcher',
    description:
      '- IT infrastructure study.\n- Defi research and scalability.\n\nFun fact: In my spare time I also poke my nose into Defi.',
  },
  {
    name: 'Wei3er',
    position: 'Developer',
    description: '- Just a bun from Görli 🥕\n\nFun fact: afraid of bugs and owls',
  },
  {
    name: 'NG',
    position: 'Developer',
    description:
      '- Peaked at 5.6k MMR in Dota 2 back when top 1 had 7.5k. Things spiraled down from there.\n- Reached 1800 ELO in chess.com to never play a ranked game again due to 1800 looking nicer than 1700.\n\nFun fact: Can recite words backwards fast. This is due to OCD. Help',
  },
  {
    name: 'Gas',
    position: 'Developer',
    description:
      '- Watched over a thousand movies, vaguely remember 4 of them.\n- A big nap2earn proponent.\n\nFun fact: Jail dropout.',
  },
  {
    name: 'Doc',
    position: 'Developer',
    description:
      "- Random diploma collector.\n- Assembly fanatic (Huff is cheating).\n\nFun fact: I got 99 issues and a bitshift ain't one.",
  },
  {
    name: 'Ashi',
    position: 'Developer',
    description:
      '- Solidity dev\n- Studied Telecommunications engineering and philosophy\n\nFun fact: Pro player of magic the gathering',
  },
  {
    name: 'Jabber',
    position: 'Developer',
    description: '- Recruited directly by Wonderland\n- Codes even his life\n\nFun fact: Holds a dumbbell everyday',
  },
  {
    name: 'Shaito',
    position: 'Developer',
    description:
      '- Flying bison addicted crypto and building stuff\n- Normie dev turned Solidity enjoyor\n\nFun fact: Have been rewatching avatar the last airbender for the past 7 years',
  },
  {
    name: 'Gotzen',
    position: 'Developer',
    description:
      '- Compulsive optimizer.\n- Another University deserter.\n\nFun fact: Really good at voice impressions.',
  },
  {
    name: 'Turtle',
    position: 'Developer',
    description:
      "- Co-created and helped in multiple onchain and normie products/companies.\n- Loves swimming, video games, anime, science and to debate anything.\n\nFun fact: Doesn't have medical insurance",
  },
  {
    name: 'Raccoon',
    position: 'Developer',
    description:
      '- Systems engineer who studied at UTN.\n- Believes that adaptability is an important feature.\n\nFun fact: Like to travel and do outdoor activities.',
  },
  {
    name: 'Austrian',
    position: 'Developer',
    description:
      "- Studied Software Developer\n- Learned Solidity because he was bored at work\n\nFun fact: 90's horror movies fan",
  },
  {
    name: 'OneTony',
    position: 'Developer',
    description: 'TBD',
  },
  {
    name: 'Excalibor',
    position: 'Developer',
    description: '- Decentralization maxi\n- Loves game theory\n\nFun fact: has a skydiving license',
  },
  {
    name: 'Discotech',
    position: 'Developer',
    description: 'TBD',
  },
  {
    name: 'Ba5ed',
    position: 'Developer',
    description: 'TBD',
  },
  {
    name: 'Drispunk',
    position: 'Developer',
    description: 'TBD',
  },
  {
    name: 'Moebius',
    position: 'Developer',
    description: 'TBD',
  },
  {
    name: 'Ardy',
    position: 'Developer',
    description:
      '- Background in Engineering\n- Passionate about mathematics and philosophy\n\nFun fact: bonsaist apprentice 🌳',
  },
  {
    name: 'Rex (m-r-g-t)',
    position: 'Data Analyst',
    description: 'TBD',
  },
  {
    name: 'Shade',
    position: 'Efficiency Evangelist',
    description:
      '- Amateur Organizational Theorist\n- Prefers reading over any other activity\n\nFun fact: Am actually a tree on the internet.',
  },
];
