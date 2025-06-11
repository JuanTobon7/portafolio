import { useState, useEffect } from 'react';

export function useThemeMode() {
  const [mode, setMode] = useState(() =>
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    const isDark = mode === 'dark' ||
      (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', mode);
    const listener = e => {
      if (mode === 'system') setMode('system');
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
    return () =>
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
  }, [mode]);

  return [mode, setMode];
}
