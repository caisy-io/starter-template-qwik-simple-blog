import type { IGenSeoInformation } from "@/services/graphql/__generated/sdk";
import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export interface IDocument {
  seo?: IGenSeoInformation | null;
}

export const RouterHead = component$<IDocument>(({ seo }) => {
  const head = useDocumentHead();
  const loc = useLocation();
  const ogImageSrc = seo?.ogImage?.src;
  const ogImageAlt = seo?.ogImage?.description;

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      {seo?.title && (
        <>
          <meta property="og:title" content={seo?.title ?? ""} />
          <meta name="twitter:title" content={seo?.title ?? ""} />
        </>
      )}
      {seo?.description && (
        <>
          <meta name="twitter:description" content={seo?.description ?? ""} />
          <meta name="description" content={seo?.description ?? ""} />
          <meta property="og:description" content={seo?.description ?? ""} />
        </>
      )}
      {ogImageSrc && (
        <>
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="630" />
          <meta property="og:image:height" content="1200" />
          <meta
            property="og:image"
            content={`${ogImageSrc}?f=jpeg&w=1200&h=630`}
          />
          <meta
            property="og:image:secure_url"
            content={`${ogImageSrc}?f=jpeg&w=1200&h=630`}
          />
          <meta
            name="twitter:image"
            content={`${ogImageSrc}?f=jpeg&w=1200&h=630`}
          />
        </>
      )}
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
      <meta name="twitter:card" content="summary_large_image" />
      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
