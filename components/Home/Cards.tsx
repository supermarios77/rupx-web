import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { BarChartIcon, CodeIcon, UserIcon, UsersIcon } from "@/config/icons";

const cardDetails = [
  {
    icon: UserIcon,
    title: "About Us",
    description: "Learn more about our mission, vision, and the team behind Rupaya.",
    link: "/about",
  },
  {
    icon: BarChartIcon,
    title: "Tokenomics",
    description: "Explore the details of our token distribution and economic model.",
    link: "/tokenomics",
  },
  {
    icon: CodeIcon,
    title: "Technology",
    description: "Discover the cutting-edge technology powering our platform.",
    link: "/technology",
  },
  {
    icon: UsersIcon,
    title: "Community & Governance",
    description: "Learn about our community-driven approach and governance model.",
    link: "/community-&-governance",
  },
];

export function Cards() {
  return (
    <div className="dark">
      <main>
        <section className="bg-black text-gray-50 py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {cardDetails.map((card, index) => (
                <Card key={index} className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <card.icon className="h-12 w-12" />
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                  <Button className="mt-2" variant="link">
                    <Link className="hover:underline" href={card.link}>
                      Learn More
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}