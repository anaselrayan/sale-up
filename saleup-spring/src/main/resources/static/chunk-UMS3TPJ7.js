import{Ea as P,Za as R,wa as A,xa as g}from"./chunk-6PJPRA3Z.js";import{Cb as u,Db as d,Eb as M,Fb as w,Gb as F,Lb as l,Mb as D,Nb as j,Nc as E,Pc as N,Qb as f,Sb as m,T as v,Ta as o,Tb as y,Tc as O,U as h,Xb as S,Yb as z,Yc as q,Z as T,cc as B,eb as b,fb as C,ib as $,ka as p,kb as k,lb as r,tb as i,wb as I,wc as Q,xb as x}from"./chunk-JPVIOWP6.js";var H=["icon"],G=["*"];function J(e,c){if(e&1&&M(0,"span",4),e&2){let t=l(2);i("ngClass",t.icon)}}function K(e,c){if(e&1&&(w(0),r(1,J,1,1,"span",3),F()),e&2){let t=l();o(),i("ngIf",t.icon)}}function L(e,c){}function U(e,c){e&1&&r(0,L,0,0,"ng-template")}function W(e,c){if(e&1&&(u(0,"span",5),r(1,U,1,0,null,6),d()),e&2){let t=l();o(),i("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var X=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,Y={root:({props:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},V=(()=>{class e extends P{name="tag";theme=X;classes=Y;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var Z=(()=>{class e extends R{get style(){return this._style}set style(t){this._style=t,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=T(V);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}containerClass(){let t="p-tag p-component";return this.severity&&(t+=` p-tag-${this.severity}`),this.rounded&&(t+=" p-tag-rounded"),this.styleClass&&(t+=` ${this.styleClass}`),t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=b({type:e,selectors:[["p-tag"]],contentQueries:function(a,n,_){if(a&1&&(f(_,H,4),f(_,A,4)),a&2){let s;m(s=y())&&(n.iconTemplate=s.first),m(s=y())&&(n.templates=s)}},hostVars:4,hostBindings:function(a,n){a&2&&(I(n.style),x(n.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",Q]},features:[B([V]),k,$],ngContentSelectors:G,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(D(),j(0),r(1,K,2,1,"ng-container",0)(2,W,2,1,"span",1),u(3,"span",2),S(4),d()),a&2&&(o(),i("ngIf",!n.iconTemplate&&!n._iconTemplate),o(),i("ngIf",n.iconTemplate||n._iconTemplate),o(2),z(n.value))},dependencies:[q,E,N,O,g],encapsulation:2,changeDetection:0})}return e})(),me=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=C({type:e});static \u0275inj=h({imports:[Z,g,g]})}return e})();export{Z as a,me as b};
