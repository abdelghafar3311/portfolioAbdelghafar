import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const Hero = () => {
  const { toast } = useToast()
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const copyText = (text: string, msg: string) => {
    try {
      navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: msg,
      })
    } catch (error) {
      console.error("Failed to copy text:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to copy text.",
      })
    }
  }

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
          <a href="https://drive.google.com/file/d/1_MpVER6FoL7A_D8YwcKvqnG3-FMBI_bc/view?usp=sharing" download="Abdel-Ghafar Nagy CV">
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
          <p
            onClick={() => copyText("01030826549", "Success Copy Number")}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            title="01030826549"
          >
            <Phone className="h-6 w-6" />
          </p>
        </div>
      </div>
    </section>
  );
};
