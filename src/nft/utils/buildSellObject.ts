export const buildSellObject = (amount: string) => {
  return {
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    amount,
    decimals: 18,
    name: 'Bone',
    priceInfo: {
      baseAsset: 'BONE',
      basePrice: amount,
      ETHPrice: amount,
    },
    symbol: 'BONE',
    tokenId: 'BONE',
    tokenType: 'ERC20',
  }
}
