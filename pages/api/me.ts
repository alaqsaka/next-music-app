// this is just to get the user, it'll just get me
import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(async (req, res, user) => {
  // get the playlist count
  const playlistsCount = await prisma.playlist.count({
    where: {
      userId: user.id,
    },
  });

  console.log(playlistsCount);
  res.json({
    ...user,
    playlistsCount,
  });
});
