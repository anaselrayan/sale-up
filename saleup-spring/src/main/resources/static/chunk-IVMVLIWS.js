import{Ea as vt,I as F,Q as _t,S as ht,Za as yt,db as xt,g as ft,gb as A,n as dt,oa as gt,pb as Tt,qb as It,ta as bt,wa as Ct,xa as w,y as D,ya as M}from"./chunk-3JEFJ4TX.js";import{Cc as ot,Db as v,Dc as rt,Ib as u,Jb as f,Kb as T,Lb as k,Mb as L,Mc as ct,Nb as S,Ob as I,Qb as y,Rb as p,Tc as pt,Vc as at,Wb as h,Xa as K,Yb as g,Yc as st,Z as H,Za as s,Zb as b,Zc as lt,_ as Q,_a as m,ac as B,bc as X,cb as Y,cc as tt,da as Z,dd as mt,ic as et,kb as U,kc as j,lb as W,lc as nt,ld as ut,ma as d,md as R,na as _,ob as J,od as O,pd as z,qa as N,qb as G,qd as $,rb as l,va as E,xc as x,yb as P,za as q,zb as c,zc as it}from"./chunk-VNNEODSX.js";var Pt=["content"],kt=["accepticon"],Lt=["rejecticon"],St=["headless"],Bt=(e,o)=>({showTransitionParams:e,hideTransitionParams:o}),Rt=e=>({value:"open",params:e}),wt=e=>({$implicit:e});function Ot(e,o){e&1&&S(0)}function zt(e,o){if(e&1&&(k(0),l(1,Ot,1,0,"ng-container",8),L()),e&2){let t=p(2);s(),c("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)("ngTemplateOutletContext",j(2,wt,t.confirmation))}}function $t(e,o){e&1&&S(0)}function Dt(e,o){if(e&1&&(k(0),l(1,$t,1,0,"ng-container",8),L()),e&2){let t=p(3);s(),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",j(2,wt,t.confirmation))}}function Ft(e,o){if(e&1&&T(0,"i",15),e&2){let t=p(4);v(t.confirmation==null?null:t.confirmation.icon),c("ngClass","p-confirmpopup-icon")}}function Mt(e,o){if(e&1&&(l(0,Ft,1,3,"i",13),u(1,"span",14),X(2),f()),e&2){let t=p(3);c("ngIf",t.confirmation==null?null:t.confirmation.icon),s(2),tt(t.confirmation==null?null:t.confirmation.message)}}function At(e,o){if(e&1&&T(0,"i"),e&2){let t=p(4);v(t.confirmation==null?null:t.confirmation.rejectIcon)}}function Vt(e,o){}function Ht(e,o){e&1&&l(0,Vt,0,0,"ng-template",null,3,x)}function Qt(e,o){if(e&1){let t=I();u(0,"p-button",16),y("onClick",function(){d(t);let i=p(3);return _(i.onReject())}),l(1,At,1,2,"i",17)(2,Ht,2,0,null,18),f()}if(e&2){let t=p(3);c("label",t.rejectButtonLabel)("ngClass","p-confirmpopup-reject-button")("styleClass",t.confirmation==null?null:t.confirmation.rejectButtonStyleClass)("size",(t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.size)||"small")("text",(t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.text)||!1)("buttonProps",t.getRejectButtonProps()),P("aria-label",t.rejectButtonLabel),s(),c("ngIf",t.confirmation==null?null:t.confirmation.rejectIcon)("ngIfElse",t.rejecticon),s(),c("ngTemplateOutlet",t.rejectIconTemplate||t._rejectIconTemplate)}}function Zt(e,o){if(e&1&&T(0,"i"),e&2){let t=p(4);v(t.confirmation==null?null:t.confirmation.acceptIcon)}}function Nt(e,o){}function qt(e,o){e&1&&l(0,Nt,0,0,"ng-template",null,4,x)}function Kt(e,o){if(e&1){let t=I();u(0,"p-button",19),y("onClick",function(){d(t);let i=p(3);return _(i.onAccept())}),l(1,Zt,1,2,"i",17)(2,qt,2,0,null,18),f()}if(e&2){let t=p(3);c("label",t.acceptButtonLabel)("ngClass","p-confirmpopup-accept-button")("styleClass",t.confirmation==null?null:t.confirmation.acceptButtonStyleClass)("size",(t.confirmation.acceptButtonProps==null?null:t.confirmation.acceptButtonProps.size)||"small")("buttonProps",t.getAcceptButtonProps()),P("aria-label",t.acceptButtonLabel),s(),c("ngIf",t.confirmation==null?null:t.confirmation.acceptIcon)("ngIfElse",t.accepticontemplate),s(),c("ngTemplateOutlet",t.acceptIconTemplate||t._acceptIconTemplate)}}function Yt(e,o){if(e&1&&(u(0,"div",9,1),l(2,Dt,2,4,"ng-container",7)(3,Mt,3,2,"ng-template",null,2,x),f(),u(5,"div",10),l(6,Qt,3,10,"p-button",11)(7,Kt,3,9,"p-button",12),f()),e&2){let t=B(4),n=p(2);s(2),c("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",t),s(4),c("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),s(),c("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}function Ut(e,o){if(e&1){let t=I();u(0,"div",6),y("click",function(i){d(t);let r=p();return _(r.onOverlayClick(i))})("@animation.start",function(i){d(t);let r=p();return _(r.onAnimationStart(i))})("@animation.done",function(i){d(t);let r=p();return _(r.onAnimationEnd(i))}),l(1,zt,2,4,"ng-container",7)(2,Yt,8,4,"ng-template",null,0,x),f()}if(e&2){let t=B(3),n=p();v(n.styleClass),c("ngClass","p-confirmpopup p-component")("ngStyle",n.style)("@animation",j(10,Rt,nt(7,Bt,n.showTransitionOptions,n.hideTransitionOptions))),s(),c("ngIf",n.headlessTemplate||n._headlessTemplate)("ngIfElse",t)}}var Wt=({dt:e})=>`
.p-confirmpopup {
    position: absolute;
    margin-top: ${e("confirmpopup.gutter")};
    top: 0;
    left: 0;
    background: ${e("confirmpopup.background")};
    color: ${e("confirmpopup.color")};
    border: 1px solid ${e("confirmpopup.border.color")};
    border-radius: ${e("confirmpopup.border.radius")};
    box-shadow: ${e("confirmpopup.shadow")};
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: ${e("confirmpopup.content.padding")};
    gap: ${e("confirmpopup.content.gap")};
}

.p-confirmpopup-icon {
    font-size: ${e("confirmpopup.icon.size")};
    width: ${e("confirmpopup.icon.size")};
    height: ${e("confirmpopup.icon.size")};
    color: ${e("confirmpopup.icon.color")};
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: ${e("confirmpopup.footer.gap")};
    padding: ${e("confirmpopup.footer.padding")};
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(${e("confirmpopup.gutter")} * -1);
    margin-bottom: ${e("confirmpopup.gutter")};
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
    left: ${e("confirmpopup.arrow.offset")};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(${e("confirmpopup.gutter")} - 2px);
    margin-left: calc(-1 * (${e("confirmpopup.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("confirmpopup.background")};
}

.p-confirmpopup:before {
    border-width: ${e("confirmpopup.gutter")};
    margin-left: calc(-1 * ${e("confirmpopup.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("confirmpopup.border.color")};
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${e("confirmpopup.background")};
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${e("confirmpopup.border.color")};
}
`,Jt={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},jt=(()=>{class e extends vt{name="confirmpopup";theme=Wt;classes=Jt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=N(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var Gt=(()=>{class e extends yt{el;confirmationService;renderer;cd;overlayService;document;key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(t){this._visible=t,this.cd.markForCheck()}container;subscription;confirmation;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=Z(jt);constructor(t,n,i,r,a,Et){super(),this.el=t,this.confirmationService=n,this.renderer=i,this.cd=r,this.overlayService=a,this.document=Et,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(C=>{if(!C){this.hide();return}C.key===this.key&&(this.confirmation=C,Object.keys(C).forEach(V=>{this[V]=C[V]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new E,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new E,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"rejecticon":this._rejectIconTemplate=t.template;break;case"accepticon":this._acceptIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break}})}option(t,n){let i=this||this;if(i.hasOwnProperty(t))return n?i[n]:i[t]}onEscapeKeydown(t){this.confirmation&&this.confirmation.closeOnEscape&&this.onReject()}onAnimationStart(t){if(t.toState==="open"){this.container=t.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners();let n=this.getElementToFocus();n&&n.focus()}}onAnimationEnd(t){switch(t.toState){case"void":this.onContainerDestroy();break}}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}getElementToFocus(){switch(this.defaultFocus){case"accept":return D(this.container,".p-confirm-popup-accept");case"reject":return D(this.container,".p-confirm-popup-reject");case"none":return null}}align(){if(this.autoZIndex&&A.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation)return;dt(this.container,this.confirmation?.target,!1);let t=F(this.container),n=F(this.confirmation?.target),i=0;t.left<n.left&&(i=n.left-t.left),this.container.style.setProperty("--overlayArrowLeft",`${i}px`),t.top<n.top&&ft(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let t=_t()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,t,i=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let r=this.confirmation.target;this.container!==i.target&&!this.container?.contains(i.target)&&r!==i.target&&!r.contains(i.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!ht()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new xt(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&A.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(M.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(M.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||e)(m(q),m(gt),m(Y),m(it),m(bt),m(ct))};static \u0275cmp=U({type:e,selectors:[["p-confirmPopup"],["p-confirmpopup"],["p-confirm-popup"]],contentQueries:function(n,i,r){if(n&1&&(h(r,Pt,4),h(r,kt,4),h(r,Lt,4),h(r,St,4),h(r,Ct,4)),n&2){let a;g(a=b())&&(i.contentTemplate=a.first),g(a=b())&&(i.acceptIconTemplate=a.first),g(a=b())&&(i.rejectIconTemplate=a.first),g(a=b())&&(i.headlessTemplate=a.first),g(a=b())&&(i.templates=a)}},hostBindings:function(n,i){n&1&&y("keydown.escape",function(a){return i.onEscapeKeydown(a)},!1,K)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",ot],baseZIndex:[2,"baseZIndex","baseZIndex",rt],style:"style",styleClass:"styleClass",visible:"visible"},features:[et([jt]),G,J],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["rejecticon",""],["accepticontemplate",""],["role","alertdialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","alertdialog",3,"click","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-confirmpopup-content"],[1,"p-confirmpopup-footer"],["type","button",3,"label","ngClass","styleClass","size","text","buttonProps","onClick",4,"ngIf"],["type","button",3,"label","ngClass","styleClass","size","buttonProps","onClick",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[1,"p-confirmpopup-message"],[3,"ngClass"],["type","button",3,"onClick","label","ngClass","styleClass","size","text","buttonProps"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","ngClass","styleClass","size","buttonProps"]],template:function(n,i){n&1&&l(0,Ut,4,12,"div",5),n&2&&c("ngIf",i.visible)},dependencies:[mt,pt,at,lt,st,w,It,Tt],encapsulation:2,data:{animation:[ut("animation",[z("void",O({transform:"scaleY(0.8)",opacity:0})),z("open",O({transform:"translateY(0)",opacity:1})),$("void => open",R("{{showTransitionParams}}")),$("open => void",R("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),Ie=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=W({type:e});static \u0275inj=Q({imports:[Gt,w,w]})}return e})();export{Gt as a,Ie as b};
