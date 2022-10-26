import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import './css/index.css';
import { App } from './App';
import { SSRProvider } from 'react-bootstrap';

export async function render(url: string) {
  let html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <SSRProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SSRProvider>
    </React.StrictMode>,
  );
  return { html };
}
