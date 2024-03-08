


// <!-- ************************* theme switch Start *********************** -->

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    // document.getElementById("ticklight").classList.toggle("hidden")
    // document.getElementById("tickdarkk").classList.toggle("hidden")    
    document.getElementById("sunsvg").classList.add("hidden")
    document.getElementById("moonsvg").classList.remove("hidden")
} else {
    document.documentElement.classList.remove('dark')    
    // document.getElementById("ticklight").classList.toggle("hidden")
    // document.getElementById("tickdarkk").classList.toggle("hidden")    
    document.getElementById("sunsvg").classList.remove("hidden")
    document.getElementById("moonsvg").classList.add("hidden")
}


function darktheme() {
    document.getElementById("sunsvg").classList.add("hidden")
    document.getElementById("moonsvg").classList.remove("hidden")
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
}

function lighttheme() {
    document.getElementById("sunsvg").classList.remove("hidden")
    document.getElementById("moonsvg").classList.add("hidden")
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
}



// dropdown toggle
let listboxT = document.getElementById("listboxT");

// const linksT = document.querySelectorAll('.nav-linkT');

function themedropdown() {
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox7.classList.add("hidden");
    listbox9.classList.add("hidden");
    listbox5.classList.add("hidden");
    listboxT.classList.toggle("hidden");
}

// if (linksT.length) {
//     linksT.forEach((linkT) => {
//         linkT.addEventListener('click', (e) => {
//             linksT.forEach((linkT) => {
//                 linkT.nextElementSibling.classList.add("hidden");
//                 listboxT.classList.add("hidden");
//             });
//             e.preventDefault();
//             linkT.nextElementSibling.classList.remove("hidden")
//         });
//     });
// }

// <!-- ************************* theme switch end *********************** -->

// <!-- ************************* Payment Method Component Start *********************** -->


let cardBor = document.getElementById("cardBor")
let paypalBor = document.getElementById("paypalBor")
let appleBor = document.getElementById("appleBor")

function cardBorder() {
    paypalBor.classList.remove("border-slate-950");
    paypalBor.classList.add("border-muted");
    appleBor.classList.remove("border-slate-950");
    appleBor.classList.add("border-muted");
    cardBor.classList.remove("border-muted");
    cardBor.classList.add("border-slate-950");
}


function paypalBorder() {
    cardBor.classList.remove("border-slate-950");
    cardBor.classList.add("border-muted");
    appleBor.classList.remove("border-slate-950");
    appleBor.classList.add("border-muted");
    paypalBor.classList.add("border-slate-950");
    paypalBor.classList.remove("border-muted");
}

function appleBorder() {
    cardBor.classList.remove("border-slate-950");
    cardBor.classList.add("border-muted");
    paypalBor.classList.remove("border-slate-950");
    paypalBor.classList.add("border-muted");
    appleBor.classList.add("border-slate-950");
    appleBor.classList.remove("border-muted");
}



// dropdown toggle
let listbox5 = document.getElementById("listbox5");

let selectedOption5 = document.getElementById("selectedOption5");

const links5 = document.querySelectorAll('.nav-link5');

function dropdowntoggle5() {
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox7.classList.add("hidden");
    listbox9.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox5.classList.toggle("hidden");
}

if (links5.length) {
    links5.forEach((link5) => {
        link5.addEventListener('click', (e) => {
            links5.forEach((link5) => {
                selectedOption5.innerHTML = "";
                let text3 = link5.innerHTML;
                selectedOption5.innerHTML = text3;
                link5.nextElementSibling.classList.add("hidden");
                listbox5.classList.add("hidden");
                console.log("end")
            });
            e.preventDefault();
            selectedOption5.innerHTML = ""
            let text3 = link5.innerHTML;
            selectedOption5.innerHTML = text3
            link5.nextElementSibling.classList.remove("hidden")
        });
    });
}
// dropdowntoggle end


// dropdown toggle
let listbox6 = document.getElementById("listbox6");

