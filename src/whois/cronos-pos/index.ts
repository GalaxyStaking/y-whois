import ibc from './ibc'
import moduleAccounts from './module.accounts'
import others from './others'

export const cronosPos = {
  ...ibc,
  ...moduleAccounts,
  ...others,
}
