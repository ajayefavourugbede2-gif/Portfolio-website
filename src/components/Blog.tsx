import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Hash, ExternalLink } from "lucide-react";

const Blog = () => {
  const blogPlatforms = [
    {
      icon: FileText,
      platform: "Medium",
      username: "@favoriteblockchain",
      description: "In-depth articles on blockchain development, security, and Web3 innovations",
      href: "https://medium.com/@favoriteblockchain",
      color: "text-subtle-highlight"
    },
    {
      icon: Hash,
      platform: "Hashnode",
      username: "favourajaye.hashnode.dev",
      description: "Technical tutorials and blockchain engineering insights",
      href: "https://favourajaye.hashnode.dev/",
      color: "text-muted-foreground"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-light mb-4">Blog & Writing</h2>
          <div className="w-12 h-px bg-section-border mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sharing knowledge and insights about blockchain technology, security best practices, 
            and the evolving Web3 ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPlatforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <IconComponent size={24} className={platform.color} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {platform.platform}
                    </h3>
                    <p className="text-sm text-subtle-highlight mb-3">
                      {platform.username}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {platform.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Read Articles
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;