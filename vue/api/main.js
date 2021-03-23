const axios = require('axios');

const exportFunction = async (req, res) => {
  console.log(req.query);
  const { url } = req.query;

  console.log(url);

//   const response = axios.get(url);
//   res.json({
//       result: response.data,
//   })
};

module.exports = exportFunction;
