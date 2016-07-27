// myConcat function module
var myConcat = (function() {
	
	return function() {
			var args = arguments,
				argsLength = arguments.length,
				argsType = "",
				returnedResult;

			if(argsLength !== 0 && argsLength >= 1) {
				
				if(argsLength === 1) {
					argsType = typeof(args[0]);
				} else {
					for(var i =1; i < argsLength; i++) {
						if(typeof(args[0]) === typeof(args[i])) {
							argsType = typeof(args[0]);
						} else {
							console.log("Ошибка! Вы ввели аргументы разных типов.");
							return false;
						}
					}
				}

				function concatStr() {
					var resultStr = "";
					for(var i = 0; i < argsLength; i++) {
						resultStr += args[i];
					}
					returnedResult = resultStr;
				}

				function summNums() {
					var summ = 0;
					for(var i = 0; i < argsLength; i++) {
						summ += args[i];
					}
					returnedResult = summ;
				}

				function concatArr() {
					var resultArr = [];
					for(var i = 0; i < argsLength; i++) {
						Array.prototype.push.apply(resultArr, args[i]);
					}
					returnedResult = resultArr;
				}

				switch(argsType) {
					case "string":
						concatStr();
						break;
					case "number":
						summNums();
						break;
					case "object":
						if(Array.isArray(args[0])) {
							concatArr();
						} else {
							console.log("Ошибка! Не могу сложить объекты, не являющиеся массивами.");
							return false;
						}
						break;
				}
				return returnedResult;
			} else {
				console.log("Ошибка! Вы не ввели ни одного аргумета.");
				return false;
			}
		}

})();

// convertNums function module
var convertNums = (function() {

	return  function() {
				var args = arguments,
					argsLength = arguments.length,
					originalNum,
					returnedResult;

				if(argsLength === 0) {
					console.log("Ошибка! Вы не ввели ни одного аргумента.");
					return false;
				} else {
					originalNum = args[0];
				}

				if(typeof(originalNum) === "number") {
					returnedResult = Math.round(originalNum * 100) / 100;
					returnedResult = returnedResult.toLocaleString();
					return returnedResult;
				} else {
					console.log("Ошибка! Вы ввели не число.");
					return false;
				}
			}

})();

// checkSubStr function module
var checkSubStr = (function() {

	return function() {
				var args = arguments,
					argsLength = arguments.length,
					testArr = [],
					searchSubStr,
					returnedResult;

				if(argsLength < 2) {
					console.log("Ошибка! Необходимо ввести 2 аргумента.");
					return false;
				} else {
					if(Array.isArray(args[0])) {
						if(args[0].length !== 0) {
							for(var i=0; i<args[0].length; i++) {
								if(typeof(args[0][i]) === "string") {
									testArr = args[0];
								} else {
									console.log("Ошибка! Все элементы входного массива должны быть строками.");
									return false;
								}
							}
						} else {
							console.log("Ошибка! Массив не должен быть пустым.");
							return false;
						}	
					} else {
						console.log("Ошибка! Первый аргумент не является массивом.");
						return false;
					}
					if(typeof(args[1]) === "string") {
						searchSubStr = new RegExp(args[1], "ig");
					} else {
						console.log("Ошибка! Второй аргумент не является строкой.");
						return false;
					}
				}

				for(var i=0; i < testArr.length; i++) {
					var str = testArr[i];
					if(searchSubStr.test(str)) {
						returnedResult = true;
						break;
					} else {
						returnedResult = false;
						continue;
					}
				}

				return returnedResult;

			}

})();

