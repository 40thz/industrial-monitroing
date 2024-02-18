import { Container } from '@/components/shared/ui/Container';
import styles from './RegionStatisticPage.module.scss';
import { HeaderView } from '@/components/shared/blocks/HeaderView/HeaderView';
import { FirstRegionDataSection } from '@/components/RegionStatisticPage/FirstRegionDataSection';
import { SecondRegionDataSection } from '@/components/RegionStatisticPage/SecondRegionDataSection';
import { ThirdRegionDataSection } from '@/components/RegionStatisticPage/ThirdRegionDataSection';
import { useLoaderData } from 'react-router-dom';
import { RegionContext } from '@/components/RegionStatisticPage/RegionContext';
import { RegionDTO } from '@/services/region.service/types';
import { ScrollToTop } from '@/components/App/ScrollToTop';
import { IndustryPage, IndustrySelcted } from '../IndustryPage';
import { IndustryStaticData } from '@/components/IndustryPage/IndustryStaticData';
import { useEffect, useState } from 'react';

export const RegionStatisticPage = ({ industry = false }: { industry?: boolean }) => {
  const res = useLoaderData() as RegionDTO;
  const { data, dataWithIndustryType } = res;
  const initIndustry = { id: 0, name: '', sheet: null };
  const [industrySelect, setIndustrySelect] = useState<IndustrySelcted>(initIndustry);
  const [activeData, setActiveData] = useState<any>(null);

  useEffect(() => {
    if (industrySelect.name) {
      setActiveData(dataWithIndustryType.filter((item) => item.industry === industrySelect.name));
    }
  }, [industrySelect]);
  
  return (
    <>
      {industry && <IndustryPage industry={industrySelect} setIndustry={setIndustrySelect} />}
      <main className={styles.main}>
        <ScrollToTop />
        <Container>
          {!industry && <HeaderView>Размещение субъектов промышленного развития</HeaderView>}
          <div className={styles.main_inner}>
            <RegionContext.Provider value={{ data: activeData ? activeData : data, industry }}>
              <FirstRegionDataSection />
              <SecondRegionDataSection />
              <ThirdRegionDataSection />
            </RegionContext.Provider>
            <IndustryStaticData />
          </div>
        </Container>
      </main>
    </>
  );
};
