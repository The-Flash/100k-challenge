import { Queue } from "bullmq";
import { connection } from "../connection";

export const queue = new Queue("Material", {
    connection
});
