import { router, publicProcedure } from "./trpc";
import { getUsers } from "./procedures/getUsers";
import { createUser } from "./procedures/createUser";
import { onUpdate } from "./procedures/onUpdate";
export const appRouter = router({
  getUsers,
  createUser,
  onUpdate,
  inline: publicProcedure.query(async () => "ok"),
});