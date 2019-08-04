import React from 'react'
import PropTypes from 'prop-types'

// MODAL
import Modal from 'react-modal';
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

export default class Reward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      reward: {},
    };
    
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      reward: this.props.data,
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

  render() {
    return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        this.props.onSubmit(this.state.reward);
      }}>
        <div>
          <label>Reward Name : </label>
          <input value={this.state.reward.name} onChange={node => this.setState({reward: { ...this.state.reward, name: node.target.value }})} />
        </div>
        <div style={{marginTop: 10}}>
          <button onClick={e => {
            e.preventDefault();
            this.openModal()
          }}>
            Kuota
          </button>
        </div>
        <div style={{marginTop: 10}}>
          <button type="submit">
            Save
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
          <div>KUOTA HERE</div>
        </div>
      </Modal>
    </div>
    );
  }
}

Reward.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}