import { component$, Slot } from "@builder.io/qwik";
import type { IGenAsset } from "../../../services/graphql/__generated/sdk";
import { Asset } from "../../Asset";

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
              <Asset key={component.id} {...component} />
            )
        )}
        <Slot />
      </>
    );
  }
);
