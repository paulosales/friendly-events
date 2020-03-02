import React from 'react'
import PropTypes from 'prop-types'
import { Map as LeafMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapContainer } from './Styles'

function Map(props) {
  const { lat, lng, zoom, markerText} = props;
  const position = [lat, lng]

  return (
    <MapContainer id="map" height={props.height}>
      <LeafMap center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} >
          <Popup>
            {markerText}
          </Popup>
        </Marker>
      </LeafMap>
    </MapContainer>
  )
}

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  height: PropTypes.string,
  markerText: PropTypes.string,
  zoom: PropTypes.number
}

export default Map
