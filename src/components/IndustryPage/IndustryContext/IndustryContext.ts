import { IndustryDTO } from '@/services/industry.service/types';
import { createContext } from 'react';

type IndustryContext = {
  data: IndustryDTO['data'] | undefined;
  isLoading: boolean;
  stage: any;
  industry: any;
  date: any;
};

export const IndustryContext = createContext<IndustryContext>({} as IndustryContext);
