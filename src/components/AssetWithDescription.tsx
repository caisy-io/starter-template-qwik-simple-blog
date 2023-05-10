import { component$, Slot } from "@builder.io/qwik";
import type { IGenAsset } from "../services/graphql/__generated/sdk";
import { Asset } from "./Asset";

export const AssetWithDescription = component$<IGenAsset>(
  ({ src, description, width, height, blurHash }) => {
    return (
      <>
        {src && width && height && (
          <div class="flex items-center justify-center overflow-hidden flex-wrap mt-6 mb-6 not-prose relative">
            <Asset
              blurHash={blurHash}
              description={description}
              src={src}
              width={width}
              height={height}
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
  }
);
