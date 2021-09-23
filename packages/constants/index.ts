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

export const FACTORY_ADDRESS = Address.fromString('0x0327c2fF325e7F4E13cabbf7f261130A4048b864')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_FARMER_ADDRESS = Address.fromString('0x05bf874f71AAbf40966489e45DE3E5FcDC823927')

export const SONE_TOKEN_ADDRESS = Address.fromString('0x5FEA1f4aEf9c78BC56cEd5083fb59d351396748f')

export const SONE_USDT_PAIR_ADDRESS = Address.fromString('0xF1Eec9e028CE90e53e17add2814827240eF6c74B')

export const SONE_DISTRIBUTOR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const USDC_WETH_PAIR = '0x301de729232B4003D268D17ab0D1eeFe03785C2c'

export const DAI_WETH_PAIR = '0x6A5D071C0B91452507ce5eF261491a7c9019deE1'

export const USDT_WETH_PAIR = '0xe90d087b5509F20E530C660daB9024f0224bE021'

export const SONE_USDT_PAIR = '0xF1Eec9e028CE90e53e17add2814827240eF6c74B'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('5')

export const WETH_ADDRESS = Address.fromString('0x18665A1EB12785A38118ef2063aBB587e42d51e8')

export const SONESWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0xe90d087b5509F20E530C660daB9024f0224bE021')

export const USDT_ADDRESS = Address.fromString('0x12cd536e6de4AfF412a62482D45433C83EF39FFC')

export const MASTER_FARMER_START_BLOCK = BigInt.fromString('0')

export const UNISWAP_FACTORY_ADDRESS = Address.fromString('0x0327c2fF325e7F4E13cabbf7f261130A4048b864')

export const UNISWAP_SONE_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromString('0')

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0xe90d087b5509F20E530C660daB9024f0224bE021')

export const UNISWAP_SONE_ETH_PAIR_ADDRESS = Address.fromString('0x21ddc5604FEB889063Ab56618BC6b8A2b2694BAb')

export const UNISWAP_SONE_USDT_PAIR_ADDRESS = Address.fromString('0xF1Eec9e028CE90e53e17add2814827240eF6c74B')

export const SONE_FACTORY_START_BLOCK = BigInt.fromString('0')

export const SONE_USDT_PAIR_START_BLOCK = BigInt.fromString('0')