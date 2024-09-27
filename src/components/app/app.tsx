import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute } from '../../consts';
import { Layout } from '../index';
import { IntroPage, MainPage } from '../../pages';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<IntroPage />} />
          <Route element={<Layout />} >
            <Route path={AppRoute.Main} element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
