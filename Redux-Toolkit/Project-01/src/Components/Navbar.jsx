
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 md:px-10 px-5 bg-(--c1) '>
        <Link to='/' className='font-medium md:text-2xl text-lg me-2'>MediaSearch</Link>
        <div className='flex gap-5 items-center'>
          <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' to='/'>Search</Link>
          <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' to='/collection'>Collection</Link>
        </div>
      </div>
  )
}

export default Navbar