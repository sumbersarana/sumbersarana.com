import { project } from ".prisma/client";
import ProjectsImage from "@assets/projects.png";
import ProjectGrid from "@components/projects/grid";
import prisma from "@lib/client";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";

type ProjectsProps = {
  projects: project[];
  years: number[];
};

const Projects: NextPage<ProjectsProps> = ({ projects, years }) => (
  <>
    <div className="flex mb-4 justify-center">
      <Image src={ProjectsImage} alt="Construction site." placeholder="blur" />
    </div>
    <div>
      {years.map((year) => (
        <ProjectGrid key={year} year={year} projects={projects} />
      ))}
    </div>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const projects = await prisma.project.findMany();
  const rawYears = await prisma.project.findMany({
    orderBy: [{ year: "desc" }],
    distinct: ["year"],
    select: {
      year: true,
    },
  });
  const years = rawYears.map((year) => year.year);

  return { props: { projects, years } };
};

export default Projects;
