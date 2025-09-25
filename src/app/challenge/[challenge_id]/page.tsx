import React from "react";
import SubmissionSection from "@/components/SubmissionSection";

// Mock challenge data (in a real app, this would come from an API)
const mockChallengeData: Record<string, any> = {
  "1": {
    id: 1,
    brandName: "Nike",
    brandLogo: "🏃",
    title: "Design the Future of Athletic Wear",
    shortDescription: "Create innovative designs for next-gen sportswear that combines performance with sustainability.",
    fullDescription: `We're looking for visionary designers to help us reimagine the future of athletic wear. Your designs should seamlessly blend cutting-edge performance technology with sustainable materials and practices.

This challenge is an opportunity to shape how athletes will dress and perform in the coming decade. We want designs that not only look incredible but also push the boundaries of what's possible in terms of functionality, comfort, and environmental responsibility.

Your submission should demonstrate innovative thinking about materials, construction techniques, and aesthetic appeal. Consider how your design addresses the needs of various athletic activities while maintaining Nike's commitment to sustainability and performance excellence.`,
    deadline: "2024-10-15",
    reward: "€2,500",
    category: "art & design",
    status: "ongoing",
    participants: 145,
    guidelines: [
      "All designs must be original and not infringe on existing intellectual property",
      "Submissions should include technical specifications and material recommendations",
      "Consider sustainability in material choices and manufacturing processes",
      "Designs should be suitable for at least one specific athletic activity",
      "Include color variations and detailed construction notes"
    ],
    resources: [
      { name: "Nike Sustainability Guidelines", type: "PDF", url: "#" },
      { name: "Performance Fabric Database", type: "Link", url: "#" },
      { name: "Technical Design Templates", type: "ZIP", url: "#" },
      { name: "Brand Style Guide", type: "PDF", url: "#" }
    ],
    requirements: [
      "High-resolution design files (AI, PSD, or Figma)",
      "Technical specification document",
      "Sustainability impact statement",
      "Brief explanation of design choices"
    ]
  }
};

export default async function ChallengeDetailsPage({ params }: { params: { challenge_id: string } }) {
    const {challenge_id} = await params;
    const challenge = mockChallengeData[challenge_id];
    if (!challenge) {
        return <div className="p-8">Challenge not found.</div>;
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
            <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{challenge.brandLogo}</span>
                <h2 className="text-xl font-semibold">{challenge.brandName}</h2>
            </div>
            <p className="mb-6">{challenge.fullDescription}</p>
            <div className="mb-6">
                <strong>Deadline:</strong> {new Date(challenge.deadline).toLocaleDateString()}<br />
                <strong>Reward:</strong> {challenge.reward}<br />
                <strong>Category:</strong> {challenge.category}<br />
                <strong>Status:</strong> {challenge.status.charAt(0).toUpperCase() + challenge.status.slice(1)}<br />
                <strong>Participants:</strong> {challenge.participants}
            </div>
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Guidelines</h3>
                <ul className="list-disc list-inside">
                    {challenge.guidelines.map((guideline: string, index: number) => (
                        <li key={index}>{guideline}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Resources</h3>
                <ul className="list-disc list-inside">
                    {challenge.resources.map((resource: any, index: number) => (
                        <li key={index}>
                            <a href={resource.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                {resource.name} ({resource.type})
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Submission Requirements</h3>
                <ul className="list-disc list-inside">
                    {challenge.requirements.map((requirement: string, index: number) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            </div>
            <SubmissionSection />
        </div>
    );
}