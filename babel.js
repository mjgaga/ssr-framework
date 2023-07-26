#!/usr/bin/env node

const fs = require("fs")
const path = require("path");
const childProcess = require("child_process")

const src = "./src"
const dist = "./dist"
fs.rmSync(dist, { recursive: true, force: true });
copyRecursiveSync(src, dist)

const {status, stdout} = childProcess.spawnSync("node_modules/.bin/babel", ["dist", "--out-dir" , "dist"])
console.log(stdout.toString())
process.exit(status)

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function(childItemName) {
            copyRecursiveSync(path.join(src, childItemName),
                path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
        console.log(`copy ${src} -> ${dest}`)
    }
};