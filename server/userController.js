import userService from "./userService.js";

class UserController {
  async auth(req, res) {
    try {
      const user = await userService.auth(req.body.name);
      res.json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
  async getRecord(req, res) {
    const name = req.params.id;
    try {
      const records = await userService.getRecord(name);
      res.json(records);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
  async newScore(req, res) {
    try {
      const score = await userService.newScore({
        name: req.body.name,
        score: req.body.score,
      });
      res.status(200).json(score);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

export default new UserController();
