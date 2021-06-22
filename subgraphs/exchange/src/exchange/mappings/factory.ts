import { getFactory, getPair } from '../enitites'
import { log } from '@graphprotocol/graph-ts'

import { BIG_INT_ONE } from 'const'
import { PairCreated } from '../../../generated/Factory/Factory'
import { Pair as PairTemplate } from '../../../generated/templates'

export function onPairCreated(event: PairCreated): void {
  
  log.debug('Block number: {}, block hash: {}, transaction hash: {}', [
    event.block.number.toString(), 
    event.block.hash.toHexString(), // "0x..."
    event.transaction.hash.toHexString(), // "0x..."
  ])
  log.debug('params.pair: {}', [
    event.params.pair.toString()
  ])

  const factory = getFactory()

  const pair = getPair(event.params.pair, event.block)

  log.debug('pair.totalSupply: {}', [
    pair.totalSupply.toString()
  ])

  // We returned null for some reason, we should silently bail without creating this pair
  if (!pair) {
    return
  }

  // Now it's safe to save
  pair.save()

  // create the tracked contract based on the template
  PairTemplate.create(event.params.pair)

  // Update pair count once we've sucessesfully created a pair
  factory.pairCount = factory.pairCount.plus(BIG_INT_ONE)
  factory.save()
}
