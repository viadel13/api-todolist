const router = require("express").Router();
const Tache = require('../models/Taches')
const mongoose = require('mongoose');
require("dotenv").config();

async function main(){
    try {
        // await mongoose.connect("mongodb://127.0.0.1/todolist");
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connexion ok');
    } catch (error) {
        console.log('erreur: ', error);
    }
    
    router.post('/addTaches', async (req, res)=>{
        const datePick = new Date(req.body.datePick); // Convertir la chaîne de caractères en objet Date
        // const jour = datePick.getDate();
        // const mois = datePick.getMonth() + 1;
        // const annee = datePick.getFullYear();

        const response = await Tache.create({
            id: req.body.datas.id,
            tache: req.body.datas.tache,
            date: req.body.datas.date
        })  
        console.log(req.body)
    })

    router.get('/showTaches', async (req, res)=>{
        const listeTaches = await Tache.find({})
        res.json(listeTaches);
    })

    router.get('/drop/:id', async (req, res)=>{
       const response = await Tache.deleteOne({id: req.params.id})
       res.json(response);
    })

    router.get('/rename/:tache/:id/:date', async (req, res)=>{
        // console.log(req.params)
        const response = await Tache.updateOne({
            id: req.params.id,
            tache: req.params.tache,
            date: req.params.date
        })

        console.log(response)
    })

    router.get('/', async (req, res)=>{
        res.send('ok')
        // await Tache.deleteMany({})
    })

}

main();



module.exports = router;