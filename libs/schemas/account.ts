import {z} from "zod";

export type AccountData = z.infer<typeof AccountSchema>;

export const AccountSchema = z.object({
    currentPassword: z.string().nonempty({message: "Votre mot de passe actuel requis."}).trim(),
    firstname: z.string().nonempty({message: "Un prénom est requis."}).trim(),
    lastname: z.string().nonempty({message: "Un nom de famille est requis."}).trim(),
    username: z.string().nonempty({message: "Un identifiant est requis."}).trim()
})