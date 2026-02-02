import IProblemInstance from "./IProblemInstance.js";

export default interface IProblemGenerator {
    generationData: object
    generateInstance(): IProblemInstance
}