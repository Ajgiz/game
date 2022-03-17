import User from "./model/User.js";
class UserService {
  async auth(name) {
    const user = await User.findOne({ username: name });
    if (user) {
      return user;
    }
    const newUser = await User.create({
      username: name,
    });
    return newUser;
  }

  async getRecord(name) {
    const user = await User.findOne({ username: name }, { score: true });
    return user;
  }

  async newScore(data) {
    const creatScore = await User.findOneAndUpdate(
      { username: data.name },
      { $push: { score: data.score } }
    );
    return creatScore;
  }
}

export default new UserService();
