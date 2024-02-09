export default {
  name: 'buy',
  title: 'Buy-Buttons',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
