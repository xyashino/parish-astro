import client from '../../tina/__generated__/client'

export const getContact = async () => {
  const contactResponse = await client.queries.contactConnection()
  const contact = contactResponse.data.contactConnection.edges?.at(0)?.node
  return {
    title: contact?.title,
    description: contact?.description,
    googleMapsUrl: contact?.googleMapsUrl,
    groups:
      contact?.contactItems?.map(item => ({
        label: item?.label || '',
        value: item?.value || '',
        description: item?.description || ''
      })) || []
  }
}
