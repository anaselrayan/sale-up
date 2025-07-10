import{Ea as se,Za as oe,_a as ne,nb as te,wa as ee,xa as x}from"./chunk-6PJPRA3Z.js";import{Cb as p,Db as u,Eb as f,Hb as h,Ib as A,Kb as L,Lb as t,Mb as P,Na as D,Nb as N,Nc as K,Pc as U,Qb as d,Sb as b,T as z,Ta as c,Tb as _,Tc as W,U as I,Wb as q,Xb as H,Yb as V,Yc as X,Z as M,_a as Q,cc as Y,eb as S,ec as C,ed as Z,fb as R,fc as G,fd as T,ga as O,ha as E,hd as w,ib as j,jd as k,ka as $,kb as B,lb as r,pa as F,rc as J,sb as y,tb as i,wc as v,yb as l}from"./chunk-JPVIOWP6.js";var ae=["container"],ce=["icon"],re=["closeicon"],le=["*"],me=(e,n)=>({showTransitionParams:e,hideTransitionParams:n}),ge=e=>({value:"visible()",params:e}),pe=e=>({closeCallback:e});function ue(e,n){e&1&&h(0)}function fe(e,n){if(e&1&&r(0,ue,1,0,"ng-container",7),e&2){let s=t(2);i("ngTemplateOutlet",s.iconTemplate||s.iconTemplate)}}function de(e,n){if(e&1&&f(0,"i",3),e&2){let s=t(2);i("ngClass",s.icon)}}function be(e,n){if(e&1&&f(0,"span",9),e&2){let s=t(3);i("ngClass",s.cx("text"))("innerHTML",s.text,D)}}function _e(e,n){if(e&1&&(p(0,"div"),r(1,be,1,2,"span",8),u()),e&2){let s=t(2);c(),i("ngIf",!s.escape)}}function he(e,n){if(e&1&&(p(0,"span",5),H(1),u()),e&2){let s=t(3);i("ngClass",s.cx("text")),c(),V(s.text)}}function xe(e,n){if(e&1&&r(0,he,2,2,"span",10),e&2){let s=t(2);i("ngIf",s.escape&&s.text)}}function $e(e,n){e&1&&h(0)}function ye(e,n){if(e&1&&r(0,$e,1,0,"ng-container",11),e&2){let s=t(2);i("ngTemplateOutlet",s.containerTemplate||s.containerTemplate)("ngTemplateOutletContext",C(2,pe,s.close.bind(s)))}}function Ce(e,n){if(e&1&&(p(0,"span",5),N(1),u()),e&2){let s=t(2);i("ngClass",s.cx("text"))}}function ve(e,n){if(e&1&&f(0,"i",13),e&2){let s=t(3);i("ngClass",s.closeIcon)}}function Te(e,n){e&1&&h(0)}function we(e,n){if(e&1&&r(0,Te,1,0,"ng-container",7),e&2){let s=t(3);i("ngTemplateOutlet",s.closeIconTemplate||s._closeIconTemplate)}}function ke(e,n){e&1&&f(0,"TimesIcon",14)}function ze(e,n){if(e&1){let s=A();p(0,"button",12),L("click",function(a){O(s);let g=t(2);return E(g.close(a))}),r(1,ve,1,1,"i",13)(2,we,1,1,"ng-container")(3,ke,1,0,"TimesIcon",14),u()}if(e&2){let s=t(2);y("aria-label",s.closeAriaLabel),c(),l(s.closeIcon?1:-1),c(),l(s.closeIconTemplate||s._closeIconTemplate?2:-1),c(),l(!s.closeIconTemplate&&!s._closeIconTemplate&&!s.closeIcon?3:-1)}}function Ie(e,n){if(e&1&&(p(0,"div",1)(1,"div",2),r(2,fe,1,1,"ng-container")(3,de,1,1,"i",3)(4,_e,2,1,"div",4)(5,xe,1,1,"ng-template",null,0,J)(7,ye,1,4,"ng-container")(8,Ce,2,1,"span",5)(9,ze,4,4,"button",6),u()()),e&2){let s=q(6),o=t();i("ngClass",o.containerClass)("@messageAnimation",C(13,ge,G(10,me,o.showTransitionOptions,o.hideTransitionOptions))),y("aria-live","polite")("role","alert"),c(2),l(o.iconTemplate||o._iconTemplate?2:-1),c(),l(o.icon?3:-1),c(),i("ngIf",!o.escape)("ngIfElse",s),c(3),l(o.containerTemplate||o._containerTemplate?7:8),c(2),l(o.closable?9:-1)}}var Me=({dt:e})=>`
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Oe={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},ie=(()=>{class e extends se{name="message";theme=Me;classes=Oe;static \u0275fac=(()=>{let s;return function(a){return(s||(s=$(e)))(a||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var Ee=(()=>{class e extends oe{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new F;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let s=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",o=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${s} ${o}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Q(!0);_componentStyle=M(ie);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(s=>{switch(s.getType()){case"container":this._containerTemplate=s.template;break;case"icon":this._iconTemplate=s.template;break;case"closeicon":this._closeIconTemplate=s.template;break}})}close(s){this.visible.set(!1),this.onClose.emit({originalEvent:s})}static \u0275fac=(()=>{let s;return function(a){return(s||(s=$(e)))(a||e)}})();static \u0275cmp=S({type:e,selectors:[["p-message"]],contentQueries:function(o,a,g){if(o&1&&(d(g,ae,4),d(g,ce,4),d(g,re,4),d(g,ee,4)),o&2){let m;b(m=_())&&(a.containerTemplate=m.first),b(m=_())&&(a.iconTemplate=m.first),b(m=_())&&(a.closeIconTemplate=m.first),b(m=_())&&(a.templates=m)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",v],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",v],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[Y([ie]),B,j],ngContentSelectors:le,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(o,a){o&1&&(P(),r(0,Ie,10,15,"div",1)),o&2&&l(a.visible()?0:-1)},dependencies:[X,K,U,W,te,ne,x],encapsulation:2,data:{animation:[Z("messageAnimation",[k(":enter",[w({opacity:0,transform:"translateY(-25%)"}),T("{{showTransitionParams}}")]),k(":leave",[T("{{hideTransitionParams}}",w({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})(),We=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=R({type:e});static \u0275inj=I({imports:[Ee,x,x]})}return e})();export{Ee as a,We as b};
