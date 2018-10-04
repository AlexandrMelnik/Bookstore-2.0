const BooksModel = (sequelize, type) => {
  return sequelize.define('books', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: type.STRING,
    author: type.STRING,
    categories_id: type.INTEGER,
    description: type.TEXT,
    image: type.STRING,
    rating: type.INTEGER,
  }, {timestamps: false})
}

export default BooksModel;
