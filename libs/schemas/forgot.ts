import {z} from "zod";

export type ForgotData = z.infer<typeof ForgotSchema>;

export const ForgotSchema = z.object({
    email: z.string({message: "Une adresse e-mail est requise."}).nonempty({message: "Une adresse est requise."}).trim(),
})