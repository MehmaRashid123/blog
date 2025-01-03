export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title of the About page.',
      validation: Rule => Rule.required().min(5).max(100),
    },
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'The title under the "About Us" section.',
      validation: Rule => Rule.required().min(5).max(100),
    },
    {
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      description: 'A brief description of the page that appears below the section title.',
      validation: Rule => Rule.required().min(50),
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sectionNumber',
              title: 'Section Number',
              type: 'string',
              description: 'A unique identifier for the section (e.g., "01", "02", "03").',
              validation: Rule => Rule.required().min(2).max(3),
            },
            {
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
              description: 'Title for this specific section.',
              validation: Rule => Rule.required().min(5).max(50),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'blockContent', // Changed from text for rich text support
              description: 'Description of the section content.',
              validation: Rule => Rule.required().min(30),
            },
            {
              name: 'link',
              title: 'Learn More Link',
              type: 'url',
              description: 'URL to a page with more information about this section.',
              validation: Rule => Rule.uri({ scheme: ['http', 'https'], allowRelative: true }),
            },
            {
              name: 'likes',
              title: 'Likes Count',
              type: 'number',
              description: 'The number of likes this section has.',
              validation: Rule => Rule.integer().min(0),
              initialValue: 0,
            },
            {
              name: 'comments',
              title: 'Comments Count',
              type: 'number',
              description: 'The number of comments for this section.',
              validation: Rule => Rule.integer().min(0),
              initialValue: 0,
            },
          ],
          options: {
            sortable: true,
          },
        },
      ],
      description: 'Array of sections that describe different parts of the page.',
    },
  ],
};
