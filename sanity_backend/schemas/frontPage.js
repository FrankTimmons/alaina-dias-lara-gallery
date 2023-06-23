export default {
  name: 'frontPage',
  type: 'document',
  title: 'Front Page Image',
  fields: [
    {
      name: 'painting',
      type: 'string',
      title: 'Painting Title'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Highlight', value: 'highlight' }
            ]
          }
        }
      ]
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author'
    }
  ]
}