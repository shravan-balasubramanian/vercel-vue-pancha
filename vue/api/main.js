const axios = require('axios');

const { log, error } = console;
const exportFunction = async (req, res) => {
  const { s } = req.query;
  log('User is searching for the movie: ' + s);
  try {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}?s=${s}&apikey=${process.env.VUE_APP_API_KEY}`);

    log(`Successfully fetched movie results for ${s}`);

    res.json({
        result: response.data,
    });
  } catch (ex) {
    error('Request failed');
    res.status(ex.response.status).json({
      error: `Failed with ${JSON.stringify(ex)}`
    });
  }
};

module.exports = exportFunction;
