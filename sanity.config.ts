import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "the-magik-oven",

  projectId: "6p5zzr60",
  dataset: "production",
  apiVersion: "2023-03-09",
  basePath: "/admin",

  plugins: [
    deskTool(),
    // visionTool()
  ],

  schema: {
    types: schemas,
  },
});
