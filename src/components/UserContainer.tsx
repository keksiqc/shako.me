import config from "@/config"
import { useLanyard } from "use-lanyard"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

export function UserContainer() {
  const { data } = useLanyard(config.discordID)

  return (
    <section className="m-5 flex flex-col items-center justify-center gap-5">
      {data?.discord_user.avatar && data?.discord_user.global_name ? (
        <>
          <Avatar className="size-32">
            <AvatarImage
              src={`https://cdn.discordapp.com/avatars/${config.discordID}/${data.discord_user.avatar}.webp?size=256`}
              alt="@keksiqc"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <h2 className="text-3xl font-semibold text-foreground">
            {data.discord_user.global_name}
          </h2>
        </>
      ) : (
        <>
          <Skeleton className=" size-32 rounded-full" />
          <Skeleton className="h-8 w-32" />
        </>
      )}
    </section>
  )
}
