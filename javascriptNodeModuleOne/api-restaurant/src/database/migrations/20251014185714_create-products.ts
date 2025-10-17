import { create } from "domain";
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable("products", (table) => {

        table.increments("id").primary(),
        table.text("name").notNullable(),
        table.decimal("price").notNullable(),
        table.timestamp("created_at").defaultTo(knex.fn.now()), //knex.fn.now() pega a hora atual
        table.timestamp("updated_at").defaultTo(knex.fn.now())


    })


}


export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable("products")

}

