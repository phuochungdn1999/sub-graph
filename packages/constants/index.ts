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

export const FACTORY_ADDRESS = Address.fromString('0x59863261650e93605fCD7795C97E0d7968842808')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_FARMER_ADDRESS = Address.fromString('0x511FaE7b224F32cB1570d8D747777d4119264859')

export const SONE_TOKEN_ADDRESS = Address.fromString('0x4141fA29806e4d0BfD19E4c4E8f6FC18D02168c7')

export const SONE_USDT_PAIR_ADDRESS = Address.fromString('0x926775e260cb22560B72Bbd4e97C965A240491E3')

export const SONE_DISTRIBUTOR_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000')

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const USDC_WETH_PAIR = '0x865f9bB8d59A66686Db8B83992679c82A6A62383'

export const DAI_WETH_PAIR = '0x391C4A1FaB3A48Fd4dc4DE4b8d176df3ce56Dd47'

export const USDT_WETH_PAIR = '0xD52B311Fb0c2bb2A8338341D2A2260bAF74C70f7'

export const SONE_USDT_PAIR = '0x926775e260cb22560B72Bbd4e97C965A240491E3'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('5')

export const WETH_ADDRESS = Address.fromString('0xF63b0Be21Fe39fA91fc22Ce6D8fA3c96d766Cebd')

export const SONESWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0xD52B311Fb0c2bb2A8338341D2A2260bAF74C70f7')

export const USDT_ADDRESS = Address.fromString('0x1A6a64b5BE7fa1FB776b0f98496003a6819530be')

export const MASTER_FARMER_START_BLOCK = BigInt.fromString('0')

export const UNISWAP_FACTORY_ADDRESS = Address.fromString('0x59863261650e93605fCD7795C97E0d7968842808')

export const UNISWAP_SONE_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromString('0')

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0xD52B311Fb0c2bb2A8338341D2A2260bAF74C70f7')

export const UNISWAP_SONE_ETH_PAIR_ADDRESS = Address.fromString('0xC165127c0726101a9e2d6E9c226DebCB22b48024')

export const UNISWAP_SONE_USDT_PAIR_ADDRESS = Address.fromString('0x926775e260cb22560B72Bbd4e97C965A240491E3')

export const SONE_FACTORY_START_BLOCK = BigInt.fromString('0')

export const SONE_USDT_PAIR_START_BLOCK = BigInt.fromString('0')