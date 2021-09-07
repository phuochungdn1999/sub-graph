import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')

export const BIG_DECIMAL_1E12 = BigDecimal.fromString('1e12')

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')

export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')

export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)

export const BIG_INT_TWO = BigInt.fromI32(2)

export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100)

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)

export const BIG_INT_ZERO = BigInt.fromI32(0)

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29)

export const FACTORY_ADDRESS = Address.fromString('0xf3BdB4541d7094962044cD2D86500464CA07037c')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_FARMER_ADDRESS = Address.fromString('0xc912421c25703820e44594153169523569DB9917')

export const SONE_TOKEN_ADDRESS = Address.fromString('0xd0A3Fd44eF5579b813a2Aaec0CE85dF62b864830')

export const SONE_USDT_PAIR_ADDRESS = Address.fromString('0xeA66b5d3EF11f7b331664819dCA4D9e6600626cB')

export const SONE_DISTRIBUTOR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const USDC_WETH_PAIR = '0xEF55F64dEaBF840DbD611e63C3c04360D3129e88'

export const DAI_WETH_PAIR = '0x069e1898B810933B165C5766478Edef6060746a9'

export const USDT_WETH_PAIR = '0x1da05b4a2314f414cf9772915533a21790A7f6F1'

export const SONE_USDT_PAIR = '0xeA66b5d3EF11f7b331664819dCA4D9e6600626cB'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('5')

export const WETH_ADDRESS = Address.fromString('0xF082a0112B6cF43Dd05f0E8965a0eFc5788eCc71')

export const SONESWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x1da05b4a2314f414cf9772915533a21790A7f6F1')

export const USDT_ADDRESS = Address.fromString('0x277B445e83Ed86b10D83c95C68F23ADDc903Df51')

export const MASTER_FARMER_START_BLOCK = BigInt.fromString('0')

export const UNISWAP_FACTORY_ADDRESS = Address.fromString('0xf3BdB4541d7094962044cD2D86500464CA07037c')

export const UNISWAP_SONE_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromString('0')

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x1da05b4a2314f414cf9772915533a21790A7f6F1')

export const UNISWAP_SONE_ETH_PAIR_ADDRESS = Address.fromString('0x29827B1951faB236f2747A8D6062EA6016C3EA52')

export const UNISWAP_SONE_USDT_PAIR_ADDRESS = Address.fromString('0xeA66b5d3EF11f7b331664819dCA4D9e6600626cB')

export const SONE_FACTORY_START_BLOCK = BigInt.fromString('0')

export const SONE_USDT_PAIR_START_BLOCK = BigInt.fromString('0')