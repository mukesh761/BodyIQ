import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { UserContextProvider } from './Context/userContext.jsx';
import { PageContextProvider } from './Context/pageContext.jsx';
import { MloutputContextProvider } from './Context/mloutput.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserContextProvider>
      <PageContextProvider>
        <MloutputContextProvider>
      <App />
      </MloutputContextProvider>
      </PageContextProvider>
    </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
