import "./spinner.css";
export function addSpinner(switcher, object){
    try{  
        if (switcher === "on"){
            object.classList.add("loading-spinner");

        } else if (switcher === "off"){
            object.classList.remove("loading-spinner");
        } else {
            throw new Error (
                "Неправильный аргумент в функции addSpinner "
            );
        }
    } catch (e) {
        console.error (e);
    }

}