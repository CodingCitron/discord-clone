import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs/app-beta'

export default function Home() {
  return (
    <div>
      <UserButton 
        afterSignOutUrl='/'
      />
    </div>
  )
}
