const express = require('express');

const router = express.Router();

module.exports = (controller) => {
  router.get('/', controller.getAll.bind(controller));
  router.get('/:id', controller.getReservationForm.bind(controller));
  router.post('/:id', controller.postReservationForm.bind(controller));

  return router;
};
