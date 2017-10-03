const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', function(req,res) {
  Model.UnitKerja.findAll({
    order: [['id','ASC']]
  })
  .then(dataUnitKerja => {
    res.render('unitkerja/unitkerja', {dataUnitKerja: dataUnitKerja})
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', function(req,res) {
  Model.UnitKerja.findAll()
    .then(dataUnitKerja => {
      res.render('unitkerja/add', {dataUnitKerja:dataUnitKerja})
    })
    .catch(err => {
      res.send(err)
  })
})

router.post('/add', function(req,res) {
  Model.UnitKerja.build({
    namaUnitKerja: `${req.body.namaUnitKerja}`,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .save()
  .then(data=>{
    res.redirect('/unitkerja')
  })
})

router.get('/delete/:id', function(req,res){
  Model.UnitKerja.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(()=>{
    res.redirect('/unitkerja')
  })
})

router.get('/edit/:id', function(req,res){
  Model.UnitKerja.findById(req.params.id)
  .then(dataUnitKerja =>{
    res.render('unitkerja/edit', {dataUnitKerja:dataUnitKerja})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id', function(req,res){
  Model.UnitKerja.update({
    namaUnitKerja: `${req.body.namaUnitKerja}`
  },
  {
    where: {
      id:`${req.params.id}`
    }
  })
  .then(dataUnitKerja=>{
    res.redirect('/unitkerja');
  })
})

module.exports = router
