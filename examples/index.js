import bot from '../index';

const username = '';
const password = '';

bot.auth(username, password)
.then((headers) => bot.setLike(headers, '1156352422809813646'));

bot.auth(username, password)
.then((headers) => bot.setComment(headers, '1156408808103072490_518286907', 'somehow this comment must be ignored, i guess!'));

bot.auth(username, password)
.then((headers) => bot.unsetFollow(headers, '29738951'));

bot.auth(username, password)
.then((headers) => bot.setFollow(headers, '29738951'));