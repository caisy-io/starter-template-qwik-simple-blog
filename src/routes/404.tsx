import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useResNotFoundPage } from ".";
import { Page } from "../layouts/Page";

export default component$(() => {
  const nav = useNavigate();
  const resPageNotFound = useResNotFoundPage();
  useVisibleTask$(({ track }) => {
    track(() => resPageNotFound?.value?.redirectHome);
    if (resPageNotFound?.value?.redirectHome) nav("/");
  });

  return (
    resPageNotFound?.value?.Page && (
      <>
        <Page {...resPageNotFound?.value?.Page} />
      </>
    )
  );
});

export const head: DocumentHead = () => {
  const resPageNotFound = useResNotFoundPage();
  return {
    title: resPageNotFound?.value?.Page?.seo?.title ?? ``,
  };
};
