(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{hehu:function(t,e,i){"use strict";i.r(e),i.d(e,"AddonModQuizAttemptPageModule",(function(){return Q}));var o=i("tyNb"),d=i("L3Fv"),n=i("mrSG"),a=i("93ts"),c=i("pHTc"),s=i("3LXp"),m=i("bFG1"),r=i("j3ag"),l=i("Ohwm"),u=i("+8pu"),p=i("fXoL"),_=i("TEn/"),h=i("ofXK"),f=i("nt/U"),A=i("PgjG"),z=i("hMzs"),g=i("3jOR"),I=i("ACYt"),b=i("3CSS"),v=i("sYmb");function AddonModQuizAttemptPage_core_format_text_7_Template(t,e){if(1&t&&p.zc(0,"core-format-text",9),2&t){const t=p.Oc();p.Vc("text",t.quiz.name)("contextInstanceId",t.quiz.coursemodule)("courseId",t.courseId)}}function AddonModQuizAttemptPage_ion_list_13_p_6_Template(t,e){1&t&&(p.Ec(0,"p"),p.pd(1),p.Pc(2,"translate"),p.Dc()),2&t&&(p.lc(1),p.qd(p.Qc(2,1,"addon.mod_quiz.preview")))}function AddonModQuizAttemptPage_ion_list_13_p_7_Template(t,e){if(1&t&&(p.Ec(0,"p"),p.pd(1),p.Dc()),2&t){const t=p.Oc(2);p.lc(1),p.qd(t.attempt.attempt)}}function AddonModQuizAttemptPage_ion_list_13_p_13_Template(t,e){if(1&t&&(p.Ec(0,"p"),p.pd(1),p.Dc()),2&t){const t=e.$implicit;p.lc(1),p.qd(t)}}function AddonModQuizAttemptPage_ion_list_13_ion_item_14_Template(t,e){if(1&t&&(p.Ec(0,"ion-item",10),p.Ec(1,"ion-label"),p.Ec(2,"h2"),p.pd(3),p.Pc(4,"translate"),p.Dc(),p.Ec(5,"p"),p.pd(6),p.Dc(),p.Dc(),p.Dc()),2&t){const t=p.Oc(2);p.lc(3),p.sd("",p.Qc(4,3,"addon.mod_quiz.marks")," / ",t.quiz.sumGradesFormatted,""),p.lc(3),p.qd(t.attempt.readableMark)}}function AddonModQuizAttemptPage_ion_list_13_ion_item_15_Template(t,e){if(1&t&&(p.Ec(0,"ion-item",10),p.Ec(1,"ion-label"),p.Ec(2,"h2"),p.pd(3),p.Pc(4,"translate"),p.Dc(),p.Ec(5,"p"),p.pd(6),p.Dc(),p.Dc(),p.Dc()),2&t){const t=p.Oc(2);p.lc(3),p.sd("",p.Qc(4,3,"addon.mod_quiz.grade")," / ",t.quiz.gradeFormatted,""),p.lc(3),p.qd(t.attempt.readableGrade)}}function AddonModQuizAttemptPage_ion_list_13_ion_item_16_Template(t,e){if(1&t&&(p.Ec(0,"ion-item",10),p.Ec(1,"ion-label"),p.Ec(2,"h2"),p.pd(3),p.Pc(4,"translate"),p.Dc(),p.Ec(5,"p"),p.zc(6,"core-format-text",14),p.Dc(),p.Dc(),p.Dc()),2&t){const t=p.Oc(2);p.lc(3),p.qd(p.Qc(4,6,"addon.mod_quiz.feedback")),p.lc(3),p.Vc("component",t.component)("componentId",t.componentId)("text",t.feedback)("contextInstanceId",t.cmId)("courseId",t.courseId)}}function AddonModQuizAttemptPage_ion_list_13_ion_item_17_Template(t,e){1&t&&(p.Ec(0,"ion-item",15),p.Ec(1,"ion-label"),p.Ec(2,"p"),p.pd(3),p.Pc(4,"translate"),p.Dc(),p.Dc(),p.Dc()),2&t&&(p.lc(3),p.qd(p.Qc(4,1,"addon.mod_quiz.noreviewattempt")))}function AddonModQuizAttemptPage_ion_list_13_Template(t,e){if(1&t&&(p.Ec(0,"ion-list"),p.Ec(1,"ion-item",10),p.Ec(2,"ion-label"),p.Ec(3,"h2"),p.pd(4),p.Pc(5,"translate"),p.Dc(),p.nd(6,AddonModQuizAttemptPage_ion_list_13_p_6_Template,3,3,"p",7),p.nd(7,AddonModQuizAttemptPage_ion_list_13_p_7_Template,2,1,"p",7),p.Dc(),p.Dc(),p.Ec(8,"ion-item",10),p.Ec(9,"ion-label"),p.Ec(10,"h2"),p.pd(11),p.Pc(12,"translate"),p.Dc(),p.nd(13,AddonModQuizAttemptPage_ion_list_13_p_13_Template,2,1,"p",11),p.Dc(),p.Dc(),p.nd(14,AddonModQuizAttemptPage_ion_list_13_ion_item_14_Template,7,5,"ion-item",12),p.nd(15,AddonModQuizAttemptPage_ion_list_13_ion_item_15_Template,7,5,"ion-item",12),p.nd(16,AddonModQuizAttemptPage_ion_list_13_ion_item_16_Template,7,8,"ion-item",12),p.nd(17,AddonModQuizAttemptPage_ion_list_13_ion_item_17_Template,5,3,"ion-item",13),p.Dc()),2&t){const t=p.Oc();p.lc(4),p.qd(p.Qc(5,9,"addon.mod_quiz.attemptnumber")),p.lc(2),p.Vc("ngIf",t.attempt.preview),p.lc(1),p.Vc("ngIf",!t.attempt.preview),p.lc(4),p.qd(p.Qc(12,11,"addon.mod_quiz.attemptstate")),p.lc(2),p.Vc("ngForOf",t.attempt.readableState),p.lc(1),p.Vc("ngIf",t.quiz.showMarkColumn&&""!==t.attempt.readableMark),p.lc(1),p.Vc("ngIf",t.quiz.showGradeColumn&&""!==t.attempt.readableGrade),p.lc(1),p.Vc("ngIf",t.quiz.showFeedbackColumn&&t.feedback),p.lc(1),p.Vc("ngIf",!t.showReviewColumn)}}function AddonModQuizAttemptPage_div_14_Template(t,e){if(1&t){const t=p.Fc();p.Ec(0,"div",16),p.Ec(1,"div",17),p.Ec(2,"ion-button",18),p.Mc("click",(function AddonModQuizAttemptPage_div_14_Template_ion_button_click_2_listener(){p.fd(t);return p.Oc().reviewAttempt()})),p.zc(3,"ion-icon",19),p.pd(4),p.Pc(5,"translate"),p.Dc(),p.Dc(),p.Dc()}2&t&&(p.lc(4),p.rd(" ",p.Qc(5,1,"addon.mod_quiz.review")," "))}let M=(()=>{class AddonModQuizAttemptPage{constructor(){this.component=l.b.COMPONENT,this.loaded=!1,this.showReviewColumn=!1}ngOnInit(){try{this.cmId=c.a.getRequiredRouteNumberParam("cmId"),this.courseId=c.a.getRequiredRouteNumberParam("courseId"),this.attemptId=c.a.getRequiredRouteNumberParam("attemptId")}catch(t){return s.a.showErrorModal(t),c.a.back(),void 0}this.fetchQuizData().finally((()=>{this.loaded=!0}))}doRefresh(t){this.refreshData().finally((()=>{t.complete()}))}fetchQuizData(){return Object(n.a)(this,void 0,void 0,(function*(){try{this.quiz=yield l.a.getQuiz(this.courseId,this.cmId),this.componentId=this.quiz.coursemodule;const[t,e,i]=yield Promise.all([l.a.getCombinedReviewOptions(this.quiz.id,{cmId:this.quiz.coursemodule}),this.fetchAccessInfo(),this.fetchAttempt()]);this.showReviewColumn=e.canreviewmyattempts,u.a.setQuizCalculatedData(this.quiz,t),this.attempt=yield u.a.setAttemptCalculatedData(this.quiz,i,!1,void 0,!0);const o=Number(this.attempt.rescaledGrade);if(this.quiz.showFeedbackColumn&&l.a.isAttemptFinished(this.attempt.state)&&t.someoptions.overallfeedback&&!isNaN(o)){const t=yield l.a.getFeedbackForGrade(this.quiz.id,o,{cmId:this.quiz.coursemodule});this.feedback=t.feedbacktext}else delete this.feedback}catch(t){s.a.showErrorModalDefault(t,"addon.mod_quiz.errorgetattempt",!0)}}))}fetchAttempt(){return Object(n.a)(this,void 0,void 0,(function*(){const t=(yield l.a.getUserAttempts(this.quiz.id,{cmId:this.cmId})).find((t=>t.id==this.attemptId));if(!t)throw this.attempt=void 0,new a.a(r.J.instant("addon.mod_quiz.errorgetattempt"));return t}))}fetchAccessInfo(){return Object(n.a)(this,void 0,void 0,(function*(){const t=yield l.a.getQuizAccessInformation(this.quiz.id,{cmId:this.cmId});if(!t.canreviewmyattempts)return t;yield m.a.ignoreErrors(l.a.invalidateAttemptReviewForPage(this.attemptId,-1));try{yield l.a.getAttemptReview(this.attemptId,{page:-1,cmId:this.quiz.coursemodule})}catch(e){t.canreviewmyattempts=!1}return t}))}refreshData(){return Object(n.a)(this,void 0,void 0,(function*(){const t=[];t.push(l.a.invalidateQuizData(this.courseId)),t.push(l.a.invalidateAttemptReview(this.attemptId)),this.quiz&&(t.push(l.a.invalidateUserAttemptsForUser(this.quiz.id)),t.push(l.a.invalidateQuizAccessInformation(this.quiz.id)),t.push(l.a.invalidateCombinedReviewOptionsForUser(this.quiz.id)),this.attempt&&void 0!==this.feedback&&t.push(l.a.invalidateFeedback(this.quiz.id))),yield m.a.ignoreErrors(Promise.all(t)),yield this.fetchQuizData()}))}reviewAttempt(){return Object(n.a)(this,void 0,void 0,(function*(){c.a.navigate(`../../review/${this.attempt.id}`)}))}}return AddonModQuizAttemptPage.ɵfac=function AddonModQuizAttemptPage_Factory(t){return new(t||AddonModQuizAttemptPage)},AddonModQuizAttemptPage.ɵcmp=p.sc({type:AddonModQuizAttemptPage,selectors:[["page-addon-mod-quiz-attempt"]],decls:15,vars:11,consts:[["slot","start"],[3,"text"],["contextLevel","module",3,"text","contextInstanceId","courseId",4,"ngIf"],[1,"limited-width"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],[4,"ngIf"],["collapsible-footer","","appearOnBottom","","slot","fixed",4,"ngIf"],["contextLevel","module",3,"text","contextInstanceId","courseId"],[1,"ion-text-wrap"],[4,"ngFor","ngForOf"],["class","ion-text-wrap",4,"ngIf"],["class","ion-text-wrap core-danger-item",4,"ngIf"],["contextLevel","module",3,"component","componentId","text","contextInstanceId","courseId"],[1,"ion-text-wrap","core-danger-item"],["collapsible-footer","","appearOnBottom","","slot","fixed"],[1,"list-item-limited-width"],["expand","block",1,"ion-margin","ion-text-wrap",3,"click"],["name","fas-search","slot","start","aria-hidden","true"]],template:function AddonModQuizAttemptPage_Template(t,e){1&t&&(p.Ec(0,"ion-header"),p.Ec(1,"ion-toolbar"),p.Ec(2,"ion-buttons",0),p.zc(3,"ion-back-button",1),p.Pc(4,"translate"),p.Dc(),p.Ec(5,"ion-title"),p.Ec(6,"h1"),p.nd(7,AddonModQuizAttemptPage_core_format_text_7_Template,1,3,"core-format-text",2),p.Dc(),p.Dc(),p.Dc(),p.Dc(),p.Ec(8,"ion-content",3),p.Ec(9,"ion-refresher",4),p.Mc("ionRefresh",(function AddonModQuizAttemptPage_Template_ion_refresher_ionRefresh_9_listener(t){return e.doRefresh(t.target)})),p.zc(10,"ion-refresher-content",5),p.Pc(11,"translate"),p.Dc(),p.Ec(12,"core-loading",6),p.nd(13,AddonModQuizAttemptPage_ion_list_13_Template,18,13,"ion-list",7),p.nd(14,AddonModQuizAttemptPage_div_14_Template,6,3,"div",8),p.Dc(),p.Dc()),2&t&&(p.lc(3),p.Vc("text",p.Qc(4,7,"core.back")),p.lc(4),p.Vc("ngIf",e.quiz),p.lc(2),p.Vc("disabled",!e.loaded),p.lc(1),p.Wc("pullingText",p.Qc(11,9,"core.pulltorefresh")),p.lc(2),p.Vc("hideUntil",e.loaded),p.lc(1),p.Vc("ngIf",e.attempt),p.lc(1),p.Vc("ngIf",e.loaded&&e.attempt&&e.showReviewColumn&&e.attempt.finished))},directives:[_.C,_.Ab,_.m,_.h,_.i,_.yb,h.t,f.a,_.v,_.bb,_.cb,A.a,z.a,_.P,_.I,_.O,h.s,g.a,I.a,_.l,_.D,b.a],pipes:[v.d],encapsulation:2}),AddonModQuizAttemptPage})();const P=[{path:"",component:M}];let Q=(()=>{class AddonModQuizAttemptPageModule{}return AddonModQuizAttemptPageModule.ɵmod=p.wc({type:AddonModQuizAttemptPageModule}),AddonModQuizAttemptPageModule.ɵinj=p.vc({factory:function AddonModQuizAttemptPageModule_Factory(t){return new(t||AddonModQuizAttemptPageModule)},imports:[[o.m.forChild(P),d.a],o.m]}),AddonModQuizAttemptPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&p.kd(Q,{declarations:[M],imports:[o.m,d.a],exports:[o.m]}))}}]);