import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as gridActions from '../actions/grid.actions';

// Components
import Grid from '../components/Grid';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Component (containers)
import Controllers from './Controllers';
import Shapes from './Shapes';

class Home extends React.PureComponent {

  componentDidMount() {
    this.props.actions.grid.init();
  }

  render() {
    const { grid } = this.props.data;
    const { toggleCell } = this.props.actions.grid;

    return (
      <div>
        <Header />
        <div className={'gf-panel-container'} >
          <div>
            <p>Game&apos;s Controllers</p>
            <Controllers />
          </div>
          <div>
            <p>Game&apos;s Shapes</p>
            <Shapes />
          </div>
        </div>
        <div className={'gf-grid-container'} >
          <Grid rows={grid} toggleCell={toggleCell} />
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  data: React.PropTypes.shape({
    grid: React.PropTypes.array,
  }).isRequired,
  actions: React.PropTypes.shape({
    grid: React.PropTypes.object,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      grid: bindActionCreators(gridActions, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return { data: { grid: state.grid } };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
