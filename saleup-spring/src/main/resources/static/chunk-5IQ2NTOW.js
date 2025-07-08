import{$ as Q,Ea as j,Ha as P,La as rt,Pa as st,Xa as ct,Za as K,_a as ut,aa as k,wa as R,xa as d}from"./chunk-AQJP2JMO.js";import{Ab as X,Bb as Z,Cb as tt,Db as C,Eb as T,Fb as et,Ib as x,Jb as ot,Lb as I,Mb as s,Oc as at,Rb as p,T as $,Tb as b,U as B,Ua as g,Ub as f,Uc as z,V as L,Yb as nt,Zb as it,Zc as N,_ as E,dc as D,fb as O,fc as G,gb as w,gc as V,ha as H,ia as Y,jb as M,la as m,lb as S,mb as c,qa as v,sc as lt,tb as y,ub as r,wb as J,xb as W,xc as u,yb as F,yc as A,zb as _}from"./chunk-HRECHPDI.js";var mt=["icon"],yt=["content"],dt=t=>({$implicit:t}),_t=(t,a)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":t,"p-togglebutton-icon-right":a});function Ct(t,a){t&1&&x(0)}function vt(t,a){if(t&1&&et(0,"span",1),t&2){let e=s(3);F(e.checked?e.onIcon:e.offIcon),r("ngClass",V(4,_t,e.iconPos==="left",e.iconPos==="right")),y("data-pc-section","icon")}}function Tt(t,a){if(t&1&&c(0,vt,1,7,"span",3),t&2){let e=s(2);_(e.onIcon||e.offIcon?0:-1)}}function xt(t,a){t&1&&x(0)}function kt(t,a){if(t&1&&c(0,xt,1,0,"ng-container",2),t&2){let e=s(2);r("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",G(2,dt,e.checked))}}function $t(t,a){if(t&1&&(c(0,Tt,1,1)(1,kt,1,4,"ng-container"),C(2,"span",1),nt(3),T()),t&2){let e=s();_(e.iconTemplate?1:0),g(2),r("ngClass",e.cx("label")),y("data-pc-section","label"),g(),it(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var Bt=({dt:t})=>`
p-togglebutton {
    display: inline-flex;
}

