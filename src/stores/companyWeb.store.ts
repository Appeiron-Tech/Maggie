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

export const webCompany: IWebCompany = {
  companyId: 'companyId',
  contact: {
    title: 'Contact',
    subtitle: 'Do you want a special work? Let’s talk.',
    sendLabel: 'Send',
  }
  about: {
    title: "Hello, I’m Maggie",
    mainText: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
  },
  landing: {
    videoUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20231020155223/Full-Stack-Development-_-LIVE-Classes-_-GeeksforGeeks.mp4",
    greetingsMessage: `Hello, welcome to </br> my garden...`,
    moreWorksMessage: 'See more flowers',
  }
}