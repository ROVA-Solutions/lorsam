import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ServiciosPage } from './pages/ServiciosPage';
import { HistoriaPage } from './pages/HistoriaPage';
import { ClientesPage } from './pages/ClientesPage';
import { ContactoPage } from './pages/ContactoPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ERoute } from './types';

/**
 * Root application: client-side router with the shared layout shell wrapping
 * every page. Unknown paths fall through to the 404 page.
 */
function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ERoute.Home} element={<HomePage />} />
          <Route path={ERoute.Servicios} element={<ServiciosPage />} />
          <Route path={ERoute.Historia} element={<HistoriaPage />} />
          <Route path={ERoute.Clientes} element={<ClientesPage />} />
          <Route path={ERoute.Contacto} element={<ContactoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
