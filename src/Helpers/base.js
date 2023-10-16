function checkNameInArray(array, attribute, isChecked) {
  if (isChecked==false)
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      if (element.surname == attribute.surname) {
        array.splice(i, 1);
        return false;
      }
    }
  return true;
}
function checkNameInArrayIdentity(array, attribute, isChecked) {
  if (array.length == 0) return true;
  else {
    console.log("condition :" + isChecked);
    if (isChecked == false) {
      for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.surname == attribute.surname) {
          array.splice(i, 1);
          return false;
        }
      }
    } else {
      //element does not exist push it
      console.log("element does not exist");
      return true;
    }
  }
}
export { checkNameInArray, checkNameInArrayIdentity };