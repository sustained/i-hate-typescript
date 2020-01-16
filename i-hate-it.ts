import { KlasaClient } from "klasa"

class IHateTypeScriptClient extends KlasaClient {
  constructor() {
    super({
      // Error: Property 'size' does not exist on type 'GuildStore'. ts(2329)
      readyMessage: client => `Successfully initialized. Ready to serve ${client.guilds.size()} guilds.`,
    })
  }
}
