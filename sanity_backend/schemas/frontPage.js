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
      type: 'text',
      title: 'Quote'
    }
  ]
}