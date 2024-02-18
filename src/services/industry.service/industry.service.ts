import { request } from '@/utils/request';
import { IndustryDTO } from './types';

class IndustryService {
  async getData(sheet: string) {
    try {
      const res = await request.get<IndustryDTO>(`/industry/${sheet}`);

      const { data } = res;

      return data;

    } catch (e) {
      console.log(e);
    }
  }
}

export const industryService = new IndustryService();
