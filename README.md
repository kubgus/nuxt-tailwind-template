# Nuxt 3 with TailwindCSS Template

Useful links: 🔗
- [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction)
- [NuxtTailwind Documentation](https://tailwindcss.nuxtjs.org/getting-started/setup)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/)
- [TailwindUI](https://tailwindui.com/)

<br>

## What will you find here?
This is a template for a new project with Nuxt 3 and TailwindCSS. Setting everything up can be very challenging. This template will get you going in no time! 🚀

- Nuxt 3 implementation, and configuration
- TailwindCSS implementation, support, and configuration
- Basic layout and error pages
- A custom loading bar and page transitions
- Basic metadata and SEO
- Google's Material icons
- And much more...

<br>

# Get started!
To get started, install all dependencies:
```
npm i
```

Test your app!
```
npm run dev
```

<br>

# Personalize your project!
- Customize `nuxt.config.ts` and `package.json` to fit your project
- Create your color scheme in `tailwind.config.js`
- Add custom error handling in `error.vue`
- Consider using [app.config.ts](https://nuxt.com/docs/guide/directory-structure/app-config)

<br>

[**Assets**](https://nuxt.com/docs/guide/directory-structure/assets)
- Add your own stylesheet
- Upload custom fonts
- Consider adding images you won't use in the `public/` directory to `assets/`
- Modify `assets/css/tailwind.css` with custom Tailwind classes

[**Components**](https://nuxt.com/docs/guide/directory-structure/components)
- Add your own components
- Nuxt automatically imports any components in your `components/` directory

[**Composables**](https://nuxt.com/docs/guide/directory-structure/composables)

[**Content**](https://nuxt.com/docs/guide/directory-structure/content)
- Render your content with built-in components
- Query your content with a MongoDB-like API
- Use your Vue components in Markdown files with the MDC syntax
- Automatically generate your navigation

[**Layouts**](https://nuxt.com/docs/guide/directory-structure/layouts)
- Create and edit layouts
- Ideal for extracting common UI or code patterns into reusable layout components

[**Middleware**](https://nuxt.com/docs/guide/directory-structure/middleware)

[**Modules**](https://nuxt.com/docs/guide/directory-structure/modules)

[**Pages**](https://nuxt.com/docs/guide/directory-structure/pages)
- Nuxt provides a file-based routing to create routes within your web application using Vue Router under the hood
- Create and edit unique pages in your project

[**Plugins**](https://nuxt.com/docs/guide/directory-structure/plugins)

[**Public**](https://nuxt.com/docs/guide/directory-structure/public)
- The `public/` directory is directly served at the server root and contains public files that have to keep their names or likely won't change
- Examples: `robots.txt`, `favicon.ico`

[**Server**](https://nuxt.com/docs/guide/directory-structure/server)
- Create your own API in `server/api/`
- Add API routes without the "/api" prefix in `server/routes/`
- Inject code to run on every request before any other server route in `server/middleware/`

[**Utils**](https://nuxt.com/docs/guide/directory-structure/utils)
