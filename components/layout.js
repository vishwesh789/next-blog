import Footer from "./footer"
import Navbar from "./navbar"

const Layout = (props) => {
  return (
    <div>
      <Navbar data={props.data}/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout