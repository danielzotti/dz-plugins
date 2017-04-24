export class DzCommon {

    public static getAttributeByName = (name: string): string =>{
        return "[" + name + "]";
    }
    
    public static existElement = (element: JQuery): boolean => {
        return (typeof element != "undefined" && element.length > 0);
    }

    public static existAllElements = (selectorArray: Array<string>, callback: (notFoundElements: Array<string>) => void = null): boolean => {

        var notFoundElements: Array<string> = [];

        for (var element in selectorArray) {
            var selector: string = selectorArray[element];
            if (typeof $(selector) == "undefined" || $(selector).length == 0) {
                notFoundElements.push(selector);
            }
        }
        if (notFoundElements.length > 0 && callback != null)
            callback(notFoundElements);

        return !(typeof notFoundElements != "undefined" && notFoundElements.length > 0);
    }

    public static getUrlParameterByName = (name: string): string => {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    public static getUrlHash = (): string => {
        return window.location.hash;
    };

    public static setUrlHash = (hashValue: string = null) => {
        if (typeof hashValue != "undefined" && hashValue != null) {
            window.location.hash = '#' + hashValue;
        }
        else {
            window.location.hash = "";
        }
    };
}