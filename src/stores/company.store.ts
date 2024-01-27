export interface IContact {
  phone: string
  email: string
  website: string
}
export interface ISns {
  code: string
  url: string
  active: boolean
}

export interface IStore {
  name: string
  description?: string
  logoUrl: string
  coverUrl: string
  isMain: boolean
  sns: ISns[]
  latitude?: number
  longitude?: number
  cityId?: number
  isOpenAlways: boolean
  contact: IContact
  isActive: boolean
  updatedAt: Date
  createdAt: Date
}

export interface ICompany {
  id: string
  name: string
  country: string
  type: string
  currency: string
  stores: IStore[]
  updatedAt: Date
  createdAt: Date
}

export const company: ICompany = {
  id: 'companyId',
  name: "Maggie Velarde",
  country: "Spain",
  type: "freelance",
  currency: "EUR",
  stores: [
    {
      name: '',
      description: '',
      logoUrl: '',
      coverUrl: '',
      isMain: true,
      isOpenAlways: true,
      contact: {
        phone: '+34 621 080 558',
        email: 'maggievelar@gmail.com',
        website: 'wwww.maggievelar.com'
      },
      isActive: true,
      sns: [
          {
            code: 'INS',
            url: 'www.instagram.com',
            active: true
          },
          {
            code: 'PINS',
            url: 'www.pinterest.com',
            active: true
          },
          {
            code: 'BEH',
            url: 'www.behance.com',
            active: true
          },
      ],
      updatedAt: new Date('2024-01-31'),
      createdAt: new Date('2024-01-31')
    }
  ],
  updatedAt: new Date('2024-01-31'),
  createdAt: new Date('2024-01-31')
}