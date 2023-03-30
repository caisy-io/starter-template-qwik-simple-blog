import { component$ } from "@builder.io/qwik";
import type { IGenHeadline } from "../services/graphql/__generated/sdk";
import { CenterContainer } from "./CenterContainer";

export const Headline = component$<IGenHeadline>(
  ({ headline, subheadline }) => {
    return (
      <CenterContainer>
        <div class="mb-8 flex flex-col justify-start items-center gap-2.5">
          {headline && (
            <h1 class="text-4xl font-bold text-left text-slate-900">
              {headline}
            </h1>
          )}
          {subheadline && (
            <h4 class="mt-2 text-xl text-center text-gray-400">
              {subheadline}
            </h4>
          )}
        </div>
      </CenterContainer>
    );
  }
);
