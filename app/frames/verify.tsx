const regex = /^[A-Za-z0-9\s,.:\-'"!$%&#]*$/;

export const verifyString = (inp: string) => {
  return inp !== "" && regex.test(inp);
}
