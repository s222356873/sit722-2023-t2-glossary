const express = require('express');
const router = express.Router();

const glossaryTerms = [
  { term: 'DevOps',  definition: 'A set of practices that combines software development and IT operations.' },
  
];

router.get('/', (req, res, next) => {
  res.render('index', { title: 'DevOps Glossary', glossaryTerms });
});

module.exports = router;
