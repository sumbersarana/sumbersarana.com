import { project } from ".prisma/client";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
type ProjectCardProps = {
  client: string;
  location: string;
  description: string;
};

type ProjectGridProps = {
  year: number;
  projects: project[];
};

const ProjectCard = ({ client, location, description }: ProjectCardProps) => (
  <div className="shadow-lg rounded flex flex-col justify-between">
    <div className="bg-primary rounded-t text-white px-4 py-2 font-bold flex-none">
      {client.toUpperCase()}
    </div>
    <div className="p-4 text-justify flex-grow">{description}</div>
    <div className="px-4 py-2 border-t border-opacity-25 rounded-b flex-none">
      <FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />
      {location}
    </div>
  </div>
);

const ProjectGrid = ({ year, projects }: ProjectGridProps) => {
  const filteredProjects = projects.filter((project) => project.year === year);
  return (
    <>
      <Link href={`#${year}`} passHref>
        <h1 id={year.toString()} className="text-3xl font-bold mb-4">
          <a href={`#${year}`}>{year}</a>
        </h1>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {filteredProjects.map(({ id, client, location, description }) => (
          <ProjectCard
            key={id}
            client={client}
            location={location}
            description={description}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
