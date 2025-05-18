import ForgotForm from "@/components/forms/forgot-form";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-8 h-dvh p-3">
                <Image src="/images/logo.svg" alt="TheEndPage logo" priority={true} width={256} height={256}/>
                <ForgotForm/>
                <Link href="/register" className="btn btn-neutral">Inscription</Link>
                <Link href="/forgot-password" className="btn btn-neutral">Mot de passe oublié ?</Link>
            </section>
        </>
    );
}
