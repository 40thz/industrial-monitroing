export type GraphicWrapperSection = {
  // height: number;
  title?: string;
};

export type GraphicProps = {
  data: {
    title?: string;
    graphic: {
      name: string;
      label?: string;
      uv?: number;
      pv?: number;
      amt?: number;
    }[];
    percent?: number
    legend?: string[];
  };
} & GraphicWrapperSection;

export enum GraphicSettings {
  BAR_SIZE = 36,
}
