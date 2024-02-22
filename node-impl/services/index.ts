import { sql } from "../db"
import { JobData } from "../types"

export const insertMaterial = async (material: JobData) => {
    try {
        const results = await sql`
    INSERT INTO materials(name) VALUES(${material.name}) RETURNING id;
    `;
        const parts = material.parts;
        const materialId = results[0].id;
        for (const part of parts) {
            part.material_id = materialId;
        }
        sql`
        INSERT INTO parts ${sql(parts)};
        `;
    } catch (e) {
        console.log(e);
    }
}