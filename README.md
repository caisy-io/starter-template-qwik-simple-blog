# Simple blog starter template with Qwik and caisy

Deploy Template to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaisy-io%2Fstarter-template-qwik-simple-blog&env=CAISY_PROJECT_ID,CAISY_API_KEY&envDescription=https%3A%2F%2Fcaisy.io%2Fdeveloper%2Fdocs%2Fexamples&project-name=starter-template-qwik-simple-blog&repository-name=starter-template-qwik-simple-blog)

### Features

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Dynamic content updates from caisy without redeployment
- ✅ Sitemap support

## Requirements

In order to have the right blueprints configured, make sure to follow the onboarind on [caisy.io](https://caisy.io/) and select the starter template _"Qwik Simple Blog"_
To run this project a `.env` file like this (with your own projects values) is required:

```
CAISY_PROJECT_ID=xxxx-xxxx-xxxx-xxxx-xxx
CAISY_API_KEY=xxxx
```

### To run this project locally

- [ ] `git clone https://github.com/caisy-io/starter-template-qwik-simple-blog.git`
- [ ] create `.env` file with your project id and API key - see `.env.sample`
- [ ] `npm install`
- [ ] `npm run dev`
- [ ] `npm run gen` to fetch the schema types from your project

In order to have the right blueprints configured, make sure to follow the onboarind and select the starter template "Simple Blog"

### We are using

- Qwik as server and server side rendering framework
- tailwindcss for styling
- @caisy/rich-text-qwik-renderer to render the caisy richtexts in Qwik
- graphql and graphql-request to fetch data from caisy

#### Codegen

During development we generate code using

- @graphql-codegen/cli and plugins

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command              | Action                                                   |
| :------------------- | :------------------------------------------------------- |
| `yarn install`       | Installs dependencies                                    |
| `yarn start`         | Starts local dev server at `localhost:5173`              |
| `yarn gen`           | Regenerates generated types and SDK                      |
| `yarn run gen:watch` | Wachting changes and regenerates generated types and SDK |
| `yarn build`         | Build your production site to `./dist/`                  |

## 👀 Want to learn more?

Feel free to check [caisy documentation](https://caisy.io/developer/docs)
Feel free to check [Next.js documentation](https://nextjs.org/docs)

## Using this template as Static Site Generator (Node.js)
This command will generate html files for all pages in the dist folder. The downside with this approach is that you have to rebuild on every content change in the cms. That is why we do not recommend this. But for some cases this might be a valid choice. 
```
npm run build.server
```
