import IProblemInstance from "./IProblemInstance.js";
export default interface IProblemGenerator<Config = object> {
    generationData: object
    generateInstance(): IProblemInstance
}