import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

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

function BarChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}