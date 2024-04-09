import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Higher Vibes",
  description: "Farcaster Frame Server For The Higher Society",
}

export default function Page() {
  return (
    <ol className="list-decimal pl-5">
      <li>We send a cast randomly to show the <b>Higher Vibes</b> frame</li>
      <li>When you see the frame you can decide to share something positive</li>
      <li>What you share with the community is sent to an <a className="text-indigo-600" href="https://airtable.com/appwCxeKwv8Ifh504/shrw1jjeBgLF3EkGc" target="_blank">Airtable</a></li>
      <li>We curate a list of happy moments based on the community responses</li>
      <li>We share the happy moments with the community in <a className="text-indigo-600" href="https://warpcast.com/~/channel/higher" target="_blank">/higher</a></li>
    </ol>
  );
}
