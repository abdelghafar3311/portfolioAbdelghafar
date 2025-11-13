import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { projectImages } from "@/utils/projectImages";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-block mb-8">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <div className="mb-8">
            <img
              src={projectImages[project.image]}
              alt={project.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-12">
            <Button asChild className="gap-2">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View GitHub
              </a>
            </Button>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Objective</h2>
              <p className="text-muted-foreground leading-relaxed">{project.objective}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-lg">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">My Role</h2>
              <p className="text-muted-foreground leading-relaxed">{project.role}</p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="p-4 bg-secondary/50 rounded-lg text-center font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
