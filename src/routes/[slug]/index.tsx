import { DefaultSpacer } from "../../components/DefaultSpacer";
import { Page } from "../../layouts/Page";
import type { IGenBlogArticle } from "../../services/graphql/__generated/sdk";
import { component$ } from "@builder.io/qwik";
import { useResPage } from "../layout";
import type {
  RequestHandler,
  DocumentHead,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { getProps, EPageType } from "@/services/content/getProps";
import { getAllPages } from "@/services/content/getAllPages";

interface IQwikPage {
  BlogArticle?: IGenBlogArticle | null;
  is404?: boolean;
}

export const onGet: RequestHandler = async ({
  params: { slug },
  redirect,
  status,
}) => {
  const { redirectHome, is404 } = await getProps({
    slug,
    pageType: EPageType.Index,
  });
  if (is404 && !redirectHome) {
    status(404);
    throw redirect(308, "/404/");
  }
};

export default component$<IQwikPage>(() => {
  const resPage = useResPage();
  return resPage?.value?.Page ? (
    <>
      <Page {...resPage?.value?.Page} />
      <DefaultSpacer />
    </>
  ) : (
    <></>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const slugs: any[] = (await getAllPages({})).map((page) => page?.slug);

  return {
    params: slugs?.map((slug) => ({
      slug,
    })),
  };
};

export const head: DocumentHead = ({ resolveValue }) => {
  const resPage = resolveValue(useResPage);
  return {
    title: resPage?.Page?.seo?.title ?? "null ResPage",
  };
};
