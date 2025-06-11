import { useRef, useEffect } from 'react';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';
import { useThemeMode } from './useThemeMode';

export default function ThemeToggle() {
  const [mode, setMode] = useThemeMode();
  const menuRef = useRef();

  useEffect(() => {
    const handleClick = () => menuRef.current?.classList.remove('open');
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const icons = {
    light: <FaSun />,
    dark: <FaMoon />,
    system: <FaDesktop />,
  };

  const toggleMenu = e => {
    e.stopPropagation();
    menuRef.current.classList.toggle('open');
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full text-gray-700 dark:text-gray-300 transition-transform hover:scale-110 cursor-pointer"
        aria-label="Elegir tema"
      >
        {icons[mode]}
      </button>
      <div
        ref={menuRef}
        className="absolute right-0 mt-2 hidden w-40 bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 rounded shadow backdrop-blur-sm"
      >
        {['light', 'dark', 'system'].map(m => (
          <div
            key={m}
            onClick={() => setMode(m)}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
          >
            {icons[m]}
            <span className="capitalize">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
