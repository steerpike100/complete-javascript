const day = "friday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    break;
    console.log("Write code examples");
  case "friday":
    console.log("Record videos");
    break;
  default:
    console.log("Not a valid day");
}
