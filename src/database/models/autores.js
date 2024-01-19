module.exports = (Sequelize, DataTypes) => {
    const Model = Sequelize.define(
        "Autores",
        {
            id_autores: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre_autor: DataTypes.STRING,
            biografia_autor: DataTypes.STRING,
        },
        {
            tableName: "autores",
            timestamps: false,
            updatedAt: false,
        }
    );

    Model.associate = (models) => {
        Model.hasMany(models.Libros, {
            as: "libros",
            foreignKey: "id_autor",
        });
    };

    return Model;
};
