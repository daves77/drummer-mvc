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
      const drummer = await this.db.Drummer.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.render('drummer', { drummer });
    }
    catch (err) {
      console.log(err);
    }
  }
}
