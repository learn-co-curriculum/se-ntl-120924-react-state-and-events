import Greeting from './components/Greeting'
import Header from './components/Header'
import ProjectsList from './components/ProjectsList'

function App() {

  return (
    <div className='App'>
      <Header />
      <Greeting name="Laura" color="green"/>
      <Greeting name="Enoch" color="blue"/>
      <Greeting name="Aidan" color="red" />
      <Greeting name="Adrian" color="orange"/>
      <ProjectsList />
    </div>
  )
}

export default App

