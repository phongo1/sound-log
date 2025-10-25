const prisma = require('../../prismaClient');

async function getLists(req, res, next) {
  try {
    const lists = await prisma.list.findMany({
      include: {
        items: {
          include: {
            song: true,
          },
        },
      },
    });

    res.json(lists);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLists,
};
