import React from 'react'
import Icon from '../../ui/Icon'
import Dropdown from '../../ui/Dropdown'
import { NavLink } from 'react-router-dom'
import userLogo from '../../../assets/images/userLogo.png'
const Header = () => {
  return (
    <header className='header'>
          
          <div className='header__searchbar'>
            <form>
              <button><Icon className='text-2xl' icon='heroicons-outline:magnifying-glass' /></button>
              <input type="text" id="search" placeholder='Search'/>
            </form>
          </div>
          <div className='header__tools'>
            <Dropdown width={'250px'} toggler={<Icon className='text-[1.5rem] z-[-1]' icon='heroicons-outline:bell'/>}>
              <div className='notification'>
                <div className='notification__header'>
                  <h3>Notification</h3>
                  <NavLink className={'underline '} to={'notifications'}>view all</NavLink>
                </div>
                <hr />
                <div className='notification__body'>
                  <div>
                    <div className='notification__body--pic'></div>
                    <div>
                      <div className='notification__body--title'>Title</div>
                      <div className='notification__body--message'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam consequatur perspiciatis laboriosam omnis neque iure, qui expedita facere ipsa debitis sit, laborum perferendis dolores nihil quae, eum temporibus dignissimos vero?</div>
                      <div className='notification__body--time'>3:58 pm</div>
                    </div>
                  </div>
                  <div>
                    <div className='notification__body--pic'></div>
                    <div>
                      <div className='notification__body--title'>Title</div>
                      <div className='notification__body--message'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam consequatur perspiciatis laboriosam omnis neque iure, qui expedita facere ipsa debitis sit, laborum perferendis dolores nihil quae, eum temporibus dignissimos vero?</div>
                      <div className='notification__body--time'>3:58 pm</div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </Dropdown>
            <Dropdown width='100px' toggler={<div className='notification__body--pic flex z-[-1]  object-cover '><img className='p-1' src={userLogo} /></div>} >
              <div className='notification'>
                <div className="notification__header">
                </div>
                <hr />
                <div className="notification__body">
                </div>
              </div>
            </Dropdown>
          </div>
        </header>
  )
}

export default Header