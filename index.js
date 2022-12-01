const axios = require("axios");

/**
 * @param {string|number} userId;
 * @param {string|number} key;
 * @param {boolean} debug;
 */

module.exports = async function fetchBloxlinkUser(userId, key, debug) {

  // Axios Request Config
  let config = {
    method: 'get',
    url: `https://v3.blox.link/developer/discord/${userId}`,
    headers: {
      'accept-encoding': null,
      'api-key': key
    },
  };

  // Parameter Checks
  if (!userId) return { error: "No provided 'userId' parameter." };
  if (isNaN(Number(userId))) return { error: "The 'userId' parameter was invalid. It must be a valid Discord User ID." };
  if (!key) return { error: "No provided 'api-key' parameter." };

  // Send request to Bloxlink API to retrieve user roblox information
  let responseData = await axios(config).catch((error) => debugFunction(error, debug));

  // If responseData is undefined,do nothing. debugFunction should log the error.
  if (responseData === undefined) {
    return;
  }

  // If ratelimited, return error
  if (responseData.status === 429) {
    return { status: "error", error: responseData.data.error };
  };

  // If user is not linked or verified with Bloxlink
  if (responseData.error === "This user is not linked with Bloxlink.") {
    return { status: "error", error: responseData.data.error };
  };

  // Return data
  return {
    robloxId: responseData.data.user.robloxId,
    primaryAccount: responseData.data.user.primaryAccount
  };
};


function debugFunction(error, debug) {
  if (debug === true) {
    return console.error(error);
  } else {
    return console.error(error.response.data);
  };
};
