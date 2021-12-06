const express = require('express');

const router = express.Router();

const controllerFunc = (controller) => {
  router.get('/', controller.getAll.bind(controller));

  return router;
};

module.exports = controllerFunc;
