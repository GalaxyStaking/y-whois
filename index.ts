import bittrex from './bittrex'
import crypto from './crypto'
import ibc from './ibc'
import okex from './okex'

export default {
  ...bittrex,
  ...crypto,
  ...ibc,
  ...okex,
}
