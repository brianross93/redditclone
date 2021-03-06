const Post = require('../models/post');

module.exports = (app) => {

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect('/');
    })
  });
  //do a for each here briguy
  // CREATE Comment
// app.post("/posts/:postId/comments", function(req, res) {
//     // INSTANTIATE INSTANCE OF MODEL
//     const comment = new Comment(req.body);
  
//     // SAVE INSTANCE OF Comment MODEL TO DB
//     comment
//       .save()
//       .then(comment => {
//         // REDIRECT TO THE ROOT
//         return res.redirect(`/`);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });

  app.get('/', (req, res) => {
    Post.find({}).lean()
      .then(posts => {
        res.render('posts-index', { posts });
      })
      .catch(err => {
        console.log(err.message);
      })
  })

  app.get("/posts/:id", function(req, res) {
    // LOOK UP THE POST
    Post.findById(req.params.id).lean().populate('comments').then((post) => {
        res.render('posts-show', { post })
      }).catch((err) => {
        console.log(err.message)
      })
  });
  // SUBREDDIT
  app.get("/n/:subreddit", function(req, res) {
    Post.find({ subreddit: req.params.subreddit }).lean()
      .then(posts => {
        res.render("posts-index", { posts });
      })
      .catch(err => {
        console.log(err);
      });
  });
};




