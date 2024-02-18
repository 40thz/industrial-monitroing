// import { EColor, Typography } from "@/components/shared/ui/Typography";
import { EColor, Typography } from "@/components/shared/ui/Typography";
import styles from "./DocumentPageFile.module.scss";
import { DownloadIcon } from "@/components/shared/icons/Downlaod";

export const DocumentPageFile = () => {
  return (
    <div className={styles.file}>
      <Typography size={16} font="montserrat" color={EColor.blue}>
        Название документа 1.1
      </Typography>

      <Typography size={16} font="montserrat" color={EColor.blue}>
        PDF
      </Typography>
      <Typography size={16} font="montserrat" color={EColor.blue}>
        2 MB
      </Typography>
      <div className={styles.button}>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Скачать
        </Typography>
        <DownloadIcon />
      </div>
    </div>
  );
};
