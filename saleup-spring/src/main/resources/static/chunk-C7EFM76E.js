import{D as He,g as pe,k as Me,l as Re}from"./chunk-RQPZ5HGD.js";import{a as Y,b as J}from"./chunk-CLWX3ZBX.js";import{d as he}from"./chunk-ZWHAHKZC.js";import{A as De,Ea as X,W as Ee,Za as R,_a as Ge,g as ue,gb as de,h as Ne,i as Z,j as Ae,ma as Pe,nb as ge,wa as Be,x as A,xa as me,y as W,z as Oe}from"./chunk-3JEFJ4TX.js";import{Ac as Ve,Bb as _e,Cc as g,Da as ae,Db as ne,Dc as $,Ib as h,Jb as p,Kb as f,Lb as j,Mb as z,Mc as Fe,Nb as Ie,Ob as x,Qb as _,Rb as s,Sb as xe,Tb as we,Tc as B,Uc as re,Vc as N,Wb as w,Xa as be,Xb as P,Yb as v,Yc as U,Z as H,Za as c,Zb as b,Zc as G,_ as L,_a as I,ac as ye,cb as fe,da as O,dd as M,fd as V,ic as q,jc as le,kb as S,kc as k,la as te,lb as Q,lc as Te,ld as $e,ma as u,mc as Ce,md as oe,na as m,nc as Se,ob as E,od as se,qa as D,qb as F,qd as ce,rb as d,va as C,xc as ke,yb as y,za as ie,zb as l,zc as K}from"./chunk-VNNEODSX.js";var ze=["*"],qe=({dt:t})=>`
    .p-fluid{
        width:100%
    }
`,Ke={root:"p-fluid"},Le=(()=>{class t extends X{name="fluid";classes=Ke;theme=qe;static \u0275fac=(()=>{let e;return function(a){return(e||(e=D(t)))(a||t)}})();static \u0275prov=H({token:t,factory:t.\u0275fac})}return t})();var Ue=(()=>{class t extends R{_componentStyle=O(Le);static \u0275fac=(()=>{let e;return function(a){return(e||(e=D(t)))(a||t)}})();static \u0275cmp=S({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(i,a){i&2&&_e("p-fluid",!0)},features:[q([Le]),E],ngContentSelectors:ze,decls:1,vars:0,template:function(i,a){i&1&&(xe(),we(0))},dependencies:[M],encapsulation:2,changeDetection:0})}return t})(),xi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Q({type:t});static \u0275inj=L({imports:[Ue]})}return t})();var Ze=["header"],We=["footer"],Xe=["indicator"],Ye=["caption"],Je=["closeicon"],et=["previousthumbnailicon"],tt=["nextthumbnailicon"],it=["itempreviousicon"],at=["itemnexticon"],nt=["item"],lt=["thumbnail"],rt=["mask"],ot=["container"],st=()=>({"p-galleria-mask p-overlay-mask p-overlay-mask-enter":!0}),ct=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),ut=t=>({value:"visible",params:t});function mt(t,r){if(t&1){let e=x();h(0,"p-galleriaContent",7),_("@animation.start",function(a){u(e);let n=s(3);return m(n.onAnimationStart(a))})("@animation.done",function(a){u(e);let n=s(3);return m(n.onAnimationEnd(a))})("maskHide",function(){u(e);let a=s(3);return m(a.onMaskHide())})("activeItemChange",function(a){u(e);let n=s(3);return m(n.onActiveItemChange(a))}),p()}if(t&2){let e=s(3);l("@animation",k(9,ut,Te(6,ct,e.showTransitionOptions,e.hideTransitionOptions)))("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)("ngStyle",e.containerStyle)("fullScreen",e.fullScreen)}}function dt(t,r){if(t&1&&(h(0,"div",5,2),d(2,mt,1,11,"p-galleriaContent",6),p()),t&2){let e=s(2);ne(e.maskClass),l("ngClass",le(6,st)),y("role",e.fullScreen?"dialog":"region")("aria-modal",e.fullScreen?"true":void 0),c(2),l("ngIf",e.visible)}}function ht(t,r){if(t&1&&(h(0,"div",null,1),d(2,dt,3,7,"div",4),p()),t&2){let e=s();c(2),l("ngIf",e.maskVisible)}}function pt(t,r){if(t&1){let e=x();h(0,"p-galleriaContent",8),_("activeItemChange",function(a){u(e);let n=s();return m(n.onActiveItemChange(a))}),p()}if(t&2){let e=s();l("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)}}var gt=["closeButton"],vt=(t,r,e)=>({"p-galleria p-component":!0,"p-galleria-fullscreen":t,"p-galleria-inset-indicators":r,"p-galleria-hover-navigators":e}),bt=()=>({});function ft(t,r){t&1&&f(0,"TimesIcon",11),t&2&&l("styleClass","p-galleria-close-icon")}function _t(t,r){}function It(t,r){t&1&&d(0,_t,0,0,"ng-template")}function xt(t,r){if(t&1){let e=x();h(0,"button",8),_("click",function(){u(e);let a=s(2);return m(a.maskHide.emit())}),d(1,ft,1,1,"TimesIcon",9)(2,It,1,0,null,10),p()}if(t&2){let e=s(2);y("aria-label",e.closeAriaLabel())("data-pc-section","closebutton"),c(),l("ngIf",!e.galleria.closeIconTemplate&&!e.galleria._closeIconTemplate),c(),l("ngTemplateOutlet",e.galleria.closeIconTemplate||e.galleria._closeIconTemplate)}}function wt(t,r){if(t&1&&(h(0,"div",12),f(1,"p-galleriaItemSlot",13),p()),t&2){let e=s(2);c(),l("templates",e.galleria.templates)}}function yt(t,r){if(t&1){let e=x();h(0,"p-galleriaThumbnails",14),_("onActiveIndexChange",function(a){u(e);let n=s(2);return m(n.onActiveIndexChange(a))})("stopSlideShow",function(){u(e);let a=s(2);return m(a.stopSlideShow())}),p()}if(t&2){let e=s(2);l("containerId",e.id)("value",e.value)("activeIndex",e.activeIndex)("templates",e.galleria.templates)("numVisible",e.numVisible)("responsiveOptions",e.galleria.responsiveOptions)("circular",e.galleria.circular)("isVertical",e.isVertical())("contentHeight",e.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",e.galleria.showThumbnailNavigators)("slideShowActive",e.slideShowActive)}}function Tt(t,r){if(t&1&&(h(0,"div",15),f(1,"p-galleriaItemSlot",16),p()),t&2){let e=s(2);c(),l("templates",e.galleria.templates)}}function Ct(t,r){if(t&1){let e=x();h(0,"div",1),d(1,xt,3,4,"button",2)(2,wt,2,1,"div",3),h(3,"div",4)(4,"p-galleriaItem",5),_("onActiveIndexChange",function(a){u(e);let n=s();return m(n.onActiveIndexChange(a))})("startSlideShow",function(){u(e);let a=s();return m(a.startSlideShow())})("stopSlideShow",function(){u(e);let a=s();return m(a.stopSlideShow())}),p(),d(5,yt,1,11,"p-galleriaThumbnails",6),p(),d(6,Tt,2,1,"div",7),p()}if(t&2){let e=s();ne(e.galleriaClass()),l("ngClass",Ce(24,vt,e.galleria.fullScreen,e.galleria.showIndicatorsOnItem,e.galleria.showItemNavigatorsOnHover&&!e.galleria.fullScreen))("ngStyle",e.galleria.fullScreen?le(28,bt):e.galleria.containerStyle)("pFocusTrapDisabled",!e.fullScreen),y("id",e.id)("role","region"),c(),l("ngIf",e.galleria.fullScreen),c(),l("ngIf",e.galleria.templates&&(e.galleria.headerFacet||e.galleria.headerTemplate)),c(),y("aria-live",e.galleria.autoPlay?"polite":"off"),c(),l("id",e.id)("value",e.value)("activeIndex",e.activeIndex)("circular",e.galleria.circular)("templates",e.galleria.templates)("showIndicators",e.galleria.showIndicators)("changeItemOnIndicatorHover",e.galleria.changeItemOnIndicatorHover)("indicatorFacet",e.galleria.indicatorFacet)("captionFacet",e.galleria.captionFacet)("showItemNavigators",e.galleria.showItemNavigators)("autoPlay",e.galleria.autoPlay)("slideShowActive",e.slideShowActive),c(),l("ngIf",e.galleria.showThumbnails),c(),l("ngIf",e.shouldRenderFooter())}}function St(t,r){t&1&&Ie(0)}function kt(t,r){if(t&1&&(j(0),d(1,St,1,0,"ng-container",1),z()),t&2){let e=s();c(),l("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",e.context)}}var Vt=t=>({"p-galleria-prev-button p-galleria-nav-button":!0,"p-disabled":t}),Ft=t=>({"p-galleria-next-button p-galleria-nav-button":!0,"p-disabled":t}),$t=t=>({"p-galleria-indicator":!0,"p-galleria-indicator-active":t});function Nt(t,r){t&1&&f(0,"ChevronLeftIcon",9),t&2&&l("styleClass","p-galleria-prev-icon")}function At(t,r){}function Ot(t,r){t&1&&d(0,At,0,0,"ng-template")}function Dt(t,r){if(t&1){let e=x();h(0,"button",6),_("click",function(a){u(e);let n=s();return m(n.navBackward(a))})("focus",function(){u(e);let a=s();return m(a.onButtonFocus("left"))})("blur",function(){u(e);let a=s();return m(a.onButtonBlur("left"))}),d(1,Nt,1,1,"ChevronLeftIcon",7)(2,Ot,1,0,null,8),p()}if(t&2){let e=s();l("ngClass",k(4,Vt,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),c(),l("ngIf",!e.galleria.itemPreviousIconTemplate&&!e.galleria._itemPreviousIconTemplate),c(),l("ngTemplateOutlet",e.galleria.itemPreviousIconTemplate||e.galleria._itemPreviousIconTemplate)}}function Et(t,r){t&1&&f(0,"ChevronRightIcon",9),t&2&&l("styleClass","p-galleria-next-icon")}function Pt(t,r){}function Bt(t,r){t&1&&d(0,Pt,0,0,"ng-template")}function Gt(t,r){if(t&1){let e=x();h(0,"button",6),_("click",function(a){u(e);let n=s();return m(n.navForward(a))})("focus",function(){u(e);let a=s();return m(a.onButtonFocus("right"))})("blur",function(){u(e);let a=s();return m(a.onButtonBlur("right"))}),d(1,Et,1,1,"ChevronRightIcon",7)(2,Bt,1,0,null,8),p()}if(t&2){let e=s();l("ngClass",k(4,Ft,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),c(),l("ngIf",!e.galleria.itemNextIconTemplate&&!e.galleria._itemNextIconTemplate),c(),l("ngTemplateOutlet",e.galleria.itemNextIconTemplate||e.galleria._itemNextIconTemplate)}}function Mt(t,r){if(t&1&&(h(0,"div",10),f(1,"p-galleriaItemSlot",11),p()),t&2){let e=s();c(),l("item",e.activeItem)("templates",e.templates)}}function Rt(t,r){t&1&&f(0,"button",17)}function Ht(t,r){if(t&1){let e=x();h(0,"li",14),_("click",function(){let a=u(e).index,n=s(2);return m(n.onIndicatorClick(a))})("mouseenter",function(){let a=u(e).index,n=s(2);return m(n.onIndicatorMouseEnter(a))})("keydown",function(a){let n=u(e).index,o=s(2);return m(o.onIndicatorKeyDown(a,n))}),d(1,Rt,1,0,"button",15),f(2,"p-galleriaItemSlot",16),p()}if(t&2){let e=r.index,i=s(2);l("ngClass",k(7,$t,i.isIndicatorItemActive(e))),y("aria-label",i.ariaPageLabel(e+1))("aria-selected",i.activeIndex===e)("aria-controls",i.id+"_item_"+e),c(),l("ngIf",!i.indicatorFacet&&!i.galleria.indicatorTemplate),c(),l("index",e)("templates",i.templates)}}function Lt(t,r){if(t&1&&(h(0,"ul",12),d(1,Ht,3,9,"li",13),p()),t&2){let e=s();c(),l("ngForOf",e.value)}}var Qt=["itemsContainer"],jt=t=>({height:t}),zt=t=>({"p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t}),qt=(t,r,e,i)=>({"p-galleria-thumbnail-item":!0,"p-galleria-thumbnail-item-current":t,"p-galleria-thumbnail-item-active":r,"p-galleria-thumbnail-item-start":e,"p-galleria-thumbnail-item-end":i}),Kt=t=>({"p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t});function Ut(t,r){t&1&&f(0,"ChevronLeftIcon",11),t&2&&l("styleClass","p-galleria-thumbnail-prev-icon")}function Zt(t,r){t&1&&f(0,"ChevronUpIcon",11),t&2&&l("styleClass","p-galleria-thumbnail-prev-icon")}function Wt(t,r){if(t&1&&(j(0),d(1,Ut,1,1,"ChevronLeftIcon",10)(2,Zt,1,1,"ChevronUpIcon",10),z()),t&2){let e=s(2);c(),l("ngIf",!e.isVertical),c(),l("ngIf",e.isVertical)}}function Xt(t,r){}function Yt(t,r){t&1&&d(0,Xt,0,0,"ng-template")}function Jt(t,r){if(t&1){let e=x();h(0,"button",7),_("click",function(a){u(e);let n=s();return m(n.navBackward(a))}),d(1,Wt,3,2,"ng-container",8)(2,Yt,1,0,null,9),p()}if(t&2){let e=s();l("ngClass",k(5,zt,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),y("aria-label",e.ariaPrevButtonLabel()),c(),l("ngIf",!e.galleria.previousThumbnailIconTemplate&&!e.galleria._previousThumbnailIconTemplate),c(),l("ngTemplateOutlet",e.galleria.previousThumbnailIconTemplate||e.galleria._previousThumbnailIconTemplate)}}function ei(t,r){if(t&1){let e=x();h(0,"div",12),_("keydown",function(a){let n=u(e).index,o=s();return m(o.onThumbnailKeydown(a,n))}),h(1,"div",13),_("click",function(){let a=u(e).index,n=s();return m(n.onItemClick(a))})("touchend",function(){let a=u(e).index,n=s();return m(n.onItemClick(a))})("keydown.enter",function(){let a=u(e).index,n=s();return m(n.onItemClick(a))}),f(2,"p-galleriaItemSlot",14),p()()}if(t&2){let e=r.$implicit,i=r.index,a=s();l("ngClass",Se(10,qt,a.activeIndex===i,a.isItemActive(i),a.firstItemAciveIndex()===i,a.lastItemActiveIndex()===i)),y("aria-selected",a.activeIndex===i)("aria-controls",a.containerId+"_item_"+i)("data-pc-section","thumbnailitem")("data-p-active",a.activeIndex===i),c(),y("tabindex",a.activeIndex===i?0:-1)("aria-current",a.activeIndex===i?"page":void 0)("aria-label",a.ariaPageLabel(i+1)),c(),l("item",e)("templates",a.templates)}}function ti(t,r){t&1&&f(0,"ChevronRightIcon",16),t&2&&l("ngClass","p-galleria-thumbnail-next-icon")}function ii(t,r){t&1&&f(0,"ChevronDownIcon",16),t&2&&l("ngClass","p-galleria-thumbnail-next-icon")}function ai(t,r){if(t&1&&(j(0),d(1,ti,1,1,"ChevronRightIcon",15)(2,ii,1,1,"ChevronDownIcon",15),z()),t&2){let e=s(2);c(),l("ngIf",!e.isVertical),c(),l("ngIf",e.isVertical)}}function ni(t,r){}function li(t,r){t&1&&d(0,ni,0,0,"ng-template")}function ri(t,r){if(t&1){let e=x();h(0,"button",7),_("click",function(a){u(e);let n=s();return m(n.navForward(a))}),d(1,ai,3,2,"ng-container",8)(2,li,1,0,null,9),p()}if(t&2){let e=s();l("ngClass",k(5,Kt,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),y("aria-label",e.ariaNextButtonLabel()),c(),l("ngIf",!e.galleria.nextThumbnailIconTemplate&&!e.galleria._nextThumbnailIconTemplate),c(),l("ngTemplateOutlet",e.galleria.nextThumbnailIconTemplate||e.galleria._nextThumbnailIconTemplate)}}var oi=({dt:t})=>`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: ${t("galleria.border.width")};
    border-color: ${t("galleria.border.color")};
    border-radius: ${t("galleria.border.radius")};
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: ${t("galleria.nav.button.background")};
    color: ${t("galleria.nav.button.color")};
    width: ${t("galleria.nav.button.size")};
    height: ${t("galleria.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    margin: calc(-1 * calc(${t("galleria.nav.button.size")}) / 2) ${t("galleria.nav.button.gutter")} 0 ${t("galleria.nav.button.gutter")};
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: ${t("galleria.nav.button.hover.background")};
    color: ${t("galleria.nav.button.hover.color")};
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: ${t("galleria.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.nav.button.focus.ring.width")} ${t("galleria.nav.button.focus.ring.style")} ${t("galleria.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.nav.button.focus.ring.offset")};
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: ${t("galleria.nav.icon.size")};
    width: ${t("galleria.nav.icon.size")};
    height: ${t("galleria.nav.icon.size")};
}

.p-galleria-prev-button {
    border-radius: ${t("galleria.nav.button.prev.border.radius")};
    left: 0;
}

.p-galleria-next-button {
    border-radius: ${t("galleria.nav.button.next.border.radius")};
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity ${t("galleria.transition.duration")} ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${t("galleria.caption.background")};
    color: ${t("galleria.caption.color")};
    padding: ${t("galleria.caption.padding")};
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 ${t("galleria.thumbnail.nav.button.gutter")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: ${t("galleria.thumbnail.nav.button.color")};
    width: ${t("galleria.thumbnail.nav.button.size")};
    height: ${t("galleria.thumbnail.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.thumbnail.nav.button.border.radius")};
}

.p-galleria-thumbnail-nav-button:hover {
    background: ${t("galleria.thumbnail.nav.button.hover.background")};
    color: ${t("galleria.thumbnail.nav.button.hover.color")};
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: ${t("galleria.thumbnail.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.thumbnail.nav.button.focus.ring.width")} ${t("galleria.thumbnail.nav.button.focus.ring.style")} ${t("galleria.thumbnail.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.thumbnail.nav.button.focus.ring.offset")};
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: ${t("galleria.thumbnail.nav.button.icon.size")};
    width: ${t("galleria.thumbnail.nav.button.icon.size")};
    height: ${t("galleria.thumbnail.nav.button.icon.size")};
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: ${t("galleria.thumbnails.content.background")};
    padding: ${t("galleria.thumbnails.content.padding")};
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("galleria.indicator.list.padding")};
    gap: ${t("galleria.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: ${t("galleria.indicator.button.background")};
    width: ${t("galleria.indicator.button.width")};
    height: ${t("galleria.indicator.button.height")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.indicator.button.border.radius")};
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: ${t("galleria.indicator.button.hover.background")};
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: ${t("galleria.indicator.button.focus.ring.shadow")};
    outline: ${t("galleria.indicator.button.focus.ring.width")} ${t("galleria.indicator.button.focus.ring.style")} ${t("galleria.indicator.button.focus.ring.color")};
    outline-offset: ${t("galleria.indicator.button.focus.ring.offset")};
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.indicator.button.active.background")};
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: ${t("galleria.inset.indicator.list.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: ${t("galleria.inset.indicator.button.hover.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.active.background")};
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: ${t("galleria.close.button.gutter")};
    background: ${t("galleria.close.button.background")};
    color: ${t("galleria.close.button.color")};
    width: ${t("galleria.close.button.size")};
    height: ${t("galleria.close.button.size")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: ${t("galleria.close.button.border.radius")};
    outline-color: transparent;
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
}

.p-galleria-close-icon {
    font-size: ${t("galleria.close.button.icon.size")};
    width: ${t("galleria.close.button.icon.size")};
    height: ${t("galleria.close.button.icon.size")};
}

.p-galleria-close-button:hover {
    background: ${t("galleria.close.button.hover.background")};
    color: ${t("galleria.close.button.hover.color")};
}

.p-galleria-close-button:focus-visible {
    box-shadow: ${t("galleria.close.button.focus.ring.shadow")};
    outline: ${t("galleria.close.button.focus.ring.width")} ${t("galleria.close.button.focus.ring.style")} ${t("galleria.close.button.focus.ring.color")};
    outline-offset: ${t("galleria.close.button.focus.ring.offset")};
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`,si={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:({instance:t})=>{let r=t.$attrs.showThumbnails&&t.getPositionClass("p-galleria-thumbnails",t.$attrs.thumbnailsPosition),e=t.$attrs.showIndicators&&t.getPositionClass("p-galleria-indicators",t.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},r,e]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:({instance:t})=>["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:({instance:t})=>["p-galleria-next-button p-galleria-nav-button",{"p-disabled":t.isNavForwardDisabled()}],nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:({instance:t,index:r})=>["p-galleria-indicator",{"p-galleria-indicator-active":t.isIndicatorItemActive(r)}],indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:({instance:t})=>["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:({instance:t,index:r,activeIndex:e})=>["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e===r,"p-galleria-thumbnail-item-active":t.isItemActive(r),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===r,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===r}],thumbnail:"p-galleria-thumbnail",thumbnailNextButton:({instance:t})=>["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavForwardDisabled()}],thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},Qe=(()=>{class t extends X{name="galleria";theme=oi;classes=si;static \u0275fac=(()=>{let e;return function(a){return(e||(e=D(t)))(a||t)}})();static \u0275prov=H({token:t,factory:t.\u0275fac})}return t})();var ee=(()=>{class t extends R{platformId;element;cd;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;shouldStopAutoplayByClick=!0;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}activeIndexChange=new C;visibleChange=new C;mask;container;_visible=!1;_activeIndex=0;headerTemplate;headerFacet;footerTemplate;footerFacet;indicatorTemplate;indicatorFacet;captionTemplate;captionFacet;_closeIconTemplate;closeIconTemplate;_previousThumbnailIconTemplate;previousThumbnailIconTemplate;_nextThumbnailIconTemplate;nextThumbnailIconTemplate;_itemPreviousIconTemplate;itemPreviousIconTemplate;_itemNextIconTemplate;itemNextIconTemplate;_itemTemplate;itemTemplate;_thumbnailTemplate;thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=O(Qe);constructor(e,i,a){super(),this.platformId=e,this.element=i,this.cd=a}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerFacet=e.template;break;case"footer":this.footerFacet=e.template;break;case"indicator":this.indicatorFacet=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"itemnexticon":this.itemNextIconTemplate=e.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=e.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=e.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=e.template;break;case"caption":this.captionFacet=e.template;break;case"item":this.itemTemplate=e.template;break;case"thumbnail":this.thumbnailTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.value&&e.value.currentValue?.length<this.numVisible?this.numVisibleLimit=e.value.currentValue.length:this.numVisibleLimit=0}onMaskHide(){this.visible=!1,this.visibleChange.emit(!1)}onActiveItemChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeIndexChange.emit(e))}onAnimationStart(e){switch(e.toState){case"visible":this.enableModality(),setTimeout(()=>{Oe(W(this.container.nativeElement,'[data-pc-section="closebutton"]'))},25);break;case"void":ue(this.mask?.nativeElement,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.disableModality();break}}enableModality(){Ne(),this.cd.markForCheck(),this.mask&&de.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){Ae(),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&de.clear(this.mask.nativeElement)}ngOnDestroy(){this.fullScreen&&Z(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(i){return new(i||t)(I(ae),I(ie),I(K))};static \u0275cmp=S({type:t,selectors:[["p-galleria"]],contentQueries:function(i,a,n){if(i&1&&(w(n,Ze,4),w(n,We,4),w(n,Xe,4),w(n,Ye,4),w(n,Je,4),w(n,et,4),w(n,tt,4),w(n,it,4),w(n,at,4),w(n,nt,4),w(n,lt,4),w(n,Be,4)),i&2){let o;v(o=b())&&(a.headerTemplate=o.first),v(o=b())&&(a.footerTemplate=o.first),v(o=b())&&(a.indicatorTemplate=o.first),v(o=b())&&(a.captionTemplate=o.first),v(o=b())&&(a._closeIconTemplate=o.first),v(o=b())&&(a._previousThumbnailIconTemplate=o.first),v(o=b())&&(a._nextThumbnailIconTemplate=o.first),v(o=b())&&(a._itemPreviousIconTemplate=o.first),v(o=b())&&(a._itemNextIconTemplate=o.first),v(o=b())&&(a._itemTemplate=o.first),v(o=b())&&(a._thumbnailTemplate=o.first),v(o=b())&&(a.templates=o)}},viewQuery:function(i,a){if(i&1&&(P(rt,5),P(ot,5)),i&2){let n;v(n=b())&&(a.mask=n.first),v(n=b())&&(a.container=n.first)}},inputs:{activeIndex:"activeIndex",fullScreen:[2,"fullScreen","fullScreen",g],id:"id",value:"value",numVisible:[2,"numVisible","numVisible",$],responsiveOptions:"responsiveOptions",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showThumbnailNavigators:[2,"showThumbnailNavigators","showThumbnailNavigators",g],showItemNavigatorsOnHover:[2,"showItemNavigatorsOnHover","showItemNavigatorsOnHover",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],circular:[2,"circular","circular",g],autoPlay:[2,"autoPlay","autoPlay",g],shouldStopAutoplayByClick:[2,"shouldStopAutoplayByClick","shouldStopAutoplayByClick",g],transitionInterval:[2,"transitionInterval","transitionInterval",$],showThumbnails:[2,"showThumbnails","showThumbnails",g],thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:[2,"showIndicators","showIndicators",g],showIndicatorsOnItem:[2,"showIndicatorsOnItem","showIndicatorsOnItem",g],indicatorsPosition:"indicatorsPosition",baseZIndex:[2,"baseZIndex","baseZIndex",$],maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},standalone:!1,features:[q([Qe]),F,E,te],decls:3,vars:2,consts:[["windowed",""],["container",""],["mask",""],[4,"ngIf","ngIfElse"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass"],[3,"value","activeIndex","numVisible","ngStyle","fullScreen","maskHide","activeItemChange",4,"ngIf"],[3,"maskHide","activeItemChange","value","activeIndex","numVisible","ngStyle","fullScreen"],[3,"activeItemChange","value","activeIndex","numVisible"]],template:function(i,a){if(i&1&&d(0,ht,3,1,"div",3)(1,pt,1,3,"ng-template",null,0,ke),i&2){let n=ye(2);l("ngIf",a.fullScreen)("ngIfElse",n)}},dependencies:()=>[B,N,U,ci],encapsulation:2,data:{animation:[$e("animation",[ce("void => visible",[se({transform:"scale(0.7)",opacity:0}),oe("{{showTransitionParams}}")]),ce("visible => void",[oe("{{hideTransitionParams}}",se({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),ci=(()=>{class t extends R{galleria;cd;differs;elementRef;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}value=[];numVisible;fullScreen;maskHide=new C;activeItemChange=new C;closeButton;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(e,i,a,n){super(),this.galleria=e,this.cd=i,this.differs=a,this.elementRef=n,this.id=this.galleria.id||Pe("pn_id_"),this.differ=this.differs.find(this.galleria).create()}handleFullscreenChange(e){document?.fullscreenElement===this.elementRef.nativeElement?.children[0]?this.fullScreen=!0:this.fullScreen=!1}ngDoCheck(){if(V(this.galleria.platformId)){let e=this.differ.diff(this.galleria);e&&e.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate}galleriaClass(){let e=this.galleria.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.galleria.thumbnailsPosition),i=this.galleria.showIndicators&&this.getPositionClass("p-galleria-indicators",this.galleria.indicatorsPosition);return(this.galleria.containerClass?this.galleria.containerClass+" ":"")+(e?e+" ":"")+(i?i+" ":"")}startSlideShow(){V(this.galleria.platformId)&&(this.interval=setInterval(()=>{let e=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(e),this.activeIndex=e},this.galleria.transitionInterval),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay&&!this.galleria.shouldStopAutoplayByClick||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(e,i){let n=["top","left","bottom","right"].find(o=>o===i);return n?`${e}-${n}`:""}isVertical(){return this.galleria.thumbnailsPosition==="left"||this.galleria.thumbnailsPosition==="right"}onActiveIndexChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeItemChange.emit(this.activeIndex))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}static \u0275fac=function(i){return new(i||t)(I(ee),I(K),I(Ve),I(ie))};static \u0275cmp=S({type:t,selectors:[["p-galleriaContent"]],viewQuery:function(i,a){if(i&1&&P(gt,5),i&2){let n;v(n=b())&&(a.closeButton=n.first)}},hostBindings:function(i,a){i&1&&_("fullscreenchange",function(o){return a.handleFullscreenChange(o)},!1,be)},inputs:{activeIndex:"activeIndex",value:"value",numVisible:[2,"numVisible","numVisible",$],fullScreen:[2,"fullScreen","fullScreen",g]},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},standalone:!1,features:[F,E],decls:1,vars:1,consts:[["pFocusTrap","",3,"ngClass","ngStyle","class","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["type","button","class","p-galleria-close-button",3,"click",4,"ngIf"],["class","p-galleria-header",4,"ngIf"],[1,"p-galleria-content"],[3,"onActiveIndexChange","startSlideShow","stopSlideShow","id","value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow",4,"ngIf"],["class","p-galleria-footer",4,"ngIf"],["type","button",1,"p-galleria-close-button",3,"click"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-header"],["type","header",3,"templates"],[3,"onActiveIndexChange","stopSlideShow","containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive"],[1,"p-galleria-footer"],["type","footer",3,"templates"]],template:function(i,a){i&1&&d(0,Ct,7,29,"div",0),i&2&&l("ngIf",a.value&&a.value.length>0)},dependencies:()=>[B,N,G,U,ge,He,ve,ui,mi],encapsulation:2,changeDetection:0})}return t})(),ve=(()=>{class t{templates;index;get item(){return this._item}shouldRender(){return this.contentTemplate||this.galleria._itemTemplate||this.galleria.itemTemplate||this.galleria.captionTemplate||this.galleria.captionTemplate||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate||this.galleria.footerTemplate}galleria=O(ee);set item(e){this._item=e,this.templates&&this.templates?.toArray().length>0?this.templates.forEach(i=>{if(i.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=i.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=i.template;break}}):this.getContentTemplate()}getContentTemplate(){switch(this.type){case"item":this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate;break;case"caption":this.context={$implicit:this.item},this.contentTemplate=this.galleria.captionTemplate||this.galleria.captionFacet;break;case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=this.galleria.indicatorTemplate||this.galleria.indicatorFacet;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=this.galleria.footerTemplate||this.galleria.footerFacet;break;default:this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate}}type;contentTemplate;context;_item;ngAfterContentInit(){this.templates&&this.templates.toArray().length>0?this.templates?.forEach(e=>{if(e.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=e.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=e.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=e.template;break;default:this.context={$implicit:this.item},this.contentTemplate=e.template;break}}):this.getContentTemplate()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["p-galleriaItemSlot"]],inputs:{templates:"templates",index:[2,"index","index",$],item:"item",type:"type"},standalone:!1,features:[F],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,a){i&1&&d(0,kt,2,2,"ng-container",0),i&2&&l("ngIf",a.shouldRender())},dependencies:[N,G],encapsulation:2,changeDetection:0})}return t})(),ui=(()=>{class t{galleria;id;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new C;stopSlideShow=new C;onActiveIndexChange=new C;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;leftButtonFocused=!1;rightButtonFocused=!1;constructor(e){this.galleria=e}ngOnChanges({autoPlay:e}){e?.currentValue&&this.startSlideShow.emit(),e&&e.currentValue===!1&&this.stopTheSlideShow()}next(){let e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.onActiveIndexChange.emit(i)}prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.onActiveIndexChange.emit(i)}onButtonFocus(e){e==="left"?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(e){e==="left"?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(e){this.stopTheSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()}onIndicatorClick(e){this.stopTheSlideShow(),this.onActiveIndexChange.emit(e)}onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(e))}onIndicatorKeyDown(e,i){switch(e.code){case"Enter":case"Space":this.stopTheSlideShow(),this.onActiveIndexChange.emit(i),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0}isIndicatorItemActive(e){return this.activeIndex===e}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(I(ee))};static \u0275cmp=S({type:t,selectors:[["p-galleriaItem"]],hostAttrs:[1,"p-galleria-items-container"],inputs:{id:"id",circular:[2,"circular","circular",g],value:"value",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showIndicators:[2,"showIndicators","showIndicators",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],autoPlay:[2,"autoPlay","autoPlay",g],templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},standalone:!1,features:[F,te],decls:7,vars:9,consts:[[1,"p-galleria-items"],["type","button","role","navigation",3,"ngClass","disabled","click","focus","blur",4,"ngIf"],["role","group",1,"p-galleria-item",3,"id"],["type","item",1,"p-galleria-item",3,"item","templates"],["class","p-galleria-caption",4,"ngIf"],["class","p-galleria-indicator-list",4,"ngIf"],["type","button","role","navigation",3,"click","focus","blur","ngClass","disabled"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-caption"],["type","caption",3,"item","templates"],[1,"p-galleria-indicator-list"],["tabindex","0",3,"ngClass","click","mouseenter","keydown",4,"ngFor","ngForOf"],["tabindex","0",3,"click","mouseenter","keydown","ngClass"],["type","button","tabIndex","-1","class","p-galleria-indicator-button",4,"ngIf"],["type","indicator",3,"index","templates"],["type","button","tabIndex","-1",1,"p-galleria-indicator-button"]],template:function(i,a){i&1&&(h(0,"div",0),d(1,Dt,3,6,"button",1),h(2,"div",2),f(3,"p-galleriaItemSlot",3),p(),d(4,Gt,3,6,"button",1)(5,Mt,2,2,"div",4),p(),d(6,Lt,2,1,"ul",5)),i&2&&(c(),l("ngIf",a.showItemNavigators),c(),l("id",a.id+"_item_"+a.activeIndex),y("aria-label",a.ariaSlideNumber(a.activeIndex+1))("aria-roledescription",a.ariaSlideLabel()),c(),l("item",a.activeItem)("templates",a.templates),c(),l("ngIf",a.showItemNavigators),c(),l("ngIf",a.captionFacet||a.galleria.captionTemplate),c(),l("ngIf",a.showIndicators))},dependencies:()=>[B,re,N,G,J,Y,ve],encapsulation:2,changeDetection:0})}return t})(),mi=(()=>{class t{galleria;document;platformId;renderer;cd;containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new C;stopSlideShow=new C;itemsContainer;get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e,this._oldNumVisible=this.d_numVisible,this.d_numVisible=e}get activeIndex(){return this._activeIndex}set activeIndex(e){this._oldactiveIndex=this._activeIndex,this._activeIndex=e}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;constructor(e,i,a,n,o){this.galleria=e,this.document=i,this.platformId=a,this.renderer=n,this.cd=o}ngOnInit(){V(this.platformId)&&(this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners())}ngAfterContentChecked(){let e=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(this._activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?e=this._activeIndex*-1+this.getMedianItemIndex()+1:e=this._activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(Z(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}ngAfterViewInit(){V(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),this.document.body.appendChild(this.thumbnailsStyle));let e=`
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((i,a)=>{let n=i.breakpoint,o=a.breakpoint,T=null;return n==null&&o!=null?T=-1:n!=null&&o==null?T=1:n==null&&o==null?T=0:typeof n=="string"&&typeof o=="string"?T=n.localeCompare(o,void 0,{numeric:!0}):T=n<o?-1:n>o?1:0,-1*T});for(let i=0;i<this.sortedResponsiveOptions.length;i++){let a=this.sortedResponsiveOptions[i];e+=`
                    @media screen and (max-width: ${a.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/a.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=e,Ee(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce)}calculatePosition(){if(V(this.platformId)&&this.itemsContainer&&this.sortedResponsiveOptions){let e=window.innerWidth,i={numVisible:this._numVisible};for(let a=0;a<this.sortedResponsiveOptions.length;a++){let n=this.sortedResponsiveOptions[a];parseInt(n.breakpoint,10)>=e&&(i=n)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible,this.cd.markForCheck())}}getTabIndex(e){return this.isItemActive(e)?0:null}navForward(e){this.stopTheSlideShow();let i=this._activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let a=this.circular&&this.value.length-1===this._activeIndex?0:i;this.onActiveIndexChange.emit(a),e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow();let i=this._activeIndex!==0?this._activeIndex-1:0,a=i+this.totalShiftedItems;this.d_numVisible-a-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let n=this.circular&&this._activeIndex===0?this.value.length-1:i;this.onActiveIndexChange.emit(n),e.cancelable&&e.preventDefault()}onItemClick(e){this.stopTheSlideShow();let i=e;if(i!==this._activeIndex){let a=i+this.totalShiftedItems,n=0;i<this._activeIndex?(n=this.d_numVisible-a-1-this.getMedianItemIndex(),n>0&&-1*this.totalShiftedItems!==0&&this.step(n)):(n=this.getMedianItemIndex()-a,n<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(n)),this.activeIndex=i,this.onActiveIndexChange.emit(this.activeIndex)}}onThumbnailKeydown(e,i){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break;default:break}}onRightKey(){let e=A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=e.findIndex(o=>De(o,"data-p-active")===!0),a=W(this.itemsContainer.nativeElement,'[tabindex="0"]'),n=e.findIndex(o=>o===a.parentElement);e[n].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=W(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(a=>a===i.parentElement)}changedFocusedIndicator(e,i){let a=A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]');a[e].children[0].tabIndex="-1",a[i].children[0].tabIndex="0",a[i].children[0].focus()}step(e){let i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this._activeIndex?i=0:e>0&&this._activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.itemsContainer&&(Z(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(e,i){i<0?this.navForward(e):this.navBackward(e)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(ue(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}isNavBackwardDisabled(){return!this.circular&&this._activeIndex===0||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e}bindDocumentListeners(){if(V(this.platformId)){let e=this.document.defaultView||"window";this.documentResizeListener=this.renderer.listen(e,"resize",()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(I(ee),I(Fe),I(ae),I(fe),I(K))};static \u0275cmp=S({type:t,selectors:[["p-galleriaThumbnails"]],viewQuery:function(i,a){if(i&1&&P(Qt,5),i&2){let n;v(n=b())&&(a.itemsContainer=n.first)}},inputs:{containerId:"containerId",value:"value",isVertical:[2,"isVertical","isVertical",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],circular:[2,"circular","circular",g],responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},standalone:!1,features:[F],decls:8,vars:6,consts:[["itemsContainer",""],[1,"p-galleria-thumbnails"],[1,"p-galleria-thumbnails-content"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-galleria-thumbnails-viewport",3,"ngStyle"],["role","tablist",1,"p-galleria-thumbnail-items",3,"transitionend","touchstart","touchmove"],[3,"ngClass","keydown",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"click","ngClass","disabled"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[3,"keydown","ngClass"],[1,"p-galleria-thumbnail",3,"click","touchend","keydown.enter"],["type","thumbnail",3,"item","templates"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,a){if(i&1){let n=x();h(0,"div",1)(1,"div",2),d(2,Jt,3,7,"button",3),h(3,"div",4)(4,"div",5,0),_("transitionend",function(){return u(n),m(a.onTransitionEnd())})("touchstart",function(T){return u(n),m(a.onTouchStart(T))})("touchmove",function(T){return u(n),m(a.onTouchMove(T))}),d(6,ei,3,15,"div",6),p()(),d(7,ri,3,7,"button",3),p()()}i&2&&(c(2),l("ngIf",a.showThumbnailNavigators),c(),l("ngStyle",k(4,jt,a.isVertical?a.contentHeight:"")),c(3),l("ngForOf",a.value),c(),l("ngIf",a.showThumbnailNavigators))},dependencies:()=>[B,re,N,G,U,Ge,J,pe,he,Y,ve],encapsulation:2,changeDetection:0})}return t})(),Ki=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Q({type:t});static \u0275inj=L({imports:[M,me,ge,J,pe,he,Y,Me,Re,M,me]})}return t})();export{Ue as a,xi as b,ee as c,Ki as d};
