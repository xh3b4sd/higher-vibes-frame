/* eslint-disable react/jsx-key */
import { verifyString } from "../../utils/verify";
import { invalidResponse } from "../../response/invalid";
import { finishResponse } from "../../response/finish";
import createRecord from "@/utils/airtable";
import { createFrames } from "frames.js/next";

const frames = createFrames({
  basePath: "/submit",
});

// @ts-ignore
const handleRequest = frames(async (ctx: any) => {
  if (!verifyString(ctx.message?.inputText)) {
    return invalidResponse();
  } else {
    createRecord(String(ctx.message?.requesterFid), ctx.message?.inputText);
    return finishResponse();
  }
});

export const GET = handleRequest;
export const POST = handleRequest;
