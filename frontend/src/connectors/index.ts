
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { ALL_SUPPORTED_CHAIN_IDS } from '../constants/chains';
import { RPC_URL } from '../constants/rpc';
import getLibrary from '../utils/get_library';
import { BscConnector } from '@binance-chain/bsc-connector';
import { NetworkConnector } from './network_connector';
let networkLibrary: Web3Provider | undefined;
export const network = new NetworkConnector({
    urls: RPC_URL,
    defaultChainId: 1,
  });
export function getNetworkLibrary(): Web3Provider {
    // eslint-disable-next-line no-return-assign
    return (networkLibrary = networkLibrary ?? getLibrary(network.provider));
  }
export const injected = new InjectedConnector({
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  });
export const bscConnector = new BscConnector({ supportedChainIds: ALL_SUPPORTED_CHAIN_IDS })
export const walletconnect = new WalletConnectConnector({
   bridge: "https://bridge.walletconnect.org",
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
    rpc: RPC_URL,
    qrcode: true,
  });


