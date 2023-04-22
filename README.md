# y-whois

Y-whois is a collection of Whois resources managed by [Yummy Capital](https://yummy.capital), designed to help users identify blockchain addresses of [Crypto.org](https://crypto.org) and [Cronos](https://cronos.org) Mainnets. The information located in this repository is utilized by [Yummy Explorer](https://explorer.yummy.capital), a blockchain explorer platform that provides users with an intuitive way to view and analyze blockchain data on the [Crypto.org](https://crypto.org) and [Cronos](https://cronos.org) Mainnets. By leveraging the resources available in this repository, [Yummy Explorer](https://explorer.yummy.capital) is able to provide users with comprehensive information about the owners and operators of blockchain addresses and make it easier to explore and search for addresses, transactions and other activities taking place on these networks.

## Structure

Each chain has their own directory: [Cronos Mainnet](./src/whois/cronos/) and [Crypto.org Mainnet](./src/whois/crypto.org/).

There are three directories for each chain:
`ibc` – specified for ibc accounts
`module.accouns` – specified for module accounts
`others` – specified for organizations and individuals

Each directory stores a key-value object, where `key` is the address in a particular blockchain network, and `value` is `Whois` data.

`Whois` data has following interface:

```ts
interface Whois {
  label: string // label to be displayed next to the address or on the address page
  link?: string // optional link to an external source (website)
}
```

Example of [Veno.finance](./src//whois/crypto.org/others/veno.finance/index.ts):

```ts
import { WhoisRecords } from '../../../../interfaces'

export default <WhoisRecords>{
  cro1vh0qats69klguljnpfux925rf320whj8gyhn0a: {
    label: 'Veno Finance',
    link: 'https://veno.finance',
  },
}
```

## Contributing

1. Fork this repo to your own github account
2. Clone fork and create new branch

```bash
git clone git@github.com:YOUR_ACCOUNT/y-whois.git
cd y-whois
git branch <branch_name>
git checkout <branch_name>
```

3. Add your information
4. Commit and push to your fork

```bash
git add -A
git commit -m “Add <DESCRIPTION>”
git push origin <branch_name>
```

5. From your repository, make pull requesrt (PR)
