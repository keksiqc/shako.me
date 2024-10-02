import type { Config } from "../src/types"

const config: Config = {
  title: "Shako - Keksi",
  // Optional: Override Lanyard user data with custom values if you don't want to use Lanyard
  // user: {
  //   name: "Keksi",
  //   avatar: "https://cdn.discordapp.com/avatars/527147599942385674/32a37325c4d3098a37e8f078707de99a.webp?size=256",
  // },
  discordID: "1190760564000030741", // Discord user ID for Lanyard integration (can be omitted if 'user' is defined)
  lanyardUrl: "api.lanyard.rest", // Custom Lanyard API URL (optional, for self-hosted instances) (WIP)
  iconButtons: [
    {
      icon: "githubsponsors",
      url: "https://discord.gg/mcR2mJSBy5",
    },
  ],
  buttons: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/syncblaze/",
    },
    {
      name: "Discord",
      icon: "discord",
      url: "https://discord.com/users/1190760564000030741",
    },
    {
      name: "ImGui Service",
      icon: "discord",
      url: "https://discord.gg/mcR2mJSBy5",
    },
    {
      name: "Steam",
      icon: "steam",
      url: "https://steamcommunity.com/id/LostiBlackX/",
    },
  ],
}

export default config
