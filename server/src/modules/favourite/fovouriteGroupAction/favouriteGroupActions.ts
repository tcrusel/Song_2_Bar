import favouriteGroupRepository from "./favouriteGroupRepository";

export const addFavouriteGroup = async (req, res, next) => {
  try {
    const { groupId } = req.body;
    await favouriteGroupRepository.create(groupId);
    res.status(201).send({ message: "Groupe ajouté aux favoris !" });
  } catch (error) {
    next(error);
  }
};
