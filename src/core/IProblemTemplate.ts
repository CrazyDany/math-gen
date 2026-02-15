import IProblemGenerator from "./IProblemGenerator.js";

export default interface IProblemTemplate<Config = object> {
    id: string,
    _config: object,
    getDefaultConfig(): Config
    generator: IProblemGenerator
}