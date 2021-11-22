const router = require("express").Router();
const User =  require("../models/User");
const Post =  require("../models/Post");

//create post

router.post("/",async(req,res)=>{
  const newPost = new Post(req.body);
  try{
  	const savedPost = await newPost.save();
  	res.status(200).json(savedPost);
  }catch(err){
  	res.status(500).json(err);
  }  
	

})

//update posts

router.put("/:id", async(req,res)=>{
	try{
		const post = await Post.findById(req.params.id);
		if(post.username === req.body.username){
			try{
				const updatedPost = await Post.findByIdAndUpdate(
					req.params.id,
					{
						$set : req.body,
					},
					{new:true}
					);
				res.status(200).json(updatedPost);
			}catch(err){
		        res.status(500).json(err);
		}
		}else{
			res.status(401).json("you canupdate only your post")
		}
	} catch(err){
		res.status(500).json(err);
	}
})

//delete posts
router.delete("/:id", async(req,res)=>{
	if(req.body.username === post.username){
		try{
			const post = await Post.findById(req.params.id);
			try{
					await post.delete();				
					res.status(200).json("updatedPost")
				}catch(err){
					res.status(500).json(err);
				}
			}catch(err){
			res.status(401).json("you can delete only using your account")

			}
	}else{
			res.status(401).json("you can delete only your account")

	}
})

//Get posts

router.get("/:id",async(req,res)=>{
	try{
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);

	}catch(err){
		res.status(500).json(err);
	}
})


//GET ALL POSTS
//localhost:5000/api/posts?user=jane(req eg)
router.get("/",async(req,res)=>{
	const username = req.query.user;
	const catName = req.query.cat;
	try{
		let posts;
		if(username){
			posts = await Post.find({username})
		}else if(catName){
			posts = await Post.find({
				categories:{
					$in:[catName]
				}
			})
		}else{
			posts = await Post.find();
		}
	}catch(err){
		res.status(500).json(err);
	}
})


module.exports = router;








