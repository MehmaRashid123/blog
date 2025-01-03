import Link from "next/link";




export default function Home() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            How AI will               <br className="hidden lg:inline-block" />
            Change the Future
            </h1>
            <p className="mb-8 leading-relaxed">
            The future of AI will see home robots becoming smarter, more capable, and increasingly personalized, overcoming current limitations in navigation, direction, and spatial awareness. With enhanced intelligence, these robots will navigate complex environments more efficiently, learn household routines, and adapt to specific needs, such as adjusting to personal preferences or providing assistance during health emergencies. As AI progresses, robots may also develop human-like qualities, such as emotional understanding and engaging in natural conversations, making them not only functional assistants but also charming companions. With these advancements, home robots will transform into invaluable, endearing members of the household.            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href="/Blog">
                Blogs
                </Link>
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Hero Image"
              src="/image/ai.png"
            />
          </div>
          
        </div>
        
      
      </section>
    </div>
  );
}
