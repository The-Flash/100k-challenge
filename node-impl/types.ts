export interface JobData {
    name: string;
    parts: {
        name: string;
        material_id?: string;
    }[]
}