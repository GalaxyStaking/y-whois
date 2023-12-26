import { cronosEvm } from './cronos-evm'
import { cronosPos } from './cronos-pos'

export const whois = {
  ...cronosEvm,
  ...cronosPos,
}
