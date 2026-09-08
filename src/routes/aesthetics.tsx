import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/aesthetics")({
  beforeLoad: () => { throw redirect({ to: "/skin-treatments" }); },
});