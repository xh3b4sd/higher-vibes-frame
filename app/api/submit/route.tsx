/* eslint-disable react/jsx-key */
import { frames } from "../../frames";
import { verifyString } from "../../../utils/verify";
import { invalidResponse } from "../../frames/response/invalid";
import { finishResponse } from "../../frames/response/finish";
import createRecord from "@/utils/airtable";

// @ts-ignore
const handleRequest = frames(async (ctx: any) => {
  if (!verifyString(ctx.message?.inputText)) {
    return invalidResponse();
  } else {
    createRecord(String(ctx.message?.requesterFid), ctx.message?.inputText);
    return finishResponse();
  }
});

export const POST = handleRequest;
