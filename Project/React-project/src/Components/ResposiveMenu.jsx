import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ResposiveMenu = ({ openNav, setOpenNav, getlocation, location, }) => {

    const [opendropdown, setOpendropdown] = useState(false);
    const { user } = useUser()

    const toggleDropdown = () => {
        setOpendropdown(!opendropdown)
    }

    return (
        <div className={`${openNav ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col gap-15 bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
                <div className='flex gap-1 cursor-pointer text-gray-700 items-center md:hidden  top-10 left-2'>
                    <MapPin className="text-red-500" />
                    <span className='font-semibold'>{location ? <div className='-space-y-2'>
                        <p>{location.state_district}</p>
                        <p>{location.state}</p>
                    </div> : "Add Address"} </span>

                    <FaCaretDown onClick={toggleDropdown} />
                    {
                        opendropdown ? <div className='w-[200px] h-max shadow-2xl z-50 bg-white fixed top-26 left-11 border-2 p-5 border-gray-100 rounded-md'>
                            <h1 className='font-semibold mb-4 text-md flex justify-between'>Change Location <span onClick={toggleDropdown}><CgClose /></span></h1>
                            <button onClick={getlocation} className='bg-red-500 text-white text-md px-2 py-1 rounded-md cursor-pointer hover:bg-red-400'>Detect my location</button>
                        </div> : null
                    }

                </div>
            <div>
                <div className='flex  justify-start gap-3'>
                    {
                        user ? <>
                            <UserButton size={50} /> <div>
                                <h1>Hello,{user?.firstName}</h1>
                                <h1 className='text-sm text-slate-500'>Premium User</h1>
                            </div>
                        </>
                            : <div></div>
                    }
                </div>
                <nav className='mt-12'>
                    <ul className='flex flex-col gap-7 text-2xl font-semibold'>
                        <Link to={'/'} onClick={() => setOpenNav(false)} className="cursor-pointer"><li>Home</li></Link>
                        <Link to={"/product"} onClick={() => setOpenNav(false)} className="cursor-pointer"><li>Products</li></Link>
                        <Link to={"/about"} onClick={() => setOpenNav(false)} className="cursor-pointer"><li>About</li></Link>
                        <Link to={"/contact"} onClick={() => setOpenNav(false)} className="cursor-pointer"><li>Contact</li></Link>

                        <div>
                            {
                                user ? <div></div> : <>
                                    <SignedOut>
                                        <SignInButton className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer" />
                                    </SignedOut >
                                    <SignedIn>
                                        <UserButton />
                                    </SignedIn>
                                </>
                            }
                        </div>
                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default ResposiveMenu
