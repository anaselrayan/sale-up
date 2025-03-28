import{a as ce}from"./chunk-RUYHRMRN.js";import{Ea as A,Za as K,aa as ie,ua as oe,va as ae,wa as z,xa as v,ya as re}from"./chunk-YJSGKVHH.js";import{$ as F,Ab as a,Bb as W,Db as X,Dc as te,Eb as b,Jb as m,Kb as d,Lb as Y,Mb as C,Nb as x,Ob as I,Pb as k,Rb as $,Sb as c,Tb as R,Ub as w,Uc as P,Va as U,Wc as B,Xb as _,Zb as f,Zc as ne,_ as M,_a as r,_b as u,_c as N,bc as Z,cc as E,dc as S,dd as q,ea as Q,fb as G,jc as O,lb as V,ma as H,mb as D,na as g,oa as y,pb as j,ra as T,rb as J,sb as s,wa as L,yc as ee,zb as h}from"./chunk-TMGVZNBO.js";var de=["removeicon"],_e=["*"];function fe(e,l){if(e&1){let t=k();m(0,"img",4),$("error",function(n){g(t);let o=c();return y(o.imageError(n))}),d()}if(e&2){let t=c();a("src",t.image,U)("alt",t.alt)}}function ue(e,l){if(e&1&&Y(0,"span",6),e&2){let t=c(2);b(t.icon),a("ngClass","p-chip-icon"),h("data-pc-section","icon")}}function he(e,l){if(e&1&&s(0,ue,1,4,"span",5),e&2){let t=c();a("ngIf",t.icon)}}function ge(e,l){if(e&1&&(m(0,"div",7),E(1),d()),e&2){let t=c();h("data-pc-section","label"),r(),S(t.label)}}function ye(e,l){if(e&1){let t=k();m(0,"span",11),$("click",function(n){g(t);let o=c(3);return y(o.close(n))})("keydown",function(n){g(t);let o=c(3);return y(o.onKeydown(n))}),d()}if(e&2){let t=c(3);b(t.removeIcon),a("ngClass","p-chip-remove-icon"),h("data-pc-section","removeicon")("aria-label",t.removeAriaLabel)}}function ve(e,l){if(e&1){let t=k();m(0,"TimesCircleIcon",12),$("click",function(n){g(t);let o=c(3);return y(o.close(n))})("keydown",function(n){g(t);let o=c(3);return y(o.onKeydown(n))}),d()}if(e&2){let t=c(3);b("p-chip-remove-icon"),h("data-pc-section","removeicon")("aria-label",t.removeAriaLabel)}}function be(e,l){if(e&1&&(C(0),s(1,ye,1,5,"span",9)(2,ve,1,4,"TimesCircleIcon",10),x()),e&2){let t=c(2);r(),a("ngIf",t.removeIcon),r(),a("ngIf",!t.removeIcon)}}function Te(e,l){}function Ce(e,l){e&1&&s(0,Te,0,0,"ng-template")}function xe(e,l){if(e&1){let t=k();m(0,"span",13),$("click",function(n){g(t);let o=c(2);return y(o.close(n))})("keydown",function(n){g(t);let o=c(2);return y(o.onKeydown(n))}),s(1,Ce,1,0,null,14),d()}if(e&2){let t=c(2);h("data-pc-section","removeicon")("aria-label",t.removeAriaLabel),r(),a("ngTemplateOutlet",t.removeIconTemplate||t._removeIconTemplate)}}function Ie(e,l){if(e&1&&(C(0),s(1,be,3,2,"ng-container",3)(2,xe,2,3,"span",8),x()),e&2){let t=c();r(),a("ngIf",!t.removeIconTemplate&&!t._removeIconTemplate),r(),a("ngIf",t.removeIconTemplate||t._removeIconTemplate)}}var we=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding: ${e("chip.padding.y")} ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-left: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${e("chip.padding.y")} / 2);
    padding-bottom: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.font.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,ke={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},le=(()=>{class e extends A{name="chip";theme=we;classes=ke;static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var $e=(()=>{class e extends K{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new L;onImageError=new L;visible=!0;get removeAriaLabel(){return this.config.getTranslation(re.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(t){this._chipProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}_chipProps;_componentStyle=Q(le);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"removeicon":this._removeIconTemplate=t.template;break;default:this._removeIconTemplate=t.template;break}})}ngOnChanges(t){if(super.ngOnChanges(t),t.chipProps&&t.chipProps.currentValue){let{currentValue:i}=t.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let t="p-chip p-component";return this.styleClass&&(t+=` ${this.styleClass}`),t}close(t){this.visible=!1,this.onRemove.emit(t)}onKeydown(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)}imageError(t){this.onImageError.emit(t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275cmp=V({type:e,selectors:[["p-chip"]],contentQueries:function(i,n,o){if(i&1&&(_(o,de,4),_(o,z,4)),i&2){let p;f(p=u())&&(n.removeIconTemplate=p.first),f(p=u())&&(n.templates=p)}},hostVars:9,hostBindings:function(i,n){i&2&&(h("data-pc-name","chip")("aria-label",n.label)("data-pc-section","root"),X(n.style),b(n.containerClass()),W("display",!n.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",te],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[O([le]),J,j,H],ngContentSelectors:_e,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(R(),w(0),s(1,fe,1,2,"img",1)(2,he,1,1,"ng-template",null,0,ee)(4,ge,2,2,"div",2)(5,Ie,3,2,"ng-container",3)),i&2){let o=Z(3);r(),a("ngIf",n.image)("ngIfElse",o),r(3),a("ngIf",n.label),r(),a("ngIf",n.removable)}},dependencies:[q,P,B,N,ce,v],encapsulation:2,changeDetection:0})}return e})(),st=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=D({type:e});static \u0275inj=F({imports:[$e,v,v]})}return e})();var Ee=["header"],Se=["title"],Me=["subtitle"],Fe=["content"],Qe=["footer"],Ve=["*",[["p-header"]],[["p-footer"]]],De=["*","p-header","p-footer"];function je(e,l){e&1&&I(0)}function Re(e,l){if(e&1&&(m(0,"div",8),w(1,1),s(2,je,1,0,"ng-container",6),d()),e&2){let t=c();r(2),a("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Oe(e,l){if(e&1&&(C(0),E(1),x()),e&2){let t=c(2);r(),S(t.header)}}function Pe(e,l){e&1&&I(0)}function Be(e,l){if(e&1&&(m(0,"div",9),s(1,Oe,2,1,"ng-container",10)(2,Pe,1,0,"ng-container",6),d()),e&2){let t=c();r(),a("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),r(),a("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Ne(e,l){if(e&1&&(C(0),E(1),x()),e&2){let t=c(2);r(),S(t.subheader)}}function qe(e,l){e&1&&I(0)}function ze(e,l){if(e&1&&(m(0,"div",11),s(1,Ne,2,1,"ng-container",10)(2,qe,1,0,"ng-container",6),d()),e&2){let t=c();r(),a("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),r(),a("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Ae(e,l){e&1&&I(0)}function Ke(e,l){e&1&&I(0)}function Le(e,l){if(e&1&&(m(0,"div",12),w(1,2),s(2,Ke,1,0,"ng-container",6),d()),e&2){let t=c();r(2),a("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var He=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,Ue={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},pe=(()=>{class e extends A{name="card";theme=He;classes=Ue;static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Ge=(()=>{class e extends K{header;subheader;set style(t){ie(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=G(null);_componentStyle=Q(pe);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275cmp=V({type:e,selectors:[["p-card"]],contentQueries:function(i,n,o){if(i&1&&(_(o,oe,5),_(o,ae,5),_(o,Ee,4),_(o,Se,4),_(o,Me,4),_(o,Fe,4),_(o,Qe,4),_(o,z,4)),i&2){let p;f(p=u())&&(n.headerFacet=p.first),f(p=u())&&(n.footerFacet=p.first),f(p=u())&&(n.headerTemplate=p.first),f(p=u())&&(n.titleTemplate=p.first),f(p=u())&&(n.subtitleTemplate=p.first),f(p=u())&&(n.contentTemplate=p.first),f(p=u())&&(n.footerTemplate=p.first),f(p=u())&&(n.templates=p)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[O([pe]),j],ngContentSelectors:De,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,n){i&1&&(R(Ve),m(0,"div",0),s(1,Re,3,1,"div",1),m(2,"div",2),s(3,Be,3,2,"div",3)(4,ze,3,2,"div",4),m(5,"div",5),w(6),s(7,Ae,1,0,"ng-container",6),d(),s(8,Le,3,1,"div",7),d()()),i&2&&(b(n.styleClass),a("ngClass","p-card p-component")("ngStyle",n._style()),h("data-pc-name","card"),r(),a("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),r(2),a("ngIf",n.header||n.titleTemplate||n._titleTemplate),r(),a("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),r(3),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),r(),a("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[q,P,B,N,ne,v],encapsulation:2,changeDetection:0})}return e})(),kt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=D({type:e});static \u0275inj=F({imports:[Ge,v,v]})}return e})();export{$e as a,st as b,Ge as c,kt as d};
