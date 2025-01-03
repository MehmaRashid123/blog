"use client"; // Add this line

import Cards from "../Cards/page";
import client from "../sanity/client";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await client.fetch(`*[_type == "blog"]`);
        setBlogs(fetchedBlogs);
      } catch (err) {
        setError("Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 mt-6">Loading blogs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-6">{error}</p>;
  }

  return (
    <div className="bg-gray-100 py-10">
      <section className="text-gray-900 container mx-auto px-5">
        <div className="text-center">
          <h3 className="text-lg text-gray-600 mb-6">Our Blogs</h3>
        </div>

        <div className="text-center text-4xl font-bold mb-4">
          Find all our blogs here
        </div>

        <article className="text-center max-w-3xl mx-auto text-gray-700">
          <p>
            Our blogs are written based on extensive research and by renowned writers to provide you with the best articles to enjoy reading.
          </p>
        </article>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">No blogs available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map(({ slug, image, views, comments, description, title, _createdAt }) => (
              <Cards
                key={slug.current}  // Use a unique identifier, like slug or an ID
                image={image}
                views={views}
                comments={comments}
                description={description}
                title={title}
                slug={slug.current}
                date={_createdAt}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;