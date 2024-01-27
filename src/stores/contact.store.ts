export interface IContact {
  phone: string
  email: string
  sns: ISns[]
}

export interface ISns {
  code: string
  url: string
  active: boolean
}

export interface IContactForm {
  title: string,
  subtitle: string,
  sendLabel: string,
  contact: IContact
}

export const contactForm: IContactForm = {
  title: 'Contact',
	subtitle: 'Do you want a special work? Let’s talk.',
  sendLabel: 'Send',
  contact: {
    phone: '+34 621 080 558',
    email: 'maggievelar@gmail.com',
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
    ]
  }
}