import {z} from "zod";

export type EndPageData = z.infer<typeof EndPageSchema>;

export const EndPageSchema = z.object({
    category: z.string().nonempty({message: "Une catégorie requise."}).trim(),
    title: z.string().nonempty({message: "Un titre requise."}).trim(),
    text: z.string().nonempty({message: "Une message est requise."}).trim(),
    background: z.string().nonempty({message: "Un arrière-plan est requis."}).trim(),
    gif: z.string().nonempty({message: "Un gif est requis."}).trim(),
});

