import { Selected } from '@/components/shared/ui/Selector';

export type SubjectInvestmentProjectItem = {
  microdistrict: string;
  industrial: string;
  mo: string;
  nameIP: string;
  descriptionIP: string;
  deadline: string;
  zones: string;
};

export type SubjectIndustrialItem = {
  microdistrict: string;
  mo: string;
  name: string;
  status: string;
  type: string;
  deadline: number;
  sqaure: string | number;
  specialization: string | number;
  property_type: string | number;
  number_inhabitants: string | number;
  number_workplaces: string | number;
  accreditation: string | number;
};

export type SubjecInvestmentDTO = {
  data: SubjectInvestmentProjectItem[];
  microdistrict: Selected[];
  industrial: Selected[];
};

export type SubjectIndustrialDTO = {
  data: SubjectIndustrialItem[];
  microdistrict: Selected[];
  industrial: Selected[];
};
