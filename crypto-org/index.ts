import { common } from './common'
import { ibc } from './ibc'
import { moduleAccounts } from './module.accounts'

export const crypto = {
  ...common,
  ...ibc,
  ...moduleAccounts,
}
