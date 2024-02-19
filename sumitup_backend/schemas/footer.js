export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'countryin',
      title: 'Countryin',
      type: 'string',
    },
    {
      name: 'countryout',
      title: 'Countryout',
      type: 'string',
    },
    {
      name: 'reason',
      title: 'Reason',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
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
