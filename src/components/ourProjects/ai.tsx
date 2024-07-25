import Image from "next/image";
import { allData } from "./utils/data";
import Link from "next/link";

const Ai = () => {
  const aiData = allData.filter((data) => data.category === "ai");
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 md:mx-0 mx-4">
      {aiData.map((data, index) => {
        const { projectImage, alternate, id, projectName, mainTitle } = data;
        return (
          <Link
            key={index}
            href={`/project-details/${id}`}
            className="relative"
          >
            <div className="relative">
              <Image
                width={500}
                height={500}
                alt={alternate}
                src={projectImage}
                className="rounded-2xl"
              />
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
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center md:text-xl text-base  text-white font-mono">
              <h4>{mainTitle}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Ai;