import { ref } from 'vue';
import CompanyService from '../services/company.service'
import type CentredService from '../services/company.service';

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

export interface ILanding {
  videoUrl: string
  greetingsMessage: string
  moreWorksMessage: string
}

export interface IWebContact {
  title?: string,
  subtitle?: string,
  sendLabel?: string,
}

export interface IWebAbout {
  title?: string,
  mainText?: string
}

export interface IWebCompany {
  companyId: string,
  contact: IWebContact,
  about: IWebAbout,
  landing: ILanding
}

export interface ICompany {
  name: string
  country: string
  type: string
  contact: IContact
  currency: string
  sns: ISns[]
  stores: IStore[]
  web: IWebCompany
  updatedAt: Date
  createdAt: Date
}

export class CompanyStore {
  companyService: CentredService
  company = ref()
  constructor () {
    this.companyService = new CompanyService()
  }
  // Actions
  async getCompany(): Promise<ICompany> {
    if (!this.company.value) {
      this.company.value = await this.companyService.getCompany()
    }
    return this.company.value as ICompany
  }
}