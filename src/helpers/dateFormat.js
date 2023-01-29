import {monthVocabulary} from "./monthVocabulary";

export function dateFormat(dateString){
    const dateObject = new Date(dateString);
    const numberOfMonth = dateObject.getMonth();
    const dayOfMonth = dateObject.getDay();
    const year = dateObject.getFullYear();
    return dayOfMonth + " " + monthVocabulary[numberOfMonth] + " " + year + " г.";
  };