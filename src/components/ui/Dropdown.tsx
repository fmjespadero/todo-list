import React, {useEffect} from 'react'
interface DropdownType {
    toggler: JSX.Element,
    children: JSX.Element,
    maxwidth?: string,
    width?: string,
}
const Dropdown = ({toggler,children, maxwidth = '', width = '' } : DropdownType) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLButtonElement;
      const isDropDownButton = target.matches('[data-dropdown-button]');
      if (!isDropDownButton && target.closest('[data-dropdown]') !== null) return;
      let currentDropDown: Element | null;
      if (isDropDownButton) {
        currentDropDown = target.closest('[data-dropdown]');
        if (currentDropDown) {
          currentDropDown.classList.toggle('active');
        }
      }
      document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown === currentDropDown) return;
        dropdown.classList.remove('active');
      });
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <div className='dropdown' data-dropdown>
        <button className='dropdown__button' data-dropdown-button>
          {toggler}
        </button>
        <div style={{width: width, maxWidth: maxwidth}} className={`dropdown__content`}>
          {children}
        </div>
    </div>
  )
}

export default Dropdown