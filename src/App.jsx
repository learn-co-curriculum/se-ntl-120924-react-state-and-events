import { useState } from 'react'
// import Greeting from './components/Greeting'
import Header from './components/Header'
import ProjectsList from './components/ProjectsList'

function App() {
  const [isLightMode, setIsLightMode] = useState(false)

  return (
    <div className={isLightMode ? 'App light' : 'App'}>
      <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      {/* <Greeting name="Laura" />
      <Greeting name="Enoch" />
      <Greeting name="Aidan" />
      <Greeting name="Adrian" /> */}
      <ProjectsList />
    </div>
  )
}

export default App

