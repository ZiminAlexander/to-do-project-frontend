export function dateFormat(date){
    const dateVocabulary = {
      Jun: "января",
      Feb: "февраля",
      Mar: "марта",
      Apr: "апреля",
      May: "мая",
      Jun: "июня",
      Jul: "июля",
      Aug: "августа",
      Sep: "сентября",
      Oct: "октября",
      Nov: "ноября",
      Dec: "декабря",
    };
    const splitDate = date.split(' ');
    return splitDate[2] + " " + dateVocabulary[splitDate[1]] + " " + splitDate[3];
  };