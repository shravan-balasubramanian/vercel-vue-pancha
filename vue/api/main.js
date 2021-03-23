const axios = require('axios');

const exportFunction = async (req, res) => {
  // eslint-disable-next-line no-console
  console.log('User is searching for the movie: ' + s);
  const { url, apikey, s } = req.query;
  const response = await axios.get(`${url}?s=${s}&apikey=${apikey}`);

  res.json({
      result: response.data,
  })
};

module.exports = exportFunction;
