import Image from "next/image";
import { allData } from "./utils/data";

const WebApp = () => {
  const webAppData = allData.filter((data) => data.category === "webapp");
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 md:mx-0 mx-4">
      {webAppData.map((data, index) => {
        const { projectImage } = data;
        return (
          <div key={index}>
            <Image
              width={500}
              height={500}
              alt="Project"
              src={projectImage}
              className="rounded-2xl"
            />
          </div>
        );
      })}
    </div>
  );
};
export default WebApp;