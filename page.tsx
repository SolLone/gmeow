import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GMEOWCoinSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-orange-700 mb-4">GMEOW 🐱💸</h1>
        <p className="text-xl text-gray-700">The purr-fect memecoin for cat lovers, meme traders, and diamond paws.</p>
        <p className="mt-2 text-md font-mono">Ticker: <span className="text-orange-500 font-bold">$GMEOW</span></p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">What is GMEOW?</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-800 text-center">
          <p>
            GMEOW is the chaotic blend of GameStop's meme stock energy and the internet's eternal obsession with cats.
            With Roaring Kitty back and cat content exploding online, GMEOW unites the stonk faithful with feline fury.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Roadmap 🗺️</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Phase 1: Meme Blitz</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Fair launch on Solana</li>
                <li>"CatCEO" NFT drop</li>
                <li>TikTok filters + viral memes</li>
                <li>Partner with meme creators</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Phase 2: Utility & Growth</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>"Stonks & Paws" minigame</li>
                <li>$GMEOW tipping bots</li>
                <li>Weekly meme contests</li>
                <li>Exchange listings</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Phase 3: IRL Impact</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Cat-themed merch drop</li>
                <li>Flash mobs on Wall Street</li>
                <li>Charity for cat shelters</li>
                <li>DAO community initiatives</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Community & Culture</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-800 text-center">
          <p>
            Join the revolution of cat memes, market memes, and digital anarchy. From Telegram raids to TikTok takeovers, the GMEOW community is about to take over the internet — one laser-eyed cat at a time.
          </p>
        </div>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>
          Powered by the meme economy. Not financial advice. Cats rule.
        </p>
      </footer>
    </div>
  );
}
