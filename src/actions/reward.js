let nextRewardId = 1
export const addReward = (campaignId) => ({
  type: 'ADD_REWARD',
  campaignId,
  data: {
    id: nextRewardId++,
    name: 'Example of Reward',
    kuota: [],
  },
})

export const saveReward = (campaignId, data) => ({
  type: 'SAVE_REWARD',
  campaignId,
  data,
})