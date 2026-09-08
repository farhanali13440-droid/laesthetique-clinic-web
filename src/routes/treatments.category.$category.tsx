import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/treatments/category/$category")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: params.category === "hair-scalp" ? "/hair-treatments" : "/skin-treatments" });
  },
});