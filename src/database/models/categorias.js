module.exports = (Sequelize, DataTypes) => {
    const Model = Sequelize.define(
        "Categorias",
        {
            id_categoria: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre_categoria: DataTypes.STRING,
        },
        {
            tableName: "categorias",
            timestamps: false,
            updatedAt: false,
        }
    );

    Model.associate = (models) => {
        Model.hasMany(models.Libros, {
            as: "libros",
            foreignKey: "id_categoria",
        });
    };

    return Model;
};
