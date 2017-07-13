const https = require("https");

https.get({
  hostname: "easylist-downloads.adblockplus.org",
  path: "/easylist.txt",
}, (res) => {
  let body = "";
  res.on("data", function (d) {
    body += d;
  });
  res.on("end", function () {
    const index = new Set();
    const re = /^##(\.[^\n]+)$/gm;
    let ruleMatch;
    while ((ruleMatch = re.exec(body)) !== null) {
      const rule = ruleMatch[1];
      const clsRe = /\.([a-zA-Z0-9\-_]+)/g;
      const clsMatch = clsRe.exec(rule);
      if (clsMatch !== null) {
        const className = clsMatch[1];
        index.add(className);
      }
    }

    console.log(JSON.stringify(Array.from(index.values()), undefined, 2));
  });
});
