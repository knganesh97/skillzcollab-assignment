'use client'
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Search, Filter, Calendar, Trophy, Users } from "lucide-react";
import { useRouter } from "next/navigation";

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
    participants?: number;
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

// Helper for status badge color
const statusColors: Record<string, string> = {
    ongoing: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    closed: "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    upcoming: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
};

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
    const router = useRouter();

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
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredChallenges.map((challenge) => (
                    <Card
                        key={challenge.id}
                        className="!border-0 bg-gradient-to-br from-[#f3e8ff] via-[#e0e7ff] to-white dark:bg-none dark:bg-[#181622] text-gray-900 dark:text-white"
                        header={
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">{challenge.brandLogo}</span>
                                    <span className="font-semibold text-base text-gray-900 dark:text-white">
                                        <HighlightedText text={challenge.brandName} search={searchTerm} />
                                    </span>
                                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${statusColors[challenge.status] || "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"}`}>
                                        {challenge.status}
                                    </span>
                                </div>
                                <span className="text-xl font-bold text-purple-800 dark:text-[#b98aff]">
                                    {challenge.reward}
                                </span>
                            </div>
                        }
                        body={
                            <>
                                <h2 className="text-lg font-bold mb-2 text-purple-800 dark:text-[#b98aff]">
                                    <HighlightedText text={challenge.title} search={searchTerm} />
                                </h2>
                                <p className="mb-4 text-purple-800 dark:text-gray-300 min-h-[48px]">
                                    <HighlightedText text={challenge.description} search={searchTerm} />
                                </p>
                            </>
                        }
                        footer={
                            <div className="flex flex-col w-full gap-3">
                                <div className="flex items-center justify-between text-sm text-purple-700 dark:text-gray-400 mb-2">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        Due: {challenge.deadline}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {challenge.participants ?? 0} participants
                                    </span>
                                </div>
                                <Button
                                    className="w-full mt-1 px-4 py-2 bg-purple-800 dark:bg-[#a259ff] cursor-pointer hover:bg-purple-600 dark:hover:bg-[#b98aff] text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
                                    onClick={() => router.push(`/challenge/${challenge.id}`)}
                                >
                                    <Trophy className="w-4 h-4" />
                                    View Challenge
                                </Button>
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    );
}