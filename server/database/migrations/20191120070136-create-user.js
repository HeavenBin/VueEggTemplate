'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: (queryInterface, { INTEGER, STRING, DATE, NOW }) => {
    return queryInterface.createTable('Users', {
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
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};