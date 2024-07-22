
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import FloatBtn from './components/FloatBtn/FloatBtn.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain={import.meta.env.VITE_DOMAIN}
  clientId={import.meta.env.VITE_CLIENT}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
  <FloatBtn />
</Auth0Provider> 
)
