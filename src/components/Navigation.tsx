import { Building2 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="icon-container p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-gradient">
              SCM Solutions
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-foreground/80 hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;