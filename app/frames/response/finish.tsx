/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";

export const finishResponse = () => {
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
          Thank You For Sharing!
        </p>
      </div>
    ),
    buttons: [
      <Button action="post" target={{ query: { value: "reset" } }}>
        Do It Again
      </Button>
    ],
  }
}
