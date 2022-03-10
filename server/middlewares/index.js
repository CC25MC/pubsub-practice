const validateFields = require('./validate-fields');
const validateFile = require('./validate-file');
const validateRoles = require('./validate-roles');
const validateToken = require('./validate-token');

module.exports = {
  ...validateFields,
  ...validateFile,
  ...validateRoles,
  ...validateToken,
};
