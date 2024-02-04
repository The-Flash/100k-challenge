import fs from "fs";
import readline from "readline";
import { queue } from "./queues";
import "./workers";
import { JobData } from "./workers/types";

const filepath = "../data.log";

const readStream = fs.createReadStream(filepath);

const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
});
let i = 0;
let data: JobData[] = [];
let batchNo = 1;
rl.on("line", (line) => {
    i++;
    data.push(JSON.parse(line));
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
