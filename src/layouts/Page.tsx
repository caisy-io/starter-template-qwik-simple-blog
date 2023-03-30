import { component$, Fragment } from "@builder.io/qwik";
import type { IGenPage } from "../services/graphql/__generated/sdk";
import { ComponentSelector } from "./ComponentSelector";

export const Page = component$<IGenPage>((props) => {
  return (
    <>
      {props?.components?.map(
        (component) =>
          component && (
            <Fragment key={component.id}>
              <ComponentSelector component={component} />
            </Fragment>
          )
      )}
    </>
  );
});
