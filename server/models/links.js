'use strict';
module.exports = function(sequelize, DataTypes) {
  var Links = sequelize.define('Links', {
    link_url: DataTypes.STRING,
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Links;
};