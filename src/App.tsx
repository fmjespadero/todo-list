import React, { useEffect, useRef  } from 'react'
import Sidebar from './components/partials/sidebar'
import Icon from './components/ui/Icon'
const App = () => {
  return (
    <div className='h-screen px-7 app'>
      <Sidebar/>
      <div className='main px-10'>
        <header className='header'>
          <div className='header__searchbar'>
            <form>
              <button><Icon icon='heroicons-outline:magnifying-glass' /></button>
              <input type="text" id="search" placeholder='Search'/>
            </form>
          </div>
          <div>

          </div>
        </header>
      </div>
    </div>
  )
}

export default App

