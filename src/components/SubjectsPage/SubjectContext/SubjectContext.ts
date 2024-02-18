import { SubjecInvestmentDTO, SubjectIndustrialDTO } from '@/services/subject.service/types';
import { createContext } from 'react';

type SubjectContext = {
  data: SubjecInvestmentDTO['data'] | SubjectIndustrialDTO['data'];
  isLoading: boolean;
};

export const SubjectContext = createContext<SubjectContext>({} as SubjectContext);
