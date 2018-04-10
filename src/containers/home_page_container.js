import { connect } from 'react-redux';
import HomePage from 'srcRoot/pages/home_page';

export function mapStateToProps({  }) {
  return {
  };
}

export function mapDispatchToProps(dispatch) {
  return {
  };
}

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
