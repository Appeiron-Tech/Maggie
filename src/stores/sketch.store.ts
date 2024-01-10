// store.js
import { reactive } from 'vue'

export interface ISketch {
    id: number,
    title: string,
    coverImage: string,
    endImage: string,
    mainText: string,
}

export const sketchDates: ISketch[] = [
  {
    id: 0,
    title: "Date 1",
    coverImage: 'https://images.squarespace-cdn.com/content/v1/554b5e7ce4b0149371f10a93/1699963908568-AXN5GNYGZW1X67RVF0CU/image-asset.jpeg?format=1000w',
    endImage: 'https://images.squarespace-cdn.com/content/v1/554b5e7ce4b0149371f10a93/1694585961473-9LFYG7C05ZQAMH26H8QJ/image-asset.jpeg?format=1000w',
    mainText: 'Lorem Ipsum 1 es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
  },
  {
    id: 1,
    title: "Date 2",
    coverImage: 'https://images.squarespace-cdn.com/content/v1/554b5e7ce4b0149371f10a93/1699963908568-AXN5GNYGZW1X67RVF0CU/image-asset.jpeg?format=1000w',
    endImage: 'https://images.squarespace-cdn.com/content/v1/554b5e7ce4b0149371f10a93/1694585961473-9LFYG7C05ZQAMH26H8QJ/image-asset.jpeg?format=1000w',
    mainText: 'Lorem Ipsum 2 es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
  },
  {
    id: 2,
    title: "Date 3",
    coverImage: 'https://images.squarespace-cdn.com/content/v1/554b5e7ce4b0149371f10a93/1699963908568-AXN5GNYGZW1X67RVF0CU/image-asset.jpeg?format=1000w',
    endImage: 'https://images.squarespace-cdn.com/content/v1/554b5e7ce4b0149371f10a93/1694585961473-9LFYG7C05ZQAMH26H8QJ/image-asset.jpeg?format=1000w',
    mainText: 'Lorem Ipsum 3 es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
  },
  {
    id: 3,
    title: "Date 4",
    coverImage: 'https://images.squarespace-cdn.com/content/v1/554b5e7ce4b0149371f10a93/1699963908568-AXN5GNYGZW1X67RVF0CU/image-asset.jpeg?format=1000w',
    endImage: 'https://images.squarespace-cdn.com/content/v1/554b5e7ce4b0149371f10a93/1694585961473-9LFYG7C05ZQAMH26H8QJ/image-asset.jpeg?format=1000w',
    mainText: 'Lorem Ipsum 4 es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
  }
]

export const sketchStore = reactive({
  currentSketch: sketchDates[0],
  update(index: number) {
    this.currentSketch = sketchDates[index]
  },
})