import ProblemsRegister from "./core/IRegister.js";
import { EquationTemplate } from "./generators/Equation/index.js";

const register = new ProblemsRegister();
register.addProblemTemplate(new EquationTemplate("equation"));

const equationTemplate = register.getProblemTemplate("equation");
console.log(equationTemplate);