let selectedOption6 = document.getElementById("selectedOption6");

const links6 = document.querySelectorAll('.nav-link6');

function dropdowntoggle6() {
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox8.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox7.classList.add("hidden");
    listbox9.classList.add("hidden");
    listbox6.classList.toggle("hidden");
}

if (links6.length) {
    links6.forEach((link6) => {
        link6.addEventListener('click', (e) => {
            links6.forEach((link6) => {
                selectedOption6.innerHTML = "";
                let text3 = link6.innerHTML;
                selectedOption6.innerHTML = text3;
                link6.nextElementSibling.classList.add("hidden");
                listbox6.classList.add("hidden");
                // document.body.addEventListener('click', () => {listbox6.classList.add("hidden")});
            });
            e.preventDefault();
            selectedOption6.innerHTML = "";
            let text3 = link6.innerHTML;
            selectedOption6.innerHTML = text3
            link6.nextElementSibling.classList.remove("hidden")
        });
    });
}
// dropdowntoggle end

// <!-- ************************* Payment Method Component End *********************** -->

// <!-- ************************* team member Component Start *********************** -->


let listbox8 = document.getElementById("listbox8");

function dropdowntoggle8() {
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox9.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox8.classList.toggle("hidden");
    document.getElementById("myInput").value = "";
    ul = document.getElementById("listbox8");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length; i++) {
        li[i].classList.remove("hidden");
    }
}


// Search funcality 
function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listbox8");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a)
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            console.log("available")
            li[i].classList.remove("hidden");
            console.log(li[i])
        } else {
            console.log("unavailable")
            li[i].classList.add("hidden");
            console.log(li[i])
        }
    }
    e.preventDefault();
}
// Search funcality

let listbox9 = document.getElementById("listbox9");

function dropdowntoggle9() {
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox8.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox9.classList.toggle("hidden");
    document.getElementById("myInput1").value = "";
    ul = document.getElementById("listbox9");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length; i++) {
        li[i].classList.remove("hidden");
    }
}


// Search funcality 
function myFunction1() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listbox9");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a)
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            console.log("available")
            li[i].classList.remove("hidden");
            console.log(li[i])
        } else {
            console.log("unavailable")
            li[i].classList.add("hidden");
            console.log(li[i])
        }
    }
    e.preventDefault();
}
// Search funcality

// <!-- ************************* team member Component End *********************** -->

// <!-- ************************* Share Document Component Start *********************** -->


// dropdown toggle
let listbox2 = document.getElementById("listbox2");

let selectedOption2 = document.getElementById("selectedOption2");

const links2 = document.querySelectorAll('.nav-link2');

function dropdowntoggle2() {

    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox7.classList.add("hidden");
    listbox9.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox2.classList.toggle("hidden");
}

if (links2.length) {
    links2.forEach((link2) => {
        link2.addEventListener('click', (e) => {
            links2.forEach((link2) => {
                selectedOption2.innerHTML = "";
                let text3 = link2.innerHTML;
                selectedOption2.innerHTML = text3;
                link2.nextElementSibling.classList.add("hidden");
                listbox2.classList.add("hidden");
                console.log("end")
            });
            e.preventDefault();
            selectedOption2.innerHTML = ""
            let text3 = link2.innerHTML;
            selectedOption2.innerHTML = text3
            link2.nextElementSibling.classList.remove("hidden")
        });
    });
}
// dropdowntoggle end


// dropdown toggle
let listbox3 = document.getElementById("listbox3");

let selectedOption3 = document.getElementById("selectedOption3");

const links3 = document.querySelectorAll('.nav-link3');

function dropdowntoggle3() {
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox7.classList.add("hidden");
    listbox9.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox3.classList.toggle("hidden");
}

