var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET articles listing. */
router.get('/', (req, res, next) => {
  Article.find({}, (err, article) => {
    if (err) return next(err);
    res.render('articleList', { list: article });
  });
});

/*GET new article form*/
router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/', (req, res, next) => {
  Article.create(req.body, (err, article) => {
    if (err) return next('/articles/new');
    if (article) return res.redirect(`/articles/`);
  });
});
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  Article.findById(id, (err, article) => {
    if (err) return next(err);
    res.render('singleArticle', { article: article });
  });
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  Article.findById(id, (err, article) => {
    if (err) return next(err);
    res.render('editArticle', { article: article });
  });
});

router.post('/:id', (req, res, next) => {
  var id = req.params.id;
  Article.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/articles/');
  });
});

router.get('/:id/delete', (req, res, next) => {
  Article.findByIdAndDelete(req.params.id, (err, deleteUser) => {
    if (err) return next(err);
    res.redirect('/articles/');
  });
});
module.exports = router;
