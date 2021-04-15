import React, { Component } from 'react';
import './AssetItem.css'

class AssetItem extends Component {
  render() {
    const { asset } = this.props;
    return (
      <li className="asset-item-container">
        <img src={ asset.image } alt={ `imagem ${asset.name}` } />
        <div>
          <h3>{ asset.name }</h3>
          <p>Modelo: { asset.model }</p>
          <p>Sensor: { asset.sensors[0] }</p>
          <p>Status: { asset.status }</p>
        </div>
      </li>
    )
  }
}

export default AssetItem;
