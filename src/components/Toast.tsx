import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export const Toast = component$(() => {
  return (
    <div class="w-100 bg-gray-800 text-sm text-white shadow-lg" role="alert">
      <div class="p-4 w-100 flex items-center justify-center">
        <p class="text-center w-100">
          Great Job! You have successfully run the caisy template. Click
          on&nbsp;
          <Link
            href="/api/onboarding"
            class="font-semibold underline text-green-400"
          >
            this link
          </Link>
          &nbsp;to complete the onboarding step. To get rid of this toast, just
          delete it in the code.
        </p>
      </div>
    </div>
  );
});
