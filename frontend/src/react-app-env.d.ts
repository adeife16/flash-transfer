/// <reference types="react-scripts" />

interface Window {
    // walletLinkExtension is injected by the Coinbase Wallet extension
    walletLinkExtension?: any;
    ethereum?: {
      // value that is populated and returns true by the Coinbase Wallet mobile dapp browser
      isCoinbaseWallet?: true;
      isMetaMask?: true;
      autoRefreshOnNetworkChange?: boolean;
      providers?: any[];
      setSelectedProvider: (provider: any) => Promise<void>;
    };
    web3?: Record<string, unknown>;
    Buffer?:any;
    rmlLoaded?: any;
    rmlCalls?: any;
    rml?: any;
  }