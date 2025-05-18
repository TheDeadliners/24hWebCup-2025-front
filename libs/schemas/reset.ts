import {z} from "zod";

export type ResetData = z.infer<typeof ResetSchema>;

export const ResetSchema = z.object({
    token: z.string().nonempty({message: "Un jeton requis."}).trim(),
    password: z.string().nonempty({message: "Un mot de passe est requis."}).trim(),
    confirmPassword: z.string().nonempty({message: "Une confirmation du mot de passe est requis."}).trim()
}).refine(
    (data) => data.password === data.confirmPassword,
    {
        path: ["confirmPassword"],
        message: "Les deux nouveaux mots de passe doivent être identiques."
    }
);