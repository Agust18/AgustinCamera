// import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

// // Crear el contexto
// const ThemeContext = createContext();

// // Hook personalizado para usar el tema
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
//   }
//   return context;
// };

// // Provider del tema
// export const ThemeProvider = ({ children }) => {
//   // Estado inicial verificar localStorage o preferencia del sistema
//   const [theme, setTheme] = useState(() => {
//     //Verificar localStorage
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) return savedTheme;
    
//     //Verificar preferencia del sistema
//     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       return 'dark';
//     }
    
//     // 3. Por defecto: light
//     return 'light';
//   });

//   // Estado para controlar si el tema ya se cargó (evita parpadeo)
//   const [isThemeLoaded, setIsThemeLoaded] = useState(false);

//   // Efecto para aplicar el tema al DOM
//   useEffect(() => {
//     const root = document.documentElement;
    
//     // Eliminar clase anterior
//     root.classList.remove('light', 'dark');
    
//     // Agregar clase actual
//     root.classList.add(theme);
    
//     // Guardar en localStorage
//     localStorage.setItem('theme', theme);
    
//     // Marcar como cargado
//     setIsThemeLoaded(true);
//   }, [theme]);

//   // Función para cambiar el tema
//   const toggleTheme = useCallback(() => {
//     setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
//   }, []);

//   // Función para establecer un tema específico
//   const setThemeMode = useCallback((newTheme) => {
//     if (newTheme === 'light' || newTheme === 'dark') {
//       setTheme(newTheme);
//     }
//   }, []);

//   // Detectar cambios en la preferencia del sistema
//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
//     const handleChange = (e) => {
//       // Solo cambiar si no hay preferencia guardada en localStorage
//       if (!localStorage.getItem('theme')) {
//         setTheme(e.matches ? 'dark' : 'light');
//       }
//     };

//     mediaQuery.addEventListener('change', handleChange);
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   // Valores que se compartirán
//   const value = useMemo(() => ({
//     theme,
//     toggleTheme,
//     setThemeMode,
//     isThemeLoaded,
//     isDark: theme === 'dark',
//     isLight: theme === 'light',
//   }), [theme, toggleTheme, setThemeMode, isThemeLoaded]);

//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContext;