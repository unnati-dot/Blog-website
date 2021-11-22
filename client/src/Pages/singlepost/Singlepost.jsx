import "./singlepost.css";

export default function Singlepost(){
	return(
		<div className="singlepost">
           <div className="singlePostWrapper">
               <img
               		src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUdVFx3l8qghm0CUbiG4bpWKljzuflFn8zQ&usqp=CAU"
               		alt=""
               		className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					Lorem Ipsum dolor sit amet.
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>

				<div className="singlePostInfo">
					<span className="singlePostAuthor">Author: <b>Unnati</b></span>
					<span className="singlePostDate">1 hour ago</span>
					
				</div>
				<p className="singlePostDesc">Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.
					Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.
					LLorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.
					Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.orem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.
					Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.L
					orem Ipsum dolor sit amet.
					orem Ipsum dolor sit amet.
					orem Ipsum dolor sit amet.
					orem Ipsum dolor sit amet.
					orem Ipsum dolor sit amet.
					Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.
					Lorem Ipsum dolor sit amet.
					Lorem Ipsum dolor sit amet.</p>
           </div>
		</div>
		)
}