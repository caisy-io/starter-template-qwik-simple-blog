import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useResNotFoundPage } from ".";
import { Page } from "../layouts/Page";

export default component$(() => {
  const resPageNotFound = useResNotFoundPage();
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
    title: resPageNotFound?.value?.Page?.seo?.title ?? `/404 Title-NotFound`,
  };
};
