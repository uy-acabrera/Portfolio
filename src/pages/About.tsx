import { LinkIcon } from "@heroicons/react/24/outline";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="bg-gray-200 w-full aspect-square rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/assets/me.jpg")',
          }}>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hello! I'm Alex Cabrera, a passionate full-stack developer and technical lead with more than 10 years of experience
            in building web applications. I specialize in Angular, React, Node.js, and modern web technologies.          
          </p>

          <div className="mb-5">
            <Link to="https://uy-acabrera.github.io/cv/" target="_blank">
              <Button className="btn-secondary">
                <LinkIcon className="h-5 w-5 mr-2" href=""></LinkIcon>
                cv
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['Angular', 'React', 'TypeScript', 'Node.js', 'Python', 'C#', 'Unity'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Technical Lead @ <a href="https://www.icanotes.com/">ICANotes</a></h3>
                  <p className="text-gray-600 dark:text-gray-300">2023 - Present</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Full Stack Developer @ <a href="https://www.tecla.io/">Tecla</a></h3>
                  <p className="text-gray-600 dark:text-gray-300">2022 - 2023</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Technical Lead @ <a href="https://www.perficient.com/">Perficient</a></h3>
                  <p className="text-gray-600 dark:text-gray-300">2019 - 2023</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Full Stack Developer @ <a href="https://www.altimetrik.com/">Altimetrik</a></h3>
                  <p className="text-gray-600 dark:text-gray-300">2018 - 2019</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Full Stack Developer @ <a href="https://www.tcs.com/">Tata Consultancy Services</a></h3>
                  <p className="text-gray-600 dark:text-gray-300">2018 - 2018</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">QA Automation And Software Developer @ <a href="https://www.geocom.com.uy/">Geocom</a></h3>
                  <p className="text-gray-600 dark:text-gray-300">2014 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};