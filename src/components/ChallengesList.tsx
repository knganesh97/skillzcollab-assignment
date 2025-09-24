'use client'
import React, { useState } from "react";
import Card from "@/components/ui/Card";

type Challenge = {
    id: number;
    brandName: string;
    brandLogo: string;
    title: string;
    description: string;
    deadline: string;
    reward: string;
    category: string;
    status: string;
    participants: number;
};

function HighlightedText({ text, search }: { text: string; search: string }) {
    if (!search || search.length < 3) return <>{text}</>;
    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <mark key={i} className="bg-yellow-200 dark:bg-yellow-600">{part}</mark>
                ) : (
                    <React.Fragment key={i}>{part}</React.Fragment>
                )
            )}
        </>
    );
}

export default function ChallengesList({ challenges }: { challenges: Challenge[] }) {
    const categories = [
        "all",
        ...Array.from(new Set(challenges.map((c) => c.category))),
    ];
    const statuses = [
        "all",
        ...Array.from(new Set(challenges.map((c) => c.status))),
    ];

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredChallenges = challenges.filter((c) => {
        const categoryMatch = selectedCategory === "all" || c.category === selectedCategory;
        const statusMatch = selectedStatus === "all" || c.status === selectedStatus;
        const searchMatch =
            searchTerm.length < 3 ||
            c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.brandName.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && statusMatch && searchMatch;
    });

    return (
        <div className="p-6">
            <div className="mb-6 flex gap-6 flex-wrap">
                <div>
                    <label htmlFor="category" className="mr-2 font-medium">
                        Filter by category:
                    </label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border rounded px-2 py-1"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="status" className="mr-2 font-medium">
                        Filter by status:
                    </label>
                    <select
                        id="status"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="border rounded px-2 py-1"
                    >
                        {statuses.map((status) => (
                            <option key={status} value={status}>
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="search" className="mr-2 font-medium">
                        Search:
                    </label>
                    <input
                        id="search"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Type to search..."
                        className="border rounded px-2 py-1"
                    />
                </div>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredChallenges.map((challenge) => (
                    <Card key={challenge.id}>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{challenge.brandLogo}</span>
                            <span className="font-semibold">
                                <HighlightedText text={challenge.brandName} search={searchTerm} />
                            </span>
                        </div>
                        <h2 className="text-lg font-bold mb-2">
                            <HighlightedText text={challenge.title} search={searchTerm} />
                        </h2>
                        <p className="mb-2 text-gray-700 dark:text-gray-300">
                            <HighlightedText text={challenge.description} search={searchTerm} />
                        </p>
                        <div className="text-sm mb-1 text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Deadline:</span> {challenge.deadline}
                        </div>
                        <div className="text-sm mb-1 text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Reward:</span> {challenge.reward}
                        </div>
                        <div className="text-sm mb-1 text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Category:</span> {challenge.category}
                        </div>
                        <div className="text-sm mb-1 text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Status:</span> {challenge.status}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Participants:</span> {challenge.participants}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}