import React, { Component, Fragment } from "react";
import MapGL, { Marker } from "react-map-gl";
import PropTypes from "prop-types";

import { MapContainer } from "./styles";

import "mapbox-gl/dist/mapbox-gl.css";

import ContainerUsers from "../../components/ContainerUsers";
import InputUser from "../../components/InputUser";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users";

class Main extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          avatar: PropTypes.string,
          latitude: PropTypes.number,
          longitude: PropTypes.number
        })
      )
    }).isRequired
  };
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -30.016266269041793,
      longitude: -50.1459531223488,
      zoom: 14
    },
    add: false,
    latitude: null,
    longitude: null,
    userInput: ""
  };

  handleMapClick = e => {
    this.setState({ add: true });
    const [lng, lat] = e.lngLat;

    this.setState({ latitude: lat, longitude: lng });
  };

  handleCancel = () => {
    this.setState({ add: false });
  };

  handleAddUser = e => {
    e.preventDefault();

    this.props.addUserRequest({
      name: this.state.userInput,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    });

    this.setState({ add: false, userInput: "" });
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <ContainerUsers
          users={this.props.users.data}
          remove={this.props.removeUser}
        />
        {this.state.add && (
          <InputUser
            input={this.handleInput}
            value={this.state.userInput}
            add={this.handleAddUser}
            cancel={this.handleCancel}
          />
        )}
        <MapContainer>
          <MapGL
            {...this.state.viewport}
            mapStyle="mapbox://styles/mapbox/streets-v10"
            mapboxApiAccessToken={
              "pk.eyJ1IjoibHVjYXNzcDEyIiwiYSI6ImNqemVyeHJjMDA1bjMzaHFmN3M3M2s5c2MifQ.lkPmcRke1y9zcbvPsZWi5A"
            }
            onViewportChange={viewport => this.setState({ viewport })}
            onClick={this.handleMapClick}
          >
            {this.props.users.data.map(user => (
              <Marker
                key={user.id}
                latitude={user.latitude}
                longitude={user.longitude}
              >
                <img
                  style={{
                    borderRadius: 100,
                    width: 48,
                    height: 48
                  }}
                  alt="avatar"
                  src={user.avatar}
                />
              </Marker>
            ))}
          </MapGL>
        </MapContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
