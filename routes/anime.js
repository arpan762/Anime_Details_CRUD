const express = require('express');
const router = express.Router();
const Post = require('../models/Animemodel');

router.get('/', async(req, res) => {
    try{
        res.render("postorupdate", {
            viewTitle: "Insert Anime Details"
        });
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.post('/', async(req, res) => {
    try{
      const post = await new Post({
        name: req.body.name,
        maincharacter: req.body.maincharacter,
        noofepisodes: req.body.noofepisodes,
        releasedate: req.body.releasedate,
        goodorbad: req.body.goodorbad
      });
      res.render("postorupdate", {
        viewTitle: "Insert Anime Details",
        anime: req.body
    });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})
router.get('/list', (req, res) => {
        Post.find(res.render("list", list));
});

router.get('/:animeId', async(req, res) => {
    try{
      await Post.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("postorupdate", {
                viewTitle: "Update Anime details",
                anime: doc
            });
        }
    });
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.delete('/:animeId', async(req, res) => {
    try{
      const {id} = req.params.postId;
      await Post.remove(id, (err, doc) => {
        if (!err) {
            res.redirect('list');
        }
        });
      //res.status(200).json(post);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.put('/:postId', async(req, res) => {
    try{
      const {id} = req.params.postId;
      const post = await Post.findByIdAndUpdate(id, req.body);
      if(!post){
        return res.status(404).json({message: `cannot find any product with ID ${id}`});
      }
      const updatepost = await Post.findById(id)
      res.status(200).json(updatepost);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

module.exports = router;