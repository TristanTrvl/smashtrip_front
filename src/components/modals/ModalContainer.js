import { connect } from "react-redux";
import { closeModal } from "../../actions/modal";
import BaseModal from "./BaseModal";

const mapStateToProps = (state) => ({
  isShowing: state.modalReducer.isShowing,
  modalContent: state.modalReducer.content,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseModal);
