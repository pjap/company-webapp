const express = require('express')
const router = express.Router()
const Model = require('../models')
const multer = require('multer');
const upload = multer({ dest: 'public/images/' })

router.get('/', function(req,res) {
  Model.Pegawai.findAll({
    order: [['id','ASC']]
  })
  .then(dataPegawai => {
    res.render('pegawai/pegawai', {dataPegawai: dataPegawai})
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', function(req,res) {
  Model.Pegawai.findAll({
    order: [['id','ASC']]
  })
  .then(dataPegawai => {
    res.render('pegawai/add', {dataPegawai: dataPegawai})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/add', upload.any(), (req, res)=>{
  Model.Pegawai.create({
    nama_pegawai: `${req.body.nama_pegawai}`,
    alamat: `${req.body.alamat}`,
    jk: `${req.body.jk}`,
    tgl_lahir: `${req.body.tgl_lahir}`,
    telp: `${req.body.telp}`,
    status_pegawai: `${req.body.status_pegawai}`,
    foto: `${req.files[0].filename}`
  })
  .then((data) => {
    // res.send(data)
    res.redirect('/pegawai')
  })
})

router.get('/delete/:id', function(req,res){
  Model.Pegawai.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(()=>{
    res.redirect('/pegawai')
  })
})

router.get('/edit/:id', function(req,res){
  Model.Pegawai.findById(req.params.id)
  .then(dataPegawai =>{
    // res.send(dataPegawai)
    res.render('pegawai/edit', {dataPegawai:dataPegawai})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id', upload.any(), function(req,res){
  console.log('INI DI SINI--------------');
  console.log('INI FILE MM -------->' +req.files.filename);
  Model.Pegawai.update({
    nama_pegawai: `${req.body.nama_pegawai}`,
    alamat: `${req.body.alamat}`,
    jk: `${req.body.jk}`,
    tgl_lahir: `${req.body.tgl_lahir}`,
    telp: `${req.body.telp}`,
    status_pegawai: `${req.body.status_pegawai}`,
    foto: `${req.files[0].filename}`
  },
  {
    where: {
      id:`${req.params.id}`
    }
  })
  .then(dataPegawai=>{
    // console.log('SAMPAI SINI');
    // res.send(dataPegawai)
    res.redirect('/pegawai');
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router
