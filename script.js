/* =====================================================
   НАСТРОЙКИ
===================================================== */

/*
    ВАЖНО!

    Здесь указывается дата ПЕРВОГО ДНЯ учебной недели,
    которую ваш университет считает НЕДЕЛЕЙ №1.

    Например:

    07.09.2026 — первая учебная неделя
    14.09.2026 — вторая
    21.09.2026 — третья
    и т.д.

    Если у вас первая неделя начинается в другую дату,
    просто измени эту дату.
*/

const FIRST_WEEK_DATE = new Date("2026-09-01");


/* =====================================================
   РАСПИСАНИЕ
===================================================== */

/*
    Здесь находится всё расписание.

    week:
        "even" — чётная
        "odd"  — нечётная

    Если предмет есть только на одной неделе,
    он добавляется только в соответствующий объект.
*/


const scheduleData = {

    even: {

        monday: [
            {
                time: "10:50 - 12:25",
                subject: "Основы ТВ",
                type: "Лабораторная",
                teacher: "Кустов Д.А.",
                room: "434"
            },

            {
                time: "12:40 - 14:15",
                subject: "Р-НАВИГ.СИСТЕМЫ",
                type: "Практика",
                teacher: "Безруков А.В.",
                room: "425"
            },

            {
                time: "14:55 - 16:30",
                subject: "РАДИОСИСТ. УПР-Я",
                type: "Лекция",
                teacher: "Петров Ю.В.",
                room: "318"
            }
        ],


        tuesday: [
            {
                time: "14:55 - 16:30",
                subject: "РАДИОСИСТ. УПР-Я",
                type: "Практика",
                teacher: "Петров Ю.В.",
                room: "434"
            },

            {
                time: "16:45 - 18:20",
                subject: "Р-НАВИГ.СИСТЕМЫ",
                type: "Практика",
                teacher: "Безруков А.В.",
                room: "492"
            },


        ],


        wednesday: [
            {
                time: "16:45 - 18:20",
                subject: "Основы ТВ",
                type: "Лекция",
                teacher: "Кустов Д.А.",
                room: "492"
            },

            {
                time: "18:30 - 20:05",
                subject: "ЭМС и РЭБ",
                type: "Практика",
                teacher: "Новиков А.В.",
                room: "ВЦ 285"
            },
        ],

        thursday: [

            {
                time: "12:40 - 14:15",
                subject: "Основы Теории Систем РЭБ",
                type: "Практика",
                teacher: "Сайбель А.Г.",
                room: "436"
            },
            
            {
                time: "14:55 - 16:30",
                subject: "Основы Теории Систем РЭБ",
                type: "Лекция",
                teacher: "Сайбель А.Г.",
                room: "425"
            },            
            
            {
                time: "16:45 - 18:20",
                subject: "ЭМС и РЭБ",
                type: "Лекция",
                teacher: "Новиков А.В.",
                room: "374"
            },
        ],

        friday: [

            {
                time: "09:00 - 10:35",
                subject: "МЕТ.И ПР.ЭКСП.ИССЛ",
                type: "Практика",
                teacher: "Евсеев В.И.",
                room: "434"
            },

            {
                time: "10:50 - 12:25",
                subject: "МЕТ.И ПР.ЭКСП.ИССЛ",
                type: "Лекция",
                teacher: "Евсеев В.И.",
                room: "423"
            },

            {
                time: "12:40 - 14:15",
                subject: "ЛАЗ.И ОПТ.-ЭЛ.СИСТ.",
                type: "Лекция",
                teacher: "Трилис А.В.",
                room: "316"
            },
        ],

    

    },


    odd: {

        monday: [
            {
                time: "12:40 - 14:15",
                subject: "Р-НАВИГ.СИСТЕМЫ",
                type: "Практика",
                teacher: "Безруков А.В.",
                room: "425"
            },

            {
                time: "14:55 - 16:30",
                subject: "РАДИОСИСТ. УПР-Я",
                type: "Практика",
                teacher: "Петров Ю.В.",
                room: "318"
            },

            {
                time: "16:45 - 18:20",
                subject: "РАДИОСИСТ. УПР-Я",
                type: "Лекция",
                teacher: "Петров Ю.В.",
                room: "315"
            },

        ],


        tuesday: [
            {
                time: "12:40 - 14:15",
                subject: "ЛАЗ.И ОПТ.-ЭЛ.СИСТ.",
                type: "Лабораторная",
                teacher: "Трилис А.В.",
                room: "218 лаб."
            },

            {
                time: "14:55 - 16:30",
                subject: "Радиосист. Упр-я",
                type: "Практика",
                teacher: "Петров Ю.В.",
                room: "423"
            },
            
            {
                time: "16:45 - 18:20",
                subject: "Р-НАВИГ.СИСТЕМЫ",
                type: "Лекция",
                teacher: "Безруков А.В.",
                room: "313а"
            },

            
        ],


        wednesday: [
            {
                time: "16:45 - 18:20",
                subject: "Основы ТВ",
                type: "Лекция",
                teacher: "Кустов Д.А.",
                room: "445"
            },
        ],

        thursday: [
            {
                time: "12:40 - 14:15",
                subject: "Осн. Теор. Сист. РЭБ",
                type: "Лекция",
                teacher: "Сайбель А.Г.",
                room: "425"
            },

            {
                time: "14:55 - 16:30",
                subject: "Осн. Теор. Сист. РЭБ",
                type: "Лекция",
                teacher: "Сайбель А.Г.",
                room: "425"
            },

            {
                time: "16:45 - 18:20",
                subject: "ЭМС и РЭБ",
                type: "Лекция",
                teacher: "Новиков А.В.",
                room: "374"
            },
        ],

        friday: [
            {
                time: "10:50 - 12:25",
                subject: "Мет. и пр. эксп. исслед.",
                type: "Лекция",
                teacher: "Евсеев В.И.",
                room: "434"
            },

            {
                time: "12:40 - 14:15",
                subject: "Лаз. и опт.-эл. систем.",
                type: "Лекция",
                teacher: "Трилис А.В.",
                room: "318"
            },

            {
                time: "14:55 - 16:30",
                subject: "Радиосист. упр-я",
                type: "Практика",
                teacher: "Петров Ю.В.",
                room: "425"
            },
        ],

    }

};


