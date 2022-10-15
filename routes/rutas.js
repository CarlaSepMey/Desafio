const express = require('express')
const { fstat } = require('fs')
const { connect } = require('http2')
const multer = require('multer')
const path = require('path')
const router = express.Router()


//creara la carpeta para la imagen temporalmente
const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../file' ),
    filename: (req, file, cb) =>{
        cb(null, Date.now()+ '' +file.originalname)
    }
        
})
const fileUpload = multer({
    storage:diskstorage
}).single('file')

router.get('/', (req,res)=>{
    res.send('ya')
})

router.post('/file/post', fileUpload,  (req, res) =>{

    req.getConnection((err, conn)=>{
        if(err) return res.status(500).send('server error')

        const type =req.file.mimetype
        const name = req.file.originalname
        //leer datos del archivo
        const data = fs.readFileSync(path.join(__dirname,'../file/' + req.file.filename))

        conn.query('INSERT INTO archivo set ?', [{}], (err, rows)=>{
            if(err) return res.status(500).send('server error')

            res.send('guardado')
        })
    })
    
})

module.exports = router;