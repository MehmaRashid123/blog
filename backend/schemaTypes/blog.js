export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required().min(5).max(100),
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            validation: Rule => Rule.required().min(20).max(200),
        },
        {
            name: 'views',
            type: 'number',
            title: 'Views',
            validation: Rule => Rule.integer().min(0),
            initialValue: 0,
        },
        {
            name: 'comments',
            type: 'number',
            title: 'Comments',
            validation: Rule => Rule.integer().min(0),
            initialValue: 0,
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            },
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200),
            },
            validation: Rule => Rule.required(),
        },
        {
            title: 'Blog Description',
            name: 'blogdescription',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'image', options: { hotspot: true } },
                { type: 'code', title: 'Code Block' },
            ],
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At',
            description: 'The publication date of the blog post.',
            validation: Rule => Rule.required(),
        },
        {
            name: 'metaTitle',
            type: 'string',
            title: 'Meta Title',
            description: 'Title for SEO purposes.',
            validation: Rule => Rule.required().max(60),
        },
        {
            name: 'metaDescription',
            type: 'text',
            title: 'Meta Description',
            description: 'Description for SEO purposes.',
            validation: Rule => Rule.required().max(160),
        },
    ],
};
