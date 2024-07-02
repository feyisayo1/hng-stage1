
const currentDay = document.querySelector('[currentDayOfTheWeek]');
const currentTime = document.querySelector('[currentUTCTime]');

const date = new Date()
const getCurrentDayOfTheWeek = () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const nowIndex = date.getDay();
  const curr = daysOfTheWeek[nowIndex];
  currentDay.innerText = `Current day of the week : ${curr}`;
};
getCurrentDayOfTheWeek();


const generateUTCTime = () => {
  const today = new Date()
  let hour = today.getUTCHours();
  let minute = today.getUTCMinutes();
  let second = today.getUTCSeconds();

  let ampm;
  if (hour >= 12){
      ampm = " PM"
    }else{
      ampm = " AM"
  }

  hour = (hour > 12)? hour - 12 : hour;
  if (hour === 0) {
    hour = 12;
  }
  currentTime.innerText = `Current Time in UTC : ${hour} : ${minute} : ${second}${ampm}`;
}
generateUTCTime()

setInterval(generateUTCTime, 1000)

