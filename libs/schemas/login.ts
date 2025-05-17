import {z} from "zod";

export type LoginData = z.infer<typeof LoginSchema>;

export const LoginSchema = z.object({
    email: z.string({message: "Une adresse e-mail est requise."}).nonempty({message: "Une adresse est requise."}).trim(),
    password: z.string({message: "Un mot de passe est requis."}).nonempty({message: "Un mot de passe est requis."}).trim(),
})