if (links3.length) {
    links3.forEach((link3) => {
        link3.addEventListener('click', (e) => {
            links3.forEach((link3) => {
                selectedOption3.innerHTML = "";
                let text3 = link3.innerHTML;
                selectedOption3.innerHTML = text3;
                link3.nextElementSibling.classList.add("hidden");
                listbox3.classList.add("hidden");
                console.log("end")
            });
            e.preventDefault();
            selectedOption3.innerHTML = ""
            let text3 = link3.innerHTML;
            selectedOption3.innerHTML = text3
            link3.nextElementSibling.classList.remove("hidden")
        });
    });
}
// dropdowntoggle end


// dropdown toggle
let listbox4 = document.getElementById("listbox4");

let selectedOption4 = document.getElementById("selectedOption4");

const links4 = document.querySelectorAll('.nav-link4');

function dropdowntoggle4() {
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox7.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox9.classList.add("hidden");
    listbox4.classList.toggle("hidden");
}

if (links4.length) {
    links4.forEach((link4) => {
        link4.addEventListener('click', (e) => {
            links4.forEach((link4) => {
                selectedOption4.innerHTML = "";
                let text3 = link4.innerHTML;
                selectedOption4.innerHTML = text3;
                link4.nextElementSibling.classList.add("hidden");
                listbox4.classList.add("hidden");
                console.log("end")
            });
            e.preventDefault();
            selectedOption4.innerHTML = ""
            let text3 = link4.innerHTML;
            selectedOption4.innerHTML = text3
            link4.nextElementSibling.classList.remove("hidden")
        });
    });
}
// dropdowntoggle end



// <!-- ************************* Share Document Component end *********************** -->


// <!-- ************************* Date Component Start *********************** -->


function showdateRange() {
    let dateRange = document.getElementById("dateRange");
    dateRange.classList.toggle("hidden");
}



const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const MONTH_SHORT_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function app() {
    return {
        showDatepicker: false,
        datepickerValue: "",
        selectedDate: "2021-02-04",
        dateFormat: "DD-MM-YYYY",
        month: "",
        year: "",
        no_of_days: [],
        blankdays: [],
        initDate() {
            let today;
            if (this.selectedDate) {
                today = new Date(Date.parse(this.selectedDate));
            } else {
                today = new Date();
            }
            this.month = today.getMonth();
            this.year = today.getFullYear();
            this.datepickerValue = this.formatDateForDisplay(
                today
            );
        },
        formatDateForDisplay(date) {
            let formattedDay = DAYS[date.getDay()];
            let formattedDate = ("0" + date.getDate()).slice(
                -2
            ); // appends 0 (zero) in single digit date
            let formattedMonth = MONTH_NAMES[date.getMonth()];
            let formattedMonthShortName =
                MONTH_SHORT_NAMES[date.getMonth()];
            let formattedMonthInNumber = (
                "0" +
                (parseInt(date.getMonth()) + 1)
            ).slice(-2);
            let formattedYear = date.getFullYear();
            if (this.dateFormat === "DD-MM-YYYY") {
                return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}`; // 02-04-2021
            }
            if (this.dateFormat === "YYYY-MM-DD") {
                return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`; // 2021-04-02
            }
            if (this.dateFormat === "D d M, Y") {
                return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`; // Tue 02 Mar 2021
            }
            return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`;
        },
        isSelectedDate(date) {
            const d = new Date(this.year, this.month, date);
            return this.datepickerValue ===
                this.formatDateForDisplay(d) ?
                true :
                false;
        },
        isToday(date) {
            const today = new Date();
            const d = new Date(this.year, this.month, date);
            return today.toDateString() === d.toDateString() ?
                true :
                false;
        },
        getDateValue(date) {
            let selectedDate = new Date(
                this.year,
                this.month,
                date
            );
            this.datepickerValue = this.formatDateForDisplay(
                selectedDate
            );
            // this.$refs.date.value = selectedDate.getFullYear() + "-" + ('0' + formattedMonthInNumber).slice(-2) + "-" + ('0' + selectedDate.getDate()).slice(-2);
            this.isSelectedDate(date);
            this.showDatepicker = false;
        },
        getNoOfDays() {
            let daysInMonth = new Date(
                this.year,
                this.month + 1,
                0
            ).getDate();
            // find where to start calendar day of week
            let dayOfWeek = new Date(
                this.year,
                this.month
            ).getDay();
            let blankdaysArray = [];
            for (var i = 1; i <= dayOfWeek; i++) {
                blankdaysArray.push(i);
            }
            let daysArray = [];
            for (var i = 1; i <= daysInMonth; i++) {
                daysArray.push(i);
            }
            this.blankdays = blankdaysArray;
            this.no_of_days = daysArray;
        },
    };
}

