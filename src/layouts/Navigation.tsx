import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import type { IGenNavigation } from "../services/graphql/__generated/sdk";
import { useLocation } from "@builder.io/qwik-city";

export const Navigation = component$<IGenNavigation>(
  ({ entries, homePage }) => {
    const loc = useLocation();
    const slug = loc.url.pathname.replace(/\//g, "");

    return (
      <header class="flex flex-wrap m-10 z-50 bg-white text-sm">
        <nav class="mx-auto" aria-label="Global">
          <div class="flex items-end flex-col justify-between flex-end">
            <div class="flex gap-5 flex-row flex-wrap items-center justify-center mt-0">
              {entries?.map((entry) => {
                if (!entry?.title || !entry.connection?.slug) {
                  return null;
                }

                return (
                  <Link
                    prefetch
                    key={entry.id}
                    href={`/${entry.connection?.slug}/`}
                    class={`font-medium ${
                      entry.connection?.slug === slug ||
                      (slug === "" && entry.connection?.slug === homePage?.slug)
                        ? "text-blue-500"
                        : "text-gray-600 hover:text-gray-400"
                    }`}
                  >
                    {entry?.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>
    );
  }
);
