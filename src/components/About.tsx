import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    { category: "Languages", items: ["Solidity", "Rust", "TypeScript", "JavaScript"] },
    { category: "Blockchain", items: ["Ethereum", "Smart Contracts", "DeFi", "NFTs", "RWA", "ERC Standards"] },
    { category: "Tools", items: ["Hardhat", "Foundry", "OpenZeppelin", "Slither", "Echidna"] },
    { category: "Security", items: ["Auditing", "Cryptography", "Vulnerability Assessment", "Code Review"] }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-light mb-4">About</h2>
          <div className="w-12 h-px bg-section-border mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Highly skilled Senior Blockchain Engineer with expertise in blockchain architecture design, 
              smart contract development, and security research. Proven track record in delivering 
              production-grade solutions with focus on security, reliability, and gas efficiency.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Experienced in tokenization through DeFi and NFT ecosystems, Real World Asset (RWA) 
              integration, and distributed systems. Strong contributor to the Web3 community through 
              technical blogs and open-source projects.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm">
                Google Cybersecurity Certified
              </span>
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm">
                Expert Solidity, Encode Club
              </span>
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm">
                35,000+ Lines Audited
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="p-6 hover-lift">
                <h3 className="card-title font-medium mb-3 text-subtle-highlight">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;