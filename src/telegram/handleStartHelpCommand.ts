import { buildCommandMarkupKeyboard } from "./utils/markupKeyboard";

import type { Telegraf } from "telegraf";

export const handleStartHelpCommand = (bot: Telegraf) => {
  bot.command(["start", "help"], (ctx) => {
    let text =
      "Esse bot remove o paywall de sites , usando o <b>Marreta</b> e o <b>12ft</b> .\n\n";
    text += "<b>Como usar</b> ❓\n";
    text +=
      "Para uso como chat, apenas envie um link de matéria, para usar em grupos chame o bot, como no exemplo abaixo:\n\n";
    text += "<pre>@quebrapaywall_bot [URL]</pre>\n\n";
    text += "<b>Como contribuir</b>  📖\n";
    text +=
      'Esse é um bot é um fork de <a href="https://github.com/TheEdoRan/hidewallbot"> hidewallbot </a>, que segue a licença <a href="https://opensource.org/licenses/MIT">MIT license</a>. Você pode criar um fork, melhorar o código ou fazer o que quiser com ele.';

    return ctx
      .reply(text, {
        parse_mode: "HTML",
        reply_to_message_id: ctx.message.message_id,
        ...buildCommandMarkupKeyboard(),
      })
      .catch(console.error);
  });
};