/* =====================================================
   НАЗВАНИЯ ДНЕЙ
===================================================== */

const days = [
    {
        id: "monday",
        name: "Понедельник"
    },

    {
        id: "tuesday",
        name: "Вторник"
    },

    {
        id: "wednesday",
        name: "Среда"
    },

    {
        id: "thursday",
        name: "Четверг"
    },

    {
        id: "friday",
        name: "Пятница"
    },

    {
        id: "saturday",
        name: "Суббота"
    }
];


/* =====================================================
   ПОЛУЧЕНИЕ НОМЕРА НЕДЕЛИ
===================================================== */

function getAcademicWeekNumber(date = new Date()) {

    const current = new Date(date);

    current.setHours(0, 0, 0, 0);


    const firstWeek = new Date(FIRST_WEEK_DATE);

    firstWeek.setHours(0, 0, 0, 0);


    /*
        Находим понедельник текущей недели
    */

    const currentDay = current.getDay();

    const daysFromMonday =
        currentDay === 0
            ? 6
            : currentDay - 1;

    current.setDate(
        current.getDate() - daysFromMonday
    );


    /*
        Аналогично приводим первую дату
        к понедельнику
    */

    const firstDay = firstWeek.getDay();

    const firstDaysFromMonday =
        firstDay === 0
            ? 6
            : firstDay - 1;

    firstWeek.setDate(
        firstWeek.getDate() - firstDaysFromMonday
    );


    /*
        Разница в миллисекундах
    */

    const difference =
        current.getTime() - firstWeek.getTime();


    const weekDifference =
        Math.round(
            difference /
            (1000 * 60 * 60 * 24 * 7)
        );


    /*
        Первая неделя = №1
    */

    return weekDifference + 1;
}


