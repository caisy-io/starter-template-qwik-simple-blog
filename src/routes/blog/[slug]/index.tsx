// import { GetStaticProps } from "next";
// import Head from "next/head";
// import Router from "next/router";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DefaultSpacer } from "../../../components/DefaultSpacer";
import { FullText } from "../../../components/fulltext/FullText";
import { useResBlog } from "../../layout";

export default component$(() => {
  const nav = useNavigate();
  const loc = useLocation();
  const resBlog = useResBlog();

  useVisibleTask$(({ track }) => {
    track(() => resBlog?.value?.is404);
    if (resBlog?.value?.is404 && loc.url.pathname.includes("blog")) {
      nav("/404");
    }
  });
  return (
    resBlog?.value?.BlogArticle && (
      <>
        {resBlog?.value?.BlogArticle && (
          <FullText {...resBlog.value.BlogArticle} />
        )}
        <DefaultSpacer />
      </>
    )
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const resBlog = resolveValue(useResBlog);
  return {
    title: resBlog?.BlogArticle?.seo?.title ?? "",
  };
};
