const { Telegraf } = require("telegraf");

// Use environment variable for the token
const Token = "7077712875:AAGTunvFL7vuYHAlsqSg0tD6YvnvlFDZk_M";

const bot = new Telegraf(Token);

const web_url = "https://bot-game-eight.vercel.app/";

bot.start((ctx) => {
  const username = ctx.from.username
    ? `@${ctx.from.username}`
    : ctx.from.first_name;
  ctx.reply(`Welcome ${username}`, {
    reply_markup: {
      keyboard: [[{ text: "Launch App", web_app: { url: web_url } }]],
      resize_keyboard: true, // Optional: Automatically resize the keyboard to fit the buttons
      one_time_keyboard: true, // Optional: Hide the keyboard after a button is pressed
    },
  });
});

// Launch the bot and handle possible errors
bot
  .launch()
  .then(() => {
    console.log("Bot started successfully.");
  })
  .catch((err) => {
    console.error("Error starting bot:", err);
  });
