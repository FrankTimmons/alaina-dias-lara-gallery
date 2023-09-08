export default {
  name: 'galleries',
  type: 'document',
  title: 'Galleries',
  fields: [
    {
      name: 'order',
      type: 'number',
      title: 'Number in Order'
    },
    {
      name: 'gallery',
      type: 'string',
      title: 'Gallery'
    },
    {
      name: 'subGallery',
      type: 'boolean',
      title: 'Sub Gallery?',
      initialValue: false
    },
    {
      title: 'Parent Gallery Slug',
      name: 'parentGallery',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'gallery',
        maxLength: 90,
      }
    },
    {
      name: 'statement',
      type: 'text',
      title: 'Statement'
    },
    {
      name: 'paintings',
      title: 'Paintings',
      type: 'array',
      of: [
        {
          type: "object",
          name: "painting",
          title: 'Painting',
          fields: [
            { 
              type: "image", 
              title: 'Image', 
              name: "image"
            },
            { 
              type: "string", 
              title: 'Name', 
              name: "name" },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: (doc, context) => context.parent.name
              }
            },
            { type: "string", title: 'Dimensions', name: "dimensions" },
          ]
        }
      ],
    },
    {
      name: 'bannerPhoto',
      type: 'image',
      title: 'Banner Photo'
    },
  ]
}