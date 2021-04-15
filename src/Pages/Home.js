import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetItem from '../Components/AssetItem/AssetItem';
import Loading from '../Components/Loading/Loading';
import { assetsThunk } from '../Redux/action';

class Home extends Component {
   componentDidMount() {
    this.setAssets();
  }

  async setAssets() {
    const { assetsAPI } = this.props;
    assetsAPI();
  }

  render() {
    let { assets, isFetching } = this.props;
    if (isFetching) return <Loading />;
    return (
      <div className="App">
        <h1>Desafio Front-end</h1>
        <ul>
          { assets.map((asset, i) => {
            return <AssetItem asset={ asset } key={ i }/>;
          }) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({assetsReducer}) => ({
  isFetching: assetsReducer.isFetching,
  assets: assetsReducer.assets,
})

const mapDispatchToProps = (dispatch) => ({
  assetsAPI: () => dispatch(assetsThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
