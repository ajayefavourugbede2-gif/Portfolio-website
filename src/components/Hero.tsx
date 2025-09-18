import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="hero-text font-light mb-4 text-foreground">
            Favour Ajaye
          </h1>
          <p className="text-xl md:text-2xl text-subtle-highlight font-light mb-6">
            Blockchain Engineer & Security Researcher
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Senior blockchain engineer with 4+ years of experience in smart contract development, 
            security auditing, and DeFi protocols. Specialized in production-grade solutions 
            across EVM-compatible blockchains.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" size="lg" asChild className="hover-lift">
            <a href="mailto:tehilafavourite@gmail.com" className="flex items-center gap-2">
              <Mail size={18} />
              Contact
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="hover-lift">
            <a href="https://github.com/TehilaFavourite" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="hover-lift">
            <a href="http://linkedin.com/in/ajaye-favour-blockchain-developer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="hover-lift">
            <a href="https://medium.com/@favoriteblockchain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileText size={18} />
              Blog
            </a>
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="w-px h-16 bg-section-border"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;