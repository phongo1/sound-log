const prisma = require('../../prismaClient');

async function getLists(req, res, next) {
  try {
    // 1. Get the ID from the request parameters
    // We use parseInt because route params are strings
    const { id } = req.params;
    const listId = parseInt(id);


    const lists = await prisma.list.findMany({
    where: {
        id: listId
    },
      include: {
        items: {
          include: {
            song: true,
          },
        },
      },
    });
    if (!lists) {
      return res.status(404).json({ message: 'List not found' });
    }

    res.json(lists);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLists,
};
