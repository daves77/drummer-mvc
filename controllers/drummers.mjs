import db from '../models/index.mjs';

export default class DrummerController {
  constructor(db) {
    this.db = db;
  }

  async getAll(req, res) {
    const drummers = await this.db.Drummer.findAll();
    return res.render('drummers', { drummers });
  }

  async getById(req, res) {
    try {
      const drummer = await this.db.Drummer.findByPk(req.params.id, {
      });
      console.log(JSON.parse(JSON.stringify(drummer)));
      return res.render('drummer', { drummer });
    }
    catch (err) {
      console.log(err);
    }
  }
}
