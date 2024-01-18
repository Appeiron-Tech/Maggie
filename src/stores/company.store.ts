export interface ICompany {
  name: string
  country: string
  type: string
  currency: string
  updatedAt: Date
  createdAt: Date
}

export const company = {
  name: "Maggie Velarde",
  country: "Spain",
  type: "freelance",
  currency: "EUR",
  createdAt: new Date('2024-01-31')
}