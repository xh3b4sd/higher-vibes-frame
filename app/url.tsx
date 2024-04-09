export const newUrl = (pat: string): URL => {
  return new URL(
    pat,
    process.env.VERCEL_URL
      ? `https://{process.env.VERCEL_URL}`
      : "http://localhost:3000"
  )
}
