import { getProps, EPageType } from "../services/content/getProps";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useResPage } from "./layout";
// import type { DocumentHead } from "@builder.io/qwik-city";
export { default } from "./[slug]/index";

export const useResNotFoundPage = routeLoader$(async () => {
  const resPage = await getProps({ pageType: EPageType.NotFound });
  return {
    ...(resPage || null),
  };
});

export const head: DocumentHead = ({ resolveValue }) => {
  const resPage = resolveValue(useResPage);
  return {
    title: resPage?.Page?.seo?.title ?? "null ResPage",
  };
};
