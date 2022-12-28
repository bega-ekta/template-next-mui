import { customChains } from 'data/chains';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli, mainnet } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const apiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY;

const { chains, provider, webSocketProvider } = configureChains(
  [customChains.ekta, customChains.ektaTestnet, mainnet, goerli],
  [infuraProvider({ apiKey: apiKey as string }), jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })],
);

const connectors = [new MetaMaskConnector({ chains }), new WalletConnectConnector({ chains, options: { qrcode: true } })];

const client = createClient({ autoConnect: true, connectors, provider, webSocketProvider });

interface IProps {
  children: React.ReactNode;
}

const WagmiProvider: React.FC<IProps> = props => {
  const { children } = props;

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default WagmiProvider;
