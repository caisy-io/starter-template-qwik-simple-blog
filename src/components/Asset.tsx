import { component$, Slot } from "@builder.io/qwik";
import { Image as QwikUnpinkImage } from "@unpic/qwik";
import { blurhashToCssGradientString } from "@unpic/placeholder";
import { ImageProps } from "@unpic/qwik/lib-types/components/image";
const Image = QwikUnpinkImage as any;

export const Asset = component$<
ImageProps & {
  description?: string | null;
  blurHash?: string | null;
}>(
  ({
    src,
    description,
    width,
    height,
    blurHash,
    loading,
    layout,
  }) => {
    const placehoderCss = blurHash
      ? blurhashToCssGradientString(blurHash)
      : undefined;

    if (!src || !width || !height ) {
      return <Slot />;
    }

    return (
      <>
        {
          <>
            <Image
              layout={layout}
              width={width}
              height={height}
              src={src}
              class={`rounded-lg transition-opacity relative z-10 duration-300 opacity-0`}
              onLoad$={(_, el) => {
                if (el.complete) {
                  el.style.opacity = "1";
                }
              }}
              alt={description ?? ""}
              loading={loading}
            />
            {placehoderCss && (
              <div
                class={`rounded-lg absolute inset-0 w-full h-full z-0 transition-opacity`}
                style={{
                  background: placehoderCss,
                }}
              />
            )}
          </>
        }
        <Slot />
      </>
    );
  }
);
