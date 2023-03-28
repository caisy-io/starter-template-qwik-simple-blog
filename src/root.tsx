import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { Toast } from "./components/Toast";
import type { IGenSeoInformation } from "./services/graphql/__generated/sdk";

import "./styles/globals.css";
export interface IDocument {
  seo?: IGenSeoInformation | null;
}
export default component$<IDocument>(({ seo }) => {
  const ogImageSrc = seo?.ogImage?.src;
  const ogImageAlt = seo?.ogImage?.description;

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {seo?.title && (
          <>
            <meta property="og:title" content={seo?.title ?? ""} />
            <meta name="twitter:title" content={seo?.title ?? ""} />
          </>
        )}
        {seo?.description && (
          <>
            <meta name="twitter:description" content={seo?.description ?? ""} />
            <meta name="description" content={seo?.description ?? ""} />
            <meta property="og:description" content={seo?.description ?? ""} />
          </>
        )}
        {ogImageSrc && (
          <>
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="630" />
            <meta property="og:image:height" content="1200" />
            <meta
              property="og:image"
              content={`${ogImageSrc}?f=jpeg&w=1200&h=630`}
            />
            <meta
              property="og:image:secure_url"
              content={`${ogImageSrc}?f=jpeg&w=1200&h=630`}
            />
            <meta
              name="twitter:image"
              content={`${ogImageSrc}?f=jpeg&w=1200&h=630`}
            />
          </>
        )}
        {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body lang="en">
        {process.env.NEXT_PUBLIC_SHOW_ONBOARDING_TOAST != "false" && <Toast />}
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
