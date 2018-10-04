const CategoriesModel = (sequelize, type) => {
  return sequelize.define('categories', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING,
  }, {timestamps: false})
}

export default CategoriesModel;
