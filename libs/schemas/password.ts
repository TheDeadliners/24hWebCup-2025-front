import {z} from "zod";

export type PasswordData = z.infer<typeof PasswordSchema>;

export const PasswordSchema = z.object({
    currentPassword: z.string().nonempty({message: "Votre mot de passe actuel requis."}).trim(),
    newPassword: z.string().nonempty({message: "Un mot de passe est requis."}).trim(),
    confirmPassword: z.string().nonempty({message: "Une confirmation du mot de passe est requis."}).trim()
}).refine(
    (data) => data.newPassword === data.confirmPassword,
    {
        path: ["confirmPassword"],
        message: "Les deux nouveaux mots de passe doivent être identiques."
    }
);