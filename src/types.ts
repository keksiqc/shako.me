import type { Types } from "use-lanyard"

interface IconButton {
  icon: string
  url: string
}

interface Button {
  name: string
  icon: string
  url: string
}

interface User {
  name: string
  avatar: string
}

export interface Config {
  title: string
  user?: User
  discordID?: Types.Snowflake
  lanyardUrl?: string
  iconButtons?: IconButton[]
  buttons?: Button[]
}
