import { publicProcedure } from "../trpc";
export const getUsers = publicProcedure.query(async () => []);