import { component$, $ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
// import { Asset } from "../Asset";
import { CenterContainer } from "../CenterContainer";
import { DocumentLink } from "./overwrites/DocumentLink";

interface IFullText {
  text?: any;
}

export const FullText = component$<IFullText>(({ text }) => {
  return (
    <CenterContainer>
      <article class="prose lg:prose-xl">
        {text?.json && (
          <RichTextRenderer
            node={text?.json}
            overwrites={{
              // @ts-ignore
              documentLink: $((props) =>
                props?.node && text?.connections ? (
                  <DocumentLink
                    node={props.node}
                    connections={text.connections}
                  />
                ) : null
              ),
            }}
          />
        )}
      </article>
    </CenterContainer>
  );
});
//{text?.json && (
// <RichTextRenderer
//   node={text?.json}
//   overwrites={{
//     // @ts-ignore
//     documentLink: (props) =>
//       props?.node && text?.connections ? (
//         <DocumentLink
//           node={props.node}
//           connections={text.connections}
//         />
//       ) : null,
//   }}
// />
// )}
