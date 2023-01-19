const { User, Thought } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find().then(thoughtData => {
      res.json(thoughtData)
    }).catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .then(thoughtData => {
      if (!thoughtData) {
        return res.status(404).json('No thought with this ID!')
      }
      res.json(thoughtData)
    }).catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
    .then(thoughtData => {
      return User.findOneAndUpdate (
        { username: req.body.username },
        { $push: { thoughts: thoughtData._id }},
        { new: true }
      );
    }).then(userData => {
      if (!userData) {
        return res.status(404).json('Thought created but no User with this ID!')
      }
      res.json('Thought successfully created!')
    }).catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true }
    ).then(thoughtData => {
      if (!thoughtData) {
        return res.status(404).json('No thought with this ID!')
      }
      res.json(thoughtData)
    }).catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete(
      { _id: req.params.thoughtId }
    ).then(thoughtData => {
      if (!thoughtData) {
        return res.status(404).json('No thought with that ID!')
      }
      return User.findOneAndUpdate(
        { username: thoughtData.username },
        { $pull: { thoughts: req.params.thoughtId }},
        { new: true }
      ).then(userData => {
        if (!userData) {
          return res.status(404).json('Thought deleted but no user with this ID!')
        }
        res.json('Thought successfully deleted!')
      })
    }).catch((err) => res.status(500).json(err));
  },
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: { reactions: req.body } },
      { new: true }
    ).then(thoughtData => {
      if (!thoughtData) {
        return res.status(404).json('No thought with this ID!')
      }
      res.json(thoughtData)
    }).catch((err) => res.status(500).json(err));
  },
  deleteReaction(req, res) {
    Thought.findOneAndDelete(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId} }},
      { new: true }
    ).then(thoughtData => {
      if (!thoughtData) {
        return res.status(404).json('No thought with this ID!')
      }
      res.json(thoughtData)
    }).catch((err) => res.status(500).json(err));
  }

};