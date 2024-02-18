// import { EColor, Typography } from "@/components/shared/ui/Typography";
import { ArrowIcon } from "@/components/shared/icons/Arrow";
import styles from "./DocumentPageDisclosure.module.scss";
import { Disclosure } from "@headlessui/react";
import { EColor, Typography } from "@/components/shared/ui/Typography";
import { DocumentPageFile } from "../DocumentPageFile";

export const DocumentPageDisclosure = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className={styles.disclosure}>
          <Disclosure.Button className={styles.button}>
            <Typography As="h1" size={24} font="nunito" color={EColor.white}>
              Группа документов 1
            </Typography>
            <ArrowIcon
              style={{ transform: `rotate(${open ? "-90deg" : "90deg"})` }}
            />
          </Disclosure.Button>
          <Disclosure.Panel className={styles.panel}>
            <DocumentPageFile />
            <DocumentPageFile />
            <DocumentPageFile />
            <DocumentPageFile />
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};
