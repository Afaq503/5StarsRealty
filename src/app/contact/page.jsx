import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 rounded-xl overflow-hidden shadow-xl">
      
      <div className="relative mt-20 w-full max-w-lg bg-gradient-to-r from-blue-500 to-teal-500">
      <Meteors number={500} />

        <div className="p-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            possimus sunt pariatur blanditiis quae numquam magni error ea
            placeat eius dolores commodi ad beatae veritatis recusandae
            voluptate necessitatibus perspiciatis quas.
          </p>
          <div className="mb-4 w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 border border-gray-700 px-4 py-2 w-full rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 w-full">
            <textarea
              placeholder="Your Message"
              className="bg-gray-800 border border-gray-700 px-4 py-2 w-full rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              href={"/"}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              Send
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page;
