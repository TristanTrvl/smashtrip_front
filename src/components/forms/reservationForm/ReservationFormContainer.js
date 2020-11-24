import { connect } from "react-redux";
import { createReservation } from "../../../actions/reservation";
import ReservationForm from "./ReservationForm";

const mapStateToProps = (state) => ({
  //error: state.userReducer.errors,
  //advertId: state.advertReducer.data.currentAdvert.id,
});

const mapDispatchToProps = (dispatch) => ({
  create: (reservation) => dispatch(createReservation(reservation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
