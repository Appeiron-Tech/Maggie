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
  currency: string
  stores: IStore[]
  web: IWebCompany
  updatedAt: Date
  createdAt: Date
}

export const company: ICompany = {
  name: "Maggie Velarde",
  country: "Spain",
  type: "freelance",
  currency: "EUR",
  web: {
    companyId: 'companyId',
    contact: {
      title: 'Contact',
      subtitle: 'Do you want a special work? Let’s talk.',
      sendLabel: 'Send',
    },
    about: {
      title: "Hello, I’m Maggie",
      mainText: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
    },
    landing: {
      videoUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20231020155223/Full-Stack-Development-_-LIVE-Classes-_-GeeksforGeeks.mp4",
      greetingsMessage: `Hello, welcome to </br> my garden...`,
      moreWorksMessage: 'See more flowers',
    }
  },
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