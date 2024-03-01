import { User } from "@clerk/nextjs/server"
import UserAccountNav from "./UserAccountNav"

interface NavbarProps{
    user: User | null
}
function Navbar({user}: NavbarProps) {
    
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        false ? (false ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between p-4">
        {/* <MainNav items={items}>{children}</MainNav> */}

        <div className="flex items-center space-x-3">
          <UserAccountNav user={null} />
        </div>
      </div>
    </header>
  )
}

export default Navbar