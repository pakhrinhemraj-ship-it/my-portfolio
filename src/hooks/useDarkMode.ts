import { useEffect } from 'react';

export function useDarkMode() {
  useEffect(() => {
    // Portfolio is always dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return { isDark: true, toggle: () => {} };
}
