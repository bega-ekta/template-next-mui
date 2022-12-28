const SIGN_MESSAGE =
  'Welcome to Ekta Claim!\n\n' +
  'Signing is the only way we can truly know\n' +
  'that you are the owner of the wallet you\n' +
  'are connecting. Signing is a safe, gas-less\n' +
  'transaction that does not in any way give\n' +
  'EKTA permission to perform any\n' +
  'transactions with your wallet.\n\n';

const NONCE = 'Nonce: PGBYLIUDI5Q4JKAFG7D9BE05MIID3VPF';

export default class AuthHelper {
  static createSignMessage = (address: string) => {
    return SIGN_MESSAGE + NONCE + '\n\nWallet address:\n' + address;
  };
}
