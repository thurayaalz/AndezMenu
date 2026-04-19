import { useState } from 'react'
import './App.css'
import DrinkCard from "./components/card.jsx"

function App() {
  return (
    <>
      <h1>Andez x Mustqr</h1>
      <img src="./public/menu/drip.png" alt="drip"/>
      <DrinkCard  />
    </>
  )
}

export default App
