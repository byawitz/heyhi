import HeyHi from "../../../src/HeyHi";
import Discord from "../../../src/providers/Discord";

export default function DiscordTest(): void {
  HeyHi.addProvider(new Discord(process.env.DISCORD_WEBHOOK_ID ?? "", process.env.DISCORD_WEBHOOK_TOKEN ?? ""));
}
