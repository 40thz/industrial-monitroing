import { request } from '@/utils/request';
import { GraphicProps } from '@/components/shared/graphics/types';

class GraphicService {
  async getGraphic(slug: string) {
    try {
      const res = await request.get<GraphicProps['data']>(`/graphic/${slug}`);

      const { data } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const graphicService = new GraphicService();
