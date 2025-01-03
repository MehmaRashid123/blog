import { urlFor } from '../sanity/client'; // Ensure correct import
import Link from 'next/link';

const Cards = ({ views = 0, comments = 0, description, title, image, slug, date }) => {
  // Generate the image URL using Sanity's image URL builder
  const imageUrl = image ? urlFor(image).url() : "https://dummyimage.com/720x400"; // Fallback to dummy image

  // Format the date if provided
  const formattedDate = date ? new Date(date).toLocaleDateString() : "Unknown date";

  return (
    <div className="p-3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="w-full h-40 object-cover object-center"
          src={imageUrl} // Use the dynamic or fallback image URL
          alt={title} // Use the title as the alt text for better accessibility
        />
        <div className="p-4">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Blog
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <span className="mt-1 text-gray-500 text-sm">{formattedDate}</span>
          <div className="flex items-center flex-wrap mt-3">
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {views} {/* Default to 0 if undefined */}
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              {comments} {/* Default to 0 if undefined */}
            </span>
          </div>
          {/* Learn More Button */}
          <div className="mt-4">
            <Link href={`/blog/${slug}`} className="text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke=" currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;