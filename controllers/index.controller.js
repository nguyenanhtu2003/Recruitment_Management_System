

exports.getIndex = async (req, res) => {
  try {
    res.render("index.view.ejs");
  } catch (err) {
    console.log(err);
  }
};
