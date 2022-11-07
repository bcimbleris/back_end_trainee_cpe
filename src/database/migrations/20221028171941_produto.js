/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("produto", function(table){
      table.string("product_id").primary().notNullable();
      table.string("product_name").primary().notNullable();
      table.float("price").notNullable();
      table.string("description").notNullable();
      
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.dropTable("produto");
      
  };
  