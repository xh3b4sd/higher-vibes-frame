/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { verifyString } from "./verify";
import { invalidResponse } from "./response/invalid";
import { finishResponse } from "./response/finish";
import createRecord from "@/utils/airtable";
import { newUrl } from "../url";

// @ts-ignore
const handleRequest = frames(async (ctx: any) => {
  console.log(ctx)
  if (ctx.searchParams.value === "submit") {
    if (!verifyString(ctx.message?.inputText)) {
      return invalidResponse();
    } else {
      createRecord(String(ctx.message?.requesterFid), ctx.message?.inputText);
      return finishResponse();
    }
  }

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
      <Button action="post" target={{ query: { value: "submit" } }}>
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
