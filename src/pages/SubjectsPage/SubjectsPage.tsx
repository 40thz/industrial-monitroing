import styles from './SubjectsPage.module.scss';
import { Container } from '@/components/shared/ui/Container';
import { HeaderView } from '@/components/shared/blocks/HeaderView/HeaderView';
import { Section } from '@/components/SubjectsPage/ui/Section';
import { Tabs } from '@/components/shared/ui/Tabs';
import { SubjectPageMap } from '@/components/SubjectsPage/SubjectPageMap';
import { useQuery } from 'react-query';
import { subjectService } from '@/services/subject.service/subject.service';
import { useMemo, useState } from 'react';
import { Tab } from '@/components/shared/ui/Tabs/ui/Tab';
import { Selected, Selector } from '@/components/shared/ui/Selector';
import {
  SubjecInvestmentDTO,
  SubjectIndustrialDTO,
  SubjectIndustrialItem,
  SubjectInvestmentProjectItem,
} from '@/services/subject.service/types';
import { SubjectInvestmentData } from '@/components/SubjectsPage/SubjectInvestmentData';
import { SubjectIndustrialData } from '@/components/SubjectsPage/SubjectIndustrialData';
import { Loader } from '@/components/shared/blocks/Loader';
import { SubjectStaticContent } from '@/components/SubjectsPage/SubjectStaticContent';
import { DisclosurePanel } from '@/components/shared/ui/Disclosure';

export enum TAB_TYPES {
  FIRST_TAB = 'Инвестиционные проекты',
  SECOND_TAB = 'Индустриальные парки',
}

export const SubjectsPage = () => {
  const [tab, setTab] = useState<TAB_TYPES>(TAB_TYPES.FIRST_TAB);
  const [selectFirst, setSelectFirst] = useState<Selected | null>(null);
  const [selectSecond, setSelectSecond] = useState<Selected | null>(null);
  const [markerData, setMarkerData] = useState<SubjectIndustrialItem[] | SubjectInvestmentProjectItem[] | undefined>(
    [],
  );
  const { isLoading, data } = useQuery(['subject', tab], () => subjectService.getData(tab));

  const resetFilters = () => {
    setSelectFirst(null);
    setSelectSecond(null);
  };

  const sortData = useMemo(() => {
    const subjectData = data?.data;
    setMarkerData([]);
    const filteringBySelectFirst = subjectData?.filter(
      (item) => item.microdistrict.toLowerCase() === selectFirst?.name,
    );

    if (selectSecond && tab === TAB_TYPES.FIRST_TAB) {
      return (filteringBySelectFirst as SubjecInvestmentDTO['data'])?.filter(
        (item) => item.industrial.toLowerCase() === selectSecond?.name,
      );
    }

    if (selectSecond && tab === TAB_TYPES.SECOND_TAB) {
      return (filteringBySelectFirst as SubjectIndustrialDTO['data'])?.filter(
        (item) => item.status.toLowerCase() === selectSecond?.name,
      );
    }

    return filteringBySelectFirst;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectFirst, selectSecond]);

  const handleChangeTab = (type: TAB_TYPES) => {
    if (tab === type) return;
    setTab(type);
    resetFilters();
  };

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.main_inner}>
          <HeaderView>Индустриальные парки и инвестиционные проекты</HeaderView>
          <Section reverse>
            <div>
              <div className={`${styles.section} sticky`}>
                <div className={styles.header}>
                  <Tabs className={styles.tabs}>
                    <Tab
                      active={tab === TAB_TYPES.FIRST_TAB}
                      onClick={() => handleChangeTab(TAB_TYPES.FIRST_TAB)}
                      disabled={isLoading}
                    >
                      Инвестиционные проекты
                    </Tab>
                    <Tab
                      active={tab === TAB_TYPES.SECOND_TAB}
                      onClick={() => handleChangeTab(TAB_TYPES.SECOND_TAB)}
                      disabled={isLoading}
                    >
                      Индустриальные парки
                    </Tab>
                  </Tabs>
                  <Selector
                    placeholder="Выберите макрорайон"
                    data={data?.microdistrict}
                    selectedElement={selectFirst}
                    onChange={(e) => {
                      setSelectFirst(e);
                      setSelectSecond(null);
                    }}
                    disabled={isLoading}
                  />
                  <Selector
                    placeholder={tab === TAB_TYPES.FIRST_TAB ? 'Промышленный комплекс' : 'Статус индустриального парка'}
                    data={data?.industrial}
                    selectedElement={selectSecond}
                    onChange={setSelectSecond}
                    disabled={!isLoading && !selectFirst}
                  />
                </div>

                {!selectFirst && <Loader>Выберите макрорайон</Loader>}
                {(sortData as [])?.length < 1 && <Loader>Данных не найдено</Loader>}

                {tab === TAB_TYPES.FIRST_TAB && (
                  <SubjectInvestmentData data={sortData as SubjecInvestmentDTO['data']} setMarkerData={setMarkerData} />
                )}

                {tab === TAB_TYPES.SECOND_TAB && (
                  <SubjectIndustrialData
                    data={sortData as SubjectIndustrialDTO['data']}
                    setMarkerData={setMarkerData}
                  />
                )}

                <DisclosurePanel title="Показатели мониторинга">
                  <SubjectStaticContent />
                </DisclosurePanel>
              </div>
            </div>
            <SubjectPageMap data={sortData as SubjectIndustrialItem[]} markerData={markerData} />
          </Section>
        </div>
      </Container>
    </main>
  );
};
