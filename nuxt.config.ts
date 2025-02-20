// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }, // ใช้ PNG
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } // ใช้ ICO สำรอง
      ]
    },
    
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
