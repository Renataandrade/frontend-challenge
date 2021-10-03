type TMethod = "GET" | "POST"

interface IMethod {
  GET: TMethod
  POST: TMethod
}

export const METHOD: IMethod = {
  GET: "GET",
  POST: "POST"
}