import { PipeTransform, Pipe } from "@angular/core";
import { L10nService } from "../service/l10n.service";

@Pipe({ 
    name: 'l10n'
})
export class L10nPipe implements PipeTransform {
    constructor(
        private _L10nService: L10nService
    ) { }

    transform(keyName: string): string {
        return this._L10nService.GetLabel(keyName)
    }
}