import { TProblemPart } from "./core/IProblemStructure.js";
import ProblemsRegister from "./core/IRegister.js";
import { ProblemExporter } from "./core/ProblemExporter.js";
import { RendererRegistry } from "./core/RenderRegistry.js";
import { EquationTemplate } from "./generators/Equation/index.js";
const rendererRegistry = new RendererRegistry();

// Plain Renderer
rendererRegistry.register('plain', 'legend', (block: TProblemPart) => {
    return block.content
});
rendererRegistry.register('plain', 'expression', (block: TProblemPart) => {
    return block.content
})

const problemRegister = new ProblemsRegister()
const equationTemplate = new EquationTemplate('equation')
problemRegister.addProblemTemplate(equationTemplate)

const equationInstance = equationTemplate.generator.generateInstance()

const exporter = new ProblemExporter(rendererRegistry)
console.log(exporter.export(equationInstance, 'plain'))