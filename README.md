# Astro + Vue.js + Tailwind CSS + PrimeVue Starter Kit

A modern web development starter template combining the power of Astro, Vue.js, Tailwind CSS, and PrimeVue components.

Astro + Vue.js + Tailwind CSS + PrimeVue bileşenlerinin gücünü birleştiren modern web geliştirme başlangıç şablonu.

## 🚀 Technologies / Teknolojiler

- **[Astro](https://astro.build)** - Static site generator with partial hydration
- **[Vue.js 3](https://vuejs.org)** - Progressive JavaScript framework
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[PrimeVue](https://primevue.org)** - Rich UI component library for Vue.js
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript

## 📦 Features / Özellikler

### English
- ⚡ **Fast Development** - Hot reload with Astro dev server
- 🎨 **Modern UI** - Beautiful components with PrimeVue and Tailwind CSS
- 📱 **Responsive Design** - Mobile-first approach with Tailwind utilities
- 🔧 **Type Safety** - Full TypeScript support
- 🎯 **SEO Optimized** - Built-in SEO features with Astro
- 🚀 **Performance** - Optimized bundle size with partial hydration

### Türkçe
- ⚡ **Hızlı Geliştirme** - Astro dev sunucusu ile hot reload
- 🎨 **Modern UI** - PrimeVue ve Tailwind CSS ile güzel bileşenler
- 📱 **Duyarlı Tasarım** - Tailwind yardımcıları ile mobile-first yaklaşım
- 🔧 **Tip Güvenliği** - Tam TypeScript desteği
- 🎯 **SEO Optimizasyonu** - Astro ile yerleşik SEO özellikleri
- 🚀 **Performans** - Kısmi hidrasyon ile optimize edilmiş bundle boyutu

## 🏗️ Project Structure / Proje Yapısı

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   └── global.css       # Tailwind CSS imports
│   │   └── *.svg
│   ├── components/
│   │   ├── Counter.vue          # Vue component example
│   │   └── Welcome.astro        # Astro component
│   ├── layouts/
│   │   └── Layout.astro         # Base layout
│   └── pages/
│       ├── _app.js              # PrimeVue configuration
│       └── index.astro          # Homepage
├── astro.config.mjs             # Astro configuration
├── package.json
└── tsconfig.json
```

## 🧞 Commands / Komutlar

All commands are run from the root of the project, from a terminal:
Tüm komutlar projenin kök dizininden terminal üzerinden çalıştırılır:

| Command | Action | Açıklama |
| :--- | :--- | :--- |
| `npm install` | Installs dependencies | Bağımlılıkları yükler |
| `npm run dev` | Starts local dev server at `localhost:4321` | Yerel geliştirme sunucusunu başlatır |
| `npm run build` | Build your production site to `./dist/` | Üretim sitesini `./dist/` klasörüne derler |
| `npm run preview` | Preview your build locally, before deploying | Dağıtımdan önce yerel olarak önizleme yapar |

## 🎨 Component Usage / Bileşen Kullanımı

### English
This starter includes a sample Counter component that demonstrates:
- Vue 3 Composition API
- PrimeVue Button components
- PrimeVue ProgressSpinner for loading states
- Tailwind CSS for styling
- TypeScript integration

### Türkçe
Bu başlangıç şablonu aşağıdakileri gösteren örnek bir Counter bileşeni içerir:
- Vue 3 Composition API
- PrimeVue Button bileşenleri
- Yükleme durumları için PrimeVue ProgressSpinner
- Stil için Tailwind CSS
- TypeScript entegrasyonu

## 🔧 Configuration / Konfigürasyon

### PrimeVue Theme / PrimeVue Teması
The project uses PrimeVue with Aura theme. Configuration can be found in `src/pages/_app.js`.
Proje, Aura teması ile PrimeVue kullanır. Konfigürasyon `src/pages/_app.js` dosyasında bulunabilir.

### Tailwind CSS
Tailwind is configured via Vite plugin in `astro.config.mjs` and imported in `src/assets/styles/global.css`.
Tailwind, `astro.config.mjs` dosyasında Vite eklentisi ile yapılandırılır ve `src/assets/styles/global.css` dosyasında içe aktarılır.

## 📚 Learn More / Daha Fazla Bilgi

- [Astro Documentation](https://docs.astro.build)
- [Vue.js Guide](https://vuejs.org/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PrimeVue Documentation](https://primevue.org)

## 💬 Support / Destek

Feel free to check the documentation links above or create an issue in this repository.
Yukarıdaki dokümantasyon bağlantılarını kontrol etmekten çekinmeyin veya bu depoda bir sorun oluşturun.