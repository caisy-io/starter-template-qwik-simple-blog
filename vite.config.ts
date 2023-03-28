import { getAllPages } from './src/services/content/getAllPages';
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'
import { getAllBlogArticles } from './src/services/content/getAllBlogArticle';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), 
      Pages({
      onRoutesGenerated: async (routes) => {
        const allPages = (await getAllPages({})).map((page) => page.slug);
        const allBlogs = (await getAllBlogArticles({})).map(
          (blog) => `blog/${blog.slug}`
        );
        const dynamicRoutes = [...allPages, ...allBlogs];
        generateSitemap({ routes: [...routes,...dynamicRoutes] })
      },
    })
  ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
