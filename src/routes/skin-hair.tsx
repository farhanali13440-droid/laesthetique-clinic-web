import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/skin-hair")({
  beforeLoad: () => { throw redirect({ to: "/skin-treatments" }); },
});