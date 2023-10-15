let fullName = ["Shiva", "Dasari"];
let firstName = fullName[0];
let lastName = fullName[1];

let { fName, lName } = fullName;
let stateInfo = ["Telangana"];

let newNameArray = [...fullName, "Comrade"];
let newNameArrayDate = [...fullName, ...stateInfo];

let userInfo = {
  firstName: "Shiva",
  lastName: "Dasari",
};

let modifiedUserInfo = {
  age: 32,
  ...userInfo,
};
