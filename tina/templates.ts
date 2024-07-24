import type { TinaField } from "tinacms";
export function about_profilesFields() {
  return [
/*
    {
      type: "string",
      name: "template",
      label: "template",
    },
*/
    {
      type: "object",
      name: "partners",
      label: "partners",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "image",
          name: "img",
          label: "img",
        },
        {
          type: "string",
          name: "bio",
          label: "bio",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function configFields() {
  return [
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
  ] as TinaField[];
}
export function contactFields() {
  return [
/*
    {
      type: "string",
      name: "template",
      label: "template",
    },
*/
    {
      type: "string",
      name: "heading",
      label: "heading",
    },
    {
      type: "string",
      name: "subheading",
      label: "subheading",
      required: true,
    },
    {
      type: "string",
      name: "sendbuttontext",
      label: "send button text",
    },
    {
      type: "string",
      name: "recipient_email",
      label: "Recipient Email",
    },
  ] as TinaField[];
}
export function feature_descriptionFields() {
  return [
/*
    {
      type: "string",
      name: "template",
      label: "template",
    },
*/
    {
      type: "string",
      name: "heading",
      label: "heading",
    },
    {
      type: "string",
      name: "subheading",
      label: "subheading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "sectionid",
      label: "section id",
    },
  ] as TinaField[];
}
export function feature_splitFields() {
  return [
    {
      type: "string",
      name: "sectionid",
      label: "section id",
    },
/*
    {
      type: "string",
      name: "template",
      label: "template",
    },
*/
    {
      type: "object",
      name: "skills",
      label: "skills",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "description",
          label: "description",
        },
      ],
    },
  ] as TinaField[];
}
export function galleryFields() {
  return [
/*
    {
      type: "string",
      name: "template",
      label: "template",
    },
*/
    {
      type: "string",
      name: "heading",
      label: "heading",
    },
    {
      type: "string",
      name: "subheading",
      label: "subheading",
    },
    {
      type: "object",
      name: "images",
      label: "images",
      list: true,
      fields: [
        {
          type: "string",
          name: "img",
          label: "img",
        },
      ],
    },
  ] as TinaField[];
}
export function hero_sectionFields() {
  return [
/*
    {
      type: "string",
      name: "template",
      label: "template",
    },
*/
  ] as TinaField[];
}
export function heroFields() {
  return [
/*
    {
      type: "string",
      name: "template",
      label: "template",
    },
*/
    {
      type: "string",
      name: "heading",
      label: "heading",
    },
    {
      type: "string",
      name: "subheading",
      label: "subheading",
    },
    {
      type: "object",
      name: "button",
      label: "button",
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ] as TinaField[];
}
export function homepageFields() {
  return [
    {
      type: "object",
      list: true,
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
      ],
    },
  ] as TinaField[];
}
