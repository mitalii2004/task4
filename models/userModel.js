module.exports = (Sequelize, sequelize, DataTyes) => {
    return sequelize.define(
        "users",
        {
            ...require("./cors")(Sequelize, DataTyes),
            name: {
                type: DataTyes.STRING(255),
                allowNull: true,
                defaultValue: null,
            },
        },
        {
            tableName: "users",
        }
    );
};