const fs = require("fs");

const path = "./app.json";
const json = JSON.parse(fs.readFileSync(path, "utf8"));

// Current version: "1.0.0"
let [major, minor, patch] = json.expo.version.split(".").map(Number);

// Increment patch number
patch += 1;

const newVersion = `${major}.${minor}.${patch}`;

json.expo.version = newVersion;

// Android versionCode must increase every build
json.expo.android = json.expo.android || {};
json.expo.android.versionCode = (json.expo.android.versionCode || 1) + 1;

fs.writeFileSync(path, JSON.stringify(json, null, 2));

console.log("✓ Version bumped to:", newVersion);
console.log("✓ Android versionCode:", json.expo.android.versionCode);

