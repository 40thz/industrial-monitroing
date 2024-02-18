import { Container } from '@/components/shared/ui/Container';
import styles from './IndustryPage.module.scss';
import { HeaderView } from '@/components/shared/blocks/HeaderView/HeaderView';
import { DocumentHeader } from '@/components/shared/blocks/DocumentHeader';
import { Selected, Selector } from '@/components/shared/ui/Selector';
import { selector1, selector3 } from '@/constants/selectors';
import { ScrollToTop } from '@/components/App/ScrollToTop';
import { useQuery } from 'react-query';
import { industryService } from '@/services/industry.service/industry.service';
import { useState, useMemo } from 'react';
import { Section } from '@/components/SubjectsPage/ui/Section';
import { IndustryPageMap } from '@/components/IndustryPage/IndustryPageMap';
import { IndustryPagePanel } from '@/components/IndustryPage/IndustryPagePanel';
import { IndustryContext } from '@/components/IndustryPage/IndustryContext';

export type IndustrySelcted = {
  sheet: string | null;
} & Selected;

export const IndustryPage = ({
  industry,
  setIndustry,
}: {
  industry: IndustrySelcted;
  setIndustry: React.Dispatch<React.SetStateAction<IndustrySelcted>>;
}) => {
  const [stage, setStage] = useState<Selected | null>(null);
  const [date, setDate] = useState<Selected | null>(null);
  const { isLoading, data } = useQuery(['industry', industry], () => industryService.getData(industry.sheet as string));

  const industrialMemo = useMemo(() => {
    const industrials = data?.data;

    if (stage && industrials && date) {
      // Сортировка по этапу ЦСДС
      const filterByStage = industrials.filter((industry) => industry.stage.toLowerCase() === stage.name);

      // Сортировка по выручке ( возрастанию )
      const dataSortByRevenue = filterByStage.filter(item => item.revenue).sort((a, b) => b.revenue - a.revenue);

      // Первые 5 элементов массива
      return dataSortByRevenue.slice(0, 5);
    }

    // Отключаю данное правило во избежании лишних ре-рендеров
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, date]);

  return (
    <main className={styles.main}>
      <ScrollToTop />
      <Container>
        <HeaderView>Размещение субъектов промышленного развития</HeaderView>
        <div className={styles.main_inner}>
          <DocumentHeader>
            <Selector
              selectedElement={industry.sheet ? industry : null}
              placeholder="Выберите пром. комплекс"
              data={selector1}
              onChange={(e) => {
                setIndustry(e);
                setStage(null);
                setDate(null);
              }}
              disabled={isLoading}
            />
            <Selector
              selectedElement={stage}
              placeholder="Выберите этап ЦСДС"
              data={data?.stages}
              onChange={setStage}
              disabled={!industry.sheet || isLoading}
            />
            <Selector
              selectedElement={date}
              placeholder="Выберите период"
              data={selector3}
              onChange={setDate}
              disabled={!industry.sheet || !stage || isLoading}
            />
          </DocumentHeader>
          <Section>
            <IndustryContext.Provider value={{ isLoading, data: industrialMemo, stage, industry, date }}>
              <IndustryPageMap />
              <IndustryPagePanel />
            </IndustryContext.Provider>
          </Section>
          {/* <IndustryStaticData /> */}
        </div>
      </Container>
    </main>
  );
};
