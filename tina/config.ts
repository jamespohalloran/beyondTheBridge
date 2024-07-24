import { defineConfig } from "tinacms";

import { about_profilesFields } from "./templates";
import { configFields } from "./templates";
import { contactFields } from "./templates";
import { feature_descriptionFields } from "./templates";
import { feature_splitFields } from "./templates";
import { galleryFields } from "./templates";
import { hero_sectionFields } from "./templates";
import { heroFields } from "./templates";
import { homepageFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Main Page",
        name: "main_page",
        path: "content",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "object",
            list: true,
            templateKey: "_template",
            label: "blocks",
            name: "blocks",
            templates: [
              {
                fields: heroFields(),
                label: "hero",
                name: "hero",
              },
              {
                fields: contactFields(),
                label: "contact",
                name: "contact",
              },
              {
                fields: about_profilesFields(),
                label: "about-profiles",
                name: "about_profiles",
                nameOverride: "about-profiles",
              },
              {
                fields: feature_descriptionFields(),
                label: "feature-description",
                name: "feature_description",
                nameOverride: "feature-description",
              },
              {
                fields: feature_splitFields(),
                label: "feature-split",
                name: "feature_split",
                nameOverride: "feature-split",
              },
              {
                fields: galleryFields(),
                label: "gallery",
                name: "gallery",
              },
            ],
          },
        ],
      },
      {
        format: "toml",
        label: "Site Info",
        name: "site_info",
        path: "/",
        frontmatterFormat: "toml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
          {
            type: "string",
            name: "baseurl",
            label: "Baseurl",
          },
          {
            type: "string",
            name: "languageCode",
            label: "Languagecode",
          },
          {
            type: "string",
            name: "theme",
            label: "Theme",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "object",
            name: "params",
            label: "Site Options",
            fields: [
              {
                type: "string",
                name: "copyright",
                label: "Copyright",
              },
              {
                type: "string",
                name: "description",
                label: "Contact 1",
              },
              {
                type: "string",
                name: "description2",
                label: "Description2",
              },
              {
                type: "image",
                name: "logo",
                label: "Logo",
              },
              {
                type: "string",
                name: "name",
                label: "Name",
              },
              {
                type: "object",
                name: "sidemenus",
                label: "Sidemenus",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                  },
                  {
                    type: "string",
                    name: "custom_id",
                    nameOverride: "id",
                    label: "Id",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Link",
                  },
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                ],
              },
              {
                type: "object",
                name: "social",
                label: "Social",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Link",
                  },
                  {
                    type: "string",
                    name: "medium",
                    label: "Medium",
                  },
                ],
              },
              {
                type: "object",
                name: "seo",
                label: "seo",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "title",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "description",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "image",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
