const express = require("express");
const router = express.Router();
const ordenes = require('../models/task');
const usuarios = require('../models/users')


router.get("/", async (req, res) => {
    const tasks = await ordenes.find();
    console.log(tasks);
    res.json(tasks);
  });

router.post("/", async (req, res) => {
    const {remitente, id_remitente, direccion_recogida, ciudad_recogida, fecha_recogida, hora_recogida, destinatario, id_destinatario, ciudad_destino, direccion_destino, alto_paq, ancho_paq, largo_paq, peso_paq} = req.body
    const orden = new ordenes ({remitente, id_remitente, direccion_recogida, ciudad_recogida, fecha_recogida, hora_recogida, destinatario, id_destinatario, ciudad_destino, direccion_destino, alto_paq, ancho_paq, largo_paq, peso_paq})    
    await orden.save()

    console.log(orden);
    res.json({status: "received"});
  });

router.post("/", async (req, res) => {
    const {email, ingreso} = req.body
    const orden = new usuarios ({email, ingreso})    
    await orden.save()

    console.log(orden);
    res.json({status: "received"});
  });
  
router.put("/:id", async (req, res) => {
    const {remitente, id_remitente, direccion_recogida, ciudad_recogida, fecha_recogida, hora_recogida, destinatario, id_destinatario, ciudad_destino, direccion_destino, alto_paq, ancho_paq, largo_paq, peso_paq} = req.body
    const newTask = {remitente, id_remitente, direccion_recogida, ciudad_recogida, fecha_recogida, hora_recogida, destinatario, id_destinatario, ciudad_destino, direccion_destino, alto_paq, ancho_paq, largo_paq, peso_paq}

    await ordenes.findByIdAndUpdate(req.params.id, newTask)

    res.json({status: "update"});
  });

router.delete("/:id", async (req, res) => {

    await ordenes.findByIdAndDelete(req.params.id)

    res.json({status: "delete"});
  });

router.get("/:id", async (req, res) => {

    const tasks = await ordenes.findById(req.params.id);
 
    res.json({tasks});
  });

module.exports = router