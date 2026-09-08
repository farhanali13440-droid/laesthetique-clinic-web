import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/treatments/")({
  beforeLoad: () => { throw redirect({ to: "/skin-treatments" }); },
});