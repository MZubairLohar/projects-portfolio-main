import Image from "next/image";
import { allData } from "../utils/data";
import Link from "next/link";

const Blog = () => {
  const WordPressBlogData = allData.filter(
    (data) => data.subCategory === "wordpress-blog"
  );
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 md:mx-0 mx-4">
      {WordPressBlogData.map((data, index) => {
        const { projectImage, alternate, href, projectName } = data;
        return (
          <Link key={index} href={href} target="_blank" className="relative">
            <div>
              <Image
              width={500}
              height={500}
                alt={alternate}
                src={projectImage}
                className="rounded-2xl"
              />
            </div>
            <div className="hover:bg-[#3e7cba] opacity-[0.8] absolute top-0 w-full rounded-2xl h-full transition duration-500">
              <div className="flex gap-2 justify-center items-center h-full opacity-0 hover:opacity-100">
                <div className="font-extrabold text-slate-100 text-2xl">
                  {projectName}
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 font-extrabold text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Blog;