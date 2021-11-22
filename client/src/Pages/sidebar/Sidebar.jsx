import "./Sidebar.css"

export default function Sidebar(){
	return(
<div className="sidebar">
<div className="sidebarItem">
<span className="sidebarTitle">ABOUT ME</span>
<img
className="sidebarImage"
src="https://s3.envato.com/files/59694565/girlf_flowers_590.jpg"
/>
<p>lorem ipsum khebgkf kshbfk jbfjn bafywyhe 
khbinkmkmlklk lorem ipsum khebgkf kshbfk jbfjn 
bafywyhe khbinkmkmlklklorem ipsum khebgkf kshbfk
 jbfjn bafywyhe khbinkmkmlklklorem ipsum khebgkf 
 kshbfk jbfjn bafywyhe khbinkmkmlklk</p>
</div>
<div className="sidebarItem">
<span className="sidebarTitle">CATEGORIES</span>
<ul className="sidebarList">
	<li className="sidebarListItem">Life</li>
	<li className="sidebarListItem">music</li>
	<li className="sidebarListItem">style</li>
	<li className="sidebarListItem">sport</li>
	<li className="sidebarListItem">tech</li>
	<li className="sidebarListItem">cinema</li>


</ul>

</div>

<div className="sidebarItem">
<span className="sidebarTitle">Follow US</span>
<div className="sidebarSocial">
	<i className="barIcon fab fa-facebook"></i>
<i className="barIcon fab fa-instagram"></i>
<i className="barIcon fab fa-linkedin"></i>
<i className="barIcon fab fa-pinterest"></i>

</div>

</div>
</div>
		)
}