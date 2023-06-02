import React, { useEffect, useRef } from 'react';

interface DropdownType {
  toggler: JSX.Element;
  children: JSX.Element;
  maxwidth?: string;
  width?: string;
}

/**
 * Dropdown component that displays a toggler button and a content area.
 * The content area is shown or hidden based on the active state of the dropdown.
 *
 * @param {DropdownType} props - The props for the Dropdown component.
 * @param {JSX.Element} props.toggler - The JSX element for the toggler button.
 * @param {JSX.Element} props.children - The JSX element for the content area.
 * @param {string} [props.maxwidth=''] - The maximum width of the content area.
 * @param {string} [props.width=''] - The width of the content area.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
const Dropdown = ({
  toggler,
  children,
  maxwidth = '',
  width = '',
}: DropdownType) => {
  const ddRef = useRef<HTMLDivElement>(null);
  const ddBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    /**
     * Handles the click event on the document.
     * If the clicked target is outside the dropdown, removes the 'active' class.
     * If the clicked target is the button, toggles the 'active' class and removes 'active' from other open dropdowns.
     *
     * @param {MouseEvent} e - The click event.
     */
    const handleClick = (e: MouseEvent) => {
      const btn = ddBtnRef.current;
      const dd = ddRef.current;
      const target = e.target as HTMLElement;

      if (dd && btn && !dd.contains(target)) {
        // If the dropdown and the button exist, and the clicked target is not inside the dropdown
        // Remove the 'active' class from the dropdown
        dd.classList.remove('active');
      } else if (btn && btn === target) {
        // If the button exists and the clicked target is the button itself
        // Toggle the 'active' class on the dropdown and remove 'active' from other open dropdowns
        dd?.classList.toggle('active');
        document
          .querySelectorAll('[data-dropdown].active')
          .forEach((dropdown) => {
            if (dropdown === target.parentNode) return;
            dropdown.classList.remove('active');
          });
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={ddRef} className="dropdown" data-dropdown>
      <button ref={ddBtnRef} className="dropdown__button" data-dropdown-button>
        {toggler}
      </button>
      <div
        style={{ width: width, maxWidth: maxwidth }}
        className={`dropdown__content`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
