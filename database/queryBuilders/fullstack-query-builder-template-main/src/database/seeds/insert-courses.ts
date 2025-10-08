import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    //await knex("table_name").del();

    // Inserts seed entries
    await knex("courses").insert([
        {  name: "HTML" },
        {  name: "React" },
        {  name: "Angular" },
        {  name: "VauJS" },
        {  name: "Database" },
        {  name: "Comunicação_Acertiva" },
        {  name: "Inteligencia_emocional" },
        {  name: "Gerenciamento_de_tempo" },
        {  name: "Electron" },
        {  name: "Java" },
        {  name: "GO" },
        {  name: "Swift" },
        
    ]);
};
