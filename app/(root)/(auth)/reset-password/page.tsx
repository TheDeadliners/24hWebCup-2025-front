import Image from "next/image";
import Link from "next/link";
import ResetForm from "@/components/forms/reset-form";
import {Suspense} from "react";

export default function ResetPasswordPage() {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-8 h-dvh p-3">
                <Image src="/images/logo.svg" alt="TheEndPage logo" priority={true} width={64} height={64}/>
                <Suspense fallback={null}>
                    <ResetForm />
                </Suspense>
                <Link href="/login" className="btn btn-neutral">Connexion</Link>
            </section>
        </>
    );
}
