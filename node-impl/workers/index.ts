import { Job, JobData, Worker } from "bullmq";
import { connection } from "../connection";

export const worker = new Worker("Material", async (job: Job) => {
    const data = job.data as JobData[];
    console.log(data[0]);
    return "done" + job.name;
}, { connection });

process.on("exit", () => {
    worker.close();
})