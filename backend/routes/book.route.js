import express from 'express';
import { getBooks } from '../Controller/book.controller.js';


const router = express.Router();

router.get('/', getBooks);



export default router;