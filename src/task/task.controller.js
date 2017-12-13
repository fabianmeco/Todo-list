"use strict"

const joi = require('joi');
const taskModel = require('./task.model');
const moment = require('moment');

const schemaTask = joi.object().keys({
    name: joi.string().required(),
    priority: joi.number().integer().min(1).max(5).required(),
    dueDate: joi.date().min(moment().format()).required()
})

exports.post = function (req, res) {
    return joi.validate(req.body, schemaTask, { abortEarly: false })
        .then(function () {
            return taskModel.create({name: req.body.name, priority:req.body.priority, dueDate: req.body.dueDate, createdAt:moment().format(), updatedAt: moment().format() })
            .then(task => res.json(task));
        }).catch(err => {
            if (err.isJoi) {
                return res.status(422).send(err.details.map(function (error) {
                    return { name: error.context.key, message: error.message }
                }))
                
            }
            console.log(err)
            /* return res.status(500).send([{name:"internal error", message: err.message}]) */
        })
}

exports.get = function(req, res){
    return taskModel.findAll({})
    .then(task => res.json(task))
    .catch(err => res.status(500).send([{name:"internal error", message: err.message}]));
}

exports.getOneMiddleware = function(req, res, next){
    if(!req.params.id){
        return res.status(400).send([{ "name": "error", "message": "Id not provided" }])
    }

    return taskModel.find({ id: req.params.id }).then(function (task) {
        if (task) {
            req.task = task;
            return next();
        }
        return res.sendStatus(404);
    }).catch(err => res.status(500).send([{ "name": "internal error", "message": err.message }]));
}

exports.delete = function(req, res){
    return eventModel.delete({ id: req.task.id })
    .then(task => {
        res.json(req.task)
    })
    .catch(err => res.status(500).send([{ "name": "error", "message": err.message }]));
}

exports.put = function(req, res){

}