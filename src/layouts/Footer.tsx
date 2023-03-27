import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import { component$ } from "@builder.io/qwik";
import type { IGenFooter } from "../services/graphql/__generated/sdk";

export const Footer = component$<IGenFooter>(({ content }) => {
  return (
    <div class="flex items-center justify-center">
      <footer class="prose pb-10 pt-20 flex items-center justify-center">
        {content?.json && (
          <>
            <RichTextRenderer node={content?.json} />
          </>
        )}
      </footer>
    </div>
  );
});
