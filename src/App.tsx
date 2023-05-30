import React, { useEffect, useRef, useState, useMemo } from 'react'
import { menu } from './constants/data'
import Icon from './components/ui/Icon'
import { NavLink, useLocation } from 'react-router-dom'
const App = () => {
  const linkRef = useRef<HTMLAnchorElement[]>([]);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [index,setIndex] = useState<number>();
  const location = useLocation();
  
  
  useEffect(() => {
    const links = linkRef.current;
    const span = spanRef.current; 
    const navHeight = links[0].offsetHeight;
    
    links.forEach((item, index) => {
      if(item.classList.contains('active') && span){
        span.style.top = `${item.offsetTop}px`;
        span.style.height = `${navHeight}px`;
      }
    })
   
  }, [location])

  return (
    <div className='h-screen px-2'>
      <aside className='sidebar'>
        <div className="sidebar__header">
          <h1>.studio</h1>
        </div>
        <div className="sidebar__body">
          <span ref={spanRef}/>
          <ul className="sidebar__menu">
            {menu.map((item,index) => (
              <li onClick={() => setIndex(index)} className='sidebar__menu--item' key={index}>
                <NavLink ref={(element: HTMLAnchorElement ) => (linkRef.current[index] = element)} className='sidebar__menu--link' to={item.link} >
                  <span><Icon icon={item.icon}/></span>
                  <h2>{item.title}</h2>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="sidebar__footer">
            sidebar__footer
          </div>
        </div>
      </aside>
    </div>
  )
}

export default App