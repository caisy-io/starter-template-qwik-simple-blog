import { component$ } from "@builder.io/qwik";
import type {
  RequestHandler,
  DocumentHead,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { DefaultSpacer } from "../../../components/DefaultSpacer";
import { FullText } from "../../../components/fulltext/FullText";
import { useResBlog } from "../../layout";
import { getProps, EPageType } from "@/services/content/getProps";
import { getAllBlogArticles } from "@/services/content/getAllBlogArticle";

export const onGet: RequestHandler = async ({ params: { slug }, redirect }) => {
  const { is404 } = await getProps({
    slug,
    pageType: EPageType.Blog,
  });
  if (is404) throw redirect(308, "/404");
};

export default component$(() => {
  const resBlog = useResBlog();
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

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const slugs: any[] = (await getAllBlogArticles({})).map((page) => page?.slug);

  return {
    params: slugs?.map((slug) => ({
      slug,
    })),
  };
};

export const head: DocumentHead = ({ resolveValue }) => {
  const resBlog = resolveValue(useResBlog);
  return {
    title: resBlog?.BlogArticle?.seo?.title ?? "Blog Title NotFound",
  };
};
