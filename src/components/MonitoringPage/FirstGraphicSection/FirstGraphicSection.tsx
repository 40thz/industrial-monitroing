import { DisclosurePanel } from '@/components/shared/ui/Disclosure';
import styles from './FirstGraphicSection.module.scss';
import { GraphicSection } from '@/components/shared/graphics/ui/GraphicSection';
import { HorizontalGraphic } from '@/components/shared/graphics/HorizontalGraphic';

import { mockHorzontalDataThrid } from '@/constants/mockHorzontalData';
import { StackedHorizontalGraphic } from '@/components/shared/graphics/StackedHorizontalGraphic';
import {
  mockStackedHorizontalGraphicFour,
  mockStackedHorizontalGraphicSecond,
  mockStackedHorizontalGraphicThrid,
} from '@/constants/mockStackedHorizontalGraphic';
import { Graphic4_1 } from '../Graphic4_1';
import { Graphic4_2 } from '../Graphic4_2';
import { Graphic4_3 } from '../Graphic4_3';
import { Graphic4_8_1 } from '../Graphic4_8_1';
import { Graphic4_4 } from '../Graphic4_4';
import { Graphic4_5 } from '../Graphic4_5';
import { Graphic4_6_1 } from '../Graphic4_6_1';
import { Graphic4_6_2 } from '../Graphic4_6_2';
import { Graphic4_7_1 } from '../Graphic4_7_1';

export const FirstGraphicSection = ({ id }: { id: number }) => {
  return (
    <>
      {id === 1 && (
        <>
          <Graphic4_1 />

          <Graphic4_2 />

          <Graphic4_3 />
        </>
      )}
      {id === 2 && (
        <>
          <Graphic4_4 />

          <DisclosurePanel title="Сравнение уровней использования цифровых технологий предприятиями промышленности Красноярского края, с РФ и СФО (процент от количетсва организаций)">
            <Graphic4_5 />

            <Graphic4_6_1 />

            <Graphic4_6_2 />
          </DisclosurePanel>

          <DisclosurePanel title="Расходы на цифровые технологии промышленности">
            <Graphic4_7_1 />

            <GraphicSection className={styles.list}>
              <StackedHorizontalGraphic data={mockStackedHorizontalGraphicSecond} height={25} />
              <StackedHorizontalGraphic data={mockStackedHorizontalGraphicThrid} height={25} />
              <StackedHorizontalGraphic data={mockStackedHorizontalGraphicFour} height={25} />
            </GraphicSection>

            <GraphicSection>
              <HorizontalGraphic data={mockHorzontalDataThrid} subTitle="%" />
            </GraphicSection>
          </DisclosurePanel>
        </>
      )}

      <Graphic4_8_1 />
    </>
  );
};
