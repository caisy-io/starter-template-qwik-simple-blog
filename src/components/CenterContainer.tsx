import { component$, Slot } from "@builder.io/qwik";

export const CenterContainer = component$(() => {
  return (
    <div class="m-10 flex items-center justify-center">
      <div class="max-w-prose">
        <Slot />
      </div>
    </div>
  );
});
