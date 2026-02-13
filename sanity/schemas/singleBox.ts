import { defineField, defineType } from "sanity";

export default defineType({
  name: "singleBox",
  title: "Single Box",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
