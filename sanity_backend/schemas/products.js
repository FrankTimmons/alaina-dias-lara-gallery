export default {
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'product',
      type: 'string',
      title: 'Product Name'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'product',
        maxLength: 90,
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'priceId',
      type: 'string',
      title: 'Stripe Price Id'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: "image",
          name: "image",
          title: 'Image',
        }
      ],
    }
  ]
}