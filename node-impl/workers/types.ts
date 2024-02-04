export interface JobData {
    id: string;
    name: string;
    parts: {
        id: string;
        name: string;
    }[]
}