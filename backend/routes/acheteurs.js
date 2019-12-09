var express = require("express");
var _ = require("lodash");
var _ = require('lodash/core');
var router = express.Router();

let acheteurs = [
    {
        id: 0,
        nom: 'Polart',
        prenom: 'Sixtine',
        age: 21,
        pays: 'France',
        ventes: 1
    },

    {
        id: 1,
        nom: 'Masbernat',
        prenom: 'Salomé',
        age: 24,
        pays: 'France',
        ventes: 3
    },

    {
        id: 2,
        nom: 'Polart',
        prenom: 'Jacques',
        age: 20,
        pays: 'France',
        ventes: 2
    }
];

/*Get les ventes*/
router.get('/ventes', function(req, res, next){

    var NombreVentes = 0;
    for(var i=0; i<acheteurs.length; i++){
        var test = _.find(acheteurs, function(obj){
            return obj.id === i;
        });
        NombreVentes += test.ventes;
    }

    res.status(200).json({
        NombreVentes
    });
});

/* Get les acheteurs*/
router.get('/', function(req, res, next){
    res.status(200).json({acheteurs});
});

/* Get le nombre d'acheteurs */
router.get('/nbr', function(req, res, next){
    var NombreAcheteurs = acheteurs.length;
    res.status(200).json({NombreAcheteurs})
});

/*Get un acheteur*/
router.get('/:ID', (req, res) => {

    const acheteur = _.find(acheteurs, function(obj){
        if(obj.id == req.params.ID){
            return true;
        }
        else{
            console.log("Acheteur introuvable");
            return false;
        }
    });
    
    res.status(200).json({ acheteur });
});


/*Ajouter acheteur*/
router.put('/ajout', (req, res) => {
    const {nom, prenom, age, pays, ventes} = req.body;
    const id = _.uniqueId();
    acheteurs.push({id, nom, prenom, age, pays, ventes});
    res.json({
        message: 'Ajouté : ${nom}',
        acheteur: {id, nom, prenom, age, pays, ventes}
    })
});

/*Update acheteur*/
router.post('/update:id', (req, res) => {
    // Recuperer l'id de l'acheteur dans les parametres de la requete pour l'update
    const { id } = req.params;
    // recuperer les valeurs dnas le body de la requete
    const {nom, prenom, age, pays, ventes} = req.body;
    // trouver l'acheteur dans la bdd grace à son id
    const acheteurToUpdate = _.find(acheteur, ["id", id]);
    //uddate les infos
    acheteurToUpdate.nom = nom;
    acheteurToUpdate.prenom = prenom;
    acheteurToUpdate.age = age;
    acheteurToUpdate.pays = pays;
    acheteurToUpdate.ventes = ventes;
});

/*supprimer un acheteur*/
router.delete('/delete:id', (req, res) => {
    const {id} = req.params;

    //supp de la bdd
    _.remove(acheteurs, ["id", id]);

    //return message
    res.json({
        message: 'Acheteur supprimé ${id}'
    });
});

module.exports = router;