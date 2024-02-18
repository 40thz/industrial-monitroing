export type IndustryRegion = {
  id: string;
  name: string;
  type: string;
  stage: string;
  mo: string;
  microdistrict: string;
  workers: string | undefined;
  revenue: number;
  vtp: number | undefined;
  volumecost: number | undefined;
};

export type IndustryStage = {
  id: string | number;
  name: string;
};

export type IndustryDTO = {
  data: IndustryRegion[];
  stages: IndustryStage[];
};
