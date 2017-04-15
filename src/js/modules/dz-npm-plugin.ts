export class DzNpmPlugin {
    constructor(){
        console.log("[" + typeof DzNpmPlugin + "]: Constructor");
    }
    
   public static Hello  = (name: string, target: string) => {
        $(target).html("Hello " + name);
        console.log("[DzNpmPlugin]: Hello ", name);
    };
}