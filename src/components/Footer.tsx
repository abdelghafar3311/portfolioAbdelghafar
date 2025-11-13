export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Abdel-Ghafar Nagy. Built with React & TailwindCSS.</p>
      </div>
    </footer>
  );
};
