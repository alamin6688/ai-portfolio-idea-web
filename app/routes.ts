import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "cardDetails/:id", file: "routes/cardDetails.tsx" },
] satisfies RouteConfig;
