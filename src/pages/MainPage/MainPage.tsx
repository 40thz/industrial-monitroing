import styles from './MainPage.module.scss';
import krskLogo from '@/assets/MainPage/logo-krsk.png';
import sfuLogo from '@/assets/MainPage/logo-sfu.png';
import worldLogo from '@/assets/MainPage/logo-world.svg';

import { EColor, Typography } from '@/components/shared/ui/Typography';
import { MainPageButton } from './ui/MainPageButton';
import { navigation } from '@/components/App/Router';
import { Container } from '@/components/shared/ui/Container';
import { Copyright } from './ui/Copyright';

export const MainPage = () => (
  <main className={styles.main}>
    <Container>
      <div className={styles.main_inner}>
        <div className={styles.main_content}>
          <div className={styles.main_header}>
            <div className={styles.main_header_image}>
              <img src={krskLogo} alt="krsk" />
            </div>
            <div className={styles.main_header_image}>
              <img src={sfuLogo} alt="sfu" />
            </div>
            <div className={styles.main_header_image}>
              <img src={worldLogo} alt="world" />
            </div>
          </div>

          <Typography As="h1" size={40} font="nunito" color={EColor.white}>
            Мониторинг реализации промышленного развития Красноярского края
          </Typography>

          <div className={styles.main_body}>
            {navigation.map((navigate) => (
              <MainPageButton key={navigate.href} icon={navigate.icon} href={navigate.href}>
                {navigate.name}
              </MainPageButton>
            ))}
          </div>
        </div>
      </div>
    </Container>
    <Copyright />
  </main>
);
