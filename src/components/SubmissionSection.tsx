'use client'
import React from "react";
import Button from "@/components/ui/Button";
import SubmissionModal from "@/components/SubmissionModal";

export default function SubmissionSection() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                Submit Your Entry
            </Button>
            <SubmissionModal open={open} onClose={() => setOpen(false)} />
        </>
    );
}