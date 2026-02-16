import IProblemInstance from "./IProblemInstance.js";
import { TProblemPart } from "./IProblemStructure.js";
import { RendererRegistry } from "./RenderRegistry.js";

export class ProblemExporter {
    constructor(private registry: RendererRegistry) { }

    export(problem: IProblemInstance, format: string): string {
        const parts: string[] = [];
        for (const block of problem.structure.parts) {
            const render = this.registry.getRenderer(format, block.type);
            if (!render) {
                throw new Error(`Формат экспорта "${format}" или тип части задания "${block.type} для данного типа не поддерживаются`);
            }
            parts.push(render(block));
        }
        return this.joinParts(parts, format);
    }

    protected joinParts(parts: string[], format: string): string {
        return parts.join('\n');
    }
}

export interface IBlockRenderer<T extends TProblemPart = TProblemPart> {
    render(block: T, format: string): string;
}