import { component$, Slot } from "@builder.io/qwik";
import type { IGenAsset } from "../../../services/graphql/__generated/sdk";
import { AssetWithDescription } from "../../AssetWithDescription";

interface IDocumentLink {
  connections: any;
  node: any;
}

export const DocumentLink = component$<IDocumentLink>(
  ({ connections, node }) => {
    return (
      <>
        {connections?.map(
          (component: IGenAsset) =>
            component?.__typename == "Asset" &&
            node?.attrs?.documentId == component.id && (
              <AssetWithDescription key={component.id} {...component} width={800} height={component.height && component.width && ( (component.height / component.width ) * 800)  } />
            )
        )}
        <Slot />
      </>
    );
  }
);
