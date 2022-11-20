import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { initContract } from './configs/nearutils';

import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

const container = document.getElementById("root");
const root = createRoot(container);

const APP_TO_RENDER = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

window.nearInitPromise = initContract()
  .then(() => {
    <APP_TO_RENDER />;
    root.render(<APP_TO_RENDER />);
  })
  .catch(console.error);
