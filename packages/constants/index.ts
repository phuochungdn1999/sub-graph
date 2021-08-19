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

export const FACTORY_ADDRESS = Address.fromString('0xBcBE323cA67A9F18661248C5502E591ee657FE63')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_FARMER_ADDRESS = Address.fromString('0x0Dfb74dFB7b0D81B89AE7885DA3FdfBFdD422271')

export const SONE_TOKEN_ADDRESS = Address.fromString('0x30dddae60D73BcF11B67F0C0F73b8d38b9533a9E')

export const SONE_USDT_PAIR_ADDRESS = Address.fromString('0xa8cB0F086C354d40fA95af8670C35563bA4464F6')

export const SONE_DISTRIBUTOR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const USDC_WETH_PAIR = '0xDcdD442952A46232F3185BF77BB91546783dd717'

export const DAI_WETH_PAIR = '0x7d870107e0e1B51E90e6433254e97E8d925a091b'

export const USDT_WETH_PAIR = '0xc194ACB88b5CC7993971907D24301E8786815259'

export const SONE_USDT_PAIR = '0xa8cB0F086C354d40fA95af8670C35563bA4464F6'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('5')

export const WETH_ADDRESS = Address.fromString('0xd9522c1b430f4E1ca815D3a12F008B5C1e8a6427')

export const SONESWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const USDT_ADDRESS = Address.fromString('0xB0eC658d5496b05356e6C1DFCF3c54407E2A4791')

export const MASTER_FARMER_START_BLOCK = BigInt.fromI32(13546394)

export const UNISWAP_FACTORY_ADDRESS = Address.fromString('0xBcBE323cA67A9F18661248C5502E591ee657FE63')

export const UNISWAP_SONE_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromI32(10750005)

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x64cd3FC0CD9F89EF69a7DdCf2A8FFc24448F148e')

export const UNISWAP_SONE_ETH_PAIR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const UNISWAP_SONE_USDT_PAIR_ADDRESS = Address.fromString('0xa8cB0F086C354d40fA95af8670C35563bA4464F6')