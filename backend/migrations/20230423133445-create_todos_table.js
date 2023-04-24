module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      priority: {
        type: Sequelize.ENUM('low', 'medium', 'high'),
        defaultValue: 'medium',
      },
      userId: { // Add the userId column
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // Reference the users table
          key: 'id', // Reference the id column in the users table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todos');
  },
};
