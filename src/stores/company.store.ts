import { ref } from 'vue';
import CompanyService from '../services/company.service'

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

export const company = ref()
const companyService = new CompanyService()
async function loadCompany(): Promise<ICompany> {
  company.value = await companyService.getCompany()
  return company.value
}

export async function getCompany(): Promise<ICompany> {
  if(!company.value){
    await loadCompany()
  }
  return company.value
}