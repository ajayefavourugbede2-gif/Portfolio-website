import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy } from "lucide-react";

const Projects = () => {
  const dapps = [
    {
      title: "Closecarbon Platform",
      company: "Closecarbon",
      description: "Carbon offset marketplace enabling businesses to track, measure, and offset their environmental impact.",
      link: "https://closecarbon.com/",
      tech: ["Backend API", "Carbon Credits", "Payment Processing", "Environmental Impact"]
    },
    {
      title: "Decentralized P2P System",
      company: "Rigel Protocol Lab",
      description: "Secure, non-custodial asset transfer platform with escrow logic and cryptographic safeguards.",
      link: "https://p2p.rigelprotocol.com/?lng=en",
      tech: ["Solidity", "Hardhat", "Escrow", "P2P"]
    },
    {
      title: "Smart Swap DeFi Platform",
      company: "Rigel Protocol Lab", 
      description: "Decentralized exchange platform enabling seamless token swaps with optimized gas efficiency.",
      link: "https://smartswap.rigelprotocol.com/",
      tech: ["DeFi", "AMM", "Solidity", "Gas Optimization"]
    },
    {
      title: "NFT Marketplace & Auction",
      company: "Rigel Protocol Lab",
      description: "Full-featured NFT marketplace supporting auctions, bidding, royalties, and on-chain metadata.",
      link: "https://www.rigelprotocol.com/",
      tech: ["ERC721", "ERC1155", "Auctions", "Royalties"]
    },
    {
      title: "Launchpad Platform",
      company: "Rigel Protocol Lab",
      description: "Token launch platform providing secure and efficient project deployment tools.",
      link: "https://launchpad.rigelprotocol.com/",
      tech: ["Token Launch", "Security", "Deployment"]
    }
  ];

  const achievements = [
    {
      title: "Rock Paper Scissors Audit",
      platform: "CodeHawks",
      result: "1 High, 1 Medium Issues Found",
      type: "Security Contest"
    },
    {
      title: "Hawk High Audit", 
      platform: "CodeHawks",
      result: "10 Issues Found",
      type: "Security Contest"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-light mb-4">Projects & Achievements</h2>
          <div className="w-12 h-px bg-section-border mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-medium text-subtle-highlight mb-8">Featured DApps</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {dapps.map((dapp, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="mb-4">
                  <h4 className="card-title font-medium mb-2 text-foreground">
                    {dapp.title}
                  </h4>
                  <p className="text-sm text-subtle-highlight mb-3">{dapp.company}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {dapp.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {dapp.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" asChild className="w-full">
                  <a 
                    href={dapp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={14} />
                    View Live
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-subtle-highlight mb-8 flex items-center gap-2">
            <Trophy size={20} />
            Security Audit Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="mb-4">
                  <h4 className="card-title font-medium mb-2 text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-subtle-highlight mb-2">{achievement.platform}</p>
                  <p className="text-muted-foreground mb-3">{achievement.result}</p>
                </div>
                <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                  {achievement.type}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;