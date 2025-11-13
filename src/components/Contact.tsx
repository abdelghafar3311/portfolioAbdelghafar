import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:limegms6@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    limegms6@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/abdelghafar3311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/abdelghafar3311
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/abdelghafarnagy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/abdelghafarnagy
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-muted-foreground">
                In Giza
                <br />
                Egypt
              </p>
            </Card>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
