import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <div>
        <Sidebar />
        <div className='sm:ml-64'>
          <Dashboard/>
        </div>
      </div>
    </>
  )
}

export default App
