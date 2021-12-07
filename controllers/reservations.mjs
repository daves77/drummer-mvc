export default class ReservationController {
  constructor(db) {
    this.db = db;
  }

  async getAll(req, res) {
    const reservations = await this.db.Reservation.findAll();
    return res.render('reservations', { reservations });
  }

  async getReservationForm(req, res) {
    try {
      const drummer = await this.db.Drummer.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.render('drummer-reservation', { drummer });
    } catch (err) {
      console.log(err);
    }
  }

  async postReservationForm(req, res) {
    try {
      const { date } = req.body;
      const reservation = await this.db.Reservation.create({
        date,
        drummerId: parseInt(req.params.id, 10),
      });
      return res.send(reservation);
    } catch (err) {
      console.log(err);
    }
  }
}
