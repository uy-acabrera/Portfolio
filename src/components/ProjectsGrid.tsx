import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import { Button } from "./Button";

export const ProjectsGrid = (props: { projects: Project[]; }) => {
  const projects: Project[] = props.projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div
              className="h-48 bg-gray-200 dark:bg-gray-700 w-full aspect-square rounded-lg bg-cover bg-no-repeat"
              style={{ 
                backgroundImage: project.previewImageSmall ?
                  `url("/assets/projects/${project.id}/images/${project.previewImageSmall}")` :
                  `url("/assets/projects/default.jpg")`,
              }}
            ></div>
            <div className="p-6 min-h-[230px] flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};
