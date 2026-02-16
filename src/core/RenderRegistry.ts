import { TProblemPart } from "./IProblemStructure.js";

type RenderFunction = (block: TProblemPart) => string;

export class RendererRegistry {
    private renderers = new Map<string, Map<string, RenderFunction>>();

    register(format: string, blockType: string, renderer: RenderFunction) {
        if (!this.renderers.has(format)) {
            this.renderers.set(format, new Map());
        }
        this.renderers.get(format)!.set(blockType, renderer);
    }

    getRenderer(format: string, blockType: string): RenderFunction | undefined {
        return this.renderers.get(format)?.get(blockType);
    }
}