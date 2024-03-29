import HeyHi from "../../src/HeyHi";
import { describe, it } from "vitest";
import SlackTest from "./ProviderInit/SlackTest";

// TelegramTest();
// DiscordTest();
// PushBulletTest();
SlackTest();
describe("Sending notifcation", () => {
  it("It should send notification ", async () => {
    await HeyHi.sendNotification({
      title: "Website Production",
      content: "The HTML Website has been published!",
    });

    await HeyHi.sendNotification({
      icon: "🚙",
      title: "Website Production",
      content: "The HTML Website has been published!",
      showPoweredBy: true,
      addTime: true,
      attachment: "https://dummyimage.com/600x400/000/fff",
    });
  });
});
