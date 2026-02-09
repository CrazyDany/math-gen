export default interface IProblemInstance {
    name: string,
    variables: object,
    structure: Array<TStructurePart>
}

export type TStructurePart = {
    type: string,
    variables: object,
    childrens: Array<TStructurePart>
}