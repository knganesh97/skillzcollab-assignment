'use client'
import React, { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { Trash2 } from "lucide-react";

interface SubmissionModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit?: (file: File | null, description: string) => void;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({ open, onClose, onSubmit }) => {
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState("");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!open) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);

            // Generate preview for images/videos
            if (selectedFile.type.startsWith("image/") || selectedFile.type.startsWith("video/")) {
                setPreviewUrl(URL.createObjectURL(selectedFile));
            } else {
                setPreviewUrl(null);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) onSubmit(file, description);
        setFile(null);
        setDescription("");
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        onClose();
    };

    const handleClear = () => {
        setFile(null);
        setDescription("");
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#23263a] shadow-2xl border border-gray-200 dark:border-gray-700 p-8 animate-fadeIn">
                {/* Clear Data Button */}
                <Button
                    type="button"
                    className="absolute top-3 left-3 text-gray-400 hover:text-red-600 dark:text-gray-500 dark:hover:text-red-400 rounded-full p-1 transition-colors"
                    onClick={handleClear}
                    aria-label="Clear Data"
                    variant="ghost"
                >
                    {/* Trash Icon (Heroicons outline) */}
                    <Trash2 className="w-5 h-5" />
                </Button>
                <Button
                    type="button"
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 rounded-full p-1 transition-colors"
                    onClick={onClose}
                    aria-label="Close"
                    variant="ghost"
                >
                    <span className="text-2xl leading-none">&times;</span>
                </Button>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">Submit Your Entry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Upload File</label>
                        <div className="flex items-center gap-3">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*,video/*,.pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-gray-700 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900 dark:file:text-blue-200 hover:file:bg-blue-100 dark:hover:file:bg-blue-800 transition"
                            />
                        </div>
                        {previewUrl && (
                            <div className="mt-3">
                                {file?.type.startsWith("image/") && (
                                    <img src={previewUrl} alt="Preview" className="max-h-40 rounded-lg border" />
                                )}
                                {file?.type.startsWith("video/") && (
                                    <video src={previewUrl} controls className="max-h-40 rounded-lg border" />
                                )}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Short Description</label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            rows={4}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-800 dark:text-gray-100 dark:bg-[#181622] focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition"
                            placeholder="Describe your submission..."
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full py-2 text-base font-semibold rounded-lg"
                        variant="primary"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SubmissionModal;