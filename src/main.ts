import IRegister from "./core/IRegister.js";
import IProblemTemplate from "./core/IProblemTemplate.js";
import { EquaionTemplate } from "./generators/Equation/index.js";
import { numberFactorization, simplifyFraction } from "./utils/math.js";
import { getRandomNumber } from "./utils/random.js";

const register: IRegister = new IRegister();
register.addProblemTemplate(new EquaionTemplate({}));

const randomNumber = getRandomNumber(1, 10, "real", 0)
console.log(randomNumber);