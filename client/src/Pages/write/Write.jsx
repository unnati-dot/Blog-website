import "./write.css"

export default function Write(){
	return(
		<div className="write">
		<img 
		className="writeImg"
		src="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
		alt=""
		/>
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
					<i className="writeIcon fas fa-plus"></i>
					</label>
					<input 
					type="file" 
					id="fileInput" 
					style={{display:"none"}}
					/>
					<input 
					type="text" 
					placeholder="Title" 
					className="writeInput" 
					autoFocus={true}
					/>

				</div>
				<div className="writeFormGroup">
				   <textarea
				    placeholder="Tell your thoughts here.."
				    type="text"
				    className="writeInput writeText"
				   ></textarea>

				</div>
				<button className="writeSubmit">Publish</button>
			</form>
		</div>



		)
}