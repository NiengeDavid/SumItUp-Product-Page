export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'countryin',
      title: 'Countryin',
      type: 'document',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {
          name: 'country',
          title: 'Country',
          type: 'array',
          of: [{type: 'string'}],
        }
      ],
    },

    {
      name: 'notCountryin',
      title: 'NotCountryin',
      type: 'string',
    },
    {
      name: 'reason',
      title: 'Reason',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'document',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {
          name: 'social',
          title: 'social',
          type: 'array',
          of: [{type: 'string'}],
        }
      ],
    },
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    },
  ],
}
