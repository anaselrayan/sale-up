import{Ea as oe,I as de,Q as je,S as De,W as Pe,ab as re,g as V,gb as Re,h as Ie,j as Se,jb as T,n as Ee,oa as Oe,qb as Me,r as Le,sb as ae,ta as Be,tb as ze,wa as ie,xa as x,y as me,ya as ue}from"./chunk-F44UMLL5.js";import{$ as A,$a as I,Aa as _e,Ab as a,Ac as xe,Db as ge,Dc as y,Eb as w,Ec as W,Fb as ye,Jb as u,Kb as f,Lb as L,Mb as M,Nb as z,Nc as Te,Ob as v,Pb as S,Rb as C,Sb as s,Tb as we,Ub as ve,Uc as J,Wc as X,Xb as _,Ya as he,Yb as N,Zb as m,Zc as ke,_ as $,_a as l,_b as d,_c as ee,bc as se,cc as K,db as be,dc as G,ea as Q,ed as te,jc as U,lb as F,lc as j,mb as Z,mc as Y,md as ne,na as h,nd as D,oa as b,pb as H,pd as P,qc as Ce,qd as ce,ra as R,rb as q,rd as O,sb as p,sd as le,ud as pe,wa as k,yc as E,zb as g}from"./chunk-BMJMDHVL.js";var He=["header"],qe=["footer"],Ne=["content"],Ke=["closeicon"],Ge=["headless"],Ue=["maskRef"],Ye=["container"],We=["closeButton"],Je=["*"],Xe=(t,r,e,n,i,o)=>({"p-drawer":!0,"p-drawer-active":t,"p-drawer-left":r,"p-drawer-right":e,"p-drawer-top":n,"p-drawer-bottom":i,"p-drawer-full":o}),et=(t,r)=>({transform:t,transition:r}),tt=t=>({value:"visible",params:t});function nt(t,r){t&1&&v(0)}function it(t,r){if(t&1&&p(0,nt,1,0,"ng-container",4),t&2){let e=s(2);a("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function ot(t,r){t&1&&v(0)}function rt(t,r){if(t&1&&(u(0,"div"),K(1),f()),t&2){let e=s(3);w(e.cx("title")),l(),G(e.header)}}function at(t,r){t&1&&L(0,"TimesIcon"),t&2&&g("data-pc-section","closeicon")}function st(t,r){}function ct(t,r){t&1&&p(0,st,0,0,"ng-template")}function lt(t,r){if(t&1&&p(0,at,1,1,"TimesIcon",8)(1,ct,1,0,null,4),t&2){let e=s(4);a("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),l(),a("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function pt(t,r){if(t&1){let e=S();u(0,"p-button",9),C("onClick",function(i){h(e);let o=s(3);return b(o.close(i))})("keydown.enter",function(i){h(e);let o=s(3);return b(o.close(i))}),p(1,lt,2,2,"ng-template",null,1,E),f()}if(t&2){let e=s(3);a("ngClass",e.cx("closeButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),g("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function mt(t,r){t&1&&v(0)}function dt(t,r){t&1&&v(0)}function ut(t,r){if(t&1&&(M(0),u(1,"div",5),p(2,dt,1,0,"ng-container",4),f(),z()),t&2){let e=s(3);l(),a("ngClass",e.cx("footer")),g("data-pc-section","footer"),l(),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function ft(t,r){if(t&1&&(u(0,"div",5),p(1,ot,1,0,"ng-container",4)(2,rt,2,3,"div",6)(3,pt,3,5,"p-button",7),f(),u(4,"div",5),ve(5),p(6,mt,1,0,"ng-container",4),f(),p(7,ut,3,3,"ng-container",8)),t&2){let e=s(2);a("ngClass",e.cx("header")),g("data-pc-section","header"),l(),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),l(),a("ngIf",e.header),l(),a("ngIf",e.showCloseIcon&&e.closable),l(),a("ngClass",e.cx("content")),g("data-pc-section","content"),l(2),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),l(),a("ngIf",e.footerTemplate||e._footerTemplate)}}function _t(t,r){if(t&1){let e=S();u(0,"div",3,0),C("@panelState.start",function(i){h(e);let o=s();return b(o.onAnimationStart(i))})("@panelState.done",function(i){h(e);let o=s();return b(o.onAnimationEnd(i))})("keydown",function(i){h(e);let o=s();return b(o.onKeyDown(i))}),p(2,it,1,1,"ng-container")(3,ft,8,9),f()}if(t&2){let e=s();ge(e.style),w(e.styleClass),a("ngClass",Ce(9,Xe,e.visible,e.position==="left"&&!e.fullScreen,e.position==="right"&&!e.fullScreen,e.position==="top"&&!e.fullScreen,e.position==="bottom"&&!e.fullScreen,e.fullScreen||e.position==="full"))("@panelState",j(19,tt,Y(16,et,e.transformOptions,e.transitionOptions))),g("data-pc-name","sidebar")("data-pc-section","root"),l(2),ye(e.headlessTemplate||e._headlessTemplate?2:3)}}var ht=({dt:t})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${t("drawer.background")};
    color: ${t("drawer.color")};
    border: 1px solid ${t("drawer.border.color")};
    box-shadow: ${t("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${t("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${t("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${t("drawer.title.font.weight")};
    font-size: ${t("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,bt={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"})},gt={mask:({instance:t})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen,[`p-drawer-${t.position}`]:!!t.position}),root:({instance:t})=>({"p-drawer p-component":!0,"p-drawer-full":t.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Ve=(()=>{class t extends oe{name="drawer";theme=ht;classes=gt;inlineStyles=bt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=R(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var yt=le([P({transform:"{{transform}}",opacity:0}),D("{{transition}}")]),wt=le([D("{{transition}}",P({transform:"{{transform}}",opacity:0}))]),vt=(()=>{class t extends re{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new k;onHide=new k;visibleChange=new k;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=Q(Ve);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&T.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-active"),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.container.setAttribute(this.attrSelector,""),this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",i),Pe(this.mask,"style",this.maskStyle),V(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Ie())}disableModality(){this.mask&&(V(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Se(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),T.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Le(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===T.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&T.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=R(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,o){if(n&1&&(_(o,He,4),_(o,qe,4),_(o,Ne,4),_(o,Ke,4),_(o,Ge,4),_(o,ie,4)),n&2){let c;m(c=d())&&(i.headerTemplate=c.first),m(c=d())&&(i.footerTemplate=c.first),m(c=d())&&(i.contentTemplate=c.first),m(c=d())&&(i.closeIconTemplate=c.first),m(c=d())&&(i.headlessTemplate=c.first),m(c=d())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&(N(Ue,5),N(Ye,5),N(We,5)),n&2){let o;m(o=d())&&(i.maskRef=o.first),m(o=d())&&(i.containerViewChild=o.first),m(o=d())&&(i.closeButtonViewChild=o.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",y],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",W],modal:[2,"modal","modal",y],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",y],showCloseIcon:[2,"showCloseIcon","showCloseIcon",y],closeOnEscape:[2,"closeOnEscape","closeOnEscape",y],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",y]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[U([Ve]),q,H],ngContentSelectors:Je,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(n,i){n&1&&(we(),p(0,_t,4,21,"div",2)),n&2&&a("ngIf",i.visible)},dependencies:[te,J,X,ee,ae,Me,x],encapsulation:2,data:{animation:[ne("panelState",[O("void => visible",[pe(yt)]),O("visible => void",[pe(wt)])])]},changeDetection:0})}return t})(),_n=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=A({imports:[vt,x,x]})}return t})();var Ct=["content"],xt=["accepticon"],Tt=["rejecticon"],kt=["headless"],It=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),St=t=>({value:"open",params:t}),Ae=t=>({$implicit:t});function Et(t,r){t&1&&v(0)}function Lt(t,r){if(t&1&&(M(0),p(1,Et,1,0,"ng-container",8),z()),t&2){let e=s(2);l(),a("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)("ngTemplateOutletContext",j(2,Ae,e.confirmation))}}function jt(t,r){t&1&&v(0)}function Dt(t,r){if(t&1&&(M(0),p(1,jt,1,0,"ng-container",8),z()),t&2){let e=s(3);l(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",j(2,Ae,e.confirmation))}}function Pt(t,r){if(t&1&&L(0,"i",15),t&2){let e=s(4);w(e.confirmation==null?null:e.confirmation.icon),a("ngClass","p-confirmpopup-icon")}}function Ot(t,r){if(t&1&&(p(0,Pt,1,3,"i",13),u(1,"span",14),K(2),f()),t&2){let e=s(3);a("ngIf",e.confirmation==null?null:e.confirmation.icon),l(2),G(e.confirmation==null?null:e.confirmation.message)}}function Bt(t,r){if(t&1&&L(0,"i"),t&2){let e=s(4);w(e.confirmation==null?null:e.confirmation.rejectIcon)}}function Rt(t,r){}function Mt(t,r){t&1&&p(0,Rt,0,0,"ng-template",null,3,E)}function zt(t,r){if(t&1){let e=S();u(0,"p-button",16),C("onClick",function(){h(e);let i=s(3);return b(i.onReject())}),p(1,Bt,1,2,"i",17)(2,Mt,2,0,null,18),f()}if(t&2){let e=s(3);a("label",e.rejectButtonLabel)("ngClass","p-confirmpopup-reject-button")("styleClass",e.confirmation==null?null:e.confirmation.rejectButtonStyleClass)("size",(e.confirmation.rejectButtonProps==null?null:e.confirmation.rejectButtonProps.size)||"small")("text",(e.confirmation.rejectButtonProps==null?null:e.confirmation.rejectButtonProps.text)||!1)("buttonProps",e.getRejectButtonProps()),g("aria-label",e.rejectButtonLabel),l(),a("ngIf",e.confirmation==null?null:e.confirmation.rejectIcon)("ngIfElse",e.rejecticon),l(),a("ngTemplateOutlet",e.rejectIconTemplate||e._rejectIconTemplate)}}function Vt(t,r){if(t&1&&L(0,"i"),t&2){let e=s(4);w(e.confirmation==null?null:e.confirmation.acceptIcon)}}function $t(t,r){}function At(t,r){t&1&&p(0,$t,0,0,"ng-template",null,4,E)}function Qt(t,r){if(t&1){let e=S();u(0,"p-button",19),C("onClick",function(){h(e);let i=s(3);return b(i.onAccept())}),p(1,Vt,1,2,"i",17)(2,At,2,0,null,18),f()}if(t&2){let e=s(3);a("label",e.acceptButtonLabel)("ngClass","p-confirmpopup-accept-button")("styleClass",e.confirmation==null?null:e.confirmation.acceptButtonStyleClass)("size",(e.confirmation.acceptButtonProps==null?null:e.confirmation.acceptButtonProps.size)||"small")("buttonProps",e.getAcceptButtonProps()),g("aria-label",e.acceptButtonLabel),l(),a("ngIf",e.confirmation==null?null:e.confirmation.acceptIcon)("ngIfElse",e.accepticontemplate),l(),a("ngTemplateOutlet",e.acceptIconTemplate||e._acceptIconTemplate)}}function Ft(t,r){if(t&1&&(u(0,"div",9,1),p(2,Dt,2,4,"ng-container",7)(3,Ot,3,2,"ng-template",null,2,E),f(),u(5,"div",10),p(6,zt,3,10,"p-button",11)(7,Qt,3,9,"p-button",12),f()),t&2){let e=se(4),n=s(2);l(2),a("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),l(4),a("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),l(),a("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}function Zt(t,r){if(t&1){let e=S();u(0,"div",6),C("click",function(i){h(e);let o=s();return b(o.onOverlayClick(i))})("@animation.start",function(i){h(e);let o=s();return b(o.onAnimationStart(i))})("@animation.done",function(i){h(e);let o=s();return b(o.onAnimationEnd(i))}),p(1,Lt,2,4,"ng-container",7)(2,Ft,8,4,"ng-template",null,0,E),f()}if(t&2){let e=se(3),n=s();w(n.styleClass),a("ngClass","p-confirmpopup p-component")("ngStyle",n.style)("@animation",j(10,St,Y(7,It,n.showTransitionOptions,n.hideTransitionOptions))),l(),a("ngIf",n.headlessTemplate||n._headlessTemplate)("ngIfElse",e)}}var Ht=({dt:t})=>`
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
`,qt={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},$e=(()=>{class t extends oe{name="confirmpopup";theme=Ht;classes=qt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=R(t)))(i||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Nt=(()=>{class t extends re{el;confirmationService;renderer;cd;overlayService;document;key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(e){this._visible=e,this.cd.markForCheck()}container;subscription;confirmation;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=Q($e);constructor(e,n,i,o,c,Qe){super(),this.el=e,this.confirmationService=n,this.renderer=i,this.cd=o,this.overlayService=c,this.document=Qe,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(B=>{if(!B){this.hide();return}B.key===this.key&&(this.confirmation=B,Object.keys(B).forEach(fe=>{this[fe]=B[fe]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new k,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new k,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"rejecticon":this._rejectIconTemplate=e.template;break;case"accepticon":this._acceptIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break}})}option(e,n){let i=this||this;if(i.hasOwnProperty(e))return n?i[n]:i[e]}onEscapeKeydown(e){this.confirmation&&this.confirmation.closeOnEscape&&this.onReject()}onAnimationStart(e){if(e.toState==="open"){this.container=e.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners();let n=this.getElementToFocus();n&&n.focus()}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy();break}}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}getElementToFocus(){switch(this.defaultFocus){case"accept":return me(this.container,".p-confirm-popup-accept");case"reject":return me(this.container,".p-confirm-popup-reject");case"none":return null}}align(){if(this.autoZIndex&&T.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation)return;Ee(this.container,this.confirmation?.target,!1);let e=de(this.container),n=de(this.confirmation?.target),i=0;e.left<n.left&&(i=n.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${i}px`),e.top<n.top&&V(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let e=je()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,e,i=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let o=this.confirmation.target;this.container!==i.target&&!this.container?.contains(i.target)&&o!==i.target&&!o.contains(i.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!De()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Re(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&T.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(ue.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(ue.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||t)(I(_e),I(Oe),I(be),I(xe),I(Be),I(Te))};static \u0275cmp=F({type:t,selectors:[["p-confirmPopup"],["p-confirmpopup"],["p-confirm-popup"]],contentQueries:function(n,i,o){if(n&1&&(_(o,Ct,4),_(o,xt,4),_(o,Tt,4),_(o,kt,4),_(o,ie,4)),n&2){let c;m(c=d())&&(i.contentTemplate=c.first),m(c=d())&&(i.acceptIconTemplate=c.first),m(c=d())&&(i.rejectIconTemplate=c.first),m(c=d())&&(i.headlessTemplate=c.first),m(c=d())&&(i.templates=c)}},hostBindings:function(n,i){n&1&&C("keydown.escape",function(c){return i.onEscapeKeydown(c)},!1,he)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",W],style:"style",styleClass:"styleClass",visible:"visible"},features:[U([$e]),q,H],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["rejecticon",""],["accepticontemplate",""],["role","alertdialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","alertdialog",3,"click","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-confirmpopup-content"],[1,"p-confirmpopup-footer"],["type","button",3,"label","ngClass","styleClass","size","text","buttonProps","onClick",4,"ngIf"],["type","button",3,"label","ngClass","styleClass","size","buttonProps","onClick",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[1,"p-confirmpopup-message"],[3,"ngClass"],["type","button",3,"onClick","label","ngClass","styleClass","size","text","buttonProps"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","ngClass","styleClass","size","buttonProps"]],template:function(n,i){n&1&&p(0,Zt,4,12,"div",5),n&2&&a("ngIf",i.visible)},dependencies:[te,J,X,ee,ke,x,ze,ae],encapsulation:2,data:{animation:[ne("animation",[ce("void",P({transform:"scaleY(0.8)",opacity:0})),ce("open",P({transform:"translateY(0)",opacity:1})),O("void => open",D("{{showTransitionParams}}")),O("open => void",D("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),$n=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=A({imports:[Nt,x,x]})}return t})();export{vt as a,_n as b,Nt as c,$n as d};
