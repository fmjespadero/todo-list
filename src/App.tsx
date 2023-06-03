import React, { useEffect, useRef  } from 'react'
import Sidebar from './components/partials/sidebar'
import Header from './components/partials/header'
const App = () => {
  
    

  return (
    <div className='h-screen px-7 app'>
      <Sidebar/>
      <main className='main'>
        <Header/>
        <div className=''>
          <h1 className='text-2xl font-mclaren font-bold'>Tasks</h1>
          <div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default App

