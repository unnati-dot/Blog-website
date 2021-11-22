import "./singleposts.css"
import Singlepost from "../singlepost/Singlepost"
import Sidebar from "../sidebar/Sidebar"

export default function Singleposts(){
	return(
		<div className="singlePosts">
			<Singlepost/>
			<Sidebar/>

		</div>
		)
}