exports.getIndex = async (req, res) => {
  try {
    res.render("index.view.ejs");
  } catch (err) {
    console.log(err);
  }
};

exports.getJob = async (req, res) => {
    try {
      res.render("pages/job.view.ejs");
    } catch (err) {
      console.log(err);
    }
  };

