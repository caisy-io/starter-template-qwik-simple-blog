import type { DocumentHead } from "@builder.io/qwik-city";
import { useResPage } from "./layout";
export { default } from "./[slug]/index";

export const head: DocumentHead = ({ resolveValue }) => {
  const resPage = resolveValue(useResPage);
  return {
    title: resPage?.Page?.seo?.title ?? "Title NotFound",
  };
};
