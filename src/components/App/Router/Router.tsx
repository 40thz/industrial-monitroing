import { Routes } from '@/constants/Routes';
import { DocumentPage } from '@/pages/DocumentPage';
import { MainPage } from '@/pages/MainPage';
import { MonitoringPage } from '@/pages/MonitoringPage';
import { RegionStatisticPage } from '@/pages/RegionStatisticPage';
import { SubjectsPage } from '@/pages/SubjectsPage';
import { documentsService } from '@/services/documents.service/documents.service';
import { regionService } from '@/services/region.service/region.service';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routerConfig: RouteObject[] = [
  {
    path: Routes.ROOT,
    element: <MainPage />,
  },
  {
    path: Routes.DOCUMENTS,
    element: <DocumentPage />,
    loader: async () => documentsService.getData(),
  },
  {
    path: Routes.MONITORING,
    element: <MonitoringPage />,
  },
  {
    path: Routes.SUBJECTS,
    element: <SubjectsPage />,
  },
  {
    path: Routes.REGIONSTATISTIC,
    element: <RegionStatisticPage industry />,
    loader: async ({ params }) => regionService.getRegionBySlug(params.slug as string),
  },
  {
    path: `${Routes.REGIONSTATISTIC}/:slug`,
    element: <RegionStatisticPage />,
    loader: async ({ params }) => regionService.getRegionBySlug(params.slug as string),
  },
  // {
  //   path: Routes.INDUSTRY,
  //   element: <IndustryPage />,
  // },
  {
    path: '/*',
    element: <>404</>,
  },
];

export const router = createBrowserRouter(routerConfig);
