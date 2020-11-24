import { connect } from "react-redux";
import { openModal, closeModal } from "../../../actions/modal";
import { createUser } from "../../../actions/user";
import RegisterForm from "./RegisterForm";

const mapStateToProps = (state) => ({
  error: state.userReducer.errors,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (content) => dispatch(openModal(content)),
  closeModal: () => dispatch(closeModal()),
  createUser: (user) => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
