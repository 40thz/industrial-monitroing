import styles from '@/pages/SubjectsPage/SubjectsPage.module.scss';
import {
  SubjectIndustrialDTO,
  SubjectIndustrialItem,
  SubjectInvestmentProjectItem,
} from '@/services/subject.service/types';
import { SubjectDisclosure } from '../ui/SubjectDisclosure';
import { EColor, Typography } from '@/components/shared/ui/Typography';

export const SubjectIndustrialData = ({
  data,
  setMarkerData,
}: {
  data: SubjectIndustrialDTO['data'];
  setMarkerData: React.Dispatch<
    React.SetStateAction<SubjectIndustrialItem[] | SubjectInvestmentProjectItem[] | undefined>
  >;
}) => {
  if (!data) return;

  return data.map((item) => (
    <SubjectDisclosure
      key={item.name}
      header={item.mo}
      title={item.name}
      btnHandler={(open) => {
        if (!open) setMarkerData((prev: any) => [...prev, item]);
        if (open) setMarkerData((prev: any) => prev.filter((elem: any) => elem !== item) as any);
      }}
    >
      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Тип парка
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.type}
        </Typography>
      </div>

      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Площадь, га
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.sqaure}
        </Typography>
      </div>
      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Специализация
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.specialization}
        </Typography>
      </div>
      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Форма собственности
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.property_type}
        </Typography>
      </div>
      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Количество резидентов
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.number_inhabitants}
        </Typography>
      </div>
      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Количество рабочих мест
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.number_workplaces}
        </Typography>
      </div>
      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Аккредитация
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.accreditation}
        </Typography>
      </div>
    </SubjectDisclosure>
  ));
};
