import { Chain } from 'wagmi';

enum CustomChains {
  Ekta = 'ekta',
  EktaTestnet = 'ektaTestnet',
}

export const customChains: { [key in CustomChains]: Chain } = {
  [CustomChains.Ekta]: {
    id: 1994,
    name: 'Ekta Chain',
    network: 'EktaChain',
    nativeCurrency: {
      decimals: 18,
      name: 'EKTA',
      symbol: 'EKTA',
    },
    rpcUrls: { default: 'https://main.ekta.io' },
    blockExplorers: { default: { name: 'Ekta Chain', url: 'https://ektascan.io' } },
    testnet: false,
  },
  [CustomChains.EktaTestnet]: {
    id: 1004,
    name: 'Ekta Chain Testnet',
    network: 'ekta chain testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'EKTA',
      symbol: 'EKTA',
    },
    rpcUrls: { default: 'https://test.ekta.io:8545' },
    blockExplorers: { default: { name: 'Ekta Chain Testnet', url: 'https://test.ektascan.io' } },
    testnet: true,
  },
};

export const chainsIcons: { [key: number]: string } = {
  1994: '/icons/ekta-logo.svg',
  1004: '/icons/ekta-logo.svg',
  5: '/icons/ekta-logo.svg',
};
