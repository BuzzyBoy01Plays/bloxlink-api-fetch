# bloxlink-api-fetch

`bloxlink-api-fetch` is an unofficial Node.js API Wrapper for the [Bloxlink API](https://blox.link/developers).


## Installation

Using npm:

```bash
$ npm install bloxlink-api-fetch
```

## Usage

Get a linked Roblox Account using a Discord User ID

```js
const fetchBloxlinkUser = require("bloxlink-api-fetch");

(async () => {
  console.log(
    await fetchBloxlinkUser('399381736451997696', "api-key")
  );
})();
```

The example above will log the simple information provided by the [Bloxlink API](https://blox.link/developers).

For the user ID "399381736451997696:"

```json
{
   "robloxId":"678830693",
   "primaryAccount":"678830693"
}
```

If the user is not verified with Bloxlink, it will return:

```json
{
   "success": false,
   "user": {
      
   },
   "error": "The specified user is not verified with Bloxlink."
}
```
## Future Updates

`bloxlink-api-fetch` will receive many updates over the next couple of days/weeks. The next update I plan to add more data that is returned, such as: 

```json
{
   "robloxUsername": "BuzzyBoy01Plays",
   "robloxDisplay": "Buzzy",
   "robloxId": "678830693",
   "description": "Description",
   "isBanned": false
}
```

## Debug

If you encounter an error with very little to no details, you can enable "debug mode" by adding true to the `fetchBloxlinkUser` function.
This will log the entire response error from Axios.

```js
const fetchBloxlinkUser = require("bloxlink-api-fetch");

(async () => {
  console.log(
    await fetchBloxlinkUser('399381736451997696', "api-key", true)
  );
})();
```