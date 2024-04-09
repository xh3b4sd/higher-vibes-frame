export const newUrl = (pat: string): URL => {
  return new URL(
    pat,
    process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000"
  )
}
