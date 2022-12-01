const fetchBloxlinkUser = require("bloxlink-api-fetch");


(async () => {
  console.log(
    await fetchBloxlinkUser('399381736451997696', "api-key")
  );
})();
