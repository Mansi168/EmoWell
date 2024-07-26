
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import ScrollProgressBar from "./components/ProgressBar";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain={import.meta.env.VITE_DOMAIN}
  clientId={import.meta.env.VITE_CLIENT}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
  <ScrollProgressBar />
</Auth0Provider> 
)
