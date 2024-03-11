import { COMPANY_ID } from '../constants.ts'
import type { IWebPost } from '../stores/posts.store.ts'
import ApiService from './shared/api.service.ts'

export default class PostService extends ApiService {
  constructor() {
    super({ baseURL: '/post' })
  }

  async getAllPosts(): Promise<IWebPost[]> {
    try {
      const { data } = (await this.get(`/${COMPANY_ID}`))
      return data as IWebPost[]
    } catch (e) {
      console.error(e)
      throw new Error('getting all posts api calling error')
    }
  }
}
