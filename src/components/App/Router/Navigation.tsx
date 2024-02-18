import { GraphicIcon } from '@/components/shared/icons/Graphic';
import { GraphicSecondIcon } from '@/components/shared/icons/GraphicSecond';
import { GridIcon } from '@/components/shared/icons/Grid';
import { MarkerIcon } from '@/components/shared/icons/Marker';
import { Routes } from '@/constants/Routes';

export const navigation = [
  {
    icon: <GridIcon />,
    href: Routes.DOCUMENTS,
    name: 'Исходные данные мониторинга',
  },
  {
    icon: <MarkerIcon />,
    href: Routes.REGIONSTATISTIC,
    name: 'Размещение субъектов промышленного развития',
  },
  {
    icon: <GraphicIcon />,
    href: Routes.SUBJECTS,
    name: 'Индустриальные парки и инвестиционные проекты',
  },
  {
    icon: <GraphicSecondIcon />,
    href: Routes.MONITORING,
    name: ' Мониторинг цифровой зрелости предприятий',
  }
];
