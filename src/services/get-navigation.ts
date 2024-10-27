import client from '../../tina/__generated__/client'

export const getNavigation = async (): Promise<
  NavigationGroup[] | undefined
> => {
  try {
    const navigationResponse = await client.queries.navigationConnection()
    const navigation = navigationResponse.data.navigationConnection.edges
      ?.at(0)
      ?.node?.groups?.filter(
        group => group?.links?.length || -1 > 0 || group?.title === ''
      )
      ?.map(group => {
        return {
          title: group?.title,
          links:
            group?.links?.map(link => ({
              title: link?.title,
              path: link?.path,
              description: link?.description
            })) || []
        }
      })
    return navigation as NavigationGroup[]
  } catch (error) {
    console.error('Error fetching navigation:', error)
    return []
  }
}
