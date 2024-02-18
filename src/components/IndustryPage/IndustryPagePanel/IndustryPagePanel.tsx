import styles from './IndustryPagePanel.module.scss';
import { DisclosurePanel } from '@/components/shared/ui/Disclosure';
import { RevenueCart } from '@/components/shared/ui/RevenueCart';
import { COLORS } from '@/constants/colors';
import { IndustryContext } from '../IndustryContext';
import { useContext } from 'react';
import { Loader } from '@/components/shared/blocks/Loader';

export const IndustryPagePanel = () => {
  const { isLoading, data, stage, industry, date } = useContext(IndustryContext);

  const renderIndustrials = () => {
    if (!stage || !date) return;

    if (stage && data) {
      return data.map((industry, index) => (
        <DisclosurePanel
          key={industry.id}
          title={industry.name}
          size={20}
          classNamePanel={styles.industry_panel}
          color={COLORS.blue[0]}
          isOpen={index === 0}
        >
          <div className={styles.industry_panel_header}>
            <RevenueCart title="МО" countTag={industry.mo} />
            <RevenueCart
              title="Объем добавленной стоимости"
              count={{
                count: industry.volumecost,
                prefix: '',
              }}
            />
          </div>
          <div className={styles.industry_panel_footer}>
            <RevenueCart
              title="Численность работников"
              count={{
                count: industry.workers,
                prefix: '',
              }}
              // countTag={industry.workers && 'человек'}
            />
            <RevenueCart
              title="Выручка рублей"
              count={{
                count: industry.revenue,
                prefix: '',
              }}
            />
            <RevenueCart
              title="Доля ВТП"
              count={{
                count: industry.vtp,
                prefix: '',
              }}
            />
          </div>
        </DisclosurePanel>
      ));
    }
  };

  return (
    <div>
      <div className="sticky">
        <div className={styles.industry_body}>
          {isLoading && <Loader>Загрузка</Loader>}
          {!industry.sheet && !isLoading && <Loader>Выберите промышленный комлекс</Loader>}
          {industry.sheet && !stage && !isLoading && <Loader>Выберите этап ЦСДС</Loader>}
          {industry.sheet && stage && !isLoading && !date && <Loader>Выберите период</Loader>}
          {renderIndustrials()}
        </div>
      </div>
    </div>
  );
};
