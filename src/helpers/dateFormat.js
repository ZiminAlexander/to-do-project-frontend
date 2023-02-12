import {monthVocabulary} from "./monthVocabulary";

export function dateFormat(dateString){
    const dateObject = new Date(dateString);
    const numberOfMonth = dateObject.getMonth();
    const dayOfMonth = dateObject.getDate();
    const year = dateObject.getFullYear();
    return dayOfMonth + " " + monthVocabulary[numberOfMonth] + " " + year + " г.";
  };