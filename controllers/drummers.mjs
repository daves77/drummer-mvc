export default class DrummerController {
  constructor(db) {
    this.db = db;
  }

  async getAll(req, res) {
    const drummers = await this.db.Drummer.findAll();
    return res.render('drummer', { drummers });
  }
}
