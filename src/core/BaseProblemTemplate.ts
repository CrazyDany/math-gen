import IProblemTemplate from "./IProblemTemplate.js";
import IProblemGenerator from "./IProblemGenerator.js";

export abstract class BaseProblemTemplate<Config extends object> implements IProblemTemplate<Config> {
    public readonly id: string;
    public readonly _config: Config;
    public readonly generator: IProblemGenerator<Config>;

    abstract getDefaultConfig(): Config;

    constructor(id: string, customConfig?: Partial<Config>) {
        this.id = id;
        this._config = { ...this.getDefaultConfig(), ...customConfig } as Config;
        this.generator = this.createGenerator(this._config);
    }
    protected abstract createGenerator(config: Config): IProblemGenerator<Config>;

}