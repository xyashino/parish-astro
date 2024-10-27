type NavigationLink = {
  title: string
  path: string
  description?: string
}

type NavigationGroup = {
  title: string
  links: NavigationLink[]
}
type ContactEntry = {
  label: string
  value: string
  description: string
}