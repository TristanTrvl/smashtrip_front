import { connect } from "react-redux";
import { openModal } from "../../actions/modal";
import NavBar from "./NavBar";

const mapStateToProps = (state) => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (content) => dispatch(openModal(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
