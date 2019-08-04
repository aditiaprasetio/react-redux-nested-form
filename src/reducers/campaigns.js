const campaigns = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAMPAIGN':
      return [
        ...state,
        {
          ...action.data,
        }
      ]
    case 'SAVE_CAMPAIGN':
      return state.map(campaign => {
        if (campaign.id === action.data.id) {
          campaign = {
            ...campaign,
            ...action.data,
          }
        }
        return campaign;
      })
    case 'ADD_REWARD': 
      return state.map(campaign => {
        if (campaign.id === action.campaignId) {
          campaign.rewards.push({...action.data});
        }
        return campaign;
      })
    case 'SAVE_REWARD':
      return state.map(campaign => {
        if (campaign.id === action.campaignId) {
          campaign.rewards = campaign.rewards.map(reward => {
            if (reward.id === action.data.id) {
              reward = {
                ...reward,
                ...action.data,
              }
            }
            return reward;
          })
        }
        return campaign;
      })
    default:
      return state
  }
}

export default campaigns
