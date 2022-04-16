import {
  INPUT_CREATED,
  INPUT_DELETE,
  INPUT_INITIAL,
  INPUT_UPDATE,
  INPUT_UPDATE_TRIGGER,
} from "./type";

export function inputCreated(values) {
  return {
    type: INPUT_CREATED,
    payload: values,
  };
}

export function inputDataDelete(id) {
  return {
    type: INPUT_DELETE,
    payload: id,
  };
}

export function inputUpdateTrigger(id) {
  console.log(id);
  return {
    type: INPUT_UPDATE_TRIGGER,
    payload: id,
  };
}

export function inputUpdate(id) {
  return {
    type: INPUT_UPDATE,
    payload: id,
  };
}

export function inputInitial() {
  return {
    type: INPUT_INITIAL,
  };
}
