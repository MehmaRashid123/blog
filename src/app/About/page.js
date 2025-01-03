import { urlFor } from "../sanity/client";  // Ensure the urlFor function is correctly imported
import Link from "next/link"; // Make sure you import Link if you're using it

const About = ({ image, title, description, views, comments }) => {
  // Generate the image URL using Sanity's image URL builder
  const imageUrl = image ? urlFor(image).url() : "https://dummyimage.com/720x400"; // Fallback to dummy image

  return (
    <div className="bg-gray-100 py-10">
      <section className="text-gray-900 container mx-auto px-5">
        <div className="text-center">
          <h3 className="text-lg text-gray-600 mb-6">About Us</h3>
        </div>

        <div className="text-center text-4xl font-bold mb-4">
          Creative Blog Writing and Publishing Site
        </div>

        <article className="text-center max-w-3xl mx-auto text-gray-700 mb-10">
          <p>{description}</p>
        </article>

        <div className="flex justify-center py-6">
          <img src={imageUrl} alt={title} className="w-full h-60 object-cover object-center" />
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 hover:text-white hover:bg-purple-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 className="tracking-widest text-4xl title-font font-medium text-gray-400 mb-1">01</h1>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Brainstorming</h1>
                  <p className="leading-relaxed mb-3">Bring to the table win-win survival strategies to ensure proactive domination...</p>
                  <Link href="/about" className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 hover:text-white hover:bg-yellow-600 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-4xl title-font font-medium text-gray-400 mb-1">02</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Analysing</h1>
                  <p className="leading-relaxed mb-3">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test...</p>
                  <Link href="/about" className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 hover:text-white hover:bg-pink-800 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-4xl title-font font-medium text-gray-400 mb-1">03</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">News Publishing</h1>
                  <p className="leading-relaxed mb-3">Leverage agile frameworks to provide a robust synopsis for high-level overviews...</p>
                  <Link href="/about" className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
