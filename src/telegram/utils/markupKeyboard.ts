import { Markup } from "telegraf";
import { proxyURL } from "../../url";

export const proxies = [
  { name: "Marreta", url: "https://marreta.pcdomanual.com/p/" },
  { name: "12ft", url: "12ft.io/proxy?q=" },
];

export const buildArticleMarkupKeyboard = (query: string) =>
  Markup.inlineKeyboard(
    proxies.map((proxy) => [
      Markup.button.url(
        `🔗 Quebrar paywall com ${proxy.name}`,
        proxyURL(query, proxy.url),
      ),
    ]),
  );

export const buildCommandMarkupKeyboard = () =>
  Markup.inlineKeyboard([
    [
      Markup.button.url("🔗 Abrir 12ft", "https://12ft.io/"),
      Markup.button.url("🔗 Abrir Marreta", "https://marreta.pcdomanual.com/"),
      Markup.button.url("🔗 Acesse Crise Crise Crise", "https://crise.love/"),
    ],
    [
      Markup.button.url(
        "🔗 Veja o código fonte e altere como quiser",
        "https://github.com/rotchajunior/quebrapaywall",
      ),
    ],
  ]);
