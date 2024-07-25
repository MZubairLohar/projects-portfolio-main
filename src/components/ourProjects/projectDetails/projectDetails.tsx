import { FC } from "react";
import { allData } from "../utils/data";
import Link from "next/link";

interface ProjectDetailsProps {
  params: {
    id: string;
  };
}
const ProjectDetails: FC<ProjectDetailsProps> = ({ params }) => {
  const aiData = allData.filter((data) => data.id.toString() === params.id);
  const [{ projectName, projectDesc, techStack, Video, projectImage, href }] =
    aiData;
  return (
    <>
      <section className="text-white max-w-5xl xl:mx-auto md:mx-10 mx-2">
        <div className="flex items-center text-xl md:text-4xl lg:gap-10 gap-4 mt-10 font-bold">
          <div>
            <Link href="/" className="outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </Link>
          </div>
          <div>{projectName}</div>
        </div>
        <div className="flex justify-center">
          <video
            controls
            autoPlay
            className="rounded-2xl w-full mt-8"
            poster={projectImage}
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className=" border-4 rounded-full md:p-8 p-2 mt-8 max-w-4xl mx-auto">
          <h6 className="text-center md:hidden block text-lg font-bold">
            Built with
          </h6>
          <div className="flex gap-4 lg:mx-10 items-center justify-center md:justify-normal">
            <h4 className="font font-bold text-sm md:text-2xl md:block hidden">
              Built With :
            </h4>
            <p className="lg:text-lg text-sm text-center md:text-left text-[#1b333b]">
              {techStack}
            </p>
          </div>
        </div>
        <div className="text-white md:text-justify text-center my-10 md:text-base text-sm">
          <p className="font-mono leading-loose">
            {projectDesc}{" "}
            <Link
              href={href}
              target="_blank"
              className="text-blue-900 hover:border-b pb-[2px] border-blue-900"
            >
              {href === "NoLink" ? "" : "Explore my project"}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;