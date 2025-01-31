/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      container: {
        center: true
      },
      extend: {
        screens: {
            xs: '310px', // Agregado un tamaño extra para dispositivos muy pequeños
            sm: '640px', // Modificado para dispositivos pequeños (teléfonos)
            md: '750px', // Modificado para dispositivos medianos (tabletas)
            lg: '1010px', // Modificado para dispositivos grandes (laptops)
            xl: '1280px', // Mantenido para dispositivos extra grandes (laptops grandes, monitores)
            '2xl': '1536px' // Mantenido para dispositivos extra extra grandes (monitores grandes)
            },
        }    
     }
}