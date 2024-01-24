import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.scss"
import {MovieContextProvider} from "./context/moviecontext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>,
)
