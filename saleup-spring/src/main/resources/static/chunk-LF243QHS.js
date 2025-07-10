import{a as Se}from"./chunk-JMAJ42AW.js";import{c as Fe}from"./chunk-XFY4HXS5.js";import{c as ye}from"./chunk-ATPXQBBY.js";import{Ea as J,Za as X,a as G,b as ve,g as Ce,i as oe,kb as Te,ma as xe,nb as Ie,rb as we,wa as Y,xa as S,ya as U}from"./chunk-6PJPRA3Z.js";import{Ab as te,Bb as ie,Cb as d,Db as _,Eb as m,Fb as k,Gb as B,Hb as I,Ib as w,Kb as x,Lb as r,Nc as q,Oa as de,Oc as be,Pc as H,Qb as v,Rb as N,Sb as h,Sc as W,T as $,Ta as o,Tb as b,Tc as Z,U as z,Xb as P,Yb as ne,Yc as K,Z as E,Zb as ue,_b as me,_c as le,cc as j,eb as M,ec as A,fb as R,fc as fe,ga as f,ha as g,ia as pe,ib as V,ic as ge,ka as F,kb as Q,lb as p,lc as he,pa as y,qa as ce,rc as ae,sb as u,tb as l,ub as D,wb as _e,wc as T,xb as C,xc as O,yb as L,zb as ee}from"./chunk-JPVIOWP6.js";var Ve=["content"],De=(t,a)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":a}),Pe=t=>({$implicit:t});function Oe(t,a){if(t&1&&(d(0,"div"),P(1),_()),t&2){let e=r(2);D("display",e.value!=null&&e.value!==0?"flex":"none"),u("data-pc-section","label"),o(),me("",e.value,"",e.unit,"")}}function $e(t,a){t&1&&I(0)}function ze(t,a){if(t&1&&(d(0,"div",3)(1,"div",4),p(2,Oe,2,5,"div",5)(3,$e,1,0,"ng-container",6),_()()),t&2){let e=r();C(e.valueStyleClass),D("width",e.value+"%")("background",e.color),l("ngClass","p-progressbar-value p-progressbar-value-animate"),u("data-pc-section","value"),o(2),l("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),o(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",A(11,Pe,e.value))}}function Re(t,a){if(t&1&&(d(0,"div",7),m(1,"div",8),_()),t&2){let e=r();C(e.valueStyleClass),l("ngClass","p-progressbar-indeterminate-container"),u("data-pc-section","container"),o(),D("background",e.color),u("data-pc-section","value")}}var Qe=({dt:t})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${t("progressbar.height")};
    background: ${t("progressbar.background")};
    border-radius: ${t("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${t("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${t("progressbar.label.color")};
    font-size: ${t("progressbar.label.font.size")};
    font-weight: ${t("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,Ne={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},Ue=(()=>{class t extends J{name="progressbar";theme=Qe;classes=Ne;static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var re=(()=>{class t extends X{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=E(Ue);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=M({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,s){if(i&1&&(v(s,Ve,4),v(s,Y,4)),i&2){let c;h(c=b())&&(n.contentTemplate=c.first),h(c=b())&&(n.templates=c)}},inputs:{value:[2,"value","value",O],showValue:[2,"showValue","showValue",T],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[j([Ue]),Q,V],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(d(0,"div",0),p(1,ze,4,13,"div",1)(2,Re,2,7,"div",2),_()),i&2&&(C(n.styleClass),l("ngStyle",n.style)("ngClass",fe(12,De,n.mode==="determinate",n.mode==="indeterminate")),u("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",n.value+n.unit),o(),l("ngIf",n.mode==="determinate"),o(),l("ngIf",n.mode==="indeterminate"))},dependencies:[K,q,H,Z,W,S],encapsulation:2,changeDetection:0})}return t})(),Ti=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=z({imports:[re,S,S]})}return t})();var Le=(()=>{class t extends Te{pathId;ngOnInit(){this.pathId="url(#"+xe()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=M({type:t,selectors:[["UploadIcon"]],features:[V],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(pe(),d(0,"svg",0)(1,"g"),m(2,"path",1),_(),d(3,"defs")(4,"clipPath",2),m(5,"rect",3),_()()()),i&2&&(C(n.getClassNames()),u("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),o(),u("clip-path",n.pathId),o(3),l("id",n.pathId))},encapsulation:2})}return t})();var je=["file"],Ae=["header"],ke=["content"],qe=["toolbar"],He=["chooseicon"],We=["filelabel"],Ze=["uploadicon"],Ke=["cancelicon"],Ge=["empty"],Ye=["advancedfileinput"],Je=["basicfileinput"],Xe=(t,a,e,i,n)=>({$implicit:t,uploadedFiles:a,chooseCallback:e,clearCallback:i,uploadCallback:n}),et=(t,a,e,i,n,s,c,se)=>({$implicit:t,uploadedFiles:a,chooseCallback:e,clearCallback:i,removeUploadedFileCallback:n,removeFileCallback:s,progress:c,messages:se}),tt=t=>({$implicit:t});function it(t,a){if(t&1&&m(0,"span"),t&2){let e=r(3);C(e.chooseIcon),u("aria-label",!0)("data-pc-section","chooseicon")}}function nt(t,a){t&1&&m(0,"PlusIcon"),t&2&&u("aria-label",!0)("data-pc-section","chooseicon")}function at(t,a){}function lt(t,a){t&1&&p(0,at,0,0,"ng-template")}function ot(t,a){if(t&1&&(d(0,"span"),p(1,lt,1,0,null,11),_()),t&2){let e=r(4);u("aria-label",!0)("data-pc-section","chooseicon"),o(),l("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function rt(t,a){if(t&1&&(k(0),p(1,nt,1,2,"PlusIcon",9)(2,ot,2,3,"span",9),B()),t&2){let e=r(3);o(),l("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),o(),l("ngIf",e.chooseIconTemplate||e._chooseIconTemplate)}}function st(t,a){if(t&1&&m(0,"span",21),t&2){let e=r(4);l("ngClass",e.uploadIcon),u("aria-hidden",!0)}}function pt(t,a){t&1&&m(0,"UploadIcon")}function ct(t,a){}function dt(t,a){t&1&&p(0,ct,0,0,"ng-template")}function _t(t,a){if(t&1&&(d(0,"span"),p(1,dt,1,0,null,11),_()),t&2){let e=r(5);u("aria-hidden",!0),o(),l("ngTemplateOutlet",e.uploadIconTemplate||e._uploadIconTemplate)}}function ut(t,a){if(t&1&&(k(0),p(1,pt,1,0,"UploadIcon",9)(2,_t,2,2,"span",9),B()),t&2){let e=r(4);o(),l("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),o(),l("ngIf",e.uploadIconTemplate||e._uploadIconTemplate)}}function mt(t,a){if(t&1){let e=w();d(0,"p-button",19),x("onClick",function(){f(e);let n=r(3);return g(n.upload())}),p(1,st,1,2,"span",20)(2,ut,3,2,"ng-container",9),_()}if(t&2){let e=r(3);l("label",e.uploadButtonLabel)("disabled",!e.hasFiles()||e.isFileLimitExceeded())("styleClass","p-fileupload-upload-button "+e.uploadStyleClass)("buttonProps",e.uploadButtonProps),o(),l("ngIf",e.uploadIcon),o(),l("ngIf",!e.uploadIcon)}}function ft(t,a){if(t&1&&m(0,"span",21),t&2){let e=r(4);l("ngClass",e.cancelIcon)}}function gt(t,a){t&1&&m(0,"TimesIcon"),t&2&&u("aria-hidden",!0)}function ht(t,a){}function bt(t,a){t&1&&p(0,ht,0,0,"ng-template")}function vt(t,a){if(t&1&&(d(0,"span"),p(1,bt,1,0,null,11),_()),t&2){let e=r(5);u("aria-hidden",!0),o(),l("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function yt(t,a){if(t&1&&(k(0),p(1,gt,1,1,"TimesIcon",9)(2,vt,2,2,"span",9),B()),t&2){let e=r(4);o(),l("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),o(),l("ngIf",e.cancelIconTemplate||e._cancelIconTemplate)}}function Ct(t,a){if(t&1){let e=w();d(0,"p-button",19),x("onClick",function(){f(e);let n=r(3);return g(n.clear())}),p(1,ft,1,1,"span",20)(2,yt,3,2,"ng-container",9),_()}if(t&2){let e=r(3);l("label",e.cancelButtonLabel)("disabled",!e.hasFiles()||e.uploading)("styleClass","p-fileupload-cancel-button "+e.cancelStyleClass)("buttonProps",e.cancelButtonProps),o(),l("ngIf",e.cancelIcon),o(),l("ngIf",!e.cancelIcon)}}function xt(t,a){if(t&1){let e=w();k(0),d(1,"p-button",16),x("focus",function(){f(e);let n=r(2);return g(n.onFocus())})("blur",function(){f(e);let n=r(2);return g(n.onBlur())})("onClick",function(){f(e);let n=r(2);return g(n.choose())})("keydown.enter",function(){f(e);let n=r(2);return g(n.choose())}),d(2,"input",7,0),x("change",function(n){f(e);let s=r(2);return g(s.onFileSelect(n))}),_(),p(4,it,1,4,"span",17)(5,rt,3,2,"ng-container",9),_(),p(6,mt,3,6,"p-button",18)(7,Ct,3,6,"p-button",18),B()}if(t&2){let e=r(2);o(),l("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled||e.isChooseDisabled())("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),u("data-pc-section","choosebutton"),o(),l("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),u("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),o(2),l("ngIf",e.chooseIcon),o(),l("ngIf",!e.chooseIcon),o(),l("ngIf",!e.auto&&e.showUploadButton),o(),l("ngIf",!e.auto&&e.showCancelButton)}}function Tt(t,a){t&1&&I(0)}function Ft(t,a){t&1&&I(0)}function It(t,a){if(t&1&&m(0,"p-progressbar",22),t&2){let e=r(2);l("value",e.progress)("showValue",!1)}}function wt(t,a){if(t&1&&m(0,"p-message",14),t&2){let e=a.$implicit;l("severity",e.severity)("text",e.text)}}function St(t,a){if(t&1){let e=w();d(0,"img",33),x("error",function(n){f(e);let s=r(5);return g(s.imageError(n))}),_()}if(t&2){let e=r().$implicit,i=r(4);l("src",e.objectURL,de)("width",i.previewWidth)}}function Ut(t,a){t&1&&m(0,"TimesIcon")}function Et(t,a){}function Lt(t,a){t&1&&p(0,Et,0,0,"ng-template")}function kt(t,a){if(t&1&&p(0,Ut,1,0,"TimesIcon",9)(1,Lt,1,0,null,11),t&2){let e=r(5);l("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),o(),l("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function Bt(t,a){if(t&1){let e=w();d(0,"div",24),p(1,St,1,2,"img",27),d(2,"div",28)(3,"div",29),P(4),_(),d(5,"span",30),P(6),_()(),d(7,"div",31)(8,"p-button",32),x("onClick",function(n){let s=f(e).index,c=r(4);return g(c.remove(n,s))}),p(9,kt,2,2,"ng-template",null,2,ae),_()()()}if(t&2){let e=a.$implicit,i=r(4);o(),l("ngIf",i.isImage(e)),o(3),ne(e.name),o(2),ne(i.formatSize(e.size)),o(2),l("disabled",i.uploading)("styleClass","p-fileupload-file-remove-button "+i.removeStyleClass)}}function Mt(t,a){if(t&1&&p(0,Bt,11,5,"div",26),t&2){let e=r(3);l("ngForOf",e.files)}}function Vt(t,a){}function Dt(t,a){if(t&1&&p(0,Vt,0,0,"ng-template",25),t&2){let e=r(3);l("ngForOf",e.files)("ngForTemplate",e.fileTemplate||e._fileTemplate)}}function Pt(t,a){if(t&1&&(d(0,"div",23),p(1,Mt,1,1,"div",24)(2,Dt,1,2,null,25),_()),t&2){let e=r(2);o(),L(!e.fileTemplate&&!e._fileTemplate?1:-1),o(),L(e.fileTemplate||e._fileTemplate?2:-1)}}function Ot(t,a){t&1&&I(0)}function $t(t,a){t&1&&I(0)}function zt(t,a){if(t&1&&p(0,$t,1,0,"ng-container",11),t&2){let e=r(2);l("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Rt(t,a){if(t&1){let e=w();d(0,"div",6)(1,"input",7,0),x("change",function(n){f(e);let s=r();return g(s.onFileSelect(n))}),_(),d(3,"div",8),p(4,xt,8,15,"ng-container",9)(5,Tt,1,0,"ng-container",10)(6,Ft,1,0,"ng-container",11),_(),d(7,"div",12,1),x("dragenter",function(n){f(e);let s=r();return g(s.onDragEnter(n))})("dragleave",function(n){f(e);let s=r();return g(s.onDragLeave(n))})("drop",function(n){f(e);let s=r();return g(s.onDrop(n))}),p(9,It,1,2,"p-progressbar",13),te(10,wt,1,2,"p-message",14,ee),p(12,Pt,3,2,"div",15)(13,Ot,1,0,"ng-container",10)(14,zt,1,1,"ng-container"),_()()}if(t&2){let e=r();C(e.styleClass),l("ngClass","p-fileupload p-fileupload-advanced p-component")("ngStyle",e.style),u("data-pc-name","fileupload")("data-pc-section","root"),o(),D("display","none"),l("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),u("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),o(3),l("ngIf",!e.headerTemplate&&!e._headerTemplate),o(),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",ge(24,Xe,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.upload.bind(e))),o(),l("ngTemplateOutlet",e.toolbarTemplate||e._toolbarTemplate),o(),u("data-pc-section","content"),o(2),l("ngIf",e.hasFiles()),o(),ie(e.msgs),o(2),l("ngIf",e.hasFiles()),o(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",he(30,et,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.removeUploadedFile.bind(e),e.remove.bind(e),e.progress,e.msgs)),o(),L((e.emptyTemplate||e._emptyTemplate)&&!e.hasFiles()&&!e.hasUploadedFiles()?14:-1)}}function Qt(t,a){if(t&1&&m(0,"p-message",14),t&2){let e=a.$implicit;l("severity",e.severity)("text",e.text)}}function Nt(t,a){if(t&1&&m(0,"span",37),t&2){let e=r(4);l("ngClass",e.uploadIcon)}}function jt(t,a){t&1&&m(0,"UploadIcon",40),t&2&&l("styleClass","p-button-icon p-button-icon-left")}function At(t,a){}function qt(t,a){t&1&&p(0,At,0,0,"ng-template")}function Ht(t,a){if(t&1&&(d(0,"span",41),p(1,qt,1,0,null,11),_()),t&2){let e=r(5);o(),l("ngTemplateOutlet",e._uploadIconTemplate||e.uploadIconTemplate)}}function Wt(t,a){if(t&1&&(k(0),p(1,jt,1,1,"UploadIcon",38)(2,Ht,2,1,"span",39),B()),t&2){let e=r(4);o(),l("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),o(),l("ngIf",e._uploadIconTemplate||e.uploadIconTemplate)}}function Zt(t,a){if(t&1&&p(0,Nt,1,1,"span",36)(1,Wt,3,2,"ng-container",9),t&2){let e=r(3);l("ngIf",e.uploadIcon),o(),l("ngIf",!e.uploadIcon)}}function Kt(t,a){if(t&1&&m(0,"span",43),t&2){let e=r(4);l("ngClass",e.chooseIcon)}}function Gt(t,a){t&1&&m(0,"PlusIcon"),t&2&&u("data-pc-section","uploadicon")}function Yt(t,a){}function Jt(t,a){t&1&&p(0,Yt,0,0,"ng-template")}function Xt(t,a){if(t&1&&(k(0),p(1,Gt,1,1,"PlusIcon",9)(2,Jt,1,0,null,11),B()),t&2){let e=r(4);o(),l("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),o(),l("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function ei(t,a){if(t&1&&p(0,Kt,1,1,"span",42)(1,Xt,3,2,"ng-container",9),t&2){let e=r(3);l("ngIf",e.chooseIcon),o(),l("ngIf",!e.chooseIcon)}}function ti(t,a){if(t&1&&p(0,Zt,2,2)(1,ei,2,2),t&2){let e=r(2);L(e.hasFiles()&&!e.auto?0:1)}}function ii(t,a){if(t&1&&(d(0,"span"),P(1),_()),t&2){let e=r(3);C(e.cx("filelabel")),o(),ue(" ",e.basicFileChosenLabel()," ")}}function ni(t,a){t&1&&I(0)}function ai(t,a){if(t&1&&p(0,ni,1,0,"ng-container",10),t&2){let e=r(3);l("ngTemplateOutlet",e.fileLabelTemplate||e._fileLabelTemplate)("ngTemplateOutletContext",A(2,tt,e.files))}}function li(t,a){if(t&1&&p(0,ii,2,3,"span",44)(1,ai,1,4,"ng-container"),t&2){let e=r(2);L(!e.fileLabelTemplate&&!e._fileLabelTemplate?0:1)}}function oi(t,a){if(t&1){let e=w();d(0,"div",21),te(1,Qt,1,2,"p-message",14,ee),d(3,"p-button",34),x("onClick",function(){f(e);let n=r();return g(n.onBasicUploaderClick())})("keydown",function(n){f(e);let s=r();return g(s.onBasicKeydown(n))}),p(4,ti,2,1,"ng-template",null,2,ae),d(6,"input",35,3),x("change",function(n){f(e);let s=r();return g(s.onFileSelect(n))})("focus",function(){f(e);let n=r();return g(n.onFocus())})("blur",function(){f(e);let n=r();return g(n.onBlur())}),_()(),p(8,li,2,1),_()}if(t&2){let e=r();C(e.styleClass),l("ngClass","p-fileupload p-fileupload-basic p-component"),u("data-pc-name","fileupload"),o(),ie(e.msgs),o(2),_e(e.style),l("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled)("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),o(3),l("accept",e.accept)("multiple",e.multiple)("disabled",e.disabled),u("aria-label",e.browseFilesLabel)("data-pc-section","input"),o(2),L(e.auto?-1:8)}}var ri=({dt:t})=>`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${t("fileupload.border.color")};
    border-radius: ${t("fileupload.border.radius")};
    background: ${t("fileupload.background")};
    color: ${t("fileupload.color")};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: ${t("fileupload.header.padding")};
    background: ${t("fileupload.header.background")};
    color: ${t("fileupload.header.color")};
    border-style: solid;
    border-width: ${t("fileupload.header.border.width")};
    border-color: ${t("fileupload.header.border.color")};
    border-radius: ${t("fileupload.header.border.radius")};
    gap: ${t("fileupload.header.gap")};
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.content.gap")};
    transition: border-color ${t("fileupload.transition.duration")};
    padding: ${t("fileupload.content.padding")};
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: ${t("fileupload.progressbar.height")};
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.filelist.gap")};
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${t("fileupload.file.padding")};
    border-bottom: 1px solid ${t("fileupload.file.border.color")};
    gap: ${t("fileupload.file.gap")};
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.file.info.gap")};
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${t("fileupload.content.highlight.border.color")};
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${t("fileupload.basic.gap")};
}
`,si={root:({instance:t})=>`p-fileupload p-fileupload-${t.mode} p-component`,header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},Be=(()=>{class t extends J{name="fileupload";theme=ri;classes=si;static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var pi=(()=>{class t extends X{name;url;method="post";multiple;accept;disabled;auto;withCredentials;maxFileSize;invalidFileSizeMessageSummary="{0}: Invalid file size, ";invalidFileSizeMessageDetail="maximum upload size is {0}.";invalidFileTypeMessageSummary="{0}: Invalid file type, ";invalidFileTypeMessageDetail="allowed file types: {0}.";invalidFileLimitMessageDetail="limit is {0} at most.";invalidFileLimitMessageSummary="Maximum number of files exceeded, ";style;styleClass;previewWidth=50;chooseLabel;uploadLabel;cancelLabel;chooseIcon;uploadIcon;cancelIcon;showUploadButton=!0;showCancelButton=!0;mode="advanced";headers;customUpload;fileLimit;uploadStyleClass;cancelStyleClass;removeStyleClass;chooseStyleClass;chooseButtonProps;uploadButtonProps={severity:"secondary"};cancelButtonProps={severity:"secondary"};onBeforeUpload=new y;onSend=new y;onUpload=new y;onError=new y;onClear=new y;onRemove=new y;onSelect=new y;onProgress=new y;uploadHandler=new y;onImageError=new y;onRemoveUploadedFile=new y;fileTemplate;headerTemplate;contentTemplate;toolbarTemplate;chooseIconTemplate;fileLabelTemplate;uploadIconTemplate;cancelIconTemplate;emptyTemplate;advancedFileInput;basicFileInput;content;set files(e){this._files=[];for(let i=0;i<e.length;i++){let n=e[i];this.validate(n)&&(this.isImage(n)&&(n.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[i]))),this._files.push(e[i]))}}get files(){return this._files}get basicButtonLabel(){return this.auto||!this.hasFiles()?this.chooseLabel:this.uploadLabel??this.files[0].name}_files=[];progress=0;dragHighlight;msgs;uploadedFileCount=0;focus;uploading;duplicateIEEvent;translationSubscription;dragOverListener;uploadedFiles=[];sanitizer=E(ye);zone=E(ce);http=E(ve);_componentStyle=E(Be);ngOnInit(){super.ngOnInit(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()})}ngAfterViewInit(){super.ngAfterViewInit(),le(this.platformId)&&this.mode==="advanced"&&this.zone.runOutsideAngular(()=>{this.content&&(this.dragOverListener=this.renderer.listen(this.content.nativeElement,"dragover",this.onDragOver.bind(this)))})}_headerTemplate;_contentTemplate;_toolbarTemplate;_chooseIconTemplate;_uploadIconTemplate;_cancelIconTemplate;_emptyTemplate;_fileTemplate;_fileLabelTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"file":this._fileTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"toolbar":this._toolbarTemplate=e.template;break;case"chooseicon":this._chooseIconTemplate=e.template;break;case"uploadicon":this._uploadIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"filelabel":this._fileLabelTemplate=e.template;break;default:this._fileTemplate=e.template;break}})}basicFileChosenLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles()?this.files&&this.files.length===1?this.files[0].name:this.config.getTranslation("fileChosenMessage")?.replace("{0}",this.files.length):this.config.getTranslation("noFileChosenMessage")||""}getTranslation(e){return this.config.getTranslation(e)}choose(){this.advancedFileInput?.nativeElement.click()}onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.msgs=[],this.multiple||(this.files=[]);let i=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let n=0;n<i.length;n++){let s=i[n];this.isFileSelected(s)||this.validate(s)&&(this.isImage(s)&&(s.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(i[n]))),this.files.push(i[n]))}this.onSelect.emit({originalEvent:e,files:i,currentFiles:this.files}),this.checkFileLimit(i),this.hasFiles()&&this.auto&&(this.mode!=="advanced"||!this.isFileLimitExceeded())&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()}isFileSelected(e){for(let i of this.files)if(i.name+i.type+i.size===e.name+e.type+e.size)return!0;return!1}isIE11(){if(le(this.platformId))return!!this.document.defaultView.MSInputMethodContext&&!!this.document.documentMode}validate(e){if(this.msgs=this.msgs||[],this.accept&&!this.isFileTypeValid(e)){let i=`${this.invalidFileTypeMessageSummary.replace("{0}",e.name)} ${this.invalidFileTypeMessageDetail.replace("{0}",this.accept)}`;return this.msgs.push({severity:"error",text:i}),!1}if(this.maxFileSize&&e.size>this.maxFileSize){let i=`${this.invalidFileSizeMessageSummary.replace("{0}",e.name)} ${this.invalidFileSizeMessageDetail.replace("{0}",this.formatSize(this.maxFileSize))}`;return this.msgs.push({severity:"error",text:i}),!1}return!0}isFileTypeValid(e){let i=this.accept?.split(",").map(n=>n.trim());for(let n of i)if(this.isWildcard(n)?this.getTypeClass(e.type)===this.getTypeClass(n):e.type==n||this.getFileExtension(e).toLowerCase()===n.toLowerCase())return!0;return!1}getTypeClass(e){return e.substring(0,e.indexOf("/"))}isWildcard(e){return e.indexOf("*")!==-1}getFileExtension(e){return"."+e.name.split(".").pop()}isImage(e){return/^image\//.test(e.type)}onImageLoad(e){window.URL.revokeObjectURL(e.src)}uploader(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.uploadHandler.emit({files:this.files}),this.cd.markForCheck();else{this.uploading=!0,this.msgs=[];let e=new FormData;this.onBeforeUpload.emit({formData:e});for(let i=0;i<this.files.length;i++)e.append(this.name,this.files[i],this.files[i].name);this.http.request(this.method,this.url,{body:e,headers:this.headers,reportProgress:!0,observe:"events",withCredentials:this.withCredentials}).subscribe(i=>{switch(i.type){case G.Sent:this.onSend.emit({originalEvent:i,formData:e});break;case G.Response:this.uploading=!1,this.progress=0,i.status>=200&&i.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.onUpload.emit({originalEvent:i,files:this.files})):this.onError.emit({files:this.files}),this.uploadedFiles.push(...this.files),this.clear();break;case G.UploadProgress:{i.loaded&&(this.progress=Math.round(i.loaded*100/i.total)),this.onProgress.emit({originalEvent:i,progress:this.progress});break}}this.cd.markForCheck()},i=>{this.uploading=!1,this.onError.emit({files:this.files,error:i})})}}clear(){this.files=[],this.uploadedFileCount=0,this.onClear.emit(),this.clearInputElement(),this.cd.markForCheck()}remove(e,i){this.clearInputElement(),this.onRemove.emit({originalEvent:e,file:this.files[i]}),this.files.splice(i,1),this.checkFileLimit(this.files)}removeUploadedFile(e){let i=this.uploadedFiles.splice(e,1)[0];this.uploadedFiles=[...this.uploadedFiles],this.onRemoveUploadedFile.emit({file:i,files:this.uploadedFiles})}isFileLimitExceeded(){let i=this.auto?this.files.length:this.files.length+this.uploadedFileCount;return this.fileLimit&&this.fileLimit<=i&&this.focus&&(this.focus=!1),this.fileLimit&&this.fileLimit<i}isChooseDisabled(){return this.auto?this.fileLimit&&this.fileLimit<=this.files.length:this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount}checkFileLimit(e){this.msgs??=[];let i=this.msgs.length>0&&this.fileLimit&&this.fileLimit<e.length;if(this.isFileLimitExceeded()||i){let n=`${this.invalidFileLimitMessageSummary.replace("{0}",this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}",this.fileLimit.toString())}`;this.msgs.push({severity:"error",text:n})}}clearInputElement(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.advancedFileInput.nativeElement.value=""),this.basicFileInput&&this.basicFileInput.nativeElement&&(this.basicFileInput.nativeElement.value="")}clearIEInput(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.duplicateIEEvent=!0,this.advancedFileInput.nativeElement.value="")}hasFiles(){return this.files&&this.files.length>0}hasUploadedFiles(){return this.uploadedFiles&&this.uploadedFiles.length>0}onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())}onDragOver(e){this.disabled||(Ce(this.content?.nativeElement,"p-fileupload-highlight"),this.dragHighlight=!0,e.stopPropagation(),e.preventDefault())}onDragLeave(e){this.disabled||oe(this.content?.nativeElement,"p-fileupload-highlight")}onDrop(e){if(!this.disabled){oe(this.content?.nativeElement,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();let i=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||i&&i.length===1)&&this.onFileSelect(e)}}onFocus(){this.focus=!0}onBlur(){this.focus=!1}formatSize(e){let s=this.getTranslation(U.FILE_SIZE_TYPES);if(e===0)return`0 ${s[0]}`;let c=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,c)).toFixed(3)} ${s[c]}`}upload(){this.hasFiles()&&this.uploader()}onBasicUploaderClick(){this.basicFileInput?.nativeElement.click()}onBasicKeydown(e){switch(e.code){case"Space":case"Enter":this.onBasicUploaderClick(),e.preventDefault();break}}imageError(e){this.onImageError.emit(e)}getBlockableElement(){return this.el.nativeElement.children[0]}get chooseButtonLabel(){return this.chooseLabel||this.config.getTranslation(U.CHOOSE)}get uploadButtonLabel(){return this.uploadLabel||this.config.getTranslation(U.UPLOAD)}get cancelButtonLabel(){return this.cancelLabel||this.config.getTranslation(U.CANCEL)}get browseFilesLabel(){return this.config.getTranslation(U.ARIA)[U.BROWSE_FILES]}get pendingLabel(){return this.config.getTranslation(U.PENDING)}ngOnDestroy(){this.content&&this.content.nativeElement&&this.dragOverListener&&(this.dragOverListener(),this.dragOverListener=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=M({type:t,selectors:[["p-fileupload"],["p-fileUpload"]],contentQueries:function(i,n,s){if(i&1&&(v(s,je,4),v(s,Ae,4),v(s,ke,4),v(s,qe,4),v(s,He,4),v(s,We,4),v(s,Ze,4),v(s,Ke,4),v(s,Ge,4),v(s,Y,4)),i&2){let c;h(c=b())&&(n.fileTemplate=c.first),h(c=b())&&(n.headerTemplate=c.first),h(c=b())&&(n.contentTemplate=c.first),h(c=b())&&(n.toolbarTemplate=c.first),h(c=b())&&(n.chooseIconTemplate=c.first),h(c=b())&&(n.fileLabelTemplate=c.first),h(c=b())&&(n.uploadIconTemplate=c.first),h(c=b())&&(n.cancelIconTemplate=c.first),h(c=b())&&(n.emptyTemplate=c.first),h(c=b())&&(n.templates=c)}},viewQuery:function(i,n){if(i&1&&(N(Ye,5),N(Je,5),N(ke,5)),i&2){let s;h(s=b())&&(n.advancedFileInput=s.first),h(s=b())&&(n.basicFileInput=s.first),h(s=b())&&(n.content=s.first)}},inputs:{name:"name",url:"url",method:"method",multiple:[2,"multiple","multiple",T],accept:"accept",disabled:[2,"disabled","disabled",T],auto:[2,"auto","auto",T],withCredentials:[2,"withCredentials","withCredentials",T],maxFileSize:[2,"maxFileSize","maxFileSize",O],invalidFileSizeMessageSummary:"invalidFileSizeMessageSummary",invalidFileSizeMessageDetail:"invalidFileSizeMessageDetail",invalidFileTypeMessageSummary:"invalidFileTypeMessageSummary",invalidFileTypeMessageDetail:"invalidFileTypeMessageDetail",invalidFileLimitMessageDetail:"invalidFileLimitMessageDetail",invalidFileLimitMessageSummary:"invalidFileLimitMessageSummary",style:"style",styleClass:"styleClass",previewWidth:[2,"previewWidth","previewWidth",O],chooseLabel:"chooseLabel",uploadLabel:"uploadLabel",cancelLabel:"cancelLabel",chooseIcon:"chooseIcon",uploadIcon:"uploadIcon",cancelIcon:"cancelIcon",showUploadButton:[2,"showUploadButton","showUploadButton",T],showCancelButton:[2,"showCancelButton","showCancelButton",T],mode:"mode",headers:"headers",customUpload:[2,"customUpload","customUpload",T],fileLimit:[2,"fileLimit","fileLimit",e=>O(e,null)],uploadStyleClass:"uploadStyleClass",cancelStyleClass:"cancelStyleClass",removeStyleClass:"removeStyleClass",chooseStyleClass:"chooseStyleClass",chooseButtonProps:"chooseButtonProps",uploadButtonProps:"uploadButtonProps",cancelButtonProps:"cancelButtonProps",files:"files"},outputs:{onBeforeUpload:"onBeforeUpload",onSend:"onSend",onUpload:"onUpload",onError:"onError",onClear:"onClear",onRemove:"onRemove",onSelect:"onSelect",onProgress:"onProgress",uploadHandler:"uploadHandler",onImageError:"onImageError",onRemoveUploadedFile:"onRemoveUploadedFile"},features:[j([Be]),Q,V],decls:2,vars:2,consts:[["advancedfileinput",""],["content",""],["icon",""],["basicfileinput",""],[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass","ngStyle"],["type","file",3,"change","multiple","accept","disabled"],[1,"p-fileupload-header"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"p-fileupload-content",3,"dragenter","dragleave","drop"],[3,"value","showValue",4,"ngIf"],[3,"severity","text"],["class","p-fileupload-file-list",4,"ngIf"],["tabindex","0",3,"focus","blur","onClick","keydown.enter","styleClass","disabled","label","buttonProps"],[3,"class",4,"ngIf"],[3,"label","disabled","styleClass","buttonProps","onClick",4,"ngIf"],[3,"onClick","label","disabled","styleClass","buttonProps"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"value","showValue"],[1,"p-fileupload-file-list"],[1,"p-fileupload-file"],["ngFor","",3,"ngForOf","ngForTemplate"],["class","p-fileupload-file",4,"ngFor","ngForOf"],["class","p-fileupload-file-thumbnail",3,"src","width","error",4,"ngIf"],[1,"p-fileupload-file-info"],[1,"p-fileupload-file-name"],[1,"p-fileupload-file-size"],[1,"p-fileupload-file-actions"],["text","","rounded","","severity","danger",3,"onClick","disabled","styleClass"],[1,"p-fileupload-file-thumbnail",3,"error","src","width"],["tabindex","0",3,"onClick","keydown","styleClass","disabled","label","buttonProps"],["type","file",3,"change","focus","blur","accept","multiple","disabled"],["class","p-button-icon p-button-icon-left",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left",3,"ngClass"],[3,"styleClass",4,"ngIf"],["class","p-button-icon p-button-icon-left",4,"ngIf"],[3,"styleClass"],[1,"p-button-icon","p-button-icon-left"],["class","p-button-icon p-button-icon-left pi",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left","pi",3,"ngClass"],[3,"class"]],template:function(i,n){i&1&&p(0,Rt,15,39,"div",4)(1,oi,9,16,"div",5),i&2&&(l("ngIf",n.mode==="advanced"),o(),l("ngIf",n.mode==="basic"))},dependencies:[K,q,be,H,Z,W,we,re,Se,Fe,Le,Ie,S],encapsulation:2,changeDetection:0})}return t})(),Gi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=R({type:t});static \u0275inj=z({imports:[pi,S,S]})}return t})();export{re as a,Ti as b,pi as c,Gi as d};
