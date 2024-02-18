import { request } from '@/utils/request';
import { RegionDTO } from './types';

class RegionService {
  async getRegionBySlug(slug: string) {
    try {
      const { data: res } = await request.get<RegionDTO>(`/regions/${slug}`);

      const { data, dataWithIndustryType } = res;

      const formated = data.map((item) => {
        return {
          ...item,
          square: parseInt(item.square as string),
          proceeds: parseInt(item.proceeds as string),
          audience: parseInt(item.audience as string),
          //size: Math.ceil(item.size as number),
        };
      });

      const formated2 = dataWithIndustryType.map((item) => {
        return {
          ...item,
          //size: Math.ceil(item.size as number),
        };
      });

      return {
        data: formated,
        dataWithIndustryType: formated2,
      };
    } catch (e) {
      console.log(e);
    }
  }
}

export const regionService = new RegionService();
