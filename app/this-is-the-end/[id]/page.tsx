import { notFound } from 'next/navigation';
import {EndPageResponse, view} from "@/libs/actions/endpages";

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

    return (
        <></>
    );
}