import { Link } from "react-router-dom"

const Navbar = ()=>{
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{margin:"auto"}}>
                    <li className="nav-item">
                    <Link className="nav-link active" to='/'> Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to='/Posts'> Posts</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to='/About'> About</Link>
                    </li>

                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar