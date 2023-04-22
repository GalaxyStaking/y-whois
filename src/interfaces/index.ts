export interface Whois {
  label: string
  link?: string
}

export type WhoisRecords = Record<string, Whois>
