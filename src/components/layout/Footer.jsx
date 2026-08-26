import socials from '../../data/socials';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-surface bg-background py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socials.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-text-muted text-sm">
          &copy; {currentYear} Portfolio. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
