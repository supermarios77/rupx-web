import React from "react";
import { Card } from "@/components/ui/card";

const roadmapPhases = [
  {
    icon: CalendarIcon,
    title: "Phase 1: Inception and Awareness (2014 - 2015) Genesis Block",
    items: [
      "Rupaya was born in 2014, inspired by the vision to bring awareness of cryptocurrencies to the people of South Asia.",
      "Initial Mining: We launched as a scrypt PoW blockchain based on Litecoin, inviting enthusiasts to mine and contribute to our ecosystem.",
    ],
  },
  {
    icon: BarChartIcon,
    title: "Phase 2: Enhancing Security and Stability (2016 - 2017)",
    items: [
      "Transition to PoS: To address blockchain security and scalability challenges, we shifted to a POS blockchain based on Blackcoin's technology.",
      "Growing Community: Our community expanded, attracting like-minded individuals passionate about financial empowerment.",
    ],
  },
  {
    icon: GlobeIcon,
    title: "Phase 3: Leveraging Advanced Features (2018 - 2019)",
    items: [
      "Pivoting to PIVX Codebase: In pursuit of advanced features, we forked the PIVX codebase, marking a significant milestone in our technological evolution.",
      "Bull Run and Crypto Winter: During the 2018 bull run, we witnessed tremendous growth. However, the crypto winter that followed presented challenges, impacting our progress.",
    ],
  },
  {
    icon: CalendarIcon,
    title: "Phase 4: Tapping into Ethereum Ecosystem (2019 - 2020)",
    items: [
      "Tomochain Migration: In 2019, we moved to the TomoChain-based Ethereum chain, aiming to leverage Ethereum's ecosystem and enhance scalability.",
      "Market Challenges: Despite our efforts, the market posed ongoing challenges, impacting our growth and development.",
    ],
  },
  {
    icon: BarChartIcon,
    title: "Phase 5: Revitalization and Future (2021 - Present)",
    items: [
      "ERC20 Token Contract: To reflect user holdings accurately, we temporarily moved to an ERC20 token contract on Binance Chain.",
      "Revamping Technology: We are actively developing a new, optimized blockchain, which will replace the temporary ERC20 token contract. This upgrade aims to unlock new capabilities and propel our mission.",
    ],
  },
  {
    icon: GlobeIcon,
    title: "Looking Ahead (Future Plans)",
    items: [
      "Mainnet Launch: Our focus is on launching the new mainnet, which will feature enhanced security, scalability, and unique features to cater to a global audience.",
      "Global Adoption: We are committed to expanding our reach, raising awareness, and driving adoption of Rupaya's blockchain and financial services worldwide.",
    ],
  },
];

const Roadmap = () => {
  return (
    <section className="bg-black text-gray-50 py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Roadmap
          </h2>
          <p className="text-lg text-white">
            At Rupaya, we have a clear vision for the future of our platform.
            Our roadmap outlines the key milestones and features we plan to
            deliver in the coming months and years.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:gap-16 mt-16">
          {roadmapPhases.map((phase, index) => (
            <Card key={index} className="flex flex-col items-center justify-center gap-4 p-8 text-center">
              <phase.icon className="h-12 w-12" />
              <h3 className="text-xl font-semibold">{phase.title}</h3>
              <ul className="text-gray-400 list-disc list-inside">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

function BarChartIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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

function CalendarIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function GlobeIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default Roadmap;