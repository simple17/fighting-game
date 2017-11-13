import * as types from './types';
import {
  attackOptions,
  deffenseOptions
} from '../fightOptions';

export function selectAttackOption(option) {
  return {
    type: types.SELECT_ATTACK_OPTION,
    option,
  };
}

export function selectDeffenseOption(option) {
  return {
    type: types.SELECT_DEFFENSE_OPTION,
    option,
  };
}

export function loose() {
  return {
    type: types.USER_LOOSE,
  };
}

export function win() {
  return {
    type: types.OPPONENT_LOOSE,
  };
}

export function hitUser(damage) {
  return (dispatch, getState) => {
    const { userHealth } = getState().fight;
    const healthAfterDamage = userHealth - damage;

    if (healthAfterDamage <= 0) {
      //u r dead =/
      dispatch(loose());
    }

    dispatch({
      type: types.SET_USER_HEALTH,
      health: healthAfterDamage,
    });
  };
}

export function hitOpponent(damage) {
  return (dispatch, getState) => {
    const { opponentHealth } = getState().fight;
    const healthAfterDamage = opponentHealth - damage;

    if (healthAfterDamage <= 0) {
      dispatch(win());
    }

    dispatch({
      type: types.SET_OPPONENT_HEALTH,
      health: healthAfterDamage,
    });
  };
}

export function resetFight() {
  return {
    type: types.RESET_FIGHT,
  };
}

export function fight() {
  return (dispatch, getState) => {
    const {
      selectedDeffenseOption,
      selectedAttackOption,
    } = getState().fight;

    const opponentAttacks = 'head';
    const opponentDeffenses = 'body';
    const damageToUser = opponentAttacks === selectedDeffenseOption ? 1 : 2;
    const damageToOpponent = selectedAttackOption === opponentDeffenses ? 1 : 2;

    dispatch({
      type: types.INSERT_FIGHT_MESSAGE,
      message: `Вы атакуете оппонента в ${selectedAttackOption} и наносите ${damageToOpponent} единиц урона.`,
    });
    dispatch(hitOpponent(damageToOpponent));

    dispatch({
      type: types.INSERT_FIGHT_MESSAGE,
      message: `Оппонент атакует вас в ${opponentAttacks} и наносит ${damageToUser} единиц урона.`,
    });
    dispatch(hitUser(damageToUser));
  };
}

export function crearFightMessages() {
  return {
    type: types.CLEAR_FIGHT_MESSAGES,
  };
}
