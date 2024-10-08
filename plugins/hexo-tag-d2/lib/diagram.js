"use strict";
const child_process = require("node:child_process");

const knownSwitches = [
    "bundle",
    "force-appendix",
    "debug",
    "layout",
    "theme",
    "dark-theme",
    "pad",
    "animate-interval",
    "timeout",
    "sketch",
    "center",
    "scale",
    "target",
    "font-regular",
    "font-italic",
    "font-bold",
    "font-semibold",
];

async function generate(source, sourcePath, d2Options) {
    const args = []

    for (const it of knownSwitches) {
        if ((it in d2Options) && (d2Options[it] !== null)) {
            args.push(`--${it}`);
            args.push(d2Options[it]);
        }
    }

    args.push("-")
    args.push("-")

    try {
        return child_process.execFileSync(
            d2Options.d2_path,
            args,
            {
                cwd: sourcePath,
                input: source,
                stdio: 'pipe'
            }
        );
    } catch (error) {
        return `<div>${error}</div>`
    }
}

module.exports = {
    generate
}