// Timer
(function() {
	'use strict';

	var timerClass = (function() {
		function MakeTimer(finalDate) {
			this._finalDate = finalDate;

			this._years = document.querySelector(".timer__years-value");
			this._months = document.querySelector(".timer__months-value");
			this._days = document.querySelector(".timer__days-value");
			this._hours = document.querySelector(".timer__hours-value");
			this._minutes = document.querySelector(".timer__minutes-value");
			this._seconds = document.querySelector(".timer__seconds-value");
			
			this._yearsDescr = document.querySelector(".timer__years-description");
			this._monthsDescr = document.querySelector(".timer__months-description");
			this._daysDescr = document.querySelector(".timer__days-description");
			this._hoursDescr = document.querySelector(".timer__hours-description");
			this._minutesDescr = document.querySelector(".timer__minutes-description");
			this._secondsDescr = document.querySelector(".timer__seconds-description");
		}
		MakeTimer.prototype.calculate = function() {
			var nowDate,
				finalDate,
				between,
				years,
				months,
				days,
				hours,
				minutes,
				seconds;

			nowDate = new Date();
			finalDate = this._finalDate;
			between = finalDate.getTime() - nowDate.getTime();
			between = Math.floor(between / 1000);

			years = Math.floor(between / (365*24*3600));
			between = between % (365*24*3600);

			months = Math.floor(between / (30*24*3600));
			between = between % (30*24*3600);

			days = Math.floor(between / (24*3600));
			between = between % (24*3600);

			hours = Math.floor(between / 3600);
			between = between % 3600;

			minutes = Math.floor(between / 60);
			between = between % 60;

			seconds = between % 60;

			this._years.innerHTML = years;
			this._months.innerHTML = months;
			this._days.innerHTML = days;
			this._hours.innerHTML = hours;
			this._minutes.innerHTML = minutes;
			this._seconds.innerHTML = seconds;

			this._yearsDescr.innerHTML = createEndNums(years, ["Год", "Года", "Лет"]);
			this._monthsDescr.innerHTML = createEndNums(months, ["Месяц", "Месяца", "Месяцев"]);
			this._daysDescr.innerHTML = createEndNums(days, ["День", "Дня", "Дней"]);
			this._hoursDescr.innerHTML = createEndNums(hours, ["Час", "Часа", "Часов"]);
			this._minutesDescr.innerHTML = createEndNums(minutes, ["Минута", "Минуты", "Минут"]);
			this._secondsDescr.innerHTML = createEndNums(seconds, ["Секунда", "Секунды", "Секунд"]);

		    function createEndNums(number, titles) {
		    	var cases = [2, 0, 1, 1, 1, 2];  
    			return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
		    }

			setTimeout(this.calculate.bind(this), 1000);
		}
		return MakeTimer;
	})();

	var myTimer = new timerClass(new Date(2018, 6, 14));
	myTimer.calculate();

})();

// Calendar
(function() {
	"use strict";

	var calendarClass = (function() {
		function MakeCalendar(year, month) {
			var now = new Date();
			this._monthsArr = [
				"Январь", "Февраль", "Март", "Апрель",
				"Май", "Июнь", "Июль", "Август",
				"Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
			];
			this._year = year ? year : now.getFullYear();
			this._month = month ? month-1 : now.getMonth();
			this._element = document.querySelector(".calendar");
		}
		MakeCalendar.prototype.render = function() {
			var date = new Date(this._year, this._month),
				elem = this._element,
				month = this._month,
				table = '<h3>' + this._monthsArr[this._month] + ' ' + this._year + ' г.' + '</h3>',
				beginTable = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>',
				endTable = '</tr></table>';

			table += beginTable;

			for(var i = 0; i < getDay(date); i++) {
				table += '<td></td>';
			}

			while(date.getMonth() === this._month) {
				table += '<td>' + date.getDate() + '</td>';
				if(getDay(date) % 7 === 6) {
					table += '</tr><tr>';
				}
				date.setDate(date.getDate() + 1);
			}

			if(getDay(date) !== 0) {
				for (var i = getDay(date); i < 7; i++) {
		        	table += '<td></td>';
		        }
			}

			table += endTable;

			elem.innerHTML = table;

			function getDay(date) {
				var day = date.getDay();
		        if (day == 0) day = 7;
		        return day - 1;
			}

		}
		return MakeCalendar;
	})();

	var yearsSelect, monthsSelect, yearsVal, monthsVal, newDate;

	newDate = new calendarClass(2018, 7);
	newDate.render();
	console.log(newDate);

})();