# Shakō

The hosted version of [Shakō](https://github.com/keksiqc/shako).

## Tech stack

- Astro
- React
- Tailwind CSS
- Shadcn/UI
- Lanyard

> [!Note]
> To integrate your Discord user data with Shakō, you must join the [Lanyard Discord Server](https://discord.gg/lanyard).

## Usage

1. Fork the repository.
2. Create a new file named `[user].config.ts` in the `/pages` directory, where `[user]` is your desired username.
3. Add your personal information and links to the `[user].config.ts` file.
4. Open a pull request with your changes.
5. Once merged, your personalized link page will be available at `shako.me/[user]`.

### Edit the configuration

Edit the `src/config.ts` file to add your links.
The `icon` prop corresponds to the icon name from [Simple Icons](https://simpleicons.org/). Ensure the icon name matches exactly with the one listed on the Simple Icons website for proper rendering.

> [!NOTE]
> Please follow the official [Astro documentation](https://docs.astro.build/en/guides/deploy/) if you want to deploy this project.

## License

Shakō is licensed under the MIT License - see the [LICENSE file](./LICENSE) for details.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
