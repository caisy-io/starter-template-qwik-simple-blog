import type { DocumentHead } from "@builder.io/qwik-city";
import { useResPage } from "./layout";
export { default } from "./[slug]/index";
import {getHeadProps} from "@/services/content/getHeadProps"

export const head: DocumentHead = ({ resolveValue }) => {
  const resPage = resolveValue(useResPage);
  return getHeadProps(resPage.Page?.seo);
};
