import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Lead Blockchain Software Engineer",
      company: "Netzence Sustainability Limited",
      location: "Hybrid, Nigeria",
      period: "September 2023 – Present",
      type: "Current Role",
      highlights: [
        "Architected, developed, tested, and deployed production-grade smart contracts on Ethereum and EVM testnets",
        "Enhanced blockchain security by implementing advanced cryptographic techniques and secure coding standards",
        "Collaborated with cross-functional teams to integrate blockchain technology into existing systems",
        "Participated in development of technical specifications and architectural designs for scalable blockchain solutions",
        "Identified and troubleshot performance and security issues to deliver stable, high-quality releases"
      ]
    },
    {
      title: "Senior Blockchain and Smart Contract Developer",
      company: "Launch Legends (Autheo)",
      location: "Remote, United States",
      period: "February 2025 – July 2025",
      type: "Contract",
      highlights: [
        "Built, tested, and deployed Ethereum-based smart contracts focusing on tokenization and RWA elements",
        "Led technical guidance and enforced secure coding standards across projects",
        "Integrated blockchain into legacy systems to boost efficiency with back-end development",
        "Managed timelines to ensure on-time delivery of milestones",
        "Optimized code for faster load times and better performance"
      ]
    },
    {
      title: "Smart Contract Auditor",
      company: "Nethermind.io",
      location: "London, UK",
      period: "June 2024 – September 2024",
      type: "Contract",
      highlights: [
        "Reviewed over 35,000 lines of code across multiple Web3 projects",
        "Identified and resolved critical security vulnerabilities in smart contracts",
        "Collaborated with development teams to enhance robustness of blockchain solutions",
        "Specialized in comprehensive audits of ERC20/ERC721/ERC1155 standards",
        "Applied advanced static analysis tools and manual code review techniques"
      ]
    },
    {
      title: "Fullstack Blockchain Developer",
      company: "RigelProtocol Lab",
      location: "Remote, UK",
      period: "November 2021 – June 2022",
      type: "Full-time",
      highlights: [
        "Designed and implemented smart contracts for Decentralized P2P trading system",
        "Architected comprehensive NFT marketplace with auction and royalty distribution features",
        "Built innovative Gifting dApp with scheduled asset distribution mechanisms",
        "Collaborated with frontend teams on seamless React-based dApp integration",
        "Implemented gas-efficient contract architectures for optimal user experience"
      ]
    },
    {
      title: "Lead Backend Engineer",
      company: "Closecarbon",
      location: "Remote",
      period: "August 2024 – November 2024",
      type: "Contract",
      highlights: [
        "Led development of carbon offset marketplace backend infrastructure",
        "Implemented secure payment processing and carbon credit tracking systems",
        "Designed scalable API architecture for environmental impact measurement",
        "Collaborated with sustainability experts to translate requirements into technical solutions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-light mb-4">Experience</h2>
          <div className="w-12 h-px bg-section-border mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover-lift">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="card-title font-medium text-subtle-highlight mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-foreground mb-1">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.location}</p>
                </div>
                <div className="flex flex-col lg:items-end">
                  <p className="text-muted-foreground mb-2">{exp.period}</p>
                  <Badge variant="secondary">{exp.type}</Badge>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-subtle-highlight rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;