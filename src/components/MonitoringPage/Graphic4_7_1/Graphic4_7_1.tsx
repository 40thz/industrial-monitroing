import { GraphicSection } from '@/components/shared/graphics/ui/GraphicSection';
import { useQuery } from 'react-query';
import { graphicService } from '@/services/grpahic.service/grpahic.service';

import { Loader } from '@/components/shared/blocks/Loader';
import { StackedHorizontalGraphic } from '@/components/shared/graphics/StackedHorizontalGraphic';

export const Graphic4_7_1 = () => {
  const { data } = useQuery(['4_7_1'], () => graphicService.getGraphic('4_7_1'));
  console.log(data)
  if(!data) {
    return <Loader>Загрзука данных</Loader>
  }

  if (data) {
    return (
      <GraphicSection>
      <StackedHorizontalGraphic data={data} height={25} />
    </GraphicSection>
    );
  }
};
