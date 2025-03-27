import { useState } from 'react'
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Aula</h1>
        <MyComponent />
        <MyComponent2 title="Titulo personalizado 1" description="Tipo 1." />
        <MyComponent2 title="Titulo personalizado 2" description="Tipo 2." />
        <MyComponent2 title="ESCOLA NAZARENA" description="Tipo 2." />
        
      </div>
    </>
  )
}

export default App
