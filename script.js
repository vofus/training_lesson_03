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

document.addEventListener("DOMContentLoaded", function(event) {
    


});