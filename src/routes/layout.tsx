import { Footer } from "../layouts/Footer";
import { Navigation } from "../layouts/Navigation";
import { component$, Slot } from "@builder.io/qwik";
import { getProps, EPageType } from "../services/content/getProps";
import { routeLoader$ } from "@builder.io/qwik-city";

export default component$(() => {
  const layoutLoader = useResPage();
  return (
    <div class="page">
      <Navigation {...layoutLoader?.value?.Navigation} />
      <Slot />
      <Footer {...layoutLoader?.value?.Footer} />
    </div>
  );
});
export const useResPage = routeLoader$(async ({ params }) => {
  const slug = params?.slug as string;
  const resPage = await getProps({ slug, pageType: EPageType.Index });
  return {
    ...(resPage || null),
  };
});

export const useResBlog = routeLoader$(async ({ params }) => {
  const slug = params?.slug as string;
  const resPage = await getProps({ slug, pageType: EPageType.Blog });

  return {
    ...(resPage || null),
  };
});
