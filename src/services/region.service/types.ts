export type RegionDTO = {
  data: {
    id: string;
    name: string;
    audience: string | string;
    square: number | string;
    size: number | string;
    proceeds: number | string;
    slug: string;
  }[];
  dataWithIndustryType: {
    industry: string;
    name: string;
    audience: string | string;
    square: number | string;
    size: number | string;
    proceeds: number | string;
  }[];
};
