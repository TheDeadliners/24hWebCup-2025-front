'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { EndPage, EndPageResponse, view } from "@/libs/actions/endpages";
import CopyButton from "@/components/controls/copy-button";
import Image from "next/image";

export default function EndPageDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [endPageData, setEndPageData] = useState<EndPage | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            const endPage: EndPageResponse = await view(id);
            if (endPage && endPage.data) {
                setEndPageData(endPage.data as EndPage);
            }
        };

        fetchData();
    }, [id]);

    if (!endPageData) {
        return <p className="text-center text-white mt-20">Chargement...</p>;
    }

    return (
        <main className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-4">
            <div className="p-4">
                <CopyButton />
            </div>
            <div className="bg-black bg-opacity-60 p-6 rounded-xl text-center space-y-4 max-w-xl">
                <h2 className="text-sm uppercase tracking-widest">{endPageData.category}</h2>
                <h1 className="text-3xl font-bold">{endPageData.title}</h1>
                <p className="text-lg">{endPageData.text}</p>
                <img
                    src={endPageData?.gif}
                    alt="GIF illustration"
                    className="mt-4 w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
                <Image
                    src={`/images/${endPageData?.background}`}
                    alt="Background illustration"
                    className="mt-4 w-full max-w-xs mx-auto rounded-lg shadow-lg"
                    width={128}
                    height={128}
                />
            </div>
        </main>
    );
}