const aboutBook = require("../../models/about");

module.exports = function (router) {
  router.get("/about", function (req, res) {
    aboutBook
      .find()
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res.status(500).json({
          message: "Error finding team members",
          error: err,
        })
      );
  });

  router.post("/about", function (req, res) {
    let book = new aboutBook(req.body);
    book.save(function (err, member) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(book);
    });
  });
};
