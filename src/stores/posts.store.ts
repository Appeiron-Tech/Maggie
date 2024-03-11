import { ref } from "vue"
import PostService from "../services/post.service"

export enum WebPostType {
  POST = 'post',
  ARTWORK = 'artwork',
  SKETCH = 'sketch'
}
export interface IWebPost {
  title: string
  slug: string
  cover?: {
    source: string
    url: string
    alt: string
  }
  endImage?: {
    source: string
    url: string
    alt: string
  }
  textBlocks: string[]
  type?: string
  order?: number
  children?: Omit<IWebPost, 'children'>[]
}

export const posts =  ref()
const postService = new PostService()
async function loadPosts(): Promise<IWebPost[]> {
  posts.value = await postService.getAllPosts()
  return posts.value
}

export async function getAllPosts(): Promise<IWebPost[]> {
  if(!posts.value){
    await loadPosts()
  }
  return posts.value
}