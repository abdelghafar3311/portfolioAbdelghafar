import { Code2, Database, Layout, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const skills = [
    {
      icon: Code2,
      name: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Bootstrap", "Axios"],
    },
    {
      icon: Server,
      name: "Backend",
      items: ["Node.js", "Express", "REST APIs", "JSON Web Tokens (JWT)", "bcrypt.js", "Joi", "Zod"],
    },
    {
      icon: Database,
      name: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
    },
    {
      icon: Layout,
      name: "Tools",
      items: ["Git", "Docker -> in Linux", "Vercel", "Figma", "node-cron", "Multer"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground mb-6">
            I am a Full Stack JavaScript Developer with solid experience in building dynamic and scalable web applications. On the frontend, I specialize in React.js and Next.js, creating fast, responsive, and SEO-friendly interfaces that deliver seamless user experiences
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            For the backend, I work with Node.js and Express.js, developing reliable server-side applications and RESTful APIs. I am also skilled in working with databases, using Prisma and Mongoose to manage data efficiently and integrate smoothly with both SQL and NoSQL solutions
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            I have hands-on experience in implementing secure authentication systems using JWT and bcrypt.js, ensuring that user data and application access remain protected. Security is always a key consideration in my development process.
          </p>
          <p className="text-lg text-muted-foreground">
            In addition, I am proficient in designing modern, user-friendly interfaces with Tailwind CSS and Bootstrap. I also make use of development tools and libraries that enhance both efficiency and performance, allowing me to deliver clean, maintainable, and production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <skill.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};
