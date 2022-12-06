import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "add-tinacms";

export default defineConfig({
  branch,
  clientId: "7e0a8cea-a46b-4365-8260-a999daf30809", // Get this from tina.io
  token: process.env.TINA_TOKEN!, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "index",
        label: "Index",
        format: "md",
        path: "content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
