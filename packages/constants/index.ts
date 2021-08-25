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

export const FACTORY_ADDRESS = Address.fromString('0x16373A406828Bf5d3dDF071FC24b682E9057b9A5')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_FARMER_ADDRESS = Address.fromString('0xfB3bEEE96FA08c2CAb70E6DbE34084A99B47b9aD')

export const SONE_TOKEN_ADDRESS = Address.fromString('0x57bb30bdb0D449bf687ed648ACF2467F045c8E74')

export const SONE_USDT_PAIR_ADDRESS = Address.fromString('0xd3c3830818845153d1f54a066a0e12ef40dd8267')

export const SONE_DISTRIBUTOR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const USDC_WETH_PAIR = '0x1c0e5563d1d7e662deae672d470dc9e813793585'

export const DAI_WETH_PAIR = '0x401ec9e948d6eaa694714eaf4ebb3b6c5e11025a'

export const USDT_WETH_PAIR = '0xc061f7d573bcd723deaf4c333c63be0486248508'

export const SONE_USDT_PAIR = '0xd3c3830818845153d1f54a066a0e12ef40dd8267'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('5')

export const WETH_ADDRESS = Address.fromString('0xc778417e063141139fce010982780140aa0cd5ab')

export const SONESWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0xc061f7d573bcd723deaf4c333c63be0486248508')

export const USDT_ADDRESS = Address.fromString('0x393397Baae01Dc19678220E4D3Fd34FDA4FeBd1D')

export const MASTER_FARMER_START_BLOCK = BigInt.fromI32(13546394)

export const UNISWAP_FACTORY_ADDRESS = Address.fromString('0x16373A406828Bf5d3dDF071FC24b682E9057b9A5')

export const UNISWAP_SONE_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromI32(10750005)

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0xc061f7d573bcd723deaf4c333c63be0486248508')

export const UNISWAP_SONE_ETH_PAIR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const UNISWAP_SONE_USDT_PAIR_ADDRESS = Address.fromString('0xd3c3830818845153d1f54a066a0e12ef40dd8267')