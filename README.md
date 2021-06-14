# SoneSwap Subgraph

Aims to deliver analytics & historical data for SoneSwap. Still a work in progress. Feel free to contribute!

The Graph exposes a GraphQL endpoint to query the events and entities within the SoneSwap ecosytem.

Current subgraph locations:

1. **Exchange**: Includes all SoneSwap Exchange data with Price Data, Volume, Users, etc:
   + https://thegraph.com/explorer/subgraph/s-one-finance/exchange (mainnet)
   + https://thegraph.com/explorer/subgraph/s-one-finance/exchange-ropsten
   + https://thegraph.com/explorer/subgraph/s-one-finance/exchange-rinkeby

2. **Master Farmer**: Indexes all MasterFarmer staking data: https://thegraph.com/explorer/subgraph/s-one-finance/master-farmer

3. **SoneSwap-SubGraph-Fork** (on uniswap-fork branch): Indexes the SoneSwap Factory, includes Price Data, Pricing, etc: https://thegraph.com/explorer/subgraph/jiro-ono/s-one-finance-v1-exchange

## To setup and deploy

For any of the subgraphs: `s-one-finance` as `[subgraph]`

1. Run the `yarn run codegen:[subgraph]` command to prepare the TypeScript sources for the GraphQL (generated/schema) and the ABIs (generated/[ABI]/\*)
2. [Optional] run the `yarn run build:[subgraph]` command to build the subgraph. Can be used to check compile errors before deploying.
3. Run `graph auth https://api.thegraph.com/deploy/ <ACCESS_TOKEN>`
4. Deploy via `yarn run deploy:[subgraph]`.

## To query these subgraphs

Please use our node utility: [sone-data](https://github.com/s-one-finance/sone-data).

Note: This is in on going development as well.

## Example Queries

We will add to this as development progresses.

### Maker

```graphql
{
  maker(id: "0x6684977bbed67e101bb80fc07fccfba655c0a64f") {
    id
    servings(orderBy: timestamp) {
      id
      server {
        id
      }
      tx
      pair
      token0
      token1
      soneServed
      block
      timestamp
    }
  }
  servers {
    id
    soneServed
    servings(orderBy: timestamp) {
      id
      server {
        id
      }
      tx
      pair
      token0
      token1
      sone
      block
      timestamp
    }
  }
}
```

# Community Subgraphs

1) croco-finance fork of this repo with slight modifications - [deployment](https://thegraph.com/explorer/subgraph/benesjan/sone-swap), [code](https://github.com/croco-finance/s-one-finance-subgraph)
2) croco-finance dex-rewards-subgraph which tracks SLPs in MasterFarmer and all the corresponding rewards individually. (can be used for analysis of user's positions) - [deployment](https://thegraph.com/explorer/subgraph/benesjan/dex-rewards-subgraph), [code](https://github.com/croco-finance/dex-rewards-subgraph)
