import { Container } from '@/components/shared/ui/Container';
import styles from './DocumentPage.module.scss';
import { HeaderView } from '@/components/shared/blocks/HeaderView/HeaderView';
import { DocumentPageFile } from './ui/DocumentPageFile';
import { DisclosurePanel } from '@/components/shared/ui/Disclosure';
import { useLoaderData } from 'react-router-dom';
import { DocumentDTO } from '@/services/documents.service/types';

export const DocumentPage = () => {
  const data = useLoaderData() as DocumentDTO[];

  if (!data) return;

  return (
    <main className={styles.main}>
      <Container>
        <HeaderView>Исходные данные мониторинга и параметры расчета</HeaderView>
        <div className={styles.main_inner}>
          {data.map((document) => (
            <DisclosurePanel key={document.id} title={document.folder.name}>
              {document.files.map((file) => (
                <DocumentPageFile key={file.id} {...file} />
              ))}
            </DisclosurePanel>
          ))}
        </div>
      </Container>
    </main>
  );
};
