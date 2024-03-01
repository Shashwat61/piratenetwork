import { currentUser } from "@clerk/nextjs"
import Navbar from "../components/layout/Navbar"

interface MarketingLayoutProps{
    children: React.ReactNode
}

async function MarketingLayout({children}: MarketingLayoutProps) {
  const user = await currentUser()
  console.log(user, '-----user-----')
  return (
    <div>
      <Navbar user={user}/>
      {children}
      </div>
  )
}

export default MarketingLayout