const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const index = express();
require('dotenv').config();
const port = process.env.PORT;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets/db_barang')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

index.use(express.static('public'));

index.post("/add-product", upload.single('image'), (req, res) => {
    const newProduct = {
        nama: req.body.nama,
        description: req.body.description,
        image: req.file.path.replace('public\\', ''),
        link: req.body.link
    };

    fs.readFile('public/data.json', (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data);
        jsonData.items.push(newProduct);
        fs.writeFile('public/data.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                res.status(500).send('Error menulis ke file');
            } else {
                res.send({ message: 'Produk berhasil ditambahkan', imagePath: newProduct.image });
            }
        });
    });
});

index.listen(port, () => {
    console.log('Server is running on port', port);
});
