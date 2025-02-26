import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from "/src/pages/Login-Signup/AuthContext.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="440666531485-3hlt8hgd9barj67se5vofao1sm0q3aur.apps.googleusercontent.com">
      <AuthProvider>

        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)