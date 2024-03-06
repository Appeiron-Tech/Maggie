import type { ICompany } from '../stores/company.store.ts'
import ApiService from './shared/api.service.ts'

export default class CentredService extends ApiService {
  readonly tenancyName = import.meta.env.VITE_TENANCY_NAME
  constructor() {
    super({ baseURL: '/company' })
  }

  async getCompany(): Promise<ICompany> {
    try {
      const { data } = (await this.get(`/${this.tenancyName}`))
      return data as ICompany
    } catch (e) {
      console.error(e)
      throw new Error('company api call error')
    }
  }
}
