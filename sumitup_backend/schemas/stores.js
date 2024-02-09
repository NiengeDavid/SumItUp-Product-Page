export default {
  name: 'stores',
  title: 'Stores',
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
    {
      name: 'state',
      title: 'State',
      type: 'string',
    },
  ],
}
