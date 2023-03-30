import { component$, Slot } from "@builder.io/qwik";

export const FullContainer = component$(() => {
  return (
    <div class="flex items-center justify-center m-10">
      <div class="max-w-screen-2xl">
        <Slot />
      </div>
    </div>
  );
});
