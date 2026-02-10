const controller = {};

controller.home = (req, res) => {
  res.render('index', {
    title: 'Inicio'
  });
};

module.exports = controller;
