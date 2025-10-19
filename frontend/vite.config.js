// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// Proxy API requests (optional but helpful during development)

    // export default defineConfig({
    //   server: {
    //     proxy: {
    //       '/api': 'http://localhost:8000', // Laravel backend
    //     },
    //   },
    // });


//Make API calls from React to Laravel like:

    // fetch('/api/products')
    //   .then(res => res.json())
    //   .then(data => console.log(data));

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})