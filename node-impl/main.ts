import fs from "fs";
import readline from "readline";
import { queue } from "./queues";
import "./workers";
import { JobData } from "./types";

const filepath = "../data.log";

const readStream = fs.createReadStream(filepath, "utf-8");

const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
});
let i = 0;
let data: JobData[] = [];
let batchNo = 1;

rl.on("line", (line) => {
    i++;
    const obj = JSON.parse(line.replace(/'/g, "\""));
    data.push(obj);
    if (i === 1000) {
        const jobName = "batch-" + batchNo;
        queue.add(jobName, data);
        i = 0;
        data = [];
        batchNo++;
    }
})


rl.on("close", () => {
    data = [];
    console.log("Done reading...");
})
