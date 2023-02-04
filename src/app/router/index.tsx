import { createHashRouter } from 'react-router-dom';
import { MAIN_PAGE_ROUTE, EDITOR_PAGE_ROUTE } from './routes';
import MainPage from 'pages/Main/Main';
import Editor from 'pages/Editor/Editor';

const router = createHashRouter([
  {
    path: MAIN_PAGE_ROUTE,
    element: <MainPage />,
  },
  {
    path: EDITOR_PAGE_ROUTE,
    element: <Editor />,
  },
]);

export default router;
