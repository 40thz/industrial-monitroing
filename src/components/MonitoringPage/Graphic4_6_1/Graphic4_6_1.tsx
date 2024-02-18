import { GraphicSection } from '@/components/shared/graphics/ui/GraphicSection';
import { useQuery } from 'react-query';
import { graphicService } from '@/services/grpahic.service/grpahic.service';
import { DoubleHorizontalGraphic } from '@/components/shared/graphics/DoubleHorizontalGraphic';
import { Loader } from '@/components/shared/blocks/Loader';

export const Graphic4_6_1 = () => {
  const { data } = useQuery(['4_6_1'], () => graphicService.getGraphic('4_6_1'));

  if(!data) {
    return <Loader>Загрзука данных</Loader>
  }

  if (data) {
    return (
      <GraphicSection>
        <DoubleHorizontalGraphic data={data} />
      </GraphicSection>
    );
  }
};
