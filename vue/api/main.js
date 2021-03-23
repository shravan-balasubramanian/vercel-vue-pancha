const axios = require('axios');

const exportFunction = async (req, res) => {
  console.log(req.query);
  const { url, apikey, s } = req.query;

  console.log(url, s, apikey);

  const response = axios.get(`${url}?s=${s}&apikey=${apikey}`);
  res.json({
      result: response.data,
  })
};

module.exports = exportFunction;
