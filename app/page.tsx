import React from 'react';

import Hero from "@/components/Home/Hero";
import { Cards } from '@/components/Home/Cards';

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<Hero />
			<Cards />
		</section>
	);
}