// <!-- ************************* Date Component End *********************** -->

// <!-- ************************* Report Component Start *********************** -->


// dropdown toggle
let listbox = document.getElementById("listbox");

let selectedOption = document.getElementById("selectedOption");

const links = document.querySelectorAll('.nav-link');

function dropdowntoggle() {
    listbox6.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox7.classList.add("hidden");
    listbox9.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox.classList.toggle("hidden");
}

if (links.length) {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            links.forEach((link) => {
                selectedOption.innerHTML = "";
                let text = link.innerHTML;
                selectedOption.innerHTML = text;
                link.nextElementSibling.classList.add("hidden")
                listbox.classList.add("hidden");
            });
            e.preventDefault();
            selectedOption.innerHTML = ""
            let text1 = link.innerHTML;
            selectedOption.innerHTML = text1
            link.nextElementSibling.classList.remove("hidden")
        });
    });
}

// dropdowntoggle end


// dropdown toggle
let listbox1 = document.getElementById("listbox1");

let selectedOption1 = document.getElementById("selectedOption1");

const links1 = document.querySelectorAll('.nav-link1');

function dropdowntoggle1() {

    listbox.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox7.classList.add("hidden");
    listbox9.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox1.classList.toggle("hidden");
}

if (links1.length) {
    links1.forEach((link1) => {
        link1.addEventListener('click', (e) => {
            links1.forEach((link1) => {
                selectedOption1.innerHTML = "";
                let text1 = link1.innerHTML;
                selectedOption1.innerHTML = text1;
                link1.nextElementSibling.classList.add("hidden");
                listbox1.classList.add("hidden");
                console.log("end")
            });
            e.preventDefault();
            selectedOption1.innerHTML = ""
            let text2 = link1.innerHTML;
            selectedOption1.innerHTML = text2
            link1.nextElementSibling.classList.remove("hidden")
        });
    });
}
// dropdowntoggle end

// <!-- ************************* Report Component End *********************** -->

// <!-- ************************* shadcn Component Start *********************** -->


// dropdown toggle
let listbox7 = document.getElementById("listbox7");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");


function option1() {
    opt1.classList.remove("hidden")
    opt2.classList.add("hidden")
    opt3.classList.add("hidden")
    listbox7.classList.add("hidden");
}

function option2() {
    opt1.classList.add("hidden")
    opt2.classList.remove("hidden")
    opt3.classList.add("hidden")
    listbox7.classList.add("hidden");
}

function option3() {
    opt1.classList.add("hidden")
    opt2.classList.add("hidden")
    opt3.classList.remove("hidden")
    listbox7.classList.add("hidden");
}

function dropdowntoggle7() {
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listboxT.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox9.classList.add("hidden");
    listbox7.classList.toggle("hidden");
}

// <!-- ************************* chadch Component End *********************** -->



// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        listbox.classList.add("hidden");
        listbox1.classList.add("hidden");
        listbox2.classList.add("hidden");
        listbox3.classList.add("hidden");
        listbox4.classList.add("hidden");
        listbox5.classList.add("hidden");
        listbox6.classList.add("hidden");
        listbox7.classList.add("hidden");
        listbox8.classList.add("hidden");
        listbox9.classList.add("hidden");
        listboxT.classList.add("hidden");

    }
}











