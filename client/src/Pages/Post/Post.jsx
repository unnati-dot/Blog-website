import "./Post.css"

export default function Post(){
	return(
<div className="post">
	<img
		className="postImg"
		src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZyUyMHdyaXRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
		alt=""
	/>
	<div className="postInfo">
		<div className="postCats">
		   <span className="postCat">Music</span>
		   <span className="postCat">Life</span>
		</div>
		<span className="postTitle">Lorem Ipsum</span>

		<hr/>
		<span className="postDate">1 hour ago</span>
		<span className="postDesc">Lorem ipsum djnfjd jndsk jsndo nd cmmcnlskokskncmLorem ipsum djnfjd jndsk jsndo nd cmmcnlskokskncmLorem ipsum djnfjd jndsk jsndo nd cmmcnlskokskncmLorem ipsum djnfjd jndsk jsndo nd cmmcnlskokskncm</span>
	</div>

</div>

		)
}