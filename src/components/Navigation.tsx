import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-section-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-lg font-medium text-foreground hover:text-subtle-highlight transition-colors"
          >
            Favour Ajaye
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-section-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;