export default {
  name: 'galleries',
  type: 'document',
  title: 'Galleries',
  fields: [
    {
      name: 'gallery',
      type: 'string',
      title: 'Gallery'
    },
    {
      name: 'paintings',
      type: 'array',
      of: [
        {
          type: "object",
          name: "painting",
          fields: [
            { type: "image", name: "image"},
            { type: "string", name: "title" },
            { type: "string", name: "dimensions" },
          ]
        }
      ],
      title: 'paintings'
    }
  ]
}