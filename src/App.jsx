import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Layout from './Layout'
import Home from './Home'
import Favoris from './Favoris'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Favoris" element={<Favoris />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App