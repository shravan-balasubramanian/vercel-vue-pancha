const axios = require('axios');

const exportFunction = async (req, res) => {
  try {
    const { url, apikey, s } = req.query;
    const response = await axios.get(`${url}?s=${s}&apikey=${apikey}`);

    // eslint-disable-next-line no-console
    console.log('User is searching for the movie: ' + s);

    res.json({
        result: response.data,
    });
  } catch (ex) {
    res.status(ex.response.status).json({
      error: `Failed with ${JSON.stringify(ex)}`
    });
  }
};

module.exports = exportFunction;
