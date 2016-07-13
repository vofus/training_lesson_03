// myConcat function module
var myConcatModule = (function() {
	
	return {
		myConcat: function() {
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
	}

})();

// convertNums function module
var convertNumsModule = (function() {

	return {
		convertNums: function() {
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
	;	}
	}

})();

// checkSubStr function module
var checkSubStrModule = (function() {

	return {
		checkSubStr: function() {
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
	}

})();

document.addEventListener("DOMContentLoaded", function(event) {
    


});