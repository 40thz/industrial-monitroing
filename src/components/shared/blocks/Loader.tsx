import { PropsWithChildren } from 'react';
import { EColor, Typography } from '../ui/Typography';

export const Loader = ({ children }: PropsWithChildren) => {
  return <Typography As='span' size={20} font='montserrat' color={EColor.blue}>{children}</Typography>;
};
