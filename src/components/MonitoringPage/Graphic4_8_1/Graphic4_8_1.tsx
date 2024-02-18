import { GraphicSection } from '@/components/shared/graphics/ui/GraphicSection';
import { DisclosurePanel } from '@/components/shared/ui/Disclosure';
import styles from '../FirstGraphicSection/FirstGraphicSection.module.scss';
import { EColor, Typography } from '@/components/shared/ui/Typography';
import { useQuery } from 'react-query';
import { graphicService } from '@/services/grpahic.service/grpahic.service';
import { HorizontalGraphic } from '@/components/shared/graphics/HorizontalGraphic';
import { Loader } from '@/components/shared/blocks/Loader';

export const Graphic4_8_1 = () => {
  const { data: data4_8_1 } = useQuery(['4_8_1'], () => graphicService.getGraphic('4_8_1'));
  const { data: data4_8_2 } = useQuery(['4_8_2'], () => graphicService.getGraphic('4_8_2'));
  const { data: data4_9 } = useQuery(['4_9'], () => graphicService.getGraphic('4_9'));

  

  return (
    <DisclosurePanel title="Количество региональных производителей, использующих возможности получения инвестиций федерального уровня, 2022">
      <GraphicSection className={styles.list}>
        {!data4_9 && <Loader>Загрузка данных</Loader>}

        {data4_8_1 && (
          <HorizontalGraphic
            data={data4_8_1}
            options={{
              xAxis: false,
              yAxis: true,
            }}
          />
        )}

        {data4_8_2 && (
          <HorizontalGraphic
            data={data4_8_2}
            subTitle="млн.рублей"
            options={{
              xAxis: false,
              yAxis: true,
            }}
          />
        )}
      </GraphicSection>

      {data4_9 && (
        <GraphicSection>
          <HorizontalGraphic
            data={data4_9}
            subTitle="%"
            options={{
              xAxis: false,
              yAxis: true,
            }}
          />
          <Typography As="div" style={{ marginTop: '8px' }} size={16} font="nunito" color={EColor.blue}>
            Отсутствуют в системе предприятия пищевой, мебельной промышленности, производства прочей готовой продукции
          </Typography>
        </GraphicSection>
      )}
    </DisclosurePanel>
  );
};
