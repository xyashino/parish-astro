import {
  NavigationMenu,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { NavigationGroupItem } from './navigation-group'

type NavigationProps = {
  data: NavigationGroup[]
}

export const DesktopNavigation = ({data}: NavigationProps) => {
  return (
    <NavigationMenu className="w-full max-w-3xl">
      <NavigationMenuList>
        {data.map(group => (
          <NavigationGroupItem key={group.title} group={group} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