/* =====================================================
   ОПРЕДЕЛЕНИЕ ЧЁТНОЙ / НЕЧЁТНОЙ
===================================================== */

function getCurrentWeekType() {

    const weekNumber =
        getAcademicWeekNumber();


    if (weekNumber % 2 === 0) {
        return "even";
    }

    return "odd";
}


/* =====================================================
   ФОРМАТИРОВАНИЕ ДАТЫ
===================================================== */

function formatDate(date) {

    return date.toLocaleDateString(
        "ru-RU",
        {
            day: "numeric",
            month: "long"
        }
    );
}


/* =====================================================
   ПОЛУЧИТЬ ДАТУ ПОНЕДЕЛЬНИКА
===================================================== */

function getMonday(date = new Date()) {

    const result = new Date(date);

    result.setHours(0, 0, 0, 0);

    const day = result.getDay();

    const difference =
        day === 0
            ? -6
            : 1 - day;

    result.setDate(
        result.getDate() + difference
    );

    return result;
}


/* =====================================================
   ОТОБРАЖЕНИЕ РАСПИСАНИЯ
===================================================== */

function renderSchedule(weekType) {

    const scheduleElement =
        document.getElementById("schedule");

    // Получаем расписание выбранной недели
    const schedule =
        scheduleData[weekType];

    // Очищаем старое расписание
    scheduleElement.innerHTML = "";


    const monday =
        getMonday();


    days.forEach(
        (day, index) => {

            const dayContainer =
                document.createElement("section");

            dayContainer.className =
                "day";


            /*
                Проверяем сегодняшний день
            */

            const today =
                new Date();

            const currentDay =
                today.getDay();

            const isToday =
                index + 1 === currentDay;


            if (isToday) {
                dayContainer.classList.add("today");
            }


            /*
                Дата конкретного дня
            */

            const dayDate =
                new Date(monday);

            dayDate.setDate(
                monday.getDate() + index
            );


            /*
                Заголовок дня
            */

            const header =
                document.createElement("div");

            header.className =
                "day-header";


            header.innerHTML = `

                <span class="day-name">
                    ${day.name}
                </span>

                <span class="day-date">
                    ${formatDate(dayDate)}
                </span>

                ${
                    isToday
                        ? `<span class="today-label">
                            СЕГОДНЯ
                           </span>`
                        : ""
                }

                <span class="day-header-line"></span>

            `;


            dayContainer.appendChild(
                header
            );


            /*
                Получаем занятия
                именно выбранной недели
            */

            const lessons =
                schedule[day.id] || [];


            /*
                Если занятий нет
            */

            if (lessons.length === 0) {

                const empty =
                    document.createElement("div");

                empty.className =
                    "empty-day";

                empty.textContent =
                    "Занятий нет";

                dayContainer.appendChild(
                    empty
                );

            }


            /*
                Выводим занятия
            */

            lessons.forEach(
                lesson => {

                    const lessonElement =
                        document.createElement("div");

                    lessonElement.className =
                        "lesson";


                    lessonElement.innerHTML = `

                        <div class="lesson-time">
                            ${lesson.time}
                        </div>


                        <div class="lesson-main">

                            <div class="lesson-title">
                                ${lesson.subject}
                            </div>


                            <div class="lesson-details">

                                <span class="lesson-type">
                                    ${lesson.type}
                                </span>

                                <span>
                                    ${lesson.teacher}
                                </span>

                            </div>

                        </div>


                        <div class="lesson-room">

                            <span class="room-icon">
                                📍
                            </span>

                            ауд. ${lesson.room}

                        </div>

                    `;


                    dayContainer.appendChild(
                        lessonElement
                    );

                }
            );


            scheduleElement.appendChild(
                dayContainer
            );

        }
    );

}


