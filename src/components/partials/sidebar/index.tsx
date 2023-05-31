import React, { useEffect, useRef  } from 'react'
import Icon from '../../ui/Icon';
import { menu } from '../../../constants/data';
import { NavLink, useLocation } from 'react-router-dom'
const menuItem: ({ title: string; icon: string; link: string; isFooter?: undefined; items?: undefined } | { isFooter: boolean; items: { title: string; icon: string; link: string }[]; title?: undefined; icon?: undefined; link?: undefined })[] = [];
const footerItem: { title: string; icon: string; link: string }[] = [];
menu.forEach((item) => {
  if(item.isFooter){
    item.items.map((item) => {
      footerItem.push(item)
    })
    return
  }
  menuItem.push(item)
})
const Sidebar = () => {
  const linkRef = useRef<HTMLAnchorElement[]>([]);
  const spanRef = useRef<HTMLSpanElement>(null);
  const location = useLocation();

  useEffect(() => {
    const links = linkRef.current;
    const span = spanRef.current; 
    const navHeight = links[0].offsetHeight;
    
    links.forEach((item) => {
      if(item.classList.contains('active') && span){
        span.style.top = `${item.offsetTop}px`;
        span.style.height = `${navHeight}px`;
      }
    })
  }, [location])
  return (
    <aside className='sidebar'>
        <div className="sidebar__header">
          <h1>.studio</h1>
        </div>
        <div className="sidebar__body">
          <span ref={spanRef}/>
          <ul className="sidebar__menu">
            {menuItem.map((item, index) => (
                <li key={index} className='sidebar__menu--item'>
                  {item && item.icon && item.link && item.title &&(
                    <NavLink ref={(element: HTMLAnchorElement ) => (linkRef.current[index] = element)} className='sidebar__menu--link' to={item.link} >
                      <span><Icon icon={item.icon}/></span>
                      <h2>{item.title}</h2>
                    </NavLink>
                  )}
                </li>
            ))}
          </ul>
          <ul className="sidebar__footer">
            {footerItem.map((item, index) => (
                <li key={index} className='sidebar__menu--item'>
                  {item && item.icon && item.link && item.title &&(
                    <NavLink ref={(element: HTMLAnchorElement ) => (linkRef.current[menuItem.length + index] = element)} className='sidebar__menu--link' to={item.link} >
                      <span><Icon icon={item.icon}/></span>
                      <h2>{item.title}</h2>
                    </NavLink>
                  )}
                </li>
            ))}
          </ul>
        </div>
      </aside>
  )
}

export default Sidebar