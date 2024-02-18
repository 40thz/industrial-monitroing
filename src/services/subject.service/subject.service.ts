import { request } from '@/utils/request';
import { SubjecInvestmentDTO, SubjectIndustrialDTO } from './types';
import { TAB_TYPES } from '@/pages/SubjectsPage';

class SubjectService {
  async getData(type: TAB_TYPES) {
    if (type === 'Инвестиционные проекты') {
      return this.getInvestmentProjectData();
    }

    if (type === 'Индустриальные парки') {
      return this.getIndustrialProjectData();
    }

    return null
  }

  async getInvestmentProjectData() {
    try {
      const res = await request.get<SubjecInvestmentDTO>('/subject/investment');

      const { data } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getIndustrialProjectData() {
    try {
      const res = await request.get<SubjectIndustrialDTO>('/subject/industrial');

      const { data } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const subjectService = new SubjectService();
