import { Button } from "@/components/ui/button"

export function Home() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to Shakō
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Shakō is a simple, customizable link page for your online presence. To
        get started, create a{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
          [user].config.ts
        </code>{" "}
        file in the{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
          /pages
        </code>{" "}
        directory with your personal information and social links.
      </p>
      <div className="flex gap-4">
        <Button
          variant="default"
          size="lg"
          onClick={() => window.open("https://github.com/keksiqc/shako.me")}
        >
          Get Started
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.open("https://github.com/keksiqc/shako")}
        >
          Self Host
        </Button>
      </div>
    </>
  )
}
