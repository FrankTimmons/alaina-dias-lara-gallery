export default {
  name: 'blogPost',
  type: 'document',
  title: 'PERSPECTIVES',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date'
    },
    {
      name: 'post',
      title: 'Post',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ]
          }
        }
      ]
    },
    {
      name: 'pictures',
      title: 'Pictures',
      type: 'array',
      of: [
        {      
          type: "image", 
          title: 'Image', 
          name: "image"
        },
      ]
    }
  ]
}