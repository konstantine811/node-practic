/*
* @Author: Admin
* @Date:   2017-07-17 19:31:42
* @Last Modified by:   Admin
* @Last Modified time: 2017-07-17 19:46:22
*/

'use strict';
var fortunes = [
	"Победи свои страхи, или они победят тебя.",
	"Рекам нужны стоки.",
	"Не бойся неведомого.",
	"Тебя ждет приятный сюрприз.",
	"Будь проще везде, где только можно."];


exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortunes.length);
	return fortunes[idx];
};