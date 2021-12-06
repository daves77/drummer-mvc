export default class ReservationController {
  constructor(db) {
    this.db = db;
  }

  async getAll(req, res) {
    const reservations = await this.db.Reservation.findAll();
    return res.render('reservations', { reservations });
  }
}
