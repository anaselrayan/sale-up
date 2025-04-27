import{a as Xe,b as Je,c as it}from"./chunk-7TNYY5WH.js";import{i as ke}from"./chunk-ZWE3YAKD.js";import{f as Se,g as fe,h as be}from"./chunk-CVJAGL52.js";import{A as He,Da as te,I as we,Q as Ge,S as Qe,W as qe,Ya as G,Za as We,cb as Ye,fb as ie,g as se,h as Re,i as he,j as Le,la as Ke,n as Me,na as Ze,nb as Ve,rb as et,sa as Ue,sb as tt,va as ge,wa as H,x as ee,xa as Ce,y as z,z as ze}from"./chunk-6GUNNAMA.js";import{$ as q,$a as _,Aa as ae,Ab as o,Ac as U,Bc as je,Cb as Ee,Dc as g,Ea as Ie,Eb as $,Ec as F,Jb as d,Kb as h,Lb as I,Mb as D,Nb as N,Nc as me,Ob as oe,Pb as y,Rb as v,Sb as s,Tb as Pe,Ub as Oe,Uc as j,Vc as ye,Wc as E,Xb as x,Ya as ce,Yb as le,Zb as f,Zc as W,_ as Q,_a as c,_b as b,_c as R,bc as re,cc as Ae,db as pe,dc as De,dd as L,ea as P,fd as M,jc as Z,kc as xe,lb as k,lc as S,ld as de,ma as ve,mb as K,mc as ue,md as Y,na as u,nc as Ne,oa as m,oc as Be,od as X,pb as A,pd as Te,qd as J,ra as O,rb as V,sb as p,wa as w,yc as B,zb as T}from"./chunk-X5E3IHQQ.js";var st=["*"],ct=({dt:t})=>`
    .p-fluid{
        width:100%
    }
`,pt={root:"p-fluid"},nt=(()=>{class t extends te{name="fluid";classes=pt;theme=ct;static \u0275fac=(()=>{let e;return function(n){return(e||(e=O(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var ut=(()=>{class t extends G{_componentStyle=P(nt);static \u0275fac=(()=>{let e;return function(n){return(e||(e=O(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(i,n){i&2&&Ee("p-fluid",!0)},features:[Z([nt]),A],ngContentSelectors:st,decls:1,vars:0,template:function(i,n){i&1&&(Pe(),Oe(0))},dependencies:[L],encapsulation:2,changeDetection:0})}return t})(),mn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=K({type:t});static \u0275inj=q({imports:[ut]})}return t})();var dt=["header"],ht=["footer"],gt=["indicator"],ft=["caption"],bt=["closeicon"],_t=["previousthumbnailicon"],vt=["nextthumbnailicon"],It=["itempreviousicon"],xt=["itemnexticon"],yt=["item"],Tt=["thumbnail"],wt=["mask"],Ct=["container"],St=()=>({"p-galleria-mask p-overlay-mask p-overlay-mask-enter":!0}),kt=(t,l)=>({showTransitionParams:t,hideTransitionParams:l}),Vt=t=>({value:"visible",params:t});function $t(t,l){if(t&1){let e=y();d(0,"p-galleriaContent",7),v("@animation.start",function(n){u(e);let a=s(3);return m(a.onAnimationStart(n))})("@animation.done",function(n){u(e);let a=s(3);return m(a.onAnimationEnd(n))})("maskHide",function(){u(e);let n=s(3);return m(n.onMaskHide())})("activeItemChange",function(n){u(e);let a=s(3);return m(a.onActiveItemChange(n))}),h()}if(t&2){let e=s(3);o("@animation",S(9,Vt,ue(6,kt,e.showTransitionOptions,e.hideTransitionOptions)))("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)("ngStyle",e.containerStyle)("fullScreen",e.fullScreen)}}function Ft(t,l){if(t&1&&(d(0,"div",5,2),p(2,$t,1,11,"p-galleriaContent",6),h()),t&2){let e=s(2);$(e.maskClass),o("ngClass",xe(6,St)),T("role",e.fullScreen?"dialog":"region")("aria-modal",e.fullScreen?"true":void 0),c(2),o("ngIf",e.visible)}}function Et(t,l){if(t&1&&(d(0,"div",null,1),p(2,Ft,3,7,"div",4),h()),t&2){let e=s();c(2),o("ngIf",e.maskVisible)}}function Pt(t,l){if(t&1){let e=y();d(0,"p-galleriaContent",8),v("activeItemChange",function(n){u(e);let a=s();return m(a.onActiveItemChange(n))}),h()}if(t&2){let e=s();o("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)}}var Ot=["closeButton"],At=(t,l,e)=>({"p-galleria p-component":!0,"p-galleria-fullscreen":t,"p-galleria-inset-indicators":l,"p-galleria-hover-navigators":e}),Dt=()=>({});function Nt(t,l){t&1&&I(0,"TimesIcon",11),t&2&&o("styleClass","p-galleria-close-icon")}function Bt(t,l){}function jt(t,l){t&1&&p(0,Bt,0,0,"ng-template")}function Rt(t,l){if(t&1){let e=y();d(0,"button",8),v("click",function(){u(e);let n=s(2);return m(n.maskHide.emit())}),p(1,Nt,1,1,"TimesIcon",9)(2,jt,1,0,null,10),h()}if(t&2){let e=s(2);T("aria-label",e.closeAriaLabel())("data-pc-section","closebutton"),c(),o("ngIf",!e.galleria.closeIconTemplate&&!e.galleria._closeIconTemplate),c(),o("ngTemplateOutlet",e.galleria.closeIconTemplate||e.galleria._closeIconTemplate)}}function Lt(t,l){if(t&1&&(d(0,"div",12),I(1,"p-galleriaItemSlot",13),h()),t&2){let e=s(2);c(),o("templates",e.galleria.templates)}}function Mt(t,l){if(t&1){let e=y();d(0,"p-galleriaThumbnails",14),v("onActiveIndexChange",function(n){u(e);let a=s(2);return m(a.onActiveIndexChange(n))})("stopSlideShow",function(){u(e);let n=s(2);return m(n.stopSlideShow())}),h()}if(t&2){let e=s(2);o("containerId",e.id)("value",e.value)("activeIndex",e.activeIndex)("templates",e.galleria.templates)("numVisible",e.numVisible)("responsiveOptions",e.galleria.responsiveOptions)("circular",e.galleria.circular)("isVertical",e.isVertical())("contentHeight",e.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",e.galleria.showThumbnailNavigators)("slideShowActive",e.slideShowActive)}}function zt(t,l){if(t&1&&(d(0,"div",15),I(1,"p-galleriaItemSlot",16),h()),t&2){let e=s(2);c(),o("templates",e.galleria.templates)}}function Ht(t,l){if(t&1){let e=y();d(0,"div",1),p(1,Rt,3,4,"button",2)(2,Lt,2,1,"div",3),d(3,"div",4)(4,"p-galleriaItem",5),v("onActiveIndexChange",function(n){u(e);let a=s();return m(a.onActiveIndexChange(n))})("startSlideShow",function(){u(e);let n=s();return m(n.startSlideShow())})("stopSlideShow",function(){u(e);let n=s();return m(n.stopSlideShow())}),h(),p(5,Mt,1,11,"p-galleriaThumbnails",6),h(),p(6,zt,2,1,"div",7),h()}if(t&2){let e=s();$(e.galleriaClass()),o("ngClass",Ne(24,At,e.galleria.fullScreen,e.galleria.showIndicatorsOnItem,e.galleria.showItemNavigatorsOnHover&&!e.galleria.fullScreen))("ngStyle",e.galleria.fullScreen?xe(28,Dt):e.galleria.containerStyle)("pFocusTrapDisabled",!e.fullScreen),T("id",e.id)("role","region"),c(),o("ngIf",e.galleria.fullScreen),c(),o("ngIf",e.galleria.templates&&(e.galleria.headerFacet||e.galleria.headerTemplate)),c(),T("aria-live",e.galleria.autoPlay?"polite":"off"),c(),o("id",e.id)("value",e.value)("activeIndex",e.activeIndex)("circular",e.galleria.circular)("templates",e.galleria.templates)("showIndicators",e.galleria.showIndicators)("changeItemOnIndicatorHover",e.galleria.changeItemOnIndicatorHover)("indicatorFacet",e.galleria.indicatorFacet)("captionFacet",e.galleria.captionFacet)("showItemNavigators",e.galleria.showItemNavigators)("autoPlay",e.galleria.autoPlay)("slideShowActive",e.slideShowActive),c(),o("ngIf",e.galleria.showThumbnails),c(),o("ngIf",e.shouldRenderFooter())}}function Gt(t,l){t&1&&oe(0)}function Qt(t,l){if(t&1&&(D(0),p(1,Gt,1,0,"ng-container",1),N()),t&2){let e=s();c(),o("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",e.context)}}var qt=t=>({"p-galleria-prev-button p-galleria-nav-button":!0,"p-disabled":t}),Kt=t=>({"p-galleria-next-button p-galleria-nav-button":!0,"p-disabled":t}),Zt=t=>({"p-galleria-indicator":!0,"p-galleria-indicator-active":t});function Ut(t,l){t&1&&I(0,"ChevronLeftIcon",9),t&2&&o("styleClass","p-galleria-prev-icon")}function Wt(t,l){}function Yt(t,l){t&1&&p(0,Wt,0,0,"ng-template")}function Xt(t,l){if(t&1){let e=y();d(0,"button",6),v("click",function(n){u(e);let a=s();return m(a.navBackward(n))})("focus",function(){u(e);let n=s();return m(n.onButtonFocus("left"))})("blur",function(){u(e);let n=s();return m(n.onButtonBlur("left"))}),p(1,Ut,1,1,"ChevronLeftIcon",7)(2,Yt,1,0,null,8),h()}if(t&2){let e=s();o("ngClass",S(4,qt,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),c(),o("ngIf",!e.galleria.itemPreviousIconTemplate&&!e.galleria._itemPreviousIconTemplate),c(),o("ngTemplateOutlet",e.galleria.itemPreviousIconTemplate||e.galleria._itemPreviousIconTemplate)}}function Jt(t,l){t&1&&I(0,"ChevronRightIcon",9),t&2&&o("styleClass","p-galleria-next-icon")}function ei(t,l){}function ti(t,l){t&1&&p(0,ei,0,0,"ng-template")}function ii(t,l){if(t&1){let e=y();d(0,"button",6),v("click",function(n){u(e);let a=s();return m(a.navForward(n))})("focus",function(){u(e);let n=s();return m(n.onButtonFocus("right"))})("blur",function(){u(e);let n=s();return m(n.onButtonBlur("right"))}),p(1,Jt,1,1,"ChevronRightIcon",7)(2,ti,1,0,null,8),h()}if(t&2){let e=s();o("ngClass",S(4,Kt,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),c(),o("ngIf",!e.galleria.itemNextIconTemplate&&!e.galleria._itemNextIconTemplate),c(),o("ngTemplateOutlet",e.galleria.itemNextIconTemplate||e.galleria._itemNextIconTemplate)}}function ni(t,l){if(t&1&&(d(0,"div",10),I(1,"p-galleriaItemSlot",11),h()),t&2){let e=s();c(),o("item",e.activeItem)("templates",e.templates)}}function ai(t,l){t&1&&I(0,"button",17)}function oi(t,l){if(t&1){let e=y();d(0,"li",14),v("click",function(){let n=u(e).index,a=s(2);return m(a.onIndicatorClick(n))})("mouseenter",function(){let n=u(e).index,a=s(2);return m(a.onIndicatorMouseEnter(n))})("keydown",function(n){let a=u(e).index,r=s(2);return m(r.onIndicatorKeyDown(n,a))}),p(1,ai,1,0,"button",15),I(2,"p-galleriaItemSlot",16),h()}if(t&2){let e=l.index,i=s(2);o("ngClass",S(7,Zt,i.isIndicatorItemActive(e))),T("aria-label",i.ariaPageLabel(e+1))("aria-selected",i.activeIndex===e)("aria-controls",i.id+"_item_"+e),c(),o("ngIf",!i.indicatorFacet&&!i.galleria.indicatorTemplate),c(),o("index",e)("templates",i.templates)}}function li(t,l){if(t&1&&(d(0,"ul",12),p(1,oi,3,9,"li",13),h()),t&2){let e=s();c(),o("ngForOf",e.value)}}var ri=["itemsContainer"],si=t=>({height:t}),ci=t=>({"p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t}),pi=(t,l,e,i)=>({"p-galleria-thumbnail-item":!0,"p-galleria-thumbnail-item-current":t,"p-galleria-thumbnail-item-active":l,"p-galleria-thumbnail-item-start":e,"p-galleria-thumbnail-item-end":i}),ui=t=>({"p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t});function mi(t,l){t&1&&I(0,"ChevronLeftIcon",11),t&2&&o("styleClass","p-galleria-thumbnail-prev-icon")}function di(t,l){t&1&&I(0,"ChevronUpIcon",11),t&2&&o("styleClass","p-galleria-thumbnail-prev-icon")}function hi(t,l){if(t&1&&(D(0),p(1,mi,1,1,"ChevronLeftIcon",10)(2,di,1,1,"ChevronUpIcon",10),N()),t&2){let e=s(2);c(),o("ngIf",!e.isVertical),c(),o("ngIf",e.isVertical)}}function gi(t,l){}function fi(t,l){t&1&&p(0,gi,0,0,"ng-template")}function bi(t,l){if(t&1){let e=y();d(0,"button",7),v("click",function(n){u(e);let a=s();return m(a.navBackward(n))}),p(1,hi,3,2,"ng-container",8)(2,fi,1,0,null,9),h()}if(t&2){let e=s();o("ngClass",S(5,ci,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),T("aria-label",e.ariaPrevButtonLabel()),c(),o("ngIf",!e.galleria.previousThumbnailIconTemplate&&!e.galleria._previousThumbnailIconTemplate),c(),o("ngTemplateOutlet",e.galleria.previousThumbnailIconTemplate||e.galleria._previousThumbnailIconTemplate)}}function _i(t,l){if(t&1){let e=y();d(0,"div",12),v("keydown",function(n){let a=u(e).index,r=s();return m(r.onThumbnailKeydown(n,a))}),d(1,"div",13),v("click",function(){let n=u(e).index,a=s();return m(a.onItemClick(n))})("touchend",function(){let n=u(e).index,a=s();return m(a.onItemClick(n))})("keydown.enter",function(){let n=u(e).index,a=s();return m(a.onItemClick(n))}),I(2,"p-galleriaItemSlot",14),h()()}if(t&2){let e=l.$implicit,i=l.index,n=s();o("ngClass",Be(10,pi,n.activeIndex===i,n.isItemActive(i),n.firstItemAciveIndex()===i,n.lastItemActiveIndex()===i)),T("aria-selected",n.activeIndex===i)("aria-controls",n.containerId+"_item_"+i)("data-pc-section","thumbnailitem")("data-p-active",n.activeIndex===i),c(),T("tabindex",n.activeIndex===i?0:-1)("aria-current",n.activeIndex===i?"page":void 0)("aria-label",n.ariaPageLabel(i+1)),c(),o("item",e)("templates",n.templates)}}function vi(t,l){t&1&&I(0,"ChevronRightIcon",16),t&2&&o("ngClass","p-galleria-thumbnail-next-icon")}function Ii(t,l){t&1&&I(0,"ChevronDownIcon",16),t&2&&o("ngClass","p-galleria-thumbnail-next-icon")}function xi(t,l){if(t&1&&(D(0),p(1,vi,1,1,"ChevronRightIcon",15)(2,Ii,1,1,"ChevronDownIcon",15),N()),t&2){let e=s(2);c(),o("ngIf",!e.isVertical),c(),o("ngIf",e.isVertical)}}function yi(t,l){}function Ti(t,l){t&1&&p(0,yi,0,0,"ng-template")}function wi(t,l){if(t&1){let e=y();d(0,"button",7),v("click",function(n){u(e);let a=s();return m(a.navForward(n))}),p(1,xi,3,2,"ng-container",8)(2,Ti,1,0,null,9),h()}if(t&2){let e=s();o("ngClass",S(5,ui,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),T("aria-label",e.ariaNextButtonLabel()),c(),o("ngIf",!e.galleria.nextThumbnailIconTemplate&&!e.galleria._nextThumbnailIconTemplate),c(),o("ngTemplateOutlet",e.galleria.nextThumbnailIconTemplate||e.galleria._nextThumbnailIconTemplate)}}var Ci=({dt:t})=>`
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
`,Si={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:({instance:t})=>{let l=t.$attrs.showThumbnails&&t.getPositionClass("p-galleria-thumbnails",t.$attrs.thumbnailsPosition),e=t.$attrs.showIndicators&&t.getPositionClass("p-galleria-indicators",t.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},l,e]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:({instance:t})=>["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:({instance:t})=>["p-galleria-next-button p-galleria-nav-button",{"p-disabled":t.isNavForwardDisabled()}],nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:({instance:t,index:l})=>["p-galleria-indicator",{"p-galleria-indicator-active":t.isIndicatorItemActive(l)}],indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:({instance:t})=>["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:({instance:t,index:l,activeIndex:e})=>["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e===l,"p-galleria-thumbnail-item-active":t.isItemActive(l),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===l,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===l}],thumbnail:"p-galleria-thumbnail",thumbnailNextButton:({instance:t})=>["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavForwardDisabled()}],thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},ot=(()=>{class t extends te{name="galleria";theme=Ci;classes=Si;static \u0275fac=(()=>{let e;return function(n){return(e||(e=O(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var _e=(()=>{class t extends G{platformId;element;cd;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;shouldStopAutoplayByClick=!0;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}activeIndexChange=new w;visibleChange=new w;mask;container;_visible=!1;_activeIndex=0;headerTemplate;headerFacet;footerTemplate;footerFacet;indicatorTemplate;indicatorFacet;captionTemplate;captionFacet;_closeIconTemplate;closeIconTemplate;_previousThumbnailIconTemplate;previousThumbnailIconTemplate;_nextThumbnailIconTemplate;nextThumbnailIconTemplate;_itemPreviousIconTemplate;itemPreviousIconTemplate;_itemNextIconTemplate;itemNextIconTemplate;_itemTemplate;itemTemplate;_thumbnailTemplate;thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=P(ot);constructor(e,i,n){super(),this.platformId=e,this.element=i,this.cd=n}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerFacet=e.template;break;case"footer":this.footerFacet=e.template;break;case"indicator":this.indicatorFacet=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"itemnexticon":this.itemNextIconTemplate=e.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=e.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=e.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=e.template;break;case"caption":this.captionFacet=e.template;break;case"item":this.itemTemplate=e.template;break;case"thumbnail":this.thumbnailTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.value&&e.value.currentValue?.length<this.numVisible?this.numVisibleLimit=e.value.currentValue.length:this.numVisibleLimit=0}onMaskHide(){this.visible=!1,this.visibleChange.emit(!1)}onActiveItemChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeIndexChange.emit(e))}onAnimationStart(e){switch(e.toState){case"visible":this.enableModality(),setTimeout(()=>{ze(z(this.container.nativeElement,'[data-pc-section="closebutton"]'))},25);break;case"void":se(this.mask?.nativeElement,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.disableModality();break}}enableModality(){Re(),this.cd.markForCheck(),this.mask&&ie.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){Le(),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&ie.clear(this.mask.nativeElement)}ngOnDestroy(){this.fullScreen&&he(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(i){return new(i||t)(_(Ie),_(ae),_(U))};static \u0275cmp=k({type:t,selectors:[["p-galleria"]],contentQueries:function(i,n,a){if(i&1&&(x(a,dt,4),x(a,ht,4),x(a,gt,4),x(a,ft,4),x(a,bt,4),x(a,_t,4),x(a,vt,4),x(a,It,4),x(a,xt,4),x(a,yt,4),x(a,Tt,4),x(a,ge,4)),i&2){let r;f(r=b())&&(n.headerTemplate=r.first),f(r=b())&&(n.footerTemplate=r.first),f(r=b())&&(n.indicatorTemplate=r.first),f(r=b())&&(n.captionTemplate=r.first),f(r=b())&&(n._closeIconTemplate=r.first),f(r=b())&&(n._previousThumbnailIconTemplate=r.first),f(r=b())&&(n._nextThumbnailIconTemplate=r.first),f(r=b())&&(n._itemPreviousIconTemplate=r.first),f(r=b())&&(n._itemNextIconTemplate=r.first),f(r=b())&&(n._itemTemplate=r.first),f(r=b())&&(n._thumbnailTemplate=r.first),f(r=b())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(le(wt,5),le(Ct,5)),i&2){let a;f(a=b())&&(n.mask=a.first),f(a=b())&&(n.container=a.first)}},inputs:{activeIndex:"activeIndex",fullScreen:[2,"fullScreen","fullScreen",g],id:"id",value:"value",numVisible:[2,"numVisible","numVisible",F],responsiveOptions:"responsiveOptions",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showThumbnailNavigators:[2,"showThumbnailNavigators","showThumbnailNavigators",g],showItemNavigatorsOnHover:[2,"showItemNavigatorsOnHover","showItemNavigatorsOnHover",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],circular:[2,"circular","circular",g],autoPlay:[2,"autoPlay","autoPlay",g],shouldStopAutoplayByClick:[2,"shouldStopAutoplayByClick","shouldStopAutoplayByClick",g],transitionInterval:[2,"transitionInterval","transitionInterval",F],showThumbnails:[2,"showThumbnails","showThumbnails",g],thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:[2,"showIndicators","showIndicators",g],showIndicatorsOnItem:[2,"showIndicatorsOnItem","showIndicatorsOnItem",g],indicatorsPosition:"indicatorsPosition",baseZIndex:[2,"baseZIndex","baseZIndex",F],maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},standalone:!1,features:[Z([ot]),V,A,ve],decls:3,vars:2,consts:[["windowed",""],["container",""],["mask",""],[4,"ngIf","ngIfElse"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass"],[3,"value","activeIndex","numVisible","ngStyle","fullScreen","maskHide","activeItemChange",4,"ngIf"],[3,"maskHide","activeItemChange","value","activeIndex","numVisible","ngStyle","fullScreen"],[3,"activeItemChange","value","activeIndex","numVisible"]],template:function(i,n){if(i&1&&p(0,Et,3,1,"div",3)(1,Pt,1,3,"ng-template",null,0,B),i&2){let a=re(2);o("ngIf",n.fullScreen)("ngIfElse",a)}},dependencies:()=>[j,E,W,ki],encapsulation:2,data:{animation:[de("animation",[J("void => visible",[X({transform:"scale(0.7)",opacity:0}),Y("{{showTransitionParams}}")]),J("visible => void",[Y("{{hideTransitionParams}}",X({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),ki=(()=>{class t extends G{galleria;cd;differs;elementRef;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}value=[];numVisible;fullScreen;maskHide=new w;activeItemChange=new w;closeButton;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(e,i,n,a){super(),this.galleria=e,this.cd=i,this.differs=n,this.elementRef=a,this.id=this.galleria.id||Ke("pn_id_"),this.differ=this.differs.find(this.galleria).create()}handleFullscreenChange(e){document?.fullscreenElement===this.elementRef.nativeElement?.children[0]?this.fullScreen=!0:this.fullScreen=!1}ngDoCheck(){if(M(this.galleria.platformId)){let e=this.differ.diff(this.galleria);e&&e.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate}galleriaClass(){let e=this.galleria.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.galleria.thumbnailsPosition),i=this.galleria.showIndicators&&this.getPositionClass("p-galleria-indicators",this.galleria.indicatorsPosition);return(this.galleria.containerClass?this.galleria.containerClass+" ":"")+(e?e+" ":"")+(i?i+" ":"")}startSlideShow(){M(this.galleria.platformId)&&(this.interval=setInterval(()=>{let e=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(e),this.activeIndex=e},this.galleria.transitionInterval),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay&&!this.galleria.shouldStopAutoplayByClick||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(e,i){let a=["top","left","bottom","right"].find(r=>r===i);return a?`${e}-${a}`:""}isVertical(){return this.galleria.thumbnailsPosition==="left"||this.galleria.thumbnailsPosition==="right"}onActiveIndexChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeItemChange.emit(this.activeIndex))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}static \u0275fac=function(i){return new(i||t)(_(_e),_(U),_(je),_(ae))};static \u0275cmp=k({type:t,selectors:[["p-galleriaContent"]],viewQuery:function(i,n){if(i&1&&le(Ot,5),i&2){let a;f(a=b())&&(n.closeButton=a.first)}},hostBindings:function(i,n){i&1&&v("fullscreenchange",function(r){return n.handleFullscreenChange(r)},!1,ce)},inputs:{activeIndex:"activeIndex",value:"value",numVisible:[2,"numVisible","numVisible",F],fullScreen:[2,"fullScreen","fullScreen",g]},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},standalone:!1,features:[V,A],decls:1,vars:1,consts:[["pFocusTrap","",3,"ngClass","ngStyle","class","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["type","button","class","p-galleria-close-button",3,"click",4,"ngIf"],["class","p-galleria-header",4,"ngIf"],[1,"p-galleria-content"],[3,"onActiveIndexChange","startSlideShow","stopSlideShow","id","value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow",4,"ngIf"],["class","p-galleria-footer",4,"ngIf"],["type","button",1,"p-galleria-close-button",3,"click"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-header"],["type","header",3,"templates"],[3,"onActiveIndexChange","stopSlideShow","containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive"],[1,"p-galleria-footer"],["type","footer",3,"templates"]],template:function(i,n){i&1&&p(0,Ht,7,29,"div",0),i&2&&o("ngIf",n.value&&n.value.length>0)},dependencies:()=>[j,E,R,W,Ve,it,$e,Vi,$i],encapsulation:2,changeDetection:0})}return t})(),$e=(()=>{class t{templates;index;get item(){return this._item}shouldRender(){return this.contentTemplate||this.galleria._itemTemplate||this.galleria.itemTemplate||this.galleria.captionTemplate||this.galleria.captionTemplate||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate||this.galleria.footerTemplate}galleria=P(_e);set item(e){this._item=e,this.templates&&this.templates?.toArray().length>0?this.templates.forEach(i=>{if(i.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=i.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=i.template;break}}):this.getContentTemplate()}getContentTemplate(){switch(this.type){case"item":this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate;break;case"caption":this.context={$implicit:this.item},this.contentTemplate=this.galleria.captionTemplate||this.galleria.captionFacet;break;case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=this.galleria.indicatorTemplate||this.galleria.indicatorFacet;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=this.galleria.footerTemplate||this.galleria.footerFacet;break;default:this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate}}type;contentTemplate;context;_item;ngAfterContentInit(){this.templates&&this.templates.toArray().length>0?this.templates?.forEach(e=>{if(e.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=e.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=e.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=e.template;break;default:this.context={$implicit:this.item},this.contentTemplate=e.template;break}}):this.getContentTemplate()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["p-galleriaItemSlot"]],inputs:{templates:"templates",index:[2,"index","index",F],item:"item",type:"type"},standalone:!1,features:[V],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&p(0,Qt,2,2,"ng-container",0),i&2&&o("ngIf",n.shouldRender())},dependencies:[E,R],encapsulation:2,changeDetection:0})}return t})(),Vi=(()=>{class t{galleria;id;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new w;stopSlideShow=new w;onActiveIndexChange=new w;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;leftButtonFocused=!1;rightButtonFocused=!1;constructor(e){this.galleria=e}ngOnChanges({autoPlay:e}){e?.currentValue&&this.startSlideShow.emit(),e&&e.currentValue===!1&&this.stopTheSlideShow()}next(){let e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.onActiveIndexChange.emit(i)}prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.onActiveIndexChange.emit(i)}onButtonFocus(e){e==="left"?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(e){e==="left"?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(e){this.stopTheSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()}onIndicatorClick(e){this.stopTheSlideShow(),this.onActiveIndexChange.emit(e)}onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(e))}onIndicatorKeyDown(e,i){switch(e.code){case"Enter":case"Space":this.stopTheSlideShow(),this.onActiveIndexChange.emit(i),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0}isIndicatorItemActive(e){return this.activeIndex===e}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(_(_e))};static \u0275cmp=k({type:t,selectors:[["p-galleriaItem"]],hostAttrs:[1,"p-galleria-items-container"],inputs:{id:"id",circular:[2,"circular","circular",g],value:"value",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showIndicators:[2,"showIndicators","showIndicators",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],autoPlay:[2,"autoPlay","autoPlay",g],templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},standalone:!1,features:[V,ve],decls:7,vars:9,consts:[[1,"p-galleria-items"],["type","button","role","navigation",3,"ngClass","disabled","click","focus","blur",4,"ngIf"],["role","group",1,"p-galleria-item",3,"id"],["type","item",1,"p-galleria-item",3,"item","templates"],["class","p-galleria-caption",4,"ngIf"],["class","p-galleria-indicator-list",4,"ngIf"],["type","button","role","navigation",3,"click","focus","blur","ngClass","disabled"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-caption"],["type","caption",3,"item","templates"],[1,"p-galleria-indicator-list"],["tabindex","0",3,"ngClass","click","mouseenter","keydown",4,"ngFor","ngForOf"],["tabindex","0",3,"click","mouseenter","keydown","ngClass"],["type","button","tabIndex","-1","class","p-galleria-indicator-button",4,"ngIf"],["type","indicator",3,"index","templates"],["type","button","tabIndex","-1",1,"p-galleria-indicator-button"]],template:function(i,n){i&1&&(d(0,"div",0),p(1,Xt,3,6,"button",1),d(2,"div",2),I(3,"p-galleriaItemSlot",3),h(),p(4,ii,3,6,"button",1)(5,ni,2,2,"div",4),h(),p(6,li,2,1,"ul",5)),i&2&&(c(),o("ngIf",n.showItemNavigators),c(),o("id",n.id+"_item_"+n.activeIndex),T("aria-label",n.ariaSlideNumber(n.activeIndex+1))("aria-roledescription",n.ariaSlideLabel()),c(),o("item",n.activeItem)("templates",n.templates),c(),o("ngIf",n.showItemNavigators),c(),o("ngIf",n.captionFacet||n.galleria.captionTemplate),c(),o("ngIf",n.showIndicators))},dependencies:()=>[j,ye,E,R,be,fe,$e],encapsulation:2,changeDetection:0})}return t})(),$i=(()=>{class t{galleria;document;platformId;renderer;cd;containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new w;stopSlideShow=new w;itemsContainer;get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e,this._oldNumVisible=this.d_numVisible,this.d_numVisible=e}get activeIndex(){return this._activeIndex}set activeIndex(e){this._oldactiveIndex=this._activeIndex,this._activeIndex=e}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;constructor(e,i,n,a,r){this.galleria=e,this.document=i,this.platformId=n,this.renderer=a,this.cd=r}ngOnInit(){M(this.platformId)&&(this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners())}ngAfterContentChecked(){let e=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(this._activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?e=this._activeIndex*-1+this.getMedianItemIndex()+1:e=this._activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(he(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}ngAfterViewInit(){M(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),this.document.body.appendChild(this.thumbnailsStyle));let e=`
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((i,n)=>{let a=i.breakpoint,r=n.breakpoint,C=null;return a==null&&r!=null?C=-1:a!=null&&r==null?C=1:a==null&&r==null?C=0:typeof a=="string"&&typeof r=="string"?C=a.localeCompare(r,void 0,{numeric:!0}):C=a<r?-1:a>r?1:0,-1*C});for(let i=0;i<this.sortedResponsiveOptions.length;i++){let n=this.sortedResponsiveOptions[i];e+=`
                    @media screen and (max-width: ${n.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/n.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=e,qe(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce)}calculatePosition(){if(M(this.platformId)&&this.itemsContainer&&this.sortedResponsiveOptions){let e=window.innerWidth,i={numVisible:this._numVisible};for(let n=0;n<this.sortedResponsiveOptions.length;n++){let a=this.sortedResponsiveOptions[n];parseInt(a.breakpoint,10)>=e&&(i=a)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible,this.cd.markForCheck())}}getTabIndex(e){return this.isItemActive(e)?0:null}navForward(e){this.stopTheSlideShow();let i=this._activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let n=this.circular&&this.value.length-1===this._activeIndex?0:i;this.onActiveIndexChange.emit(n),e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow();let i=this._activeIndex!==0?this._activeIndex-1:0,n=i+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let a=this.circular&&this._activeIndex===0?this.value.length-1:i;this.onActiveIndexChange.emit(a),e.cancelable&&e.preventDefault()}onItemClick(e){this.stopTheSlideShow();let i=e;if(i!==this._activeIndex){let n=i+this.totalShiftedItems,a=0;i<this._activeIndex?(a=this.d_numVisible-n-1-this.getMedianItemIndex(),a>0&&-1*this.totalShiftedItems!==0&&this.step(a)):(a=this.getMedianItemIndex()-n,a<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(a)),this.activeIndex=i,this.onActiveIndexChange.emit(this.activeIndex)}}onThumbnailKeydown(e,i){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break;default:break}}onRightKey(){let e=ee(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=ee(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...ee(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=e.findIndex(r=>He(r,"data-p-active")===!0),n=z(this.itemsContainer.nativeElement,'[tabindex="0"]'),a=e.findIndex(r=>r===n.parentElement);e[a].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...ee(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=z(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(n=>n===i.parentElement)}changedFocusedIndicator(e,i){let n=ee(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]');n[e].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()}step(e){let i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this._activeIndex?i=0:e>0&&this._activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.itemsContainer&&(he(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(e,i){i<0?this.navForward(e):this.navBackward(e)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(se(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}isNavBackwardDisabled(){return!this.circular&&this._activeIndex===0||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e}bindDocumentListeners(){if(M(this.platformId)){let e=this.document.defaultView||"window";this.documentResizeListener=this.renderer.listen(e,"resize",()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(_(_e),_(me),_(Ie),_(pe),_(U))};static \u0275cmp=k({type:t,selectors:[["p-galleriaThumbnails"]],viewQuery:function(i,n){if(i&1&&le(ri,5),i&2){let a;f(a=b())&&(n.itemsContainer=a.first)}},inputs:{containerId:"containerId",value:"value",isVertical:[2,"isVertical","isVertical",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],circular:[2,"circular","circular",g],responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},standalone:!1,features:[V],decls:8,vars:6,consts:[["itemsContainer",""],[1,"p-galleria-thumbnails"],[1,"p-galleria-thumbnails-content"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-galleria-thumbnails-viewport",3,"ngStyle"],["role","tablist",1,"p-galleria-thumbnail-items",3,"transitionend","touchstart","touchmove"],[3,"ngClass","keydown",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"click","ngClass","disabled"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[3,"keydown","ngClass"],[1,"p-galleria-thumbnail",3,"click","touchend","keydown.enter"],["type","thumbnail",3,"item","templates"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,n){if(i&1){let a=y();d(0,"div",1)(1,"div",2),p(2,bi,3,7,"button",3),d(3,"div",4)(4,"div",5,0),v("transitionend",function(){return u(a),m(n.onTransitionEnd())})("touchstart",function(C){return u(a),m(n.onTouchStart(C))})("touchmove",function(C){return u(a),m(n.onTouchMove(C))}),p(6,_i,3,15,"div",6),h()(),p(7,wi,3,7,"button",3),h()()}i&2&&(c(2),o("ngIf",n.showThumbnailNavigators),c(),o("ngStyle",S(4,si,n.isVertical?n.contentHeight:"")),c(3),o("ngForOf",n.value),c(),o("ngIf",n.showThumbnailNavigators))},dependencies:()=>[j,ye,E,R,W,We,be,ke,Se,fe,$e],encapsulation:2,changeDetection:0})}return t})(),Bn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=K({type:t});static \u0275inj=q({imports:[L,H,Ve,be,ke,Se,fe,Xe,Je,L,H]})}return t})();var Fi=["content"],Ei=["accepticon"],Pi=["rejecticon"],Oi=["headless"],Ai=(t,l)=>({showTransitionParams:t,hideTransitionParams:l}),Di=t=>({value:"open",params:t}),rt=t=>({$implicit:t});function Ni(t,l){t&1&&oe(0)}function Bi(t,l){if(t&1&&(D(0),p(1,Ni,1,0,"ng-container",8),N()),t&2){let e=s(2);c(),o("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)("ngTemplateOutletContext",S(2,rt,e.confirmation))}}function ji(t,l){t&1&&oe(0)}function Ri(t,l){if(t&1&&(D(0),p(1,ji,1,0,"ng-container",8),N()),t&2){let e=s(3);c(),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",S(2,rt,e.confirmation))}}function Li(t,l){if(t&1&&I(0,"i",15),t&2){let e=s(4);$(e.confirmation==null?null:e.confirmation.icon),o("ngClass","p-confirmpopup-icon")}}function Mi(t,l){if(t&1&&(p(0,Li,1,3,"i",13),d(1,"span",14),Ae(2),h()),t&2){let e=s(3);o("ngIf",e.confirmation==null?null:e.confirmation.icon),c(2),De(e.confirmation==null?null:e.confirmation.message)}}function zi(t,l){if(t&1&&I(0,"i"),t&2){let e=s(4);$(e.confirmation==null?null:e.confirmation.rejectIcon)}}function Hi(t,l){}function Gi(t,l){t&1&&p(0,Hi,0,0,"ng-template",null,3,B)}function Qi(t,l){if(t&1){let e=y();d(0,"p-button",16),v("onClick",function(){u(e);let n=s(3);return m(n.onReject())}),p(1,zi,1,2,"i",17)(2,Gi,2,0,null,18),h()}if(t&2){let e=s(3);o("label",e.rejectButtonLabel)("ngClass","p-confirmpopup-reject-button")("styleClass",e.confirmation==null?null:e.confirmation.rejectButtonStyleClass)("size",(e.confirmation.rejectButtonProps==null?null:e.confirmation.rejectButtonProps.size)||"small")("text",(e.confirmation.rejectButtonProps==null?null:e.confirmation.rejectButtonProps.text)||!1)("buttonProps",e.getRejectButtonProps()),T("aria-label",e.rejectButtonLabel),c(),o("ngIf",e.confirmation==null?null:e.confirmation.rejectIcon)("ngIfElse",e.rejecticon),c(),o("ngTemplateOutlet",e.rejectIconTemplate||e._rejectIconTemplate)}}function qi(t,l){if(t&1&&I(0,"i"),t&2){let e=s(4);$(e.confirmation==null?null:e.confirmation.acceptIcon)}}function Ki(t,l){}function Zi(t,l){t&1&&p(0,Ki,0,0,"ng-template",null,4,B)}function Ui(t,l){if(t&1){let e=y();d(0,"p-button",19),v("onClick",function(){u(e);let n=s(3);return m(n.onAccept())}),p(1,qi,1,2,"i",17)(2,Zi,2,0,null,18),h()}if(t&2){let e=s(3);o("label",e.acceptButtonLabel)("ngClass","p-confirmpopup-accept-button")("styleClass",e.confirmation==null?null:e.confirmation.acceptButtonStyleClass)("size",(e.confirmation.acceptButtonProps==null?null:e.confirmation.acceptButtonProps.size)||"small")("buttonProps",e.getAcceptButtonProps()),T("aria-label",e.acceptButtonLabel),c(),o("ngIf",e.confirmation==null?null:e.confirmation.acceptIcon)("ngIfElse",e.accepticontemplate),c(),o("ngTemplateOutlet",e.acceptIconTemplate||e._acceptIconTemplate)}}function Wi(t,l){if(t&1&&(d(0,"div",9,1),p(2,Ri,2,4,"ng-container",7)(3,Mi,3,2,"ng-template",null,2,B),h(),d(5,"div",10),p(6,Qi,3,10,"p-button",11)(7,Ui,3,9,"p-button",12),h()),t&2){let e=re(4),i=s(2);c(2),o("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),c(4),o("ngIf",(i.confirmation==null?null:i.confirmation.rejectVisible)!==!1),c(),o("ngIf",(i.confirmation==null?null:i.confirmation.acceptVisible)!==!1)}}function Yi(t,l){if(t&1){let e=y();d(0,"div",6),v("click",function(n){u(e);let a=s();return m(a.onOverlayClick(n))})("@animation.start",function(n){u(e);let a=s();return m(a.onAnimationStart(n))})("@animation.done",function(n){u(e);let a=s();return m(a.onAnimationEnd(n))}),p(1,Bi,2,4,"ng-container",7)(2,Wi,8,4,"ng-template",null,0,B),h()}if(t&2){let e=re(3),i=s();$(i.styleClass),o("ngClass","p-confirmpopup p-component")("ngStyle",i.style)("@animation",S(10,Di,ue(7,Ai,i.showTransitionOptions,i.hideTransitionOptions))),c(),o("ngIf",i.headlessTemplate||i._headlessTemplate)("ngIfElse",e)}}var Xi=({dt:t})=>`
.p-confirmpopup {
    position: absolute;
    margin-top: ${t("confirmpopup.gutter")};
    top: 0;
    left: 0;
    background: ${t("confirmpopup.background")};
    color: ${t("confirmpopup.color")};
    border: 1px solid ${t("confirmpopup.border.color")};
    border-radius: ${t("confirmpopup.border.radius")};
    box-shadow: ${t("confirmpopup.shadow")};
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: ${t("confirmpopup.content.padding")};
    gap: ${t("confirmpopup.content.gap")};
}

.p-confirmpopup-icon {
    font-size: ${t("confirmpopup.icon.size")};
    width: ${t("confirmpopup.icon.size")};
    height: ${t("confirmpopup.icon.size")};
    color: ${t("confirmpopup.icon.color")};
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: ${t("confirmpopup.footer.gap")};
    padding: ${t("confirmpopup.footer.padding")};
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(${t("confirmpopup.gutter")} * -1);
    margin-bottom: ${t("confirmpopup.gutter")};
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: ${t("confirmpopup.arrow.offset")};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(${t("confirmpopup.gutter")} - 2px);
    margin-left: calc(-1 * (${t("confirmpopup.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("confirmpopup.background")};
}

.p-confirmpopup:before {
    border-width: ${t("confirmpopup.gutter")};
    margin-left: calc(-1 * ${t("confirmpopup.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${t("confirmpopup.border.color")};
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${t("confirmpopup.background")};
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${t("confirmpopup.border.color")};
}
`,Ji={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},lt=(()=>{class t extends te{name="confirmpopup";theme=Xi;classes=Ji;static \u0275fac=(()=>{let e;return function(n){return(e||(e=O(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var en=(()=>{class t extends G{el;confirmationService;renderer;cd;overlayService;document;key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(e){this._visible=e,this.cd.markForCheck()}container;subscription;confirmation;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=P(lt);constructor(e,i,n,a,r,C){super(),this.el=e,this.confirmationService=i,this.renderer=n,this.cd=a,this.overlayService=r,this.document=C,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(ne=>{if(!ne){this.hide();return}ne.key===this.key&&(this.confirmation=ne,Object.keys(ne).forEach(Fe=>{this[Fe]=ne[Fe]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new w,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new w,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"rejecticon":this._rejectIconTemplate=e.template;break;case"accepticon":this._acceptIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break}})}option(e,i){let n=this||this;if(n.hasOwnProperty(e))return i?n[i]:n[e]}onEscapeKeydown(e){this.confirmation&&this.confirmation.closeOnEscape&&this.onReject()}onAnimationStart(e){if(e.toState==="open"){this.container=e.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners();let i=this.getElementToFocus();i&&i.focus()}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy();break}}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}getElementToFocus(){switch(this.defaultFocus){case"accept":return z(this.container,".p-confirm-popup-accept");case"reject":return z(this.container,".p-confirm-popup-reject");case"none":return null}}align(){if(this.autoZIndex&&ie.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation)return;Me(this.container,this.confirmation?.target,!1);let e=we(this.container),i=we(this.confirmation?.target),n=0;e.left<i.left&&(n=i.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${n}px`),e.top<i.top&&se(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let e=Ge()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,e,n=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let a=this.confirmation.target;this.container!==n.target&&!this.container?.contains(n.target)&&a!==n.target&&!a.contains(n.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!Qe()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ye(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&ie.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(Ce.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(Ce.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||t)(_(ae),_(Ze),_(pe),_(U),_(Ue),_(me))};static \u0275cmp=k({type:t,selectors:[["p-confirmPopup"],["p-confirmpopup"],["p-confirm-popup"]],contentQueries:function(i,n,a){if(i&1&&(x(a,Fi,4),x(a,Ei,4),x(a,Pi,4),x(a,Oi,4),x(a,ge,4)),i&2){let r;f(r=b())&&(n.contentTemplate=r.first),f(r=b())&&(n.acceptIconTemplate=r.first),f(r=b())&&(n.rejectIconTemplate=r.first),f(r=b())&&(n.headlessTemplate=r.first),f(r=b())&&(n.templates=r)}},hostBindings:function(i,n){i&1&&v("keydown.escape",function(r){return n.onEscapeKeydown(r)},!1,ce)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",g],baseZIndex:[2,"baseZIndex","baseZIndex",F],style:"style",styleClass:"styleClass",visible:"visible"},features:[Z([lt]),V,A],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["rejecticon",""],["accepticontemplate",""],["role","alertdialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","alertdialog",3,"click","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-confirmpopup-content"],[1,"p-confirmpopup-footer"],["type","button",3,"label","ngClass","styleClass","size","text","buttonProps","onClick",4,"ngIf"],["type","button",3,"label","ngClass","styleClass","size","buttonProps","onClick",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[1,"p-confirmpopup-message"],[3,"ngClass"],["type","button",3,"onClick","label","ngClass","styleClass","size","text","buttonProps"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","ngClass","styleClass","size","buttonProps"]],template:function(i,n){i&1&&p(0,Yi,4,12,"div",5),i&2&&o("ngIf",n.visible)},dependencies:[L,j,E,R,W,H,tt,et],encapsulation:2,data:{animation:[de("animation",[Te("void",X({transform:"scaleY(0.8)",opacity:0})),Te("open",X({transform:"translateY(0)",opacity:1})),J("void => open",Y("{{showTransitionParams}}")),J("open => void",Y("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),ra=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=K({type:t});static \u0275inj=q({imports:[en,H,H]})}return t})();export{ut as a,mn as b,_e as c,Bn as d,en as e,ra as f};
