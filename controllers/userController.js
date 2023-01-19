const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find().then(userData => {
      res.json(userData)
    }).catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .populate('friends')
    .populate('thoughts')
    .then(userData => {
      if (!userData) {
        return res.status(404).json('No user with this ID!')
      }
      res.json(userData)
    }).catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
    .then(userData => {
      res.json(userData)
    }).catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    ).then(userData => {
      if (!userData) {
        return res.status(404).json('No user with this ID!')
      }
      res.json(userData)
    }).catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete(
      { _id: req.params.userId }
    ).then(userData => {
      if (!userData) {
        return res.status(404).json('No user with this ID!')
      }
      return Thought.deleteMany({ _id: { $in: userData.thoughts }})
    }).then(() => {res.json('User and Thoughts deleted!')})
    .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId }},
      { new: true }
    ).then(userData => {
      if (!userData) {
        return res.status(404).json('No user with this ID!')
      }
      res.json(userData)
    }).catch((err) => res.status(500).json(err));
  },
  removeFriend(req, res) {
    User.findOneAndDelete(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId }},
      { new: true }
    ).then(userData => {
      if (!userData) {
        return res.status(404).json('No user with this ID!')
      }
      res.json(userData)
    }).catch((err) => res.status(500).json(err));
  }
}