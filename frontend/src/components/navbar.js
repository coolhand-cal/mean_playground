
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <header>
            <div className="container">
            <Link to="/">
                <h1>All Clients</h1>
            </Link>
            <Link to="/RL">
            <h2>RL Clients</h2>
            </Link>
            <Link to="/active">
            <h3>active clients</h3>
            </Link>
            <Link to="/inactive">
            <h3>inactive clients</h3>
            </Link>
            </div>
         </header>
    )
}

export default NavBar