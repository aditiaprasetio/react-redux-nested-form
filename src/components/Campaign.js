import React from 'react'
import PropTypes from 'prop-types'

// MODAL
import Modal from 'react-modal';
import Reward from './Reward';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
// END OF MODAL

export default class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      campaign: {},
    };
    
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.saveReward = this.saveReward.bind(this);
  }

  componentDidMount() {
    this.setState({
      campaign: this.props.data,
    })
  }
  
  openModal() {
    this.setState({isOpenModal: true});
  }
  afterOpenModal() {

  }
  closeModal() {
    this.setState({isOpenModal: false});
  }
  saveReward(data) {
    this.props.onSaveReward(this.state.campaign.id, data);
  }

  render() {
    return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
      }}>
        <div>
          <label>Title : </label>
          <input value={this.state.campaign.title} onChange={node => this.setState({campaign: {...this.state.campaign, title: node.target.value}} )} />
        </div>
        <div>
          <label>Slug : </label>
          <input value={this.state.campaign.slug} onChange={node => this.setState({campaign: {...this.state.campaign, slug: node.target.value}} )} />
        </div>
        <div style={{marginTop: 10}}>
          <button onClick={e => {
            e.preventDefault();
            this.openModal()
          }}>
            Add Reward
          </button>
        </div>
        <div style={{marginTop: 10}}>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>

      <Modal
        isOpen={this.state.isOpenModal}
        onAfterOpen={() => this.afterOpenModal()}
        onRequestClose={() =>this.closeModal()}
        style={customStyles}
        contentLabel="Example Modal"
      > 
        <div>
          {this.props.data.rewards.map((item, index) => {
            return (
              <Reward key={index} data={item} onSubmit={this.saveReward} />
            )
          })}
          <hr/>
          <button onClick={e => {
            e.preventDefault();
            this.props.onAddReward(this.state.campaign.id)
          }}>
            Add Reward
          </button>
        </div>
      </Modal>
    </div>
    );
  }
}

Campaign.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}