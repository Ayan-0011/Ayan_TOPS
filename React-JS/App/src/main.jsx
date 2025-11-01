import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { App2 } from './App'  //deafut + names export 
import { AnotherComponent, MyComponent } from './second' // named exports 








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
    <App />
    <MyComponent />
    <AnotherComponent />
    
  </StrictMode>,
)
