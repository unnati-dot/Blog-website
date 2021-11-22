import Header from "../components/Header"
import Sidebar from "./sidebar/Sidebar"
import Posts from "./posts/Posts"
import "./Home.css"
export default function Home(){
	return(
<>
<Header/>
<div className="hero">
<Posts/>
<Sidebar/>

</div>

</>

		)
}