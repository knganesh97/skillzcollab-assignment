import React from "react";
import Card from "@/components/ui/Card"; // Adjust the import path if needed

// Mock data for challenges
const mockChallenges = [
	{
		id: 1,
		brandName: "Nike",
		brandLogo: "🏃",
		title: "Design the Future of Athletic Wear",
		description: "Create innovative designs for next-gen sportswear that combines performance with sustainability.",
		deadline: "2024-10-15",
		reward: "€2,500",
		category: "art & design",
		status: "ongoing",
		participants: 145,
	},
	{
		id: 2,
		brandName: "Spotify",
		brandLogo: "🎵",
		title: "Music Visualization Challenge",
		description: "Design stunning visual effects that respond to music for our premium experience.",
		deadline: "2024-10-08",
		reward: "€1,800",
		category: "music",
		status: "ongoing",
		participants: 89,
	},
	{
		id: 3,
		brandName: "Adobe",
		brandLogo: "🎨",
		title: "Creative AI Interface Design",
		description: "Reimagine how creators interact with AI tools in the creative process.",
		deadline: "2024-10-22",
		reward: "€3,000",
		category: "art & design",
		status: "upcoming",
		participants: 203,
	},
	{
		id: 4,
		brandName: "Netflix",
		brandLogo: "🎬",
		title: "Short Film Competition",
		description: "Create a 3-minute short film that tells a compelling story about human connection.",
		deadline: "2024-09-20",
		reward: "€5,000",
		category: "film",
		status: "past",
		participants: 67,
	},
	{
		id: 5,
		brandName: "Apple",
		brandLogo: "🍎",
		title: "App Icon Redesign Challenge",
		description: "Redesign iconic app icons with a fresh, modern approach while maintaining brand identity.",
		deadline: "2024-10-30",
		reward: "€2,200",
		category: "art & design",
		status: "upcoming",
		participants: 178,
	},
	{
		id: 6,
		brandName: "Red Bull",
		brandLogo: "🐂",
		title: "Extreme Sports Photography",
		description: "Capture the adrenaline and energy of extreme sports in breathtaking photographs.",
		deadline: "2024-10-12",
		reward: "€1,500",
		category: "photography",
		status: "ongoing",
		participants: 92,
	},
];

export default function ChallengesPage() {
	return (
		<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
			{mockChallenges.map((challenge) => (
				<Card key={challenge.id}>
					<div className="flex items-center gap-2 mb-2">
						<span className="text-2xl">{challenge.brandLogo}</span>
						<span className="font-semibold">{challenge.brandName}</span>
					</div>
					<h2 className="text-lg font-bold mb-2">{challenge.title}</h2>
					<p className="text-gray-700 mb-2">{challenge.description}</p>
					<div className="text-sm text-gray-600 mb-1">
						<span className="font-medium">Deadline:</span> {challenge.deadline}
					</div>
					<div className="text-sm text-gray-600 mb-1">
						<span className="font-medium">Reward:</span> {challenge.reward}
					</div>
					<div className="text-sm text-gray-600 mb-1">
						<span className="font-medium">Category:</span> {challenge.category}
					</div>
					<div className="text-sm text-gray-600 mb-1">
						<span className="font-medium">Status:</span> {challenge.status}
					</div>
					<div className="text-sm text-gray-600">
						<span className="font-medium">Participants:</span> {challenge.participants}
					</div>
				</Card>
			))}
		</div>
	);
}