/* =====================================================
   ОБНОВЛЕНИЕ ИНФОРМАЦИИ О НЕДЕЛЕ
===================================================== */

function updateWeekInterface(weekType) {

    const evenButton =
        document.getElementById("evenButton");

    const oddButton =
        document.getElementById("oddButton");


    const title =
        document.getElementById("weekTitle");


    const status =
        document.getElementById("weekStatus");


    const footer =
        document.getElementById("footerWeek");


    /*
        Снимаем активность
    */

    evenButton.classList.remove("active");
    oddButton.classList.remove("active");


    if (weekType === "even") {

        evenButton.classList.add("active");

        title.textContent =
            "Чётная неделя";

        status.textContent =
            "Выбрана чётная учебная неделя";

        footer.textContent =
            "Чётная неделя";

    } else {

        oddButton.classList.add("active");

        title.textContent =
            "Нечётная неделя";

        status.textContent =
            "Выбрана нечётная учебная неделя";

        footer.textContent =
            "Нечётная неделя";
    }


    renderSchedule(weekType);
}


/* =====================================================
   ПЕРЕКЛЮЧЕНИЕ НЕДЕЛИ
===================================================== */

let selectedWeek =
    getCurrentWeekType();


/*
    Кнопка "Чётная"
*/

document
    .getElementById("evenButton")
    .addEventListener(
        "click",
        () => {

            /*
                Если пользователь вручную
                выбирает неделю,
                выключаем автоматический режим
            */

            document
                .getElementById("currentWeekCheckbox")
                .checked = false;


            selectedWeek = "even";

            updateWeekInterface(
                selectedWeek
            );
        }
    );


/*
    Кнопка "Нечётная"
*/

document
    .getElementById("oddButton")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("currentWeekCheckbox")
                .checked = false;


            selectedWeek = "odd";

            updateWeekInterface(
                selectedWeek
            );
        }
    );


/* =====================================================
   ТЕКУЩАЯ НЕДЕЛЯ
===================================================== */

document
    .getElementById("currentWeekCheckbox")
    .addEventListener(
        "change",
        function () {

            if (this.checked) {

                selectedWeek =
                    getCurrentWeekType();

                updateWeekInterface(
                    selectedWeek
                );


                /*
                    Показываем номер недели
                */

                const number =
                    getAcademicWeekNumber();


                document
                    .getElementById("weekStatus")
                    .textContent =
                    `Сейчас учебная неделя №${number} — ${
                        selectedWeek === "even"
                            ? "чётная"
                            : "нечётная"
                    }`;

            }

        }
    );


/* =====================================================
   КНОПКА "СЕГОДНЯ"
===================================================== */

document
    .getElementById("todayButton")
    .addEventListener(
        "click",
        () => {

            const checkbox =
                document.getElementById(
                    "currentWeekCheckbox"
                );


            checkbox.checked = true;


            selectedWeek =
                getCurrentWeekType();


            updateWeekInterface(
                selectedWeek
            );


            const number =
                getAcademicWeekNumber();


            document
                .getElementById("weekStatus")
                .textContent =
                `Сейчас учебная неделя №${number} — ${
                    selectedWeek === "even"
                        ? "чётная"
                        : "нечётная"
                }`;

        }
    );


/* =====================================================
   ТЕКУЩАЯ ДАТА
===================================================== */

function showCurrentDate() {

    const date =
        new Date();


    document
        .getElementById("currentDate")
        .textContent =
        date.toLocaleDateString(
            "ru-RU",
            {
                weekday: "long",
                day: "numeric",
                month: "long"
            }
        );
}


/* =====================================================
   ЗАПУСК САЙТА
===================================================== */

showCurrentDate();

updateWeekInterface(
    selectedWeek
);