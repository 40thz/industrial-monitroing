import { FC } from 'react';
import { EColor, Typography } from '@/components/shared/ui/Typography';
import styles from './DocumentPageFile.module.scss';
import { DownloadIcon } from '@/components/shared/icons/Downlaod';
import { DocumentFile } from '@/services/documents.service/types';

export const DocumentPageFile: FC<DocumentFile> = ({ name, path, type, size }) => {
  return (
    <div className={styles.file}>
      <Typography size={16} font="montserrat" color={EColor.blue}>
        {name}
      </Typography>

      <Typography size={16} font="montserrat" color={EColor.blue}>
        {type}
      </Typography>
      <Typography size={16} font="montserrat" color={EColor.blue}>
        {size}
      </Typography>
      <a download href={path} className={styles.button}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Скачать
        </Typography>
        <DownloadIcon />
      </a>
    </div>
  );
};
