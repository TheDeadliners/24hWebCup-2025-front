import {z} from "zod";

export type RegisterData = z.infer<typeof RegisterSchema>;

export const RegisterSchema = z.object({
    email: z.string({message: "Une adresse e-mail est requise."}).nonempty({message: "Une adresse est requise."}).trim(),
    firstname: z.string({message: "Un prénom est requis."}).nonempty({message: "Un prénom est requis."}).trim(),
    lastname: z.string({message: "Un nom est requis."}).nonempty({message: "Une adresse est requis."}).trim(),
    password: z.string().nonempty({message: "Un mot de passe est requis."}).trim(),
    confirmPassword: z.string().nonempty({message: "Une confirmation du mot de passe est requis."}).trim()
}).refine(
    (data) => data.password === data.confirmPassword,
    {
        path: ["confirmPassword"],
        message: "Les deux nouveaux mots de passe doivent être identiques."
    }
);