import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt } from 'react-icons/bi'

import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return (

        <nav className="navbar">
            <Link to='/'> <BiCameraMovie className='navbar__camera' /> <h2 className='navbar__title'>Movies Library</h2> </Link>

            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='Busque um filme' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type='submit'> <BiSearchAlt /></button>

            </form>


        </nav>);
}

export default Navbar;