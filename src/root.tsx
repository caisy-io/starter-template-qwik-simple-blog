import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { Toast } from "./components/Toast";
import "./styles/globals.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body lang="en">
        {process.env.NEXT_PUBLIC_SHOW_ONBOARDING_TOAST != "false" && <Toast />}
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
