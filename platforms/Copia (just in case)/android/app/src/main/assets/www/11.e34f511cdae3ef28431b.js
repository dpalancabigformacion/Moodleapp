(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{csSw:function(t,o,i){"use strict";i.r(o),i.d(o,"AddonNotificationsNotificationPageModule",(function(){return T}));var n=i("tyNb"),e=i("L3Fv"),a=i("mrSG"),c=i("qkYQ"),r=i("VUQF"),s=i("ssuw"),d=i("baaQ"),l=i("eoiU"),m=i("mbU7"),g=i("pHTc"),f=i("9+EE"),u=i("3LXp"),_=i("fXoL"),h=i("TEn/"),p=i("nt/U"),P=i("OZH1"),v=i("PgjG"),O=i("ofXK"),b=i("hMzs"),N=i("FeAf"),C=i("eAud"),M=i("3jOR"),x=i("ACYt"),I=i("3CSS"),y=i("sYmb"),w=i("lAaw"),A=i("dne1");function AddonNotificationsNotificationPage_core_user_avatar_13_div_1_Template(t,o){if(1&t&&(_.Ec(0,"div",16),_.zc(1,"img",17),_.Dc()),2&t){const t=_.Oc(2);_.lc(1),_.Vc("src",t.iconUrl,_.id)}}function AddonNotificationsNotificationPage_core_user_avatar_13_core_mod_icon_2_Template(t,o){if(1&t&&_.zc(0,"core-mod-icon",18),2&t){const t=_.Oc(2);_.Vc("modicon",t.iconUrl)("modname",t.modname)("showAlt",!1)}}function AddonNotificationsNotificationPage_core_user_avatar_13_Template(t,o){if(1&t&&(_.Ec(0,"core-user-avatar",13),_.nd(1,AddonNotificationsNotificationPage_core_user_avatar_13_div_1_Template,2,1,"div",14),_.nd(2,AddonNotificationsNotificationPage_core_user_avatar_13_core_mod_icon_2_Template,1,3,"core-mod-icon",15),_.Dc()),2&t){const t=_.Oc();_.Vc("userId",t.userIdFrom)("profileUrl",t.profileImageUrlFrom)("fullname",t.userFromFullName),_.lc(1),_.Vc("ngIf",t.iconUrl&&!t.modname),_.lc(1),_.Vc("ngIf",t.modname)}}function AddonNotificationsNotificationPage_ng_container_14_div_1_Template(t,o){if(1&t&&(_.Ec(0,"div",21),_.zc(1,"img",17),_.Dc()),2&t){const t=_.Oc(2);_.lc(1),_.Vc("src",t.iconUrl,_.id)}}function AddonNotificationsNotificationPage_ng_container_14_core_mod_icon_2_Template(t,o){if(1&t&&_.zc(0,"core-mod-icon",22),2&t){const t=_.Oc(2);_.Vc("modicon",t.iconUrl)("modname",t.modname)("showAlt",!1)}}function AddonNotificationsNotificationPage_ng_container_14_Template(t,o){if(1&t&&(_.Cc(0),_.nd(1,AddonNotificationsNotificationPage_ng_container_14_div_1_Template,2,1,"div",19),_.nd(2,AddonNotificationsNotificationPage_ng_container_14_core_mod_icon_2_Template,1,3,"core-mod-icon",20),_.Bc()),2&t){const t=_.Oc();_.lc(1),_.Vc("ngIf",!t.modname),_.lc(1),_.Vc("ngIf",t.modname)}}function AddonNotificationsNotificationPage_ng_container_21_Template(t,o){if(1&t&&(_.Cc(0),_.pd(1),_.Bc()),2&t){const t=_.Oc();_.lc(1),_.rd(" · ",t.userFromFullName,"")}}function AddonNotificationsNotificationPage_div_26_ion_button_2_Template(t,o){if(1&t&&(_.Ec(0,"ion-button",26),_.Mc("click",(function AddonNotificationsNotificationPage_div_26_ion_button_2_Template_ion_button_click_0_listener(){return o.$implicit.action()})),_.zc(1,"ion-icon",27),_.pd(2),_.Pc(3,"translate"),_.Dc()),2&t){const t=o.$implicit;_.lc(1),_.Wc("name",t.icon),_.lc(1),_.rd(" ",_.Qc(3,2,t.message)," ")}}function AddonNotificationsNotificationPage_div_26_Template(t,o){if(1&t&&(_.Ec(0,"div",23),_.Ec(1,"div",24),_.nd(2,AddonNotificationsNotificationPage_div_26_ion_button_2_Template,4,4,"ion-button",25),_.Dc(),_.Dc()),2&t){const t=_.Oc();_.lc(2),_.Vc("ngForOf",t.actions)}}let k=(()=>{class AddonNotificationsNotificationPage{constructor(){this.subject="",this.content="",this.userIdFrom=-1,this.loaded=!1,this.timecreated=0,this.actions=[]}ngOnInit(){var t;return Object(a.a)(this,void 0,void 0,(function*(){let o;try{o=this.getNotification()}catch(t){return u.a.showErrorModal(t),g.a.back(),void 0}if("subject"in o){if(this.subject=o.subject,this.content=o.mobiletext||o.fullmessagehtml,this.userIdFrom=o.useridfrom,this.profileImageUrlFrom=o.profileimageurlfrom,this.userFromFullName=o.userfromfullname,this.iconUrl=o.iconurl,(null===(t=o.moodlecomponent)||void 0===t?void 0:t.startsWith("mod_"))&&o.iconurl){const t=o.moodlecomponent.substring(4);(o.iconurl.match("/theme/image.php/[^/]+/"+t+"/[-0-9]*/")||o.iconurl.match("/theme/image.php/[^/]+/"+o.moodlecomponent+"/[-0-9]*/"))&&(this.modname=t)}this.timecreated=o.timecreated}else this.subject=o.title||"",this.content=o.message||"",this.userIdFrom=o.userfromid?Number(o.userfromid):-1,this.profileImageUrlFrom=o.senderImage,this.userFromFullName=o.userfromfullname;yield this.loadActions(o),s.a.markNotificationAsRead(o),this.loaded=!0}))}getNotification(){const t=g.a.getRouteNumberParam("id"),o=t?this.getNotificationById(t):void 0;return null!=o?o:g.a.getRequiredRouteParam("notification")}getNotificationById(t){var o;const i=d.a.getOrCreateSource(f.b.getRequiredCurrentSite().isVersionGreaterEqualThan("4.0")?r.a:c.a,[]),n=null===(o=i.getItems())||void 0===o?void 0:o.find((({id:o})=>o===t));if(n)return this.loadNotifications(i),n}loadNotifications(t){return Object(a.a)(this,void 0,void 0,(function*(){this.notifications=new notification_AddonNotificationSwipeItemsManager(t),yield this.notifications.start()}))}loadActions(t){var o;return Object(a.a)(this,void 0,void 0,(function*(){if(!(t.contexturl||t.customdata&&t.customdata.appurl))return;let i=[];this.actionsData=t.customdata,this.contextUrl=t.contexturl,this.courseId="courseid"in t?t.courseid:void 0,(null===(o=this.actionsData)||void 0===o?void 0:o.appurl)&&(i=yield m.a.getActionsFor(this.actionsData.appurl,this.courseId,void 0,this.actionsData)),!i.length&&this.contextUrl&&(i=yield m.a.getActionsFor(this.contextUrl,this.courseId,void 0,this.actionsData)),i.length||i.push({message:"core.view",icon:"fas-eye",action:this.openInBrowser.bind(this)}),this.actions=i}))}openInBrowser(t){var o;return Object(a.a)(this,void 0,void 0,(function*(){const i=(null===(o=this.actionsData)||void 0===o?void 0:o.appurl)||this.contextUrl;if(!i)return;(yield f.b.getSite(t)).openInBrowserWithAutoLogin(i)}))}ngOnDestroy(){var t;null===(t=this.notifications)||void 0===t?void 0:t.destroy()}}return AddonNotificationsNotificationPage.ɵfac=function AddonNotificationsNotificationPage_Factory(t){return new(t||AddonNotificationsNotificationPage)},AddonNotificationsNotificationPage.ɵcmp=_.sc({type:AddonNotificationsNotificationPage,selectors:[["page-addon-notifications-notification"]],decls:27,vars:22,consts:[["slot","start"],[3,"text"],[3,"core-swipe-navigation"],[3,"hideUntil"],[1,"list-item-limited-width"],["lines","full",1,"ion-text-wrap","core-notification-title"],["slot","start",3,"userId","profileUrl","fullname",4,"ngIf"],[4,"ngIf"],[1,"item-heading"],["contextLevel","system",3,"text","contextInstanceId","wsNotFiltered"],[1,"ion-text-wrap","core-notification-body"],["contextLevel","system",3,"text","contextInstanceId"],["collapsible-footer","","appearOnBottom","","slot","fixed",4,"ngIf"],["slot","start",3,"userId","profileUrl","fullname"],["class","core-avatar-extra-img",4,"ngIf"],[3,"modicon","modname","showAlt",4,"ngIf"],[1,"core-avatar-extra-img"],["alt","","role","presentation",3,"src"],[3,"modicon","modname","showAlt"],["class","core-notification-icon","slot","start",4,"ngIf"],["class","core-notification-icon","slot","start",3,"modicon","modname","showAlt",4,"ngIf"],["slot","start",1,"core-notification-icon"],["slot","start",1,"core-notification-icon",3,"modicon","modname","showAlt"],["collapsible-footer","","appearOnBottom","","slot","fixed"],[1,"list-item-limited-width","adaptable-buttons-row"],["expand","block",3,"click",4,"ngFor","ngForOf"],["expand","block",3,"click"],["slot","start","aria-hidden","true",3,"name"]],template:function AddonNotificationsNotificationPage_Template(t,o){1&t&&(_.Ec(0,"ion-header"),_.Ec(1,"ion-toolbar"),_.Ec(2,"ion-buttons",0),_.zc(3,"ion-back-button",1),_.Pc(4,"translate"),_.Dc(),_.Ec(5,"ion-title"),_.Ec(6,"h1"),_.pd(7),_.Pc(8,"translate"),_.Dc(),_.Dc(),_.Dc(),_.Dc(),_.Ec(9,"ion-content",2),_.Ec(10,"core-loading",3),_.Ec(11,"div",4),_.Ec(12,"ion-item",5),_.nd(13,AddonNotificationsNotificationPage_core_user_avatar_13_Template,3,5,"core-user-avatar",6),_.nd(14,AddonNotificationsNotificationPage_ng_container_14_Template,3,2,"ng-container",7),_.Ec(15,"ion-label"),_.Ec(16,"p",8),_.zc(17,"core-format-text",9),_.Dc(),_.Ec(18,"p"),_.pd(19),_.Pc(20,"coreTimeAgo"),_.nd(21,AddonNotificationsNotificationPage_ng_container_21_Template,2,1,"ng-container",7),_.Dc(),_.Dc(),_.Dc(),_.Ec(22,"ion-item",10),_.Ec(23,"ion-label"),_.zc(24,"core-format-text",11),_.Pc(25,"coreCreateLinks"),_.Dc(),_.Dc(),_.Dc(),_.nd(26,AddonNotificationsNotificationPage_div_26_Template,3,1,"div",12),_.Dc(),_.Dc()),2&t&&(_.lc(3),_.Vc("text",_.Qc(4,14,"core.back")),_.lc(4),_.qd(_.Qc(8,16,"addon.notifications.notifications")),_.lc(2),_.Vc("core-swipe-navigation",o.notifications),_.lc(1),_.Vc("hideUntil",o.loaded),_.lc(3),_.Vc("ngIf",o.userIdFrom>0),_.lc(1),_.Vc("ngIf",o.userIdFrom<=0&&o.iconUrl),_.lc(3),_.Vc("text",o.subject)("contextInstanceId",0)("wsNotFiltered",!0),_.lc(2),_.qd(_.Qc(20,18,o.timecreated)),_.lc(2),_.Vc("ngIf",o.userIdFrom>0),_.lc(3),_.Vc("text",_.Qc(25,20,o.content))("contextInstanceId",0),_.lc(2),_.Vc("ngIf",o.loaded&&o.actions&&o.actions.length>0))},directives:[h.C,h.Ab,h.m,h.h,h.i,h.yb,p.a,h.v,P.a,v.a,h.I,O.t,h.O,b.a,N.a,C.a,M.a,O.s,x.a,h.l,h.D,I.a],pipes:[y.d,w.a,A.a],styles:["[_nghost-%COMP%]{--extra-icon-size:16px;--icon-size:24px}[_nghost-%COMP%]     core-user-avatar .core-avatar-extra-img, [_nghost-%COMP%]     core-user-avatar core-mod-icon{margin:0!important;position:absolute;right:-4px;bottom:-4px;padding:.2rem}[_nghost-%COMP%]     core-user-avatar .core-avatar-extra-img{background:var(--background-color);border-radius:var(--medium-radius)}[_nghost-%COMP%]     core-user-avatar .core-avatar-extra-img img{max-width:var(--extra-icon-size);max-height:var(--extra-icon-size);display:block}[_nghost-%COMP%]     core-user-avatar core-mod-icon{--size:var(--extra-icon-size)}[_nghost-%COMP%]   div.core-notification-icon[_ngcontent-%COMP%]{padding:.7rem;background:var(--background-color);border-radius:var(--small-radius)}[_nghost-%COMP%]   div.core-notification-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:var(--icon-size);height:var(--icon-size)}[_nghost-%COMP%]   .core-notification-icon[_ngcontent-%COMP%]{--module-icon-size:var(--icon-size);margin:6px 8px 6px 0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   .core-notification-icon[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}","[_nghost-%COMP%]   .core-notification-title[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{align-self:start;margin-top:16px}[_nghost-%COMP%]   .core-notification-title[_ngcontent-%COMP%]   p.item-heading[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   .core-notification-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]{font-size:var(--text-size)}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost{border:1px solid var(--gray-200);width:100%;margin:0 0 1em}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost td{padding:10px}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .header{background-color:var(--light)}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .header .picture{width:48px;text-align:center;padding-left:4px;padding-right:0;padding-top:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .header .picture{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0}}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .header .picture img{width:44px!important}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .subject{font-weight:700;margin-bottom:1rem}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     a{text-decoration:none}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .userpicture{border-radius:50%}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .mdl-right{text-align:end}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .mdl-right a{display:none}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .mdl-right font{font-size:.9em}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .commands{display:none}[_nghost-%COMP%]   .core-notification-body[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     hr{margin-top:1.5rem;margin-bottom:1.5rem;background-color:var(--gray-200)}"]}),AddonNotificationsNotificationPage})();class notification_AddonNotificationSwipeItemsManager extends l.a{getSelectedItemPathFromRoute(t){return t.params.id}}const F=[{path:"",component:k}];let T=(()=>{class AddonNotificationsNotificationPageModule{}return AddonNotificationsNotificationPageModule.ɵmod=_.wc({type:AddonNotificationsNotificationPageModule}),AddonNotificationsNotificationPageModule.ɵinj=_.vc({factory:function AddonNotificationsNotificationPageModule_Factory(t){return new(t||AddonNotificationsNotificationPageModule)},imports:[[n.m.forChild(F),e.a],n.m]}),AddonNotificationsNotificationPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&_.kd(T,{declarations:[k],imports:[n.m,e.a],exports:[n.m]}))},eoiU:function(t,o,i){"use strict";i.d(o,"a",(function(){return CoreSwipeNavigationItemsManager}));var n=i("mrSG"),e=i("pHTc"),a=i("CtbY");class CoreSwipeNavigationItemsManager extends a.a{start(){return Object(n.a)(this,void 0,void 0,(function*(){this.updateSelectedItem()}))}navigateToNextItem(){return Object(n.a)(this,void 0,void 0,(function*(){yield this.navigateToItemBy(1,"forward")}))}navigateToPreviousItem(){return Object(n.a)(this,void 0,void 0,(function*(){yield this.navigateToItemBy(-1,"back")}))}hasNextItem(){return Object(n.a)(this,void 0,void 0,(function*(){return!!(yield this.getItemBy(1))}))}hasPreviousItem(){return Object(n.a)(this,void 0,void 0,(function*(){return!!(yield this.getItemBy(-1))}))}getCurrentPageRoute(){return e.a.getCurrentRoute()}getSelectedItemPathFromRoute(t){const o=[];for(;t&&(o.push(...t.url),t.firstChild);)t=t.firstChild;return o.map((t=>t.path)).join("/").replace(/\/+/,"/").trim()||null}navigateToItemBy(t,o){return Object(n.a)(this,void 0,void 0,(function*(){const i=yield this.getItemBy(t);i&&(yield this.navigateToItem(i,{animationDirection:o,replace:!0}))}))}getItemBy(t){var o;return Object(n.a)(this,void 0,void 0,(function*(){const i=this.getSource().getItems(),n=null!==(o=this.selectedItem&&(null==i?void 0:i.indexOf(this.selectedItem)))&&void 0!==o?o:-1;if(-1===n||null===i)return null;const e=t>0?1:-1;let a=n,c=0;for(;c!==t&&(a+=e,!(a<0||a>=i.length));)this.skipItemInSwipe(i[a])||(c+=e);return c===t?i[a]:this.getSource().isCompleted()?null:(yield this.getSource().load(),this.getItemBy(t))}))}skipItemInSwipe(t){return!1}}}}]);