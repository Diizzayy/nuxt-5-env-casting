// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  devtools: { enabled: false },
  runtimeConfig: {
    title: '',
    age: 30,
    male: true,
    obj: { a: 1, b: 'x' },
    list: [] as number[],
    public: { trial: false }
  }
})
