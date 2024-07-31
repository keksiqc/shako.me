import type { Config } from "../src/types"

const config: Config = {
  title: "Shako - BalkonFreak",
  discordID: "346691588904189953", // Discord user ID for Lanyard integration (can be omitted if 'user' is defined)
  lanyardUrl: "api.lanyard.rest", // Custom Lanyard API URL (optional, for self-hosted instances) (WIP)
  buttons: [
    {
      name: "Discord",
      icon: "discord",
      url: "https://discord.com/users/346691588904189953",
    },
    {
      name: "Steam",
      icon: "steam",
      url: "https://steamcommunity.com/id/Devran3332/",
    },
    {
      name: "Twitch",
      icon: "twitch",
      url: "https://twitch.tv/balkonfreak",
    },
    {
      name: "Twitter",
      icon: "x",
      url: "https://x.com/Dekrav1",
    },
    {
      name: "YouTube",
      icon: "youtube",
      url: "https://youtube.com/@Dev-wp7xr",
    },
  ],
}

export default config
