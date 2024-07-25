import ProjectDetails from "@/components/ourProjects/projectDetails/projectDetails";
import { FC } from "react";

interface IParams {
  id: string;
}

const Page: FC<{ params: IParams }> = ({ params }) => {
  return (
    <div>
      <ProjectDetails params={params} />
    </div>
  );
};

export default Page;