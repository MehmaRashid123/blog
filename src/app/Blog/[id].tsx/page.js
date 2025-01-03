import client from '@/app/sanity/client';
import { PortableText } from 'next-sanity';
import React from 'react';

const BlogContent = async (context) => {
  const id = context.params.id;
  console.log(id);

  const res = await client.fetch(
    `*[_type == "blogs" && slug.current == $id]{blogDescription}`,
    { id }
  );

  console.log(res);

  if (!res || res.length === 0) {
    return <div>Blog post not found.</div>;
  }

  return <PortableText value={res[0].blogDescription} />;
};

export default BlogContent;