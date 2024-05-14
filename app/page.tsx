import React from 'react';
import Hero from "@/components/Home/Hero"
import Card from '@/components/Home/Card';

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<Hero />
			<Card />
		</section>
	);
}
