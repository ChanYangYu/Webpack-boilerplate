const express = require('express');
const router = express.Router();
const path = require('path')
const srcPath = path.join(__dirname, '../', '../', 'frontend', 'dist');

router.use(express.static(srcPath));

router.get('/', (req, res) =>{
    res.sendFile(path.join(srcPath,'index.html'));
});

router.get('/second', (req, res) =>{
    res.sendFile(path.join(srcPath,'index.html'));
});

router.use((req, res) =>{
    res.status(404).send('<h1 align="center">404 Not Found</h1>');
});

module.exports = router;