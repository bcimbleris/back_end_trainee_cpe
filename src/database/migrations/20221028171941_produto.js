/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("produto", function(table){
      table.string("product_id").primary().notNullable();
      table.string("user_id").notNullable();
      table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
      table.string("product_name").primary().notNullable();
      table.float("price").notNullable();
      table.string("description").notNullable();
      table.boolean("favorite").notNullable();
      
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      knex.schema.dropTable("produto");
    
  };
  