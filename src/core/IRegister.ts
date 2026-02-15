import IProblemTemplate from "./IProblemTemplate.js";

export default class ProblemsRegister {
    problemsList: Map<string, IProblemTemplate>

    constructor() {
        this.problemsList = new Map<string, IProblemTemplate>();
    }

    addProblemTemplate(problemTemplate: IProblemTemplate) {
        this.problemsList.set(problemTemplate.id, problemTemplate);
    }
    getProblemTemplate(id: string) {
        return this.problemsList.get(id);
    }
}