import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <p className="text-primary text-lg mb-2">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            Abdel-Ghafar Nagy
          </h1>
        </div>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Full Stack JavaScript Developer experienced in building web applications with React.js, Next.js, Node.js, and Express.js. Skilled in databases (Prisma, Mongoose), secure authentication (JWT, bcrypt.js), and modern UI design with Tailwind CSS and Bootstrap.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button onClick={scrollToProjects} size="lg" className="gap-2">
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="gap-2" onClick={scrollToContact}>
            Contact Me
          </Button>
          <a href="https://drive.google.com/file/d/1_MpVER6FoL7A_D8YwcKvqnG3-FMBI_bc/view?usp=drive_link" download="Abdel-Ghafar Nagy CV">
            <Button variant="secondary" size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download CV
            </Button>
          </a>

        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/abdelghafar3311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelghafarnagy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:limegms6@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
