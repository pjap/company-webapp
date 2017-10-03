const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', function(req,res) {
  Model.Jabatan.findAll({
    order: [['id','ASC']]
  })
  .then(dataJabatan => {
    // res.send(dataJabatan)
    res.render('jabatan/jabatan', {dataJabatan: dataJabatan})
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', function(req,res) {
  Model.Jabatan.findAll()
    .then(dataJabatan => {
      res.render('jabatan/add', {dataJabatan:dataJabatan})
    })
    .catch(err => {
      res.send(err)
  })
})

router.post('/add', function(req,res) {
  Model.Jabatan.build({
    namaJabatan: `${req.body.namaJabatan}`,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .save()
  .then(data=>{
    res.redirect('/jabatan')
  })
})

router.get('/delete/:id', function(req,res){
  Model.Jabatan.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(()=>{
    res.redirect('/jabatan')
  })
})

router.get('/edit/:id', function(req,res){
  Model.Jabatan.findById(req.params.id)
  .then(dataJabatan =>{
    res.render('jabatan/edit', {dataJabatan:dataJabatan})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id', function(req,res){
  Model.Jabatan.update({
    namaJabatan: `${req.body.namaJabatan}`
  },
  {
    where: {
      id:`${req.params.id}`
    }
  })
  .then(dataJabatan=>{
    res.redirect('/jabatan');
  })
})

module.exports = router
