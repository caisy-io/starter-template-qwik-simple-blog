import { component$ } from "@builder.io/qwik";
import { BlogArticleGrid } from "../components/blog-article-grid/BlogArticleGrid";
import { ContactForm } from "../components/ContactForm";
import { FullText } from "../components/fulltext/FullText";
import { FullwidthBlogTeaser } from "../components/FullwidthBlogTeaser";
import { Headline } from "../components/Headline";
import { NewsletterSignup } from "../components/NewsletterSignup";
import type { IGenPage_Components } from "../services/graphql/__generated/sdk";

interface IComponentSelector {
  component: IGenPage_Components;
}

export const ComponentSelector = component$<IComponentSelector>(
  ({ component }) => {
    return (
      <>
        {component.__typename == "Headline" && <Headline {...component} />}
        {component.__typename == "Fulltext" && <FullText {...component} />}
        {component.__typename == "BlogArticleGrid" && (
          <BlogArticleGrid {...component} />
        )}
        {component.__typename == "NewsletterSignup" && (
          <NewsletterSignup {...component} />
        )}
        {component.__typename == "FullwidthBlogTeaser" && (
          <FullwidthBlogTeaser {...component} />
        )}
        {component.__typename == "ContactForm" && (
          <ContactForm {...component} />
        )}
      </>
    );
  }
);
