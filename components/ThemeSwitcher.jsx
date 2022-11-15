import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun } from 'react-icons/hi';
import { MdOutlineDarkMode } from 'react-icons/md';

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [componentMount, setComponentMount] = useState(false);

  useEffect(() => {
    setComponentMount(true)
  }, []);

  const themeIcons = () => {
    if (componentMount && resolvedTheme === 'dark') {
      return <HiOutlineSun className="text-xl md:text-2x1" />
    } else if (componentMount && resolvedTheme === 'light') {
      return <MdOutlineDarkMode className="text-xl md:text-2x1" />
    }
  }

  return (
    <button
      type="button"
      className="flex items-center justify-center w-10 h-10 mx-auto transition-all bg-gray-200 rounded-lg md:w-12 md:h-12 dark:bg-gray-600 hover:ring-2 ring-gray-300"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {themeIcons()}
    </button>
  )
}