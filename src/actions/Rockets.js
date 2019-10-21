import API_Service from "../services/LaunchService";

export const ACTIONS = {
  REQUEST_ROCKET: "REQUEST_ROCKET",
  RECEIVE_ROCKET: "RECEIVE_ROCKET"
};

export const requestRocket = () => ({
  type: ACTIONS.REQUEST_ROCKET
});

const receiveRocket = response => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocket: response.data
  }
});

export const fetchRocket = (dispatch, rocket_id) => {
  dispatch(requestRocket());
  return API_Service.rocketService
    .get(rocket_id)
    .then(response => dispatch(receiveRocket(response)));
};

const shouldFetchRocketData = (rocketCollection, rocket_id) => {
  return !rocketCollection.rockets[rocket_id];
};

export const fetchRocketIfNeeded = ({
  dispatch,
  rocketCollection,
  rocket_id
}) =>
  shouldFetchRocketData(rocketCollection, rocket_id) &&
  fetchRocket(dispatch, rocket_id);
