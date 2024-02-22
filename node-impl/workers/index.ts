import { Job, Worker } from "bullmq";
import { connection } from "../connection";
import { insertMaterial } from "../services";

export const worker = new Worker("Material", async (job: Job) => {
    const data = job.data;
    for (let i = 0; i < data.length; i++) {
        insertMaterial(data[i])
    }
    return "done" + job.name;
}, { connection, maxStalledCount: 0 });

process.on("exit", () => {
    worker.close();
})