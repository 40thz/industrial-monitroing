import { HorizontalGraphic } from '@/components/shared/graphics/HorizontalGraphic';
import { GraphicSection } from '@/components/shared/graphics/ui/GraphicSection';
import { DisclosurePanel } from '@/components/shared/ui/Disclosure';
import styles from '../FirstGraphicSection/FirstGraphicSection.module.scss';
import { HalfProgressBar } from '@/components/shared/graphics/HalfProgressBar';
import { EColor, Typography } from '@/components/shared/ui/Typography';
import { useQuery } from 'react-query';
import { graphicService } from '@/services/grpahic.service/grpahic.service';
import { Loader } from '@/components/shared/blocks/Loader';

export const Graphic4_1 = () => {
  const { data } = useQuery(['4_1'], () => graphicService.getGraphic('4_1'));

  return (
    <DisclosurePanel
      title={'Визуализация «уровня цифровой зрелости основных безнес-процессов» ПК Красноярского края'}
      size={24}
    >
      {!data && <Loader>Загрузка данных</Loader>}
      {data && (
        <>
          <GraphicSection>
            <HorizontalGraphic data={data} domainX={[2, 5]} />
          </GraphicSection>

          <GraphicSection className={styles.section}>
            <HalfProgressBar percent={data.percent || 0} />
            <div className={styles.section_inner}>
              <Typography size={20} font="montserrat" color={EColor.blue}>
                «Уровень цифровой зрелости основных бизнес-процессов» ПК Красноярского края
              </Typography>
              <Typography size={16} font="montserrat" color={EColor.blue}>
                На основе среднеарифметического значения базового уровня цифровой зрелости основных бизнес-процессов
              </Typography>
              <Typography size={16} font="montserrat" color={EColor.blue}>
                <p>67%-100% - базовый уровень цифровой зрелости промышленного комплекса оценивается «выше среднего»</p>
                <p>33%-67% - «средний»</p>
                <p>0%-33% - «ниже среднего»</p>
              </Typography>
            </div>
          </GraphicSection>
        </>
      )}
    </DisclosurePanel>
  );
};
