import label from '../tas';

export class L10nService {
    /**
     * Used to store default language.
     */
    Defaultanguage: string = 'en-US';    

    /**
     * Used to Get label.
     * @param keyName Used to store key of label.
     */
    GetLabel(keyName: string): string {
        if (!label[this.Defaultanguage][keyName]) {
            return '';
        } 
        return label[this.Defaultanguage][keyName]
    }
}