export class Record {
    id: number = 0;
    time: Date = new Date();
    text: string = "";
}

export async function loadRecords() : Promise<Record[]> {
    const result = await fetch("api/records");
    return await result.json();
}

export async function removeRecord(id: number) : Promise<void> {
    await fetch("api/records/remove", { method: "POST", body: `${id}`, headers: { "Content-Type": "application/json" } });
}

export async function addRecord(text: string) : Promise<void> {
    await fetch("api/records/add", { method: "POST", body: `"${text}"`, headers: { "Content-Type": "application/json" } });
}