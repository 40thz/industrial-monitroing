import { GraphicSection } from '@/components/shared/graphics/ui/GraphicSection';
import { DisclosurePanel } from '@/components/shared/ui/Disclosure';
import styles from '../FirstGraphicSection/FirstGraphicSection.module.scss';
import { HalfProgressBar } from '@/components/shared/graphics/HalfProgressBar';
import { EColor, Typography } from '@/components/shared/ui/Typography';
import { useQuery } from 'react-query';
import { graphicService } from '@/services/grpahic.service/grpahic.service';
import { Loader } from '@/components/shared/blocks/Loader';
import { HorizontalGraphic } from '@/components/shared/graphics/HorizontalGraphic';

export const Graphic4_4 = () => {
  const { data } = useQuery(['4_4'], () => graphicService.getGraphic('4_4'));

  return (
    <DisclosurePanel
      title="Визуализация «уровня цифровой зрелости ПК Красноярского края за счет внедрения новых стратегий, систем, технологий индустрий 4.0 и 5.0»"
      size={24}
    >
      {!data && <Loader>Загрузка данных</Loader>}
      {data && (
        <>
          <GraphicSection>
            <HorizontalGraphic data={data} />
          </GraphicSection>

          <GraphicSection className={styles.section}>
            <HalfProgressBar percent={9.43} />
            <div className={styles.section_inner}>
              <Typography size={20} font="montserrat" color={EColor.blue}>
                «Уровень цифровой зрелости за счет внедрения ключевых цифровых технологий
              </Typography>
              <Typography size={16} font="montserrat" color={EColor.blue}>
                На основе среднеарифметического значения базового уровня цифровой зрелости основных и вспомогательных
                бизнес-процессов
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

      <DisclosurePanel title="Показатели мониторинга">
        <div className={styles.carts}>
          <div className={styles.header}>
            <GraphicSection className={styles.cart}>
              <Typography size={24} font="nunito" color={EColor.blue}>
                N %
              </Typography>
              <Typography size={16} font="nunito" color={EColor.blue}>
                Доля предприятий, использующих API для обмена данными
              </Typography>
            </GraphicSection>
            <GraphicSection className={styles.cart}>
              <Typography size={24} font="nunito" color={EColor.blue}>
                1 %
              </Typography>
              <Typography size={16} font="nunito" color={EColor.blue}>
                Доля предприятий, использующих технологию «цифровой двойник производства»
              </Typography>
            </GraphicSection>
            <GraphicSection className={styles.cart}>
              <Typography size={24} font="nunito" color={EColor.blue}>
                N %
              </Typography>
              <Typography size={16} font="nunito" color={EColor.blue}>
                Доля предприятий, использующих технологию предсказательной (предиктивной) аналитики
              </Typography>
            </GraphicSection>
          </div>
          <div className={styles.footer}>
            <GraphicSection className={styles.cart}>
              <Typography size={24} font="nunito" color={EColor.blue}>
                N %
              </Typography>
              <Typography size={16} font="nunito" color={EColor.blue}>
                Доля предприятий, использующих технологии имитационного моделирования и виртуальных испытаний
                промышленной продукции
              </Typography>
            </GraphicSection>
            <GraphicSection className={styles.cart}>
              <Typography size={24} font="nunito" color={EColor.blue}>
                10.6 %
              </Typography>
              <Typography size={16} font="nunito" color={EColor.blue}>
                Доля предприятий, использующих технологии промышленного интернета вещей, сбора данных и диспетчерского
                контроля
              </Typography>
            </GraphicSection>
          </div>
        </div>
      </DisclosurePanel>
    </DisclosurePanel>
  );
};
