import { publicProcedure } from "../trpc";
export const createUser = publicProcedure.input(z.object({ name: z.string() })).mutation(async ({ input }) => ({}));