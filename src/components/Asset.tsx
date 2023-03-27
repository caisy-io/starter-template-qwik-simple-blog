import { component$, Slot } from "@builder.io/qwik";
import type { IGenAsset } from "../services/graphql/__generated/sdk";

export const Asset = component$<IGenAsset>(({ src, description }) => {
  return (
    <>
      {src && (
        <div class="flex items-center justify-center overflow-hidden flex-wrap mt-6 mb-6 not-prose">
          <img
            loading="lazy"
            src={`${src}?w=1920&h=960`}
            srcSet={`${src}?w=3840&h=1920 1920w, ${src}?w=1920&h=960 1280w, ${src}?w=1280&h=640 640w`}
            alt={description ?? ""}
            class="rounded-lg "
          />
          {description && (
            <label class="text-gray-400 mt-3 text-center block text-xs">
              {description}
            </label>
          )}
        </div>
      )}
      <Slot />
    </>
  );
});
