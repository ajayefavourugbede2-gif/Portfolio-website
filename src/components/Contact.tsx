import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText, MessageSquare, Hash } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "tehilafavourite@gmail.com",
      href: "mailto:tehilafavourite@gmail.com",
      color: "text-subtle-highlight"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "TehilaFavourite",
      href: "https://github.com/TehilaFavourite",
      color: "text-muted-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ajaye-favour-blockchain-developer",
      href: "http://linkedin.com/in/ajaye-favour-blockchain-developer",
      color: "text-subtle-highlight"
    },
    {
      icon: MessageSquare,
      label: "X (Twitter)",
      value: "@teheelaa",
      href: "https://x.com/teheelaa",
      color: "text-muted-foreground"
    },
    {
      icon: FileText,
      label: "Medium",
      value: "@favoriteblockchain",
      href: "https://medium.com/@favoriteblockchain",
      color: "text-subtle-highlight"
    },
    {
      icon: Hash,
      label: "Hashnode",
      value: "favourajaye.hashnode.dev",
      href: "https://favourajaye.hashnode.dev/",
      color: "text-subtle-highlight"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-light mb-4">Get In Touch</h2>
          <div className="w-12 h-px bg-section-border mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Open to blockchain engineering opportunities, security audit collaborations, 
            and technical discussions about Web3 innovations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card key={index} className="p-4 hover-lift">
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-left"
                >
                  <div className="p-2 bg-muted rounded-lg">
                    <IconComponent size={20} className={link.color} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {link.value}
                    </p>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="hover-lift">
            <a href="mailto:tehilafavourite@gmail.com" className="flex items-center gap-2">
              <Mail size={18} />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;