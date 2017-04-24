import { DzCommon } from "./dz-common";

export class DzMenuSide {

    private static PREFIX: string = "dz-menu-side";
    private static CONTAINER: string = DzMenuSide.PREFIX + "-container";
    private static BUTTON: string = DzMenuSide.PREFIX + "-button";
    private static ITEM: string = DzMenuSide.PREFIX + "-item";

    private static OPEN_CLASS: string = "is-open";
    private static ACTIVE_CLASS: string = "is-active";

    private $container: JQuery;
    private $items: JQuery;

    private isSinglePage: boolean;

    constructor(isSinglePage: boolean = false) {
        this.isSinglePage = isSinglePage;
    }

    public init = (): void => {
        if (this.initVariables()) {
            this.initBindings();
        }
        
    }

    public toggle = () => {
        if (!this.existAllMandatoryElements()) {
            return;
        }

        this.$container.toggleClass(DzMenuSide.OPEN_CLASS);
    };

    public open = () => {

        if (!this.existAllMandatoryElements()) {
            return;
        }
        
        this.$container.addClass(DzMenuSide.OPEN_CLASS);
    };

    public close = () => {

        this.$container.removeClass(DzMenuSide.OPEN_CLASS);
    };

    public onMenuItemSelected = ($item: JQuery) => {
        if (this.isSinglePage) {

           this.$items.each(function () {
               var $item = $(this);
               $item.parent().removeClass(DzMenuSide.ACTIVE_CLASS);
           });

           $item.parent().addClass(DzMenuSide.ACTIVE_CLASS);
        }

        //chiudere il menu se siamo in mobile
        this.close();
    };

    private initVariables = (): boolean => {
        if (this.existAllMandatoryElements()) {
            this.$container = $(DzCommon.getAttributeByName(DzMenuSide.CONTAINER));
            this.$items = $(DzCommon.getAttributeByName(DzMenuSide.ITEM));
            return true;
        }
        else {
            return false;
        }

    };

    private initBindings = (): void => {

        var self = this;
        
        $(DzCommon.getAttributeByName(DzMenuSide.BUTTON)).on("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            self.toggle();
        });

        $(DzCommon.getAttributeByName(DzMenuSide.ITEM)).on("click", function (event) {
            //event.preventDefault();
            event.stopPropagation();
            self.onMenuItemSelected($(this));
        });
    };

    private existAllMandatoryElements = () => {
        return DzCommon.existAllElements([
            DzCommon.getAttributeByName(DzMenuSide.CONTAINER),
            DzCommon.getAttributeByName(DzMenuSide.BUTTON),
        ], DzMenuSide.printUnexistentElements);
    };

    private static printUnexistentElements = (items: Array<string>) => {
        console.error("[" + typeof DzMenuSide + "]: Some elements don't exist", items);
    };

}

//$(document).ready(function () {
//    var psModal = new PsModal();
//    psModal.init();
//})