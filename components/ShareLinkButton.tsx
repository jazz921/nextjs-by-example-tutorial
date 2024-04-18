"use client";

import { useState } from "react";
import { LinkIcon } from '@heroicons/react/20/solid'

const ShareLinkButton = () => {
    const [clicked, setClicked] = useState<boolean>(false)

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        setClicked(true);
        setTimeout(() => setClicked(false), 1000)
    };

    return (
        <button
            onClick={handleClick}
            className="flex gap-1 items-center border p-1 px-2
                        text-slate-500 rounded-md 
                        ease-in duration-150 hover:text-orange-400"
        >
            <LinkIcon className="h-4 w-4" />
            { clicked ? 'Link Copied' : 'Share Link' }
        </button>
    );
};

export default ShareLinkButton;
