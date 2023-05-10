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

| Command                 | Action                                                   |
| :---------------------- | :------------------------------------------------------- |
| `npm install`           | Installs dependencies                                    |
| `npm run start`         | Starts local dev server at `localhost:5173`              |
| `npm run gen`           | Regenerates generated types and SDK                      |
| `npm run gen:watch`     | Wachting changes and regenerates generated types and SDK |
| `npm run build`         | Build your production site to `./dist/`                  |

## 👀 Want to learn more?

Feel free to check [caisy documentation](https://caisy.io/developer/docs)
Feel free to check [Next.js documentation](https://nextjs.org/docs)

## Using this template as Static Site Generator (Node.js)
This command will generate html files for all pages in the dist folder. The downside with this approach is that you have to rebuild on every content change in the cms. That is why we do not recommend this. But for some cases this might be a valid choice. 
```
npm run build.server
```

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `npm run build.server` and `npm run build.client`:

```shell
npm run build
```

[Read the full guide here](https://github.com/BuilderIO/qwik/blob/main/starters/adapters/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
npm run deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
