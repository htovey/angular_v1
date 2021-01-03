export class Credential {
    credential: Credential;

    public username: string;
    public password: string;
    public hide: boolean;

    constructor() {}

    toggle() {
        this.hide = !this.hide;
    }
}