import Link from "next/link";
import Image from "next/image";

import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";


import { siteConfig } from "@/config/site";

import {
  TwitterIcon,
  FacebookIcon,
  DiscordIcon,
  RedditIcon,
  MenuIcon
} from "@/config/icons";

import Logo from "@/public/LOGO.png";

export function Navbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-9 md:px-6 pt-9">
      <Link
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
        href="#"
      >
        <Image src={Logo} className="h-10 w-10" alt="ruapaya logo"/>
        <span className="">{siteConfig.name}</span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {siteConfig.navItems.map((item) => (
          <Link
            className="font-medium hover:underline"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="md:hidden"
            size="icon"
            variant="outline"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            {siteConfig.navMenuItems.map((item) => (
              <Link
                className="font-medium hover:underline"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
