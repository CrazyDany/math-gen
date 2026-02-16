export type TPartType = "legend" | "expression"

export interface ILegendPart {
    type: "legend",
    content: string
}

export interface IExpressionPart {
    type: "expression",
    content: string
}

export type TProblemPart = ILegendPart | IExpressionPart

export default interface IProblemStructure {
    parts: TProblemPart[]
}