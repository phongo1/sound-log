const prisma = require('../../prismaClient');

async function getSongs(req, res, next) {
  try {
    const songs = await prisma.song.findMany({
      include: {
        reviews: true,
        inLists: {
          select: {
            listId: true,
            rankPosition: true,
          },
        },
      },
    });

    res.json(songs);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getSongs,
};
