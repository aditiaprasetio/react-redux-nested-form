import React from 'react'
import { connect } from 'react-redux'
import { addCampaign } from '../actions/campaign';
import { addReward, saveReward } from '../actions/reward';
import Campaign from '../components/Campaign';

class AddCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModalReward: false,
    };
    this.submitCampaign = this.submitCampaign.bind(this);
  }

  submitCampaign(data) {
    console.info(data);
  }

  render() {
    return (
      <div>
        <div>
          { this.props.campaigns.map((item, index) => {
            return (
              <Campaign key={index} data={item} onSubmit={this.submitCampaign} onAddReward={this.props.addReward} onSaveReward={(campaignId, data) => this.props.saveReward(campaignId, data)} />
            );
          })}
          <hr/>
          <button onClick={e => this.props.addCampaign()}>
            + ADD CAMPAIGN
          </button>
        </div>
        <hr/>
        {JSON.stringify(this.props.campaigns)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns,
})

const mapDispatchToProps = dispatch => ({
  addCampaign: () => dispatch(addCampaign()),
  addReward: (campaignId) => dispatch(addReward(campaignId)),
  saveReward: (campaignId, data) => dispatch(saveReward(campaignId, data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCampaign)