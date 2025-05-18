import RegisterForm from "@/components/forms/register-form";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-8 h-dvh p-3">
                <Image src="/images/logo.svg" alt="TheEndPage logo" priority={true} width={256} height={256}/>
                <RegisterForm/>
                <Link href="/login" className="btn btn-neutral">Connexion</Link>
            </section>
        </>
    );
}
