export default {
  name: 'buy',
  title: 'Buy-Buttons',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
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
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
  ],
}
