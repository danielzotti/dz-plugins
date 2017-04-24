/// <reference path="../../typings/index.d.ts" />
import { DzCommon } from "./modules/dz-common";
import { DzMenuSide } from "./modules/dz-menu-side";

var menu: DzMenuSide;

$(document).ready(function(){
    menu = new DzMenuSide(true);
    menu.init();
});