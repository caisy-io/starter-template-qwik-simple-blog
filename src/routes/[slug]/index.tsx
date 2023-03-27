import { DefaultSpacer } from "../../components/DefaultSpacer";
import { Page } from "../../layouts/Page";
// import type { IGenBlogArticle } from "@/services/graphql/__generated/sdk";
import type { IGenBlogArticle } from "../../services/graphql/__generated/sdk";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { useResPage } from "../layout";
import type { DocumentHead } from "@builder.io/qwik-city";

interface IQwikPage {
  BlogArticle?: IGenBlogArticle | null;
  is404?: boolean;
}

export default component$<IQwikPage>(() => {
  const nav = useNavigate();
  const resPage = useResPage();

  useVisibleTask$(async ({ track }) => {
    track(() => resPage?.value?.is404);
    if (resPage?.value?.is404) {
      console.log("redirect from home to 404");
      if (resPage?.value?.is404) nav("/404");
      if (resPage?.value?.redirectHome) nav("/");
    }
  });

  return resPage?.value?.Page ? (
    <>
      <Page {...resPage?.value?.Page} />
      <DefaultSpacer />
    </>
  ) : (
    <></>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const resPage = resolveValue(useResPage);
  return {
    title: resPage?.Page?.seo?.title ?? "null ResPage",
  };
};
