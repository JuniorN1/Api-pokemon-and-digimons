import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("pokemon_type").del();
    const data = {
        id: 1,
        type: "anime",
    };
    // Inserts seed entries
    await knex("pokemon_type").insert(data);
}

