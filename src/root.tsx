import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import type { IDocument } from "./components/router-head/router-head";
import { Toast } from "./components/Toast";
import "./styles/globals.css";

export default component$<IDocument>(({ seo }) => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead seo={seo} />
      </head>
      <body lang="en">
        {process.env.NEXT_PUBLIC_SHOW_ONBOARDING_TOAST != "false" && <Toast />}
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