.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("togglebutton.color")};
    background: ${t("togglebutton.background")};
    border: 1px solid ${t("togglebutton.border.color")};
    padding: ${t("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
        outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    border-radius: ${t("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${t("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${t("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
            outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${t("togglebutton.content.left")};
    top: ${t("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${t("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${t("togglebutton.content.top")}));
    border-radius: ${t("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${t("togglebutton.content.checked.background")};
    box-shadow: ${t("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${t("togglebutton.hover.background")};
    color: ${t("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${t("togglebutton.checked.background")};
    border-color: ${t("togglebutton.checked.border.color")};
    color: ${t("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${t("togglebutton.focus.ring.shadow")};
    outline: ${t("togglebutton.focus.ring.width")} ${t("togglebutton.focus.ring.style")} ${t("togglebutton.focus.ring.color")};
    outline-offset: ${t("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${t("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${t("togglebutton.disabled.background")};
    border-color: ${t("togglebutton.disabled.border.color")};
    color: ${t("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${t("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${t("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${t("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${t("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${t("togglebutton.sm.padding")};
    font-size: ${t("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${t("togglebutton.lg.padding")};
    font-size: ${t("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${t("togglebutton.invalid.border.color")};
}
`,Lt={root:({instance:t})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":t.checked,"p-disabled":t.disabled,"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},gt=(()=>{class t extends j{name="togglebutton";theme=Bt;classes=Lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=m(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Et={provide:P,useExisting:$(()=>q),multi:!0},q=(()=>{class t extends K{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new v;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=E(gt);toggle(e){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(e){this.checked=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=m(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(o,n,i){if(o&1&&(p(i,mt,4),p(i,yt,4),p(i,R,4)),o&2){let l;b(l=f())&&(n.iconTemplate=l.first),b(l=f())&&(n.contentTemplate=l.first),b(l=f())&&(n.templates=l)}},hostVars:2,hostBindings:function(o,n){o&2&&F(n.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",u],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",A],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",u],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[D([Et,gt]),S,M],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(o,n){o&1&&(C(0,"button",0),I("click",function(l){return n.toggle(l)}),C(1,"span",1),c(2,Ct,1,0,"ng-container",2)(3,$t,4,4),T()()),o&2&&(F(n.styleClass),r("ngClass",n.cx("root"))("tabindex",n.tabindex)("disabled",n.disabled),y("aria-labelledby",n.ariaLabelledBy)("aria-pressed",n.checked)("data-p-checked",n.active)("data-p-disabled",n.disabled),g(),r("ngClass",n.cx("content")),g(),r("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",G(13,dt,n.checked)),g(),_(n.contentTemplate?-1:3))},dependencies:[ut,N,at,z,d],encapsulation:2,changeDetection:0})}return t})(),te=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=w({type:t});static \u0275inj=L({imports:[q,d,d]})}return t})();var Ot=["item"],wt=(t,a)=>({$implicit:t,index:a});function Mt(t,a){t&1&&x(0)}function St(t,a){if(t&1&&c(0,Mt,1,0,"ng-container",3),t&2){let e=s(2),o=e.$implicit,n=e.$index,i=s();r("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",V(2,wt,o,n))}}function Ft(t,a){t&1&&c(0,St,1,5,"ng-template",null,0,lt)}function It(t,a){if(t&1){let e=ot();C(0,"p-toggleButton",2),I("onChange",function(n){let i=H(e),l=i.$implicit,h=i.$index,U=s();return Y(U.onOptionSelect(n,l,h))}),c(1,Ft,2,0),T()}if(t&2){let e=a.$implicit,o=s();r("autofocus",o.autofocus)("styleClass",o.styleClass)("ngModel",o.isSelected(e))("onLabel",o.getOptionLabel(e))("offLabel",o.getOptionLabel(e))("disabled",o.disabled||o.isOptionDisabled(e))("allowEmpty",o.allowEmpty)("size",o.size),g(),_(o.itemTemplate||o._itemTemplate?1:-1)}}var Dt=({dt:t})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${t("selectbutton.border.radius")};
    border-end-start-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${t("selectbutton.border.radius")};
    border-end-end-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${t("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Vt={root:({props:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid}]},pt=(()=>{class t extends j{name="selectbutton";theme=Dt;classes=Vt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=m(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var At={provide:P,useExisting:$(()=>bt),multi:!0},bt=(()=>{class t extends K{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new v;onChange=new v;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=E(pt);getOptionLabel(e){return this.optionLabel?Q(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Q(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?Q(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOptionSelect(e,o,n){if(this.disabled||this.isOptionDisabled(o))return;let i=this.isSelected(o);if(i&&this.unselectable)return;let l=this.getOptionValue(o),h;if(this.multiple)i?h=this.value.filter(U=>!k(U,l,this.equalityKey)):h=this.value?[...this.value,l]:[l];else{if(i&&!this.allowEmpty)return;h=i?null:l}this.focusedIndex=n,this.value=h,this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:o,index:n})}changeTabIndexes(e,o){let n,i;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[l],index:l});o==="prev"?n.index===0?i=this.el.nativeElement.children.length-1:i=n.index-1:n.index===this.el.nativeElement.children.length-1?i=0:i=n.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(e,o){this.focusedIndex=o}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(o=>!k(o,this.getOptionValue(e),this.dataKey))}isSelected(e){let o=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(k(i,n,this.dataKey)){o=!0;break}}}else o=k(this.getOptionValue(e),this.value,this.equalityKey);return o}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=m(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(o,n,i){if(o&1&&(p(i,Ot,4),p(i,R,4)),o&2){let l;b(l=f())&&(n.itemTemplate=l.first),b(l=f())&&(n.templates=l)}},hostVars:10,hostBindings:function(o,n){o&2&&(y("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),W(n.style),J("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",u],tabindex:[2,"tabindex","tabindex",A],multiple:[2,"multiple","multiple",u],allowEmpty:[2,"allowEmpty","allowEmpty",u],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",u],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",u]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[D([At,pt]),S,M],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){o&1&&Z(0,It,2,9,"p-toggleButton",1,X),o&2&&tt(n.options)},dependencies:[q,ct,rt,st,N,z,d],encapsulation:2,changeDetection:0})}return t})(),Ce=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=w({type:t});static \u0275inj=L({imports:[bt,d,d]})}return t})();export{q as a,te as b,bt as c,Ce as d};
