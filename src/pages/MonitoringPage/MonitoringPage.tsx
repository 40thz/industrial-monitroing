import styles from './MonitoringPage.module.scss';
import { Container } from '@/components/shared/ui/Container';
import { MonitroingSection } from '@/components/MonitoringPage/MonitroingSection';
import { FirstGraphicSection } from '@/components/MonitoringPage/FirstGraphicSection';
import { Selected, Selector } from '@/components/shared/ui/Selector';
import { selector3, selector4, selector5 } from '@/constants/selectors';
import { DocumentHeader } from '@/components/shared/blocks/DocumentHeader';
import { useState } from 'react';

export const MonitoringPage = () => {
  const [level, setLevel] = useState<Selected | null>(null);
  const [type, setType] = useState<Selected>(selector5[0]);
  const [year, setYear] = useState<Selected | null>(null);
  
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.main_inner}>
          <DocumentHeader title="Мониторинг цифровой зрелости предприятий">
            <Selector
              placeholder="Выберите пром. комплекс"
              data={selector4}
              selectedElement={level}
              onChange={setLevel}
            />
            <Selector
              placeholder="Уровень цифровой зрелости"
              data={selector5}
              selectedElement={type}
              onChange={setType}
            />
            <Selector placeholder="Период анализа" data={selector3} selectedElement={year} onChange={setYear} />
          </DocumentHeader>

          <MonitroingSection
            header={{ type: type.name, level: level?.name, year: year?.name }}
          >
            <FirstGraphicSection id={type.id as number} />
          </MonitroingSection>
        </div>
      </Container>
    </main>
  );
};
