import IProblemGenerator from "./IProblemGenerator.js";

export default interface IProblemTemplate {
    id: string,
    config: object,
    default_config: object,
    generator: IProblemGenerator
}