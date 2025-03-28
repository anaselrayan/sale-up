import{$ as Z,Ea as j,Ha as q,Ka as me,La as ke,Pa as xe,Xa as ye,Za as P,_a as Ce,aa as w,ba as fe,gb as _e,hb as ve,wa as R,xa as h}from"./chunk-YJSGKVHH.js";import{$ as B,Ab as c,Cb as ae,Db as K,Dc as s,Eb as _,Ec as A,Fb as V,Gb as ce,Hb as re,Ib as se,Jb as f,Kb as x,Lb as $,Mb as ee,Nb as te,Ob as U,Pb as H,Rb as D,Sb as p,Uc as Y,Wc as ge,Xb as y,Yb as ue,Z as I,Zb as m,_ as M,_a as r,_b as k,_c as N,cc as de,dc as pe,dd as Q,ea as E,fb as le,jc as z,kc as be,lb as v,lc as G,ma as ne,mb as S,mc as X,na as F,oa as O,pa as ie,pb as T,ra as g,rb as L,sb as u,wa as C,yc as he,zb as d}from"./chunk-TMGVZNBO.js";var Oe=["icon"],Se=["content"],we=e=>({$implicit:e}),Le=(e,a)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":a});function Ve(e,a){e&1&&U(0)}function De(e,a){if(e&1&&$(0,"span",1),e&2){let t=p(3);_(t.checked?t.onIcon:t.offIcon),c("ngClass",X(4,Le,t.iconPos==="left",t.iconPos==="right")),d("data-pc-section","icon")}}function ze(e,a){if(e&1&&u(0,De,1,7,"span",3),e&2){let t=p(2);V(t.onIcon||t.offIcon?0:-1)}}function Ae(e,a){e&1&&U(0)}function Ne(e,a){if(e&1&&u(0,Ae,1,0,"ng-container",2),e&2){let t=p(2);c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",G(2,we,t.checked))}}function Qe(e,a){if(e&1&&(u(0,ze,1,1)(1,Ne,1,4,"ng-container"),f(2,"span",1),de(3),x()),e&2){let t=p();V(t.iconTemplate?1:0),r(2),c("ngClass",t.cx("label")),d("data-pc-section","label"),r(),pe(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Re=({dt:e})=>`
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
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,je={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Te=(()=>{class e extends j{name="togglebutton";theme=Re;classes=je;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var qe={provide:q,useExisting:I(()=>J),multi:!0},J=(()=>{class e extends P{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new C;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=E(Te);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=v({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,i){if(n&1&&(y(i,Oe,4),y(i,Se,4),y(i,R,4)),n&2){let l;m(l=k())&&(o.iconTemplate=l.first),m(l=k())&&(o.contentTemplate=l.first),m(l=k())&&(o.templates=l)}},hostVars:2,hostBindings:function(n,o){n&2&&_(o.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",s],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",A],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",s],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[z([qe,Te]),L,T],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,o){n&1&&(f(0,"button",0),D("click",function(l){return o.toggle(l)}),f(1,"span",1),u(2,Ve,1,0,"ng-container",2)(3,Qe,4,4),x()()),n&2&&(_(o.styleClass),c("ngClass",o.cx("root"))("tabindex",o.tabindex)("disabled",o.disabled),d("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled),r(),c("ngClass",o.cx("content")),r(),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",G(13,we,o.checked)),r(),V(o.contentTemplate?-1:3))},dependencies:[Ce,Q,Y,N,h],encapsulation:2,changeDetection:0})}return e})(),Bt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=S({type:e});static \u0275inj=B({imports:[J,h,h]})}return e})();var Pe=["item"],Ke=(e,a)=>({$implicit:e,index:a});function Ue(e,a){e&1&&U(0)}function Ge(e,a){if(e&1&&u(0,Ue,1,0,"ng-container",3),e&2){let t=p(2),n=t.$implicit,o=t.$index,i=p();c("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",X(2,Ke,n,o))}}function He(e,a){e&1&&u(0,Ge,1,5,"ng-template",null,0,he)}function Xe(e,a){if(e&1){let t=H();f(0,"p-toggleButton",2),D("onChange",function(o){let i=F(t),l=i.$implicit,b=i.$index,W=p();return O(W.onOptionSelect(o,l,b))}),u(1,He,2,0),x()}if(e&2){let t=a.$implicit,n=p();c("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(t))("onLabel",n.getOptionLabel(t))("offLabel",n.getOptionLabel(t))("disabled",n.disabled||n.isOptionDisabled(t))("allowEmpty",n.allowEmpty)("size",n.size),r(),V(n.itemTemplate||n._itemTemplate?1:-1)}}var Ye=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
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
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Ze={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},Ie=(()=>{class e extends j{name="selectbutton";theme=Ye;classes=Ze;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Je={provide:q,useExisting:I(()=>Me),multi:!0},Me=(()=>{class e extends P{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new C;onChange=new C;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=E(Ie);getOptionLabel(t){return this.optionLabel?Z(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?Z(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?Z(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,n,o){if(this.disabled||this.isOptionDisabled(n))return;let i=this.isSelected(n);if(i&&this.unselectable)return;let l=this.getOptionValue(n),b;if(this.multiple)i?b=this.value.filter(W=>!w(W,l,this.equalityKey)):b=this.value?[...this.value,l]:[l];else{if(i&&!this.allowEmpty)return;b=i?null:l}this.focusedIndex=o,this.value=b,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:n,index:o})}changeTabIndexes(t,n){let o,i;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[l],index:l});n==="prev"?o.index===0?i=this.el.nativeElement.children.length-1:i=o.index-1:o.index===this.el.nativeElement.children.length-1?i=0:i=o.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(t,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(n=>!w(n,this.getOptionValue(t),this.dataKey))}isSelected(t){let n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(w(i,o,this.dataKey)){n=!0;break}}}else n=w(this.getOptionValue(t),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=v({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,i){if(n&1&&(y(i,Pe,4),y(i,R,4)),n&2){let l;m(l=k())&&(o.itemTemplate=l.first),m(l=k())&&(o.templates=l)}},hostVars:10,hostBindings:function(n,o){n&2&&(d("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),K(o.style),ae("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",s],tabindex:[2,"tabindex","tabindex",A],multiple:[2,"multiple","multiple",s],allowEmpty:[2,"allowEmpty","allowEmpty",s],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",s],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",s]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[z([Je,Ie]),L,T],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&re(0,Xe,2,9,"p-toggleButton",1,ce),n&2&&se(o.options)},dependencies:[J,ye,ke,xe,Q,N,h],encapsulation:2,changeDetection:0})}return e})(),Xt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=S({type:e});static \u0275inj=B({imports:[Me,h,h]})}return e})();var Be=(()=>{class e extends _e{static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=v({type:e,selectors:[["MinusIcon"]],features:[T],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(ie(),f(0,"svg",0),$(1,"path",1),x()),n&2&&(_(o.getClassNames()),d("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var We=["checkboxicon"],et=["input"],tt=()=>({"p-checkbox-input":!0}),ot=e=>({checked:e,class:"p-checkbox-icon"});function nt(e,a){if(e&1&&$(0,"span",8),e&2){let t=p(3);c("ngClass",t.checkboxIcon),d("data-pc-section","icon")}}function it(e,a){e&1&&$(0,"CheckIcon",9),e&2&&(c("styleClass","p-checkbox-icon"),d("data-pc-section","icon"))}function lt(e,a){if(e&1&&(ee(0),u(1,nt,1,2,"span",7)(2,it,1,2,"CheckIcon",6),te()),e&2){let t=p(2);r(),c("ngIf",t.checkboxIcon),r(),c("ngIf",!t.checkboxIcon)}}function at(e,a){e&1&&$(0,"MinusIcon",9),e&2&&(c("styleClass","p-checkbox-icon"),d("data-pc-section","icon"))}function ct(e,a){if(e&1&&(ee(0),u(1,lt,3,2,"ng-container",4)(2,at,1,2,"MinusIcon",6),te()),e&2){let t=p();r(),c("ngIf",t.checked),r(),c("ngIf",t._indeterminate())}}function rt(e,a){}function st(e,a){e&1&&u(0,rt,0,0,"ng-template")}var ut=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,dt={root:({instance:e,props:a})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":a.disabled,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Ee=(()=>{class e extends j{name="checkbox";theme=ut;classes=dt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var pt={provide:q,useExisting:I(()=>Fe),multi:!0},Fe=(()=>{class e extends P{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new C;onFocus=new C;onBlur=new C;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:fe(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=le(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=E(Ee);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let n,o=this.injector.get(me,null,{optional:!0,self:!0}),i=o&&!this.formControl?o.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=i.filter(l=>!w(l,this.value)):n=i?[...i,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=v({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,i){if(n&1&&(y(i,We,4),y(i,R,4)),n&2){let l;m(l=k())&&(o.checkboxIconTemplate=l.first),m(l=k())&&(o.templates=l)}},viewQuery:function(n,o){if(n&1&&ue(et,5),n&2){let i;m(i=k())&&(o.inputViewChild=i.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",s],binary:[2,"binary","binary",s],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",A],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",s],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",s],required:[2,"required","required",s],autofocus:[2,"autofocus","autofocus",s],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[z([pt,Ee]),L,T,ne],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,o){if(n&1){let i=H();f(0,"div",1)(1,"input",2,0),D("focus",function(b){return F(i),O(o.onInputFocus(b))})("blur",function(b){return F(i),O(o.onInputBlur(b))})("change",function(b){return F(i),O(o.handleChange(b))}),x(),f(3,"div",3),u(4,ct,3,2,"ng-container",4)(5,st,1,0,null,5),x()()}n&2&&(K(o.style),_(o.styleClass),c("ngClass",o.containerClass),d("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),r(),K(o.inputStyle),_(o.inputClass),c("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",be(26,tt)),d("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required?!0:null)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),r(3),c("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),r(),c("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",G(27,ot,o.checked)))},dependencies:[Q,Y,ge,N,ve,Be,h],encapsulation:2,changeDetection:0})}return e})(),ko=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=S({type:e});static \u0275inj=B({imports:[Fe,h,h]})}return e})();export{J as a,Bt as b,Me as c,Xt as d,Be as e,Fe as f,ko as g};
