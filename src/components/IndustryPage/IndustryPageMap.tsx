import { useMemo, useContext } from 'react';
import { MICRODISTIRICT, RegionsMap } from '../shared/blocks/RegionsMap';
import { IndustryContext } from './IndustryContext';

export const IndustryPageMap = () => {
  const { data } = useContext(IndustryContext);

  const microdistrict = useMemo(() => {
    return data?.map((item) => item.microdistrict);
  }, [data]);

  return (
    <div>
      <div className="sticky">
        <RegionsMap
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
