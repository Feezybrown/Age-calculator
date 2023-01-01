
//1. Grab the elements from HTML.


const submitBtn = document.getElementById("submit-btn")
const ageEl = document.getElementById("age")
const months = [31,28,31,30,31,30,31,31,30,31,30,31]

//2. Get the SUBMIT BUTTON  to work and get the current date/month/year

submitBtn.addEventListener("click", function(){
    
    
    let today = new Date()

    const dateInput = document.getElementById("date-input").value
    const monthInput = document.getElementById("month-input").value
    const yearInput = document.getElementById("year-input").value

    const dateToCheck = new Date(yearInput,monthInput,dateInput)

    if (yearInput && monthInput && dateInput) {

        let birthYear,birthMonth,birthDate


        let birthDetails = {
            date:dateToCheck.getDate(),
            month:dateToCheck.getMonth() + 1,
            year:dateToCheck.getFullYear()
        }

        let currentDate = today.getDate()
        let currentMonth = today.getMonth() + 1
        let currentYear = today.getFullYear()
    

        leapChecker(currentYear)
        
        //conditional statements for inputs greater than current date

        if (
            birthDetails.year > currentYear || 
            (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
            (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)    
        ){
            ageEl.textContent = ("Not Born Yet")
            return
        }

        //calculate the AGE, MONTHS, & DAYS
        birthYear = currentYear - birthDetails.year

        if(currentMonth >= birthDetails.month) {
            birthMonth = 1 + currentMonth - birthDetails.month
        }
        else{
            birthYear--
            birthMonth = 12 + currentMonth - birthDetails.month
        }

        if(currentDate >= birthDetails.date) {
            birthDate = currentDate - birthDetails.date
        }
        else{
            birthMonth--
            let days = months[currentMonth - 2]
            birthDate = days + currentDate - birthDetails.date
            if(birthMonth < 0) {
                birthMonth = 11
                birthYear--
            }
        }
        ageEl.textContent = `Your Age is ${birthYear} years, ${birthMonth} months, and ${birthDate} days.`

        // if (birthMonth == 0 && birthDate == 0) {
        //     ageEl.textContent = ("Happy Birthday!🎂🎈🎈")
        //     return
        //   }
    }
})





// var days;
// var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// if (today.getDate() >= birthDate.getDate()) {
//   days = today.getDate() - birthDate.getDate();
// } else {
//   days = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
// }




//function for leap year
function leapChecker(year) {
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29
    }
    else {
        months[1] = 28
    }
}


// function display(bDate,bMonth,bYear) {
//     if (birthYear <= 1) {
//         ageEl.textContent = `Your Age is ${birthYear} year, ${birthMonth} months, and ${birthDate} days.`
//     } else if (birthMonth <= 1) {
//         ageEl.textContent = `Your Age is ${birthYear} years, ${birthMonth} month, and ${birthDate} days.`
//     } else if (birthDate <= 1) {
//         ageEl.textContent = `Your Age is ${birthYear} years, ${birthMonth} month, and ${birthDate} day.`
//     } else {
//         ageEl.textContent = `Your Age is ${birthYear} years, ${birthMonth} months, and ${birthDate} days.`
//     }
// }