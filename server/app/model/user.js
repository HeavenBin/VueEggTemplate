'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;

  const User = app.model.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
    },
    name: {
      type: STRING
    },
    created_at: {
      defaultValue: NOW,
      type: DATE,
    },
    updated_at: {
      defaultValue: NOW,
      type: DATE,
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};