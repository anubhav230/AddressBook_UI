const CHECK_NAME = /^[A-Za-z0-9 ]{3,20}$/;
const CHECK_MOBILE_NUMBER = /^[0-9]{1,3}[ ][0-9]{10}$/;
const ADDRESS_PATTERN = "^[A-Z]{1}[a-z]{5,}$";
const ZIP_PATTERN = "^[A-Z]{1}[a-z]{5,}$";
function check(myform){
  if (!CHECK_NAME.test(myform.firstName.value))
  {
    alert("invalid value");
    return false;
  }
  if (!CHECK_NAME.test(myform.lastName.value))
  {
    alert("invalid value");
    return false;
  }
  if (!CHECK_MOBILE_NUMBER.test(myform.mobileNumber.value))
  {
    alert("invalid value");
    return false;
  }
  if (!ADDRESS_PATTERN.test(myform.state.value))
  {
    alert("invalid value");
    return false;
  }
  if (!ADDRESS_PATTERN.test(myform.city.value))
  {
    alert("invalid value");
    return false;
  }
  if (!ZIP_PATTERN.test(myform.zip.value))
  {
    alert("invalid value");
    return false;
  }
  
}