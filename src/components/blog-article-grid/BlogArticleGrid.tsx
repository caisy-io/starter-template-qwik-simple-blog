import { component$ } from "@builder.io/qwik";
import type { IGenBlogArticleGrid } from "../../services/graphql/__generated/sdk";
import { FullContainer } from "../FullContainer";
import { ArticleCard } from "./ArticleCard";

export const BlogArticleGrid = component$<IGenBlogArticleGrid>(
  ({ headline, articles, subheadline }) => {
    return (
      <FullContainer>
        <div class="flex flex-col justify-start items-center self-stretch overflow-hidden gap-14">
          <div class="flex flex-col justify-start items-center self-stretch relative gap-2.5">
            <h1 class="text-4xl font-bold text-left text-slate-900">
              {headline ?? ""}
            </h1>
            {subheadline && (
              <h3 class="text-base text-left text-gray-600">{subheadline}</h3>
            )}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles?.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </FullContainer>
    );
  }
);
