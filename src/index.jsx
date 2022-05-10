import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import './styles/index.css';
import About from './routes/about';
import Join from './routes/join';
import Field from './routes/field';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />
          <Route index element={<Field />} />
          <Route
            path="*"
            element={(
              <main style={{ padding: '1rem' }}>
                <p>There is nothing here!</p>
              </main>
      )}
          />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
);
