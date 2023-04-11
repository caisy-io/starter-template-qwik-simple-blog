import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ status, redirect }) => {
  status(404);
  throw redirect(308, "/404/");
};

export default component$(() => <></>);
