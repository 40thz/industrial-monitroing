import styles from '@/pages/SubjectsPage/SubjectsPage.module.scss';
import {
  SubjecInvestmentDTO,
  SubjectIndustrialItem,
  SubjectInvestmentProjectItem,
} from '@/services/subject.service/types';
import { SubjectDisclosure } from '../ui/SubjectDisclosure';
import { EColor, Typography } from '@/components/shared/ui/Typography';

export const SubjectInvestmentData = ({
  data,
  setMarkerData,
}: {
  data: SubjecInvestmentDTO['data'];
  setMarkerData: React.Dispatch<
    React.SetStateAction<SubjectIndustrialItem[] | SubjectInvestmentProjectItem[] | undefined>
  >;
}) => {
  if (!data) return;

  return data.map((item) => (
    <SubjectDisclosure
      key={item.nameIP}
      header={item.mo}
      title={item.nameIP}
      btnHandler={(open) => {
        if (!open) setMarkerData((prev: any) => [...prev, item]);
        if (open) setMarkerData((prev: any) => prev.filter((elem: any) => elem !== item) as any);
      }}
    >
      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Описание ИП
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.descriptionIP}
        </Typography>
      </div>

      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Срок реализации
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.deadline}
        </Typography>
      </div>
      <div className={styles.item}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Зоны с особыми условиями использования территории
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          {item.zones}
        </Typography>
      </div>
    </SubjectDisclosure>
  ));
};
