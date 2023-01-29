export function dateFormat(dateString){
    const dateObject = new Date(dateString);
    const numberOfMonth = dateObject.getMonth();
    const dayOfMonth = dateObject.getDay();
    const year = dateObject.getFullYear();
    const monthVocabulary = ["января", "февраля",
      "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября",
      "октября", "ноября", "декабря",
    ];

    return dayOfMonth + " " + monthVocabulary[numberOfMonth] + " " + year + " г.";
  };