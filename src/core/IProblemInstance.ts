import ProblemStructure from "./IProblemStructure.js";
export default interface IProblemInstance {
    name: string,
    variables: object,
    structure: ProblemStructure
}