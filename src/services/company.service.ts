import { TENANCY_NAME } from '../constants.ts'
import type { ICompany } from '../stores/company.store.ts'
import ApiService from './shared/api.service.ts'

export default class CentredService extends ApiService {
  constructor() {
    super({ baseURL: '/company' })
  }

  async getCompany(): Promise<ICompany> {
    try {
      const { data } = (await this.get(`/${TENANCY_NAME}`))
      return data as ICompany
    } catch (e) {
      console.error(e)
      throw new Error('company api call error')
    }
  }
}
