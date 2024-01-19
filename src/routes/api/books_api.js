const express = require('express');
const router = express.Router();


const ApiController = require ('../../controllers/api/ApiBooks-controllers')
router.get('/', ApiController.generalBooks )
router.get('/search', ApiController.searchBooks)
router.post('/book/create', ApiController.createBook)
router.get('/categories/', ApiController.getCategories)
router.get('/autors/', ApiController.getAutors)

module.exports = router