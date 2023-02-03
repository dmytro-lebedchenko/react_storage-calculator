import { createRoot } from 'react-dom/client';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<NotFoundPage />} />

          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
