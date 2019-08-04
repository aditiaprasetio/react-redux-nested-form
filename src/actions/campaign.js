let nextCampaignId = 1
export const addCampaign = () => ({
  type: 'ADD_CAMPAIGN',
  data: {
    id: nextCampaignId++,
    title: 'Example of Title',
    slug: 'example-slug',
    rewards: [],
  },
})

export const saveCampaign = (data) => ({
  type: 'SAVE_CAMPAIGN',
  data,
})
