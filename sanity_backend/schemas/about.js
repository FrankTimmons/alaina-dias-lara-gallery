export default {
  name: 'about',
  type: 'document',
  title: 'About Me Page',
  fields: [
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
      name: 'shoutOuts',
      title: 'Shout outs',
      type: 'array',
      of: [
        {
          type: "object",
          name: "shoutOut",
          title: 'Shout Out',
          fields: [
            { 
              type: "string", 
              title: 'Name', 
              name: "name" },
            {
              name: 'description',
              title: 'Description',
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
              type: "string", 
              name: "link" ,
              title: 'Link', 
            },
          ]
        },
      ]
    }
  ]
}