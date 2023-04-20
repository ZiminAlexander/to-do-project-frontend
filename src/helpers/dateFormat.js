import { monthVocabulary } from "./monthVocabulary";

export const dateFormat = (dateString) => {
  const dateObject = new Date(dateString);
  const numberOfMonth = dateObject.getMonth();
  const dayOfMonth = dateObject.getDate();
  const year = dateObject.getFullYear();
  return dayOfMonth + " " + monthVocabulary[numberOfMonth] + " " + year + " г.";
}
