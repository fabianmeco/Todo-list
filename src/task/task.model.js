const knex = require('../helper/knex');
const Tasks = {};

Tasks.create = function(task){
    return knex('tasks').returning(['id','name','dueDate', 'priority', 'createdAt', 'updatedAt']).insert(task);
}

Tasks.findAll = function(query){
    return knex.select('*').from('tasks').where(query);
}

Tasks.find= function(query){
    return Tasks.findAll(query).first();
}

Tasks.update = function(query, body){
    return knex('tasks').where(query).update(body);    
}

Tasks.delete = function(queryid){
    return knex('tasks').where(queryid).del();
}

Tasks.deleteAll = function(){
    return knex('tasks').del();
}

module.exports = Tasks;