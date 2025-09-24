'use client'
import React, { useState } from "react";
import Button from "@/components/ui/Button"; // Add this import

interface SubmissionModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit?: (file: File | null, description: string) => void;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({ open, onClose, onSubmit }) => {
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState("");

    if (!open) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) onSubmit(file, description);
        setFile(null);
        setDescription("");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                <Button
                    type="button"
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 px-2 py-0 text-xl"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </Button>
                <h2 className="text-xl font-bold mb-4">Submit Your Entry</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Upload File</label>
                        <input
                            type="file"
                            accept="image/*,video/*,.pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="block w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Short Description</label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            rows={4}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SubmissionModal;