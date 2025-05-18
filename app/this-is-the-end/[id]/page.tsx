import { notFound } from 'next/navigation';
import {EndPage, EndPageResponse, view} from "@/libs/actions/endpages";
import CopyButton from "@/components/controls/copy-button";

type Props = {
    params: {
        id: string;
    };
};

export default async function EndPageDetail({ params }: Props) {
    const endPage: EndPageResponse = await view(params.id);

    if (!endPage) {
        return notFound();
    }

    const endPageData = endPage.data as EndPage;
    console.log(endPage);

    return (
        <>
            <main className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-4">

                <div className="p-4">
                    <CopyButton/>
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
                    <img
                        src={`/images/${endPageData?.background}`}
                        alt="GIF illustration"
                        className="mt-4 w-full max-w-xs mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </main>
        </>
    );
}