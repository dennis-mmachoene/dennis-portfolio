import Link from 'next/link'
import { Button } from './ui/button'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto'>
         <Link href="/">
         <h1 className="text-4xl font-semibold"> 
            Dennis <span className='text-accent'>.</span>
         </h1>
         </Link>
         <div className="hidden xl:flex">
             <Navbar />
             <Link href='/contact'>
             <Button>Hire Me</Button>
             </Link>
         </div>
        
      </div>
    </header>
  )
}

export default Header
