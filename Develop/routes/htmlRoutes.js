const path = require('path');

module.exports = (app) => {

  app.get('/exercise', async (req, res) => {
    res.sendFile(path.join(__dirname, 'exercise.html'));
  });

  app.get('/stats', async (req, res) => {
    res.sendFile(path.join(__dirname, 'stats.html'));
  });

  // If no matching route is found default to home
  app.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
};
