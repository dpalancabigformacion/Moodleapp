(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{R7Ak:function(e,i,t){"use strict";t.r(i),t.d(i,"AddonPrivateFilesIndexPageModule",(function(){return O}));var o=t("tyNb"),n=t("L3Fv"),a=t("mrSG"),l=t("kScs"),r=t("GGba"),d=t("9+EE"),c=t("3LXp"),s=t("vuGA"),_=t("j3ag"),f=t("fjkH"),u=t("tP62"),h=t("S7NA"),p=t("bFG1"),g=t("pHTc"),m=t("fXoL"),P=t("TEn/"),v=t("nt/U"),F=t("ofXK"),b=t("PgjG"),I=t("rf3J"),x=t("3CSS"),y=t("5450"),A=t("r8G5"),E=t("yNDK"),w=t("sYmb");function AddonPrivateFilesIndexPage_core_loading_12_core_combobox_1_Template(e,i){if(1&e){const e=m.Fc();m.Ec(0,"core-combobox",12),m.Mc("onChange",(function AddonPrivateFilesIndexPage_core_loading_12_core_combobox_1_Template_core_combobox_onChange_0_listener(i){m.fd(e);return m.Oc(2).rootChanged(i)})),m.Ec(1,"ion-select-option",13),m.pd(2),m.Pc(3,"translate"),m.Dc(),m.Ec(4,"ion-select-option",14),m.pd(5),m.Pc(6,"translate"),m.Dc(),m.Dc()}if(2&e){const e=m.Oc(2);m.Vc("selection",e.root),m.lc(2),m.rd(" ",m.Qc(3,3,"addon.privatefiles.privatefiles")," "),m.lc(3),m.rd(" ",m.Qc(6,5,"addon.privatefiles.sitefiles")," ")}}const _c0=function(e,i){return{used:e,total:i}},_c1=function(e){return{$a:e}};function AddonPrivateFilesIndexPage_core_loading_12_ion_card_2_Template(e,i){if(1&e&&(m.Ec(0,"ion-card",15),m.Ec(1,"ion-item"),m.Ec(2,"ion-label"),m.pd(3),m.Pc(4,"translate"),m.Dc(),m.Dc(),m.Dc()),2&e){const e=m.Oc(2);m.lc(3),m.rd(" ",m.Rc(4,1,"core.quotausage",m.ad(7,_c1,m.bd(4,_c0,e.spaceUsed,e.userQuotaReadable)))," ")}}function AddonPrivateFilesIndexPage_core_loading_12_ion_list_3_ng_container_1_ion_item_1_Template(e,i){if(1&e){const e=m.Fc();m.Ec(0,"ion-item",19),m.Mc("click",(function AddonPrivateFilesIndexPage_core_loading_12_ion_list_3_ng_container_1_ion_item_1_Template_ion_item_click_0_listener(){m.fd(e);const i=m.Oc().$implicit;return m.Oc(3).openFolder(i)})),m.zc(1,"ion-icon",20),m.Pc(2,"translate"),m.Ec(3,"ion-label"),m.pd(4),m.Dc(),m.Dc()}if(2&e){const e=m.Oc().$implicit;m.lc(1),m.mc("aria-label",m.Qc(2,2,"core.folder")),m.lc(3),m.qd(e.filename)}}function AddonPrivateFilesIndexPage_core_loading_12_ion_list_3_ng_container_1_core_file_2_Template(e,i){if(1&e&&m.zc(0,"core-file",21),2&e){const e=m.Oc().$implicit,i=m.Oc(3);m.Vc("file",e)("component",i.component)("componentId",e.contextid)}}function AddonPrivateFilesIndexPage_core_loading_12_ion_list_3_ng_container_1_Template(e,i){if(1&e&&(m.Cc(0),m.nd(1,AddonPrivateFilesIndexPage_core_loading_12_ion_list_3_ng_container_1_ion_item_1_Template,5,4,"ion-item",17),m.nd(2,AddonPrivateFilesIndexPage_core_loading_12_ion_list_3_ng_container_1_core_file_2_Template,1,3,"core-file",18),m.Bc()),2&e){const e=i.$implicit;m.lc(1),m.Vc("ngIf",e.isdir),m.lc(1),m.Vc("ngIf",!e.isdir)}}function AddonPrivateFilesIndexPage_core_loading_12_ion_list_3_Template(e,i){if(1&e&&(m.Ec(0,"ion-list"),m.nd(1,AddonPrivateFilesIndexPage_core_loading_12_ion_list_3_ng_container_1_Template,3,2,"ng-container",16),m.Dc()),2&e){const e=m.Oc(2);m.lc(1),m.Vc("ngForOf",e.files)}}function AddonPrivateFilesIndexPage_core_loading_12_core_empty_box_4_Template(e,i){1&e&&(m.zc(0,"core-empty-box",22),m.Pc(1,"translate")),2&e&&m.Vc("message",m.Qc(1,1,"addon.privatefiles.emptyfilelist"))}function AddonPrivateFilesIndexPage_core_loading_12_Template(e,i){if(1&e&&(m.Ec(0,"core-loading",7),m.nd(1,AddonPrivateFilesIndexPage_core_loading_12_core_combobox_1_Template,7,7,"core-combobox",8),m.nd(2,AddonPrivateFilesIndexPage_core_loading_12_ion_card_2_Template,5,9,"ion-card",9),m.nd(3,AddonPrivateFilesIndexPage_core_loading_12_ion_list_3_Template,2,1,"ion-list",10),m.nd(4,AddonPrivateFilesIndexPage_core_loading_12_core_empty_box_4_Template,2,3,"core-empty-box",11),m.Dc()),2&e){const e=m.Oc();m.Vc("hideUntil",e.filesLoaded),m.lc(1),m.Vc("ngIf",e.showPrivateFiles&&e.showSiteFiles&&!e.path),m.lc(1),m.Vc("ngIf",e.userQuota&&e.filesInfo&&e.filesInfo.filecount>0),m.lc(1),m.Vc("ngIf",e.files&&e.files.length>0),m.lc(1),m.Vc("ngIf",!e.files||!e.files.length)}}function AddonPrivateFilesIndexPage_ion_fab_13_Template(e,i){if(1&e){const e=m.Fc();m.Ec(0,"ion-fab",23),m.Ec(1,"ion-fab-button",24),m.Mc("click",(function AddonPrivateFilesIndexPage_ion_fab_13_Template_ion_fab_button_click_1_listener(){m.fd(e);return m.Oc().uploadFile()})),m.Pc(2,"translate"),m.zc(3,"ion-icon",25),m.Ec(4,"span",26),m.pd(5),m.Pc(6,"translate"),m.Dc(),m.Dc(),m.Dc()}2&e&&(m.lc(1),m.mc("aria-label",m.Qc(2,2,"core.fileuploader.uploadafile")),m.lc(4),m.qd(m.Qc(6,4,"core.fileuploader.uploadafile")))}let T=(()=>{class AddonPrivateFilesIndexPage{constructor(){this.filesLoaded=!1,this.updateSiteObserver=f.b.on(f.b.SITE_UPDATED,(()=>{this.setVisibility()}),d.b.getCurrentSiteId())}ngOnInit(){var e,i,t;try{this.root=g.a.getRouteParam("root");const e=g.a.getRouteNumberParam("contextid");e&&(this.path={contextid:e,component:g.a.getRequiredRouteParam("component"),filearea:g.a.getRequiredRouteParam("filearea"),itemid:g.a.getRequiredRouteNumberParam("itemid"),filepath:g.a.getRequiredRouteParam("filepath"),filename:g.a.getRequiredRouteParam("filename")})}catch(e){return c.a.showErrorModal(e),g.a.back(),void 0}this.title=(null===(e=this.path)||void 0===e?void 0:e.filename)||_.J.instant("addon.privatefiles.files"),this.setVisibility(),this.userQuota=null===(t=null===(i=d.b.getCurrentSite())||void 0===i?void 0:i.getInfo())||void 0===t?void 0:t.userquota,this.root||(this.showPrivateFiles?this.root="my":this.showSiteFiles&&(this.root="site")),this.root?this.rootChanged(this.root):this.filesLoaded=!0}setVisibility(){this.showPrivateFiles=u.a.canViewPrivateFiles(),this.showSiteFiles=u.a.canViewSiteFiles(),this.showUpload=u.a.canUploadFiles()}refreshData(e){this.refreshFiles().finally((()=>{null==e?void 0:e.complete()}))}rootChanged(e){this.root=e,this.filesLoaded=!1,this.component="my"==this.root?u.b.PRIVATE_FILES_COMPONENT:u.b.SITE_FILES_COMPONENT,this.fetchFiles().finally((()=>{this.filesLoaded=!0}))}uploadFile(){return Object(a.a)(this,void 0,void 0,(function*(){if(!r.a.isOnline())return c.a.showErrorModal("core.fileuploader.errormustbeonlinetoupload",!0),void 0;try{yield h.a.uploadPrivateFile(this.filesInfo),this.filesLoaded=!1,yield p.a.ignoreErrors(this.refreshFiles()),this.filesLoaded=!0}catch(e){c.a.showErrorModalDefault(e,"core.fileuploader.errorwhileuploading",!0)}}))}fetchFiles(){return Object(a.a)(this,void 0,void 0,(function*(){try{if(this.path)return this.files=yield u.a.getFiles(this.path),void 0;"site"==this.root?(this.title=_.J.instant("addon.privatefiles.sitefiles"),this.files=yield u.a.getSiteFiles()):"my"==this.root?(this.title=_.J.instant("addon.privatefiles.files"),this.files=yield u.a.getPrivateFiles(),this.showUpload&&this.userQuota&&this.userQuota>0?(this.filesInfo=yield u.a.getPrivateFilesInfo(),this.spaceUsed=s.a.bytesToSize(this.filesInfo.filesizewithoutreferences,1),this.userQuotaReadable=s.a.bytesToSize(this.userQuota,1)):delete this.userQuota):c.a.showErrorModal("addon.privatefiles.couldnotloadfiles",!0)}catch(e){c.a.showErrorModalDefault(e,"addon.privatefiles.couldnotloadfiles",!0)}}))}refreshFiles(){return Object(a.a)(this,void 0,void 0,(function*(){try{yield Promise.all([u.a.invalidateDirectory(this.root,this.path),u.a.invalidatePrivateFilesInfoForUser()])}finally{yield this.fetchFiles()}}))}openFolder(e){const i={contextid:e.contextid,component:e.component||"",filearea:e.filearea||"",itemid:e.itemid||0,filepath:e.filepath||"",filename:e.filename||""};e.component&&(i.filename="");const t=l.Md5.hashAsciiStr(JSON.stringify(i));g.a.navigate(`../${t}`,{params:i})}ngOnDestroy(){var e;null===(e=this.updateSiteObserver)||void 0===e?void 0:e.off()}}return AddonPrivateFilesIndexPage.ɵfac=function AddonPrivateFilesIndexPage_Factory(e){return new(e||AddonPrivateFilesIndexPage)},AddonPrivateFilesIndexPage.ɵcmp=m.sc({type:AddonPrivateFilesIndexPage,selectors:[["page-addon-privatefiles-index"]],decls:14,vars:10,consts:[["slot","start"],[3,"text"],[1,"limited-width"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil",4,"ngIf"],["slot","fixed","core-fab","","vertical","bottom","horizontal","end",4,"ngIf"],[3,"hideUntil"],[3,"selection","onChange",4,"ngIf"],["class","core-info-card",4,"ngIf"],[4,"ngIf"],["icon","far-folder-open",3,"message",4,"ngIf"],[3,"selection","onChange"],["value","my",1,"ion-text-wrap"],["value","site",1,"ion-text-wrap"],[1,"core-info-card"],[4,"ngFor","ngForOf"],["button","","class","ion-text-wrap item-file item-directory","detail","true",3,"click",4,"ngIf"],[3,"file","component","componentId",4,"ngIf"],["button","","detail","true",1,"ion-text-wrap","item-file","item-directory",3,"click"],["name","fas-folder","slot","start"],[3,"file","component","componentId"],["icon","far-folder-open",3,"message"],["slot","fixed","core-fab","","vertical","bottom","horizontal","end"],[3,"click"],["name","fas-plus","aria-hidden","true"],[1,"sr-only"]],template:function AddonPrivateFilesIndexPage_Template(e,i){1&e&&(m.Ec(0,"ion-header"),m.Ec(1,"ion-toolbar"),m.Ec(2,"ion-buttons",0),m.zc(3,"ion-back-button",1),m.Pc(4,"translate"),m.Dc(),m.Ec(5,"ion-title"),m.Ec(6,"h1"),m.pd(7),m.Dc(),m.Dc(),m.Dc(),m.Dc(),m.Ec(8,"ion-content",2),m.Ec(9,"ion-refresher",3),m.Mc("ionRefresh",(function AddonPrivateFilesIndexPage_Template_ion_refresher_ionRefresh_9_listener(e){return i.refreshData(e.target)})),m.zc(10,"ion-refresher-content",4),m.Pc(11,"translate"),m.Dc(),m.nd(12,AddonPrivateFilesIndexPage_core_loading_12_Template,5,5,"core-loading",5),m.nd(13,AddonPrivateFilesIndexPage_ion_fab_13_Template,7,6,"ion-fab",6),m.Dc()),2&e&&(m.lc(3),m.Vc("text",m.Qc(4,6,"core.back")),m.lc(4),m.qd(i.title),m.lc(2),m.Vc("disabled",!i.filesLoaded||!i.showPrivateFiles&&!i.showSiteFiles),m.lc(1),m.Wc("pullingText",m.Qc(11,8,"core.pulltorefresh")),m.lc(2),m.Vc("ngIf",i.showPrivateFiles||i.showSiteFiles),m.lc(1),m.Vc("ngIf",i.showUpload&&"site"!=i.root&&!i.path))},directives:[P.C,P.Ab,P.m,P.h,P.i,P.yb,v.a,P.v,P.bb,P.cb,F.t,b.a,I.a,P.mb,P.n,P.I,P.O,P.P,F.s,P.D,x.a,y.a,A.a,P.x,E.a,P.y],pipes:[w.d],encapsulation:2}),AddonPrivateFilesIndexPage})();const D=[{path:"",component:T}];let O=(()=>{class AddonPrivateFilesIndexPageModule{}return AddonPrivateFilesIndexPageModule.ɵmod=m.wc({type:AddonPrivateFilesIndexPageModule}),AddonPrivateFilesIndexPageModule.ɵinj=m.vc({factory:function AddonPrivateFilesIndexPageModule_Factory(e){return new(e||AddonPrivateFilesIndexPageModule)},imports:[[o.m.forChild(D),n.a],o.m]}),AddonPrivateFilesIndexPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&m.kd(O,{declarations:[T],imports:[o.m,n.a],exports:[o.m]}))}}]);