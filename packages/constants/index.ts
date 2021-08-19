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

export const FACTORY_ADDRESS = Address.fromString('0xb6ef230f01008e04b83e61807ed710f5babc8ddd')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_FARMER_ADDRESS = Address.fromString('0x7a62eb5FEEE85FcFF4A40c55Fee6776708580470')

export const SONE_TOKEN_ADDRESS = Address.fromString('0x57bb30bdb0D449bf687ed648ACF2467F045c8E74')

export const SONE_USDT_PAIR_ADDRESS = Address.fromString('0x9f5eA7469e47b51ba24eF79A3079808F8a092982')

export const SONE_DISTRIBUTOR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const USDC_WETH_PAIR = '0x83116f17695e496E4250005E242D1770708792E5'

export const DAI_WETH_PAIR = '0xa41e305d60061aF83182aC515dC859e76cFD8cE9'

export const USDT_WETH_PAIR = '0x1557aeCD250080Dc3dCc4539392F429f32487FFf'

export const SONE_USDT_PAIR = '0x9f5eA7469e47b51ba24eF79A3079808F8a092982'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('5')

export const WETH_ADDRESS = Address.fromString('0xc778417e063141139fce010982780140aa0cd5ab')

export const SONESWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x1557aeCD250080Dc3dCc4539392F429f32487FFf')

export const USDT_ADDRESS = Address.fromString('0x393397Baae01Dc19678220E4D3Fd34FDA4FeBd1D')

export const MASTER_FARMER_START_BLOCK = BigInt.fromI32(13546394)

export const UNISWAP_FACTORY_ADDRESS = Address.fromString('0xb6ef230f01008e04b83e61807ed710f5babc8ddd')

export const UNISWAP_SONE_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromI32(10750005)

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x1557aeCD250080Dc3dCc4539392F429f32487FFf')

export const UNISWAP_SONE_ETH_PAIR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const UNISWAP_SONE_USDT_PAIR_ADDRESS = Address.fromString('0x9f5eA7469e47b51ba24eF79A3079808F8a092982')