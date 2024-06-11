import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { JSX, SVGProps } from "react";

export function Cards() {
  return (
    <div className="dark">
      <main>
        <section className="bg-black text-gray-50 py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                <UserIcon className="h-12 w-12" />
                <h3 className="text-xl font-semibold">About Us</h3>
                <p className="text-gray-400">
                  Learn more about our mission, vision, and the team behind
                  Rupaya.
                </p>
                <Button className="mt-2" variant="link">
                  <Link className="hover:underline" href="#">
                    Learn More
                  </Link>
                </Button>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                <BarChartIcon className="h-12 w-12" />
                <h3 className="text-xl font-semibold">Tokenomics</h3>
                <p className="text-gray-400">
                  Explore the details of our token distribution and economic
                  model.
                </p>
                <Button className="mt-2" variant="link">
                  <Link className="hover:underline" href="#">
                    Learn More
                  </Link>
                </Button>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                <CodeIcon className="h-12 w-12" />
                <h3 className="text-xl font-semibold">Technology</h3>
                <p className="text-gray-400">
                  Discover the cutting-edge technology powering our platform.
                </p>
                <Button className="mt-2" variant="link">
                  <Link className="hover:underline" href="#">
                    Learn More
                  </Link>
                </Button>
              </Card>
              <Card className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                <UsersIcon className="h-12 w-12" />
                <h3 className="text-xl font-semibold">
                  Community & Governance
                </h3>
                <p className="text-gray-400">
                  Learn about our community-driven approach and governance
                  model.
                </p>
                <Button className="mt-2" variant="link">
                  <Link className="hover:underline" href="#">
                    Learn More
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              About
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Features
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
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

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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