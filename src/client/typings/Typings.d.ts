export interface CalcData {
    h: number,
    t: number,
    w: number,
    d: string
}

export interface CalcResult {
    zeroToSixty: number,
    quarterMile: number,
    trapSpeed: number
}

export interface ErrorParams {
    message: string,
    status: "400" | "200" | "401" | "404" | "500"
}

export type App = import ("express").Application
export type Request = import ("express").Request
export type Response = import ("express").Response