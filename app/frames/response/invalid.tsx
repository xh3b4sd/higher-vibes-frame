/* eslint-disable react/jsx-key */
import { newUrl } from "@/utils/url";
import { Button } from "frames.js/next";

export const invalidResponse = () => {
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
          Invalid Input!
        </p>
      </div>
    ),
    buttons: [
      <Button action="post" target={newUrl("/api/frames").toString()}>
        Try Again
      </Button>
    ],
  }
}
