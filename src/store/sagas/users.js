import { call, put, select } from "redux-saga/effects";

import { toast } from "react-toastify";

import api from "../../services/api";

import { Creators as UserActions } from "../ducks/users";

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user.name}`);

    const isDuplicated = yield select(state =>
      state.users.data.find(user => user.id === data.id)
    );

    if (isDuplicated) {
      yield put(UserActions.addUserFailure("Usuário Duplicado!"));
      toast.warn("Usuário Duplicado!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      const userData = {
        id: data.id,
        name: data.login,
        avatar: data.avatar_url,
        latitude: action.payload.user.latitude,
        longitude: action.payload.user.longitude
      };

      yield put(UserActions.addUserSuccess(userData));
      toast.success("Usuário Adicionado com Sucesso", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  } catch (err) {
    yield put(UserActions.addUserFailure("Erro ao adicionar Usuário!"));
    toast.error("Erro ao adicionar Usuário!", {
      position: toast.POSITION.TOP_RIGHT
    });
  }
}
