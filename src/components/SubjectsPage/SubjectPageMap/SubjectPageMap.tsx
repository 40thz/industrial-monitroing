import { MICRODISTIRICT, RegionsMap } from '@/components/shared/blocks/RegionsMap';
import { SubjectIndustrialItem, SubjectInvestmentProjectItem } from '@/services/subject.service/types';
import { useMemo } from 'react';

export const SubjectPageMap = ({
  data,
  markerData,
}: {
  data: SubjectIndustrialItem[] | SubjectInvestmentProjectItem[] | undefined;
  markerData: SubjectIndustrialItem[] | SubjectInvestmentProjectItem[] | undefined;
}) => {
  const microdistrict = useMemo(() => {
    return data?.map((item) => item.microdistrict);
  }, [data]);

  return (
    <div>
      <div className="sticky">
        <RegionsMap
          markersData={markerData}
          priangarskij={microdistrict?.includes(MICRODISTIRICT.priangarskij)}
          yuzhnyj={microdistrict?.includes(MICRODISTIRICT.yuzhnyj)}
          severniy={microdistrict?.includes(MICRODISTIRICT.severniy)}
          zapadniy={microdistrict?.includes(MICRODISTIRICT.zapadniy)}
          vostochnyj={microdistrict?.includes(MICRODISTIRICT.vostochnyj)}
          centradlnyj={microdistrict?.includes(MICRODISTIRICT.centradlnyj)}
        />
      </div>
    </div>
  );
};
