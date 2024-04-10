/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { newUrl } from "../../utils/url";
import { createFrames } from "frames.js/next";

const frames = createFrames({
  basePath: "/frames",
});

// @ts-ignore
const handleRequest = frames(async (ctx: any) => {
  return {
    image: (
      <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex flex-col">
        <div tw="flex flex-row">
          <span tw="mt-8 font-bold">↑↑</span>
          <h1>
            Higher Vibes
          </h1>
          <span tw="mt-8 font-bold">↑↑</span>
        </div>
        <p tw="mx-64">
          Tell the community what made you happy recently, in 256 chars max.
        </p>
      </div>
    ),
    textInput: "What made you happy recently?",
    buttons: [
      <Button action="post" target={newUrl("/submit").toString()}>
        Send
      </Button>,
      <Button action="link" target={newUrl("/").toString()}>
        Info
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
