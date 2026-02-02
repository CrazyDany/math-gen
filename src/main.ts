import IRegister from "./core/IRegister.js";
import IProblemTemplate from "./core/IProblemTemplate.js";
import { EquaionTemplate } from "./generators/Equation/index.js";

const register: IRegister = new IRegister();
register.addProblemTemplate(new EquaionTemplate({}));

const equationTemplate = register.getProblemTemplate("equation");
if (equationTemplate) {
    const instance = equationTemplate.generator.generateInstance();
    console.log(instance);
}