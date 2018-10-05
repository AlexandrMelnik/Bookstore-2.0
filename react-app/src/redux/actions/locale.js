import { SET_LOCALE } from '../actions/types';
import i18next from 'i18next';

export function changeLanguage(langFunction) {
  return dispatch => {
    dispatch({
      type: SET_LOCALE,
      payload: {
        language: langFunction
      }
    });
  }
}

export const setLocale = lang => dispatch => {
  localStorage.lang = lang;
  i18next.init({
    lng: lang,
    resources: require(`../../translate/${lang}.json`)
  });
  dispatch(changeLanguage(i18next));
}
