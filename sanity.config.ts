import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure'

const config = defineConfig({
  projectId: "7k587yzs",
  dataset: "production",
  title: "magicmarblefoundation",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [structureTool()]
});

export default config;
 