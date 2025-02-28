'use client'
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"


const PageTransition = ({children}) => {
    const pathname = usePathname()
  return 
  <AnimatePresence>

    <div className="" key={pathname}>
        
    </div>
    {children}
  </AnimatePresence>
}

export default PageTransition