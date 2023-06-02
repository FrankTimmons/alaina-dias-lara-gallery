export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Posts',
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
      type: 'text',
      title: 'Post'
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