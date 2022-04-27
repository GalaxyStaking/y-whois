import bittrex from './bittrex'
import crypto from './crypto'
import ibc from './ibc'
import okx from './okx'

export default {
  ...bittrex,
  ...crypto,
  ...ibc,
  ...okx,
}
