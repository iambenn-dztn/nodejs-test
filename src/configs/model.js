import sequelize from './sequelize';
import User from '../modules/users/user.model';
import Game from '../modules/games/game.model';
import Item from '../modules/items/item.model';
import UserGame from '../modules/userGames/userGame.model';
import UserItem from '../modules/userItems/userItem.model';
import Transaction from '../modules/games/game.model';

// Define relationships
User.belongsToMany(Game, { through: UserGame });
Game.belongsToMany(User, { through: UserGame });

User.belongsToMany(Item, { through: UserItem });
Item.belongsToMany(User, { through: UserItem });

Item.belongsTo(Game, { foreignKey: 'gameId' });
Game.hasMany(Item, { foreignKey: 'gameId' });

User.hasMany(Transaction, { foreignKey: 'userId' });
Transaction.belongsTo(User, { foreignKey: 'userId' });

Item.hasMany(Transaction, { foreignKey: 'itemId' });
Transaction.belongsTo(Item, { foreignKey: 'itemId' });

const db = {
  sequelize,
  User,
  Game,
  Item,
  UserGame,
  UserItem,
  Transaction
};

export default db;
