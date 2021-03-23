const axios = require('axios');

const exportFunction = async (req, res) => {
  const { url } = req.body;

  const response = axios.get(url);
  res.json({
      result: response.data,
  })
};

module.exports = exportFunction;
