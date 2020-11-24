import { connect } from "react-redux";
import { openModal, closeModal } from "../../../actions/modal";
import { authentication } from "../../../actions/user";
import LoginForm from "./LoginForm";

const mapStateToProps = (state) => ({
  error: state.userReducer.errors,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (content) => dispatch(openModal(content)),
  closeModal: () => dispatch(closeModal()),
  authentication: (user) => dispatch(authentication(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
