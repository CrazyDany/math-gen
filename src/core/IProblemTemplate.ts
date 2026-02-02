import IProblemGenerator from "./IProblemGenerator.js";

export default interface IProblemTemplate {
    id: string,
    config: object,
    generator: IProblemGenerator
}