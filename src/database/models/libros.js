module.exports = (Sequelize, DataTypes) => {
    const Libros = Sequelize.define(
        "Libros",
        {
            id_libro: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            titulo: DataTypes.STRING,
            descripcion: DataTypes.STRING,
            id_categoria: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Categorias", // Nombre de la tabla de referencia
                    key: "id_categoria", // Nombre de la columna de referencia
                },
            },
            id_autor: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Autores", // Nombre de la tabla de referencia
                    key: "id_autores", // Nombre de la columna de referencia
                },
            },
            img: DataTypes.STRING,
        },
        {
            tableName: "libros",
            timestamps: false, // Desactiva las marcas de tiempo
            underscored: true,
        }
    );

    Libros.associate = (models) => {
        Libros.belongsTo(models.Categorias, {
            as: "categoria",
            foreignKey: "id_categoria",
        });

        Libros.belongsTo(models.Autores, {
            as: "autor",
            foreignKey: "id_autor",
        });
    };

    return Libros;
};
