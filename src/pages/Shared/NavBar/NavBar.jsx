import { Link } from "react-router-dom";

const NavBar = () => {
    const user={
        displayName:'masum'
    }
    const navItems =
    <>
        <li><Link to='/'>Home</Link></li>
        
        <li><Link to='/instructors-page'>About</Link></li>
        <li><Link to='/classes-page'>Contact Us</Link></li>
        {/* {
            user?
            <button className="btn btn-primary">LogOut</button>:
            <li><Link to='/login'>Login</Link></li>
        } */}
    </>
    const handleSignOut = () => {
        // logOut()
        // .then(()=>{
        //     navigate('/');
        // })
    }
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'>
                    <h2>A to Z Job</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <img title={user?.displayName} className="w-10 h-10 rounded-large" src={user.photoURL} alt="" />                    <button className="btn btn-black ml-3" onClick={handleSignOut}>Sign Out</button>

                    </> : <Link className="btn btn-black" to='/login'>Sign In</Link>
                }

            </div>
        </div>
    );
};

export default NavBar;