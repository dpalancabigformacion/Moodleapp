(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{omKK:function(t,e,o){"use strict";o.r(e),o.d(e,"AddonModQuizPlayerPageModule",(function(){return B}));var i=o("L3Fv"),n=o("tyNb"),r=o("uNPo"),a=o("MLi9"),c=o("mrSG"),s=o("TEn/"),d=o("Zl5n"),l=o("qRov"),m=o("pHTc"),u=o("9+EE"),_=o("uT8i"),h=o("3LXp"),g=o("bFG1"),p=o("j3ag"),f=o("fjkH"),P=o("2Vo4"),M=o("3j9v"),v=o("+/ys"),b=o("Ohwm");class auto_save_AddonModQuizAutoSave{constructor(t,e){this.formName=t,this.buttonSelector=e,this.CHECK_CHANGES_INTERVAL=5e3,this.popoverShown=!1,this.logger=M.a.getInstance("AddonModQuizAutoSave"),this.errorObservable=new P.a(!1)}cancelAutoSave(){clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=void 0}checkChanges(t,e,o,i){if(this.autoSaveTimeout)return;const n=this.getAnswers();if(!this.previousAnswers)return this.previousAnswers=n,void 0;let r=!0;for(const t in n)if(this.previousAnswers[t]!=n[t]){r=!1;break}r||this.setAutoSaveTimer(t,e,o,i),this.previousAnswers=n}getAnswers(){return l.a.getAnswersFromForm(document.forms[this.formName])}hideAutoSaveError(){var t;this.errorObservable.next(!1),null===(t=this.popover)||void 0===t||t.dismiss()}onError(){return this.errorObservable}setAutoSaveTimer(t,e,o,i){!t.autosaveperiod||this.autoSaveTimeout||b.a.isAttemptTimeNearlyOver(t,e)||(this.autoSaveTimeout=window.setTimeout((()=>Object(c.a)(this,void 0,void 0,(function*(){const n=this.getAnswers();this.cancelAutoSave(),this.previousAnswers=n;try{yield b.a.saveAttempt(t,e,n,o,i),this.hideAutoSaveError()}catch(n){this.logger.warn("Error auto-saving data.",n),this.errorObservable.getValue()||(this.errorObservable.next(!0),this.showAutoSaveError()),this.setAutoSaveTimer(t,e,o,i)}}))),1e3*t.autosaveperiod))}showAutoSaveError(t){return Object(c.a)(this,void 0,void 0,(function*(){if(this.popoverShown)return;const e=t||{target:document.querySelector(this.buttonSelector),stopPropagation:()=>{},preventDefault:()=>{}};this.popoverShown=!0,this.popover=yield h.a.openPopover({component:v.a,event:e}),this.popoverShown=!1}))}startCheckChangesProcess(t,e,o,i){!this.checkChangesInterval&&t.autosaveperiod&&(this.previousAnswers=void 0,this.loadPreviousAnswersTimeout=window.setTimeout((()=>{this.checkChanges(t,e,o,i)}),2500),this.checkChangesInterval=window.setInterval((()=>{this.checkChanges(t,e,o,i)}),this.CHECK_CHANGES_INTERVAL))}stopCheckChangesProcess(){clearTimeout(this.loadPreviousAnswersTimeout),clearInterval(this.checkChangesInterval),this.loadPreviousAnswersTimeout=void 0,this.checkChangesInterval=void 0}}var O=o("6GiP"),y=o("+8pu"),C=o("hh6U"),z=o("4reR"),A=o("6s78"),q=o("8vmT"),T=o("DDKy"),w=o("fXoL"),E=o("ofXK"),Q=o("ACYt"),I=o("3CSS"),S=o("nt/U"),k=o("PgjG"),D=o("hMzs"),x=o("rztj"),V=o("3Pt+"),N=o("3jOR"),F=o("iSJP"),R=o("sYmb");const L=["quizForm"];function AddonModQuizPlayerPage_core_format_text_7_Template(t,e){if(1&t&&w.zc(0,"core-format-text",16),2&t){const t=w.Oc();w.Vc("text",t.quiz.name)("contextInstanceId",t.quiz.coursemodule)("courseId",t.courseId)}}function AddonModQuizPlayerPage_ion_button_12_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"ion-button",17),w.Mc("click",(function AddonModQuizPlayerPage_ion_button_12_Template_ion_button_click_0_listener(){w.fd(t);return w.Oc().openNavigation()})),w.Pc(1,"translate"),w.zc(2,"ion-icon",18),w.Dc()}2&t&&w.mc("aria-label",w.Qc(1,1,"addon.mod_quiz.opentoc"))}function AddonModQuizPlayerPage_ion_toolbar_13_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"ion-toolbar",19),w.Ec(1,"ion-title"),w.Ec(2,"core-timer",20),w.Mc("finished",(function AddonModQuizPlayerPage_ion_toolbar_13_Template_core_timer_finished_2_listener(){w.fd(t);return w.Oc().timeUp()})),w.Pc(3,"translate"),w.Dc(),w.Dc(),w.Dc()}if(2&t){const t=w.Oc();w.lc(2),w.Vc("endTime",t.endTime)("timerText",w.Qc(3,3,"addon.mod_quiz.timeleft"))("align","center")}}function AddonModQuizPlayerPage_ion_button_16_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"ion-button",21),w.Mc("click",(function AddonModQuizPlayerPage_ion_button_16_Template_ion_button_click_0_listener(){w.fd(t);return w.Oc().start()})),w.pd(1),w.Pc(2,"translate"),w.Dc()}2&t&&(w.lc(1),w.rd(" ",w.Qc(2,1,"addon.mod_quiz.startattempt")," "))}const _c1=function(t){return{$a:t}};function AddonModQuizPlayerPage_form_17_div_2_h2_4_Template(t,e){if(1&t&&(w.Ec(0,"h2",29),w.pd(1),w.Pc(2,"translate"),w.Dc()),2&t){const t=w.Oc().$implicit;w.lc(1),w.rd(" ",w.Rc(2,1,"core.question.questionno",w.ad(4,_c1,t.number))," ")}}function AddonModQuizPlayerPage_form_17_div_2_h2_5_Template(t,e){1&t&&(w.Ec(0,"h2",29),w.pd(1),w.Pc(2,"translate"),w.Dc()),2&t&&(w.lc(1),w.qd(w.Qc(2,1,"core.question.information")))}function AddonModQuizPlayerPage_form_17_div_2_div_6_p_1_Template(t,e){if(1&t&&(w.Ec(0,"p",32),w.pd(1),w.Dc()),2&t){const t=w.Oc(2).$implicit;w.lc(1),w.qd(t.status)}}function AddonModQuizPlayerPage_form_17_div_2_div_6_p_2_Template(t,e){if(1&t&&(w.Ec(0,"p"),w.pd(1),w.Dc()),2&t){const t=w.Oc(2).$implicit;w.lc(1),w.qd(t.readableMark)}}function AddonModQuizPlayerPage_form_17_div_2_div_6_Template(t,e){if(1&t&&(w.Ec(0,"div",30),w.nd(1,AddonModQuizPlayerPage_form_17_div_2_div_6_p_1_Template,2,1,"p",31),w.nd(2,AddonModQuizPlayerPage_form_17_div_2_div_6_p_2_Template,2,1,"p",14),w.Dc()),2&t){const t=w.Oc().$implicit;w.lc(1),w.Vc("ngIf",t.status),w.lc(1),w.Vc("ngIf",t.readableMark)}}function AddonModQuizPlayerPage_form_17_div_2_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"div"),w.Ec(1,"ion-card",25),w.Ec(2,"ion-item-divider"),w.Ec(3,"ion-label"),w.nd(4,AddonModQuizPlayerPage_form_17_div_2_h2_4_Template,3,6,"h2",26),w.nd(5,AddonModQuizPlayerPage_form_17_div_2_h2_5_Template,3,3,"h2",26),w.Dc(),w.nd(6,AddonModQuizPlayerPage_form_17_div_2_div_6_Template,3,2,"div",27),w.Dc(),w.Ec(7,"core-question",28),w.Mc("onAbort",(function AddonModQuizPlayerPage_form_17_div_2_Template_core_question_onAbort_7_listener(){w.fd(t);return w.Oc(2).abortQuiz()}))("buttonClicked",(function AddonModQuizPlayerPage_form_17_div_2_Template_core_question_buttonClicked_7_listener(e){w.fd(t);return w.Oc(2).behaviourButtonClicked(e)})),w.Dc(),w.Dc(),w.Dc()}if(2&t){const t=e.$implicit,o=w.Oc(2);w.lc(1),w.Xc("id","addon-mod_quiz-question-",t.slot,""),w.lc(3),w.Vc("ngIf",t.number),w.lc(1),w.Vc("ngIf",!t.number),w.lc(1),w.Vc("ngIf",t.status||t.readableMark),w.lc(1),w.Vc("question",t)("component",o.component)("componentId",o.cmId)("attemptId",o.attempt.id)("usageId",o.attempt.uniqueid)("offlineEnabled",o.offline)("contextInstanceId",o.cmId)("courseId",o.courseId)("preferredBehaviour",o.quiz.preferredbehaviour)("review",!1)}}function AddonModQuizPlayerPage_form_17_Template(t,e){if(1&t&&(w.Ec(0,"form",22,23),w.nd(2,AddonModQuizPlayerPage_form_17_div_2_Template,8,14,"div",24),w.Dc()),2&t){const t=w.Oc();w.lc(2),w.Vc("ngForOf",t.questions)}}function AddonModQuizPlayerPage_ion_row_18_ion_col_1_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"ion-col"),w.Ec(1,"ion-button",34),w.Mc("click",(function AddonModQuizPlayerPage_ion_row_18_ion_col_1_Template_ion_button_click_1_listener(){w.fd(t);const e=w.Oc(2);return e.changePage(e.previousPage)})),w.zc(2,"ion-icon",35),w.pd(3),w.Pc(4,"translate"),w.Dc(),w.Dc()}2&t&&(w.lc(3),w.rd(" ",w.Qc(4,1,"core.previous")," "))}function AddonModQuizPlayerPage_ion_row_18_ion_col_2_ion_button_1_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"ion-button",37),w.Mc("click",(function AddonModQuizPlayerPage_ion_row_18_ion_col_2_ion_button_1_Template_ion_button_click_0_listener(){w.fd(t);const e=w.Oc(3);return e.changePage(e.nextPage)})),w.pd(1),w.Pc(2,"translate"),w.zc(3,"ion-icon",38),w.Dc()}2&t&&(w.lc(1),w.rd(" ",w.Qc(2,1,"core.next")," "))}function AddonModQuizPlayerPage_ion_row_18_ion_col_2_ion_button_2_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"ion-button",37),w.Mc("click",(function AddonModQuizPlayerPage_ion_row_18_ion_col_2_ion_button_2_Template_ion_button_click_0_listener(){w.fd(t);const e=w.Oc(3);return e.changePage(e.nextPage)})),w.pd(1),w.Pc(2,"translate"),w.Dc()}2&t&&(w.lc(1),w.rd(" ",w.Qc(2,1,"core.submit")," "))}function AddonModQuizPlayerPage_ion_row_18_ion_col_2_Template(t,e){if(1&t&&(w.Ec(0,"ion-col"),w.nd(1,AddonModQuizPlayerPage_ion_row_18_ion_col_2_ion_button_1_Template,4,3,"ion-button",36),w.nd(2,AddonModQuizPlayerPage_ion_row_18_ion_col_2_ion_button_2_Template,3,3,"ion-button",36),w.Dc()),2&t){const t=w.Oc(2);w.lc(1),w.Vc("ngIf",t.nextPage>0),w.lc(1),w.Vc("ngIf",-1==t.nextPage)}}function AddonModQuizPlayerPage_ion_row_18_Template(t,e){if(1&t&&(w.Ec(0,"ion-row",33),w.nd(1,AddonModQuizPlayerPage_ion_row_18_ion_col_1_Template,5,3,"ion-col",14),w.nd(2,AddonModQuizPlayerPage_ion_row_18_ion_col_2_Template,3,2,"ion-col",14),w.Dc()),2&t){const t=w.Oc();w.lc(1),w.Vc("ngIf",t.previousPage>=0),w.lc(1),w.Vc("ngIf",t.nextPage>=-1)}}function AddonModQuizPlayerPage_ion_card_19_ng_container_19_ion_item_1_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"ion-item",48),w.Mc("click",(function AddonModQuizPlayerPage_ion_card_19_ng_container_19_ion_item_1_Template_ion_item_click_0_listener(){w.fd(t);const e=w.Oc().$implicit;return w.Oc(2).changePage(e.page,!1,e.slot)})),w.Pc(1,"translate"),w.Ec(2,"ion-label"),w.Ec(3,"ion-row",41),w.Ec(4,"ion-col",49),w.pd(5),w.Dc(),w.Ec(6,"ion-col",50),w.pd(7),w.Dc(),w.Dc(),w.Dc(),w.Dc()}if(2&t){const t=w.Oc().$implicit,e=w.Oc(2);w.Vc("detail",!e.isSequential&&e.canReturn)("button",!e.isSequential&&e.canReturn),w.mc("aria-label",w.Rc(1,5,"core.question.questionno",w.ad(8,_c1,t.number))),w.lc(5),w.qd(t.number),w.lc(2),w.qd(t.status)}}function AddonModQuizPlayerPage_ion_card_19_ng_container_19_Template(t,e){if(1&t&&(w.Cc(0),w.nd(1,AddonModQuizPlayerPage_ion_card_19_ng_container_19_ion_item_1_Template,8,10,"ion-item",47),w.Bc()),2&t){const t=e.$implicit;w.lc(1),w.Vc("ngIf",t.number)}}function AddonModQuizPlayerPage_ion_card_19_ion_item_20_Template(t,e){if(1&t&&(w.Ec(0,"ion-item",40),w.Ec(1,"ion-label"),w.pd(2),w.Dc(),w.Dc()),2&t){const t=w.Oc(2);w.lc(2),w.qd(t.dueDateWarning)}}function AddonModQuizPlayerPage_ion_card_19_core_timer_21_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"core-timer",51),w.Mc("finished",(function AddonModQuizPlayerPage_ion_card_19_core_timer_21_Template_core_timer_finished_0_listener(){w.fd(t);return w.Oc(2).timeUp()})),w.Pc(1,"translate"),w.Dc()}if(2&t){const t=w.Oc(2);w.Vc("endTime",t.endTime)("timerText",w.Qc(1,2,"addon.mod_quiz.timeleft"))}}function AddonModQuizPlayerPage_ion_card_19_ion_item_22_p_5_Template(t,e){if(1&t&&(w.Ec(0,"p"),w.pd(1),w.Dc()),2&t){const t=e.$implicit;w.lc(1),w.qd(t)}}function AddonModQuizPlayerPage_ion_card_19_ion_item_22_Template(t,e){if(1&t&&(w.Ec(0,"ion-item",40),w.Ec(1,"ion-label"),w.Ec(2,"h3",52),w.pd(3),w.Pc(4,"translate"),w.Dc(),w.nd(5,AddonModQuizPlayerPage_ion_card_19_ion_item_22_p_5_Template,2,1,"p",24),w.Dc(),w.Dc()),2&t){const t=w.Oc(2);w.lc(3),w.qd(w.Qc(4,2,"addon.mod_quiz.cannotsubmitquizdueto")),w.lc(2),w.Vc("ngForOf",t.preventSubmitMessages)}}function AddonModQuizPlayerPage_ion_card_19_Template(t,e){if(1&t&&(w.Ec(0,"ion-card",39),w.Ec(1,"ion-card-header",40),w.Ec(2,"ion-card-title"),w.pd(3),w.Pc(4,"translate"),w.Dc(),w.Dc(),w.Ec(5,"ion-item",40),w.Ec(6,"ion-label"),w.Ec(7,"ion-row",41),w.Ec(8,"ion-col",42),w.Ec(9,"strong"),w.pd(10),w.Pc(11,"translate"),w.Dc(),w.Dc(),w.Ec(12,"ion-col",43),w.Ec(13,"strong"),w.pd(14,"#"),w.Dc(),w.Dc(),w.Ec(15,"ion-col",44),w.Ec(16,"strong"),w.pd(17),w.Pc(18,"translate"),w.Dc(),w.Dc(),w.Dc(),w.Dc(),w.Dc(),w.nd(19,AddonModQuizPlayerPage_ion_card_19_ng_container_19_Template,2,1,"ng-container",24),w.nd(20,AddonModQuizPlayerPage_ion_card_19_ion_item_20_Template,3,1,"ion-item",45),w.nd(21,AddonModQuizPlayerPage_ion_card_19_core_timer_21_Template,2,4,"core-timer",46),w.nd(22,AddonModQuizPlayerPage_ion_card_19_ion_item_22_Template,6,4,"ion-item",45),w.Dc()),2&t){const t=w.Oc();w.lc(3),w.qd(w.Qc(4,7,"addon.mod_quiz.summaryofattempt")),w.lc(7),w.qd(w.Qc(11,9,"addon.mod_quiz.question")),w.lc(7),w.qd(w.Qc(18,11,"addon.mod_quiz.status")),w.lc(2),w.Vc("ngForOf",t.summaryQuestions),w.lc(1),w.Vc("ngIf",t.dueDateWarning),w.lc(1),w.Vc("ngIf",t.endTime),w.lc(1),w.Vc("ngIf",t.preventSubmitMessages.length)}}function AddonModQuizPlayerPage_ion_card_20_ion_button_5_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"ion-button",54),w.Mc("click",(function AddonModQuizPlayerPage_ion_card_20_ion_button_5_Template_ion_button_click_0_listener(){w.fd(t);const e=w.Oc(2);return e.changePage(e.attempt.currentpage)})),w.pd(1),w.Pc(2,"translate"),w.Dc()}2&t&&(w.lc(1),w.rd(" ",w.Qc(2,1,"addon.mod_quiz.returnattempt")," "))}function AddonModQuizPlayerPage_ion_card_20_Template(t,e){if(1&t&&(w.Ec(0,"ion-card"),w.Ec(1,"ion-item",40),w.Ec(2,"ion-label"),w.pd(3),w.Pc(4,"translate"),w.Dc(),w.Dc(),w.nd(5,AddonModQuizPlayerPage_ion_card_20_ion_button_5_Template,3,3,"ion-button",53),w.Dc()),2&t){const t=w.Oc();w.lc(3),w.qd(w.Qc(4,2,"addon.mod_quiz.errorparsequestions")),w.lc(2),w.Vc("ngIf",t.canReturn)}}function AddonModQuizPlayerPage_div_21_ion_button_1_Template(t,e){if(1&t&&(w.Ec(0,"ion-button",58),w.pd(1),w.Pc(2,"translate"),w.zc(3,"ion-icon",59),w.Dc()),2&t){const t=w.Oc(2);w.Vc("href",t.moduleUrl)("showBrowserWarning",!1),w.lc(1),w.rd(" ",w.Qc(2,3,"core.openinbrowser")," ")}}function AddonModQuizPlayerPage_div_21_ion_button_2_Template(t,e){if(1&t){const t=w.Fc();w.Ec(0,"ion-button",60),w.Mc("click",(function AddonModQuizPlayerPage_div_21_ion_button_2_Template_ion_button_click_0_listener(){w.fd(t);return w.Oc(2).finishAttempt(!0)})),w.pd(1),w.Pc(2,"translate"),w.Dc()}2&t&&(w.lc(1),w.rd(" ",w.Qc(2,1,"addon.mod_quiz.submitallandfinish")," "))}function AddonModQuizPlayerPage_div_21_Template(t,e){if(1&t&&(w.Ec(0,"div",55),w.nd(1,AddonModQuizPlayerPage_div_21_ion_button_1_Template,4,5,"ion-button",56),w.nd(2,AddonModQuizPlayerPage_div_21_ion_button_2_Template,3,3,"ion-button",57),w.Dc()),2&t){const t=w.Oc();w.lc(1),w.Vc("ngIf",t.preventSubmitMessages.length),w.lc(1),w.Vc("ngIf",!t.attempt.finishedOffline&&!t.preventSubmitMessages.length)}}let j=(()=>{class AddonModQuizPlayerPage{constructor(t,e){this.changeDetector=t,this.elementRef=e,this.component=b.b.COMPONENT,this.loaded=!1,this.quizAborted=!1,this.offline=!1,this.navigation=[],this.questions=[],this.nextPage=-2,this.previousPage=-1,this.showSummary=!1,this.summaryQuestions=[],this.canReturn=!1,this.preventSubmitMessages=[],this.autoSaveError=!1,this.isSequential=!1,this.preflightData={},this.newAttempt=!1,this.quizDataLoaded=!1,this.timeUpCalled=!1,this.forceLeave=!1,this.reloadNavigation=!1}ngOnInit(){try{this.cmId=m.a.getRequiredRouteNumberParam("cmId"),this.courseId=m.a.getRequiredRouteNumberParam("courseId"),this.moduleUrl=m.a.getRouteParam("moduleUrl")}catch(t){return h.a.showErrorModal(t),m.a.back(),void 0}this.autoSave=new auto_save_AddonModQuizAutoSave("addon-mod_quiz-player-form","#addon-mod_quiz-connection-error-button"),this.start(),this.autoSaveErrorSubscription=this.autoSave.onError().subscribe((t=>{this.autoSaveError=t,this.changeDetector.detectChanges()}))}ngOnDestroy(){var t;this.autoSave.cancelAutoSave(),this.autoSave.stopCheckChangesProcess(),null===(t=this.autoSaveErrorSubscription)||void 0===t||t.unsubscribe(),this.quiz&&_.a.unblockOperation(b.b.COMPONENT,this.quiz.id)}canLeave(){return Object(c.a)(this,void 0,void 0,(function*(){if(this.forceLeave||this.quizAborted||!this.questions.length||this.showSummary)return!0;const t=yield h.a.showModalLoading("core.sending",!0);try{yield this.processAttempt(!1,!1)}catch(e){t.dismiss(),yield h.a.showConfirm(p.J.instant("addon.mod_quiz.confirmleavequizonerror")),z.a.triggerFormCancelledEvent(this.formElement,u.b.getCurrentSiteId())}finally{t.dismiss()}return!0}))}ionViewWillLeave(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield p.x.getTop();null==t?void 0:t.dismiss()}))}abortQuiz(){this.quizAborted=!0}behaviourButtonClicked(t){var e,o;return Object(c.a)(this,void 0,void 0,(function*(){let i;try{yield h.a.showConfirm(p.J.instant("core.areyousure")),i=yield h.a.showModalLoading("core.sending",!0);const n=yield this.prepareAnswers();n[t.name]=t.value,yield b.a.processAttempt(this.quiz,this.attempt,n,this.preflightData),this.reloadNavigation=!0;const r=yield null===(e=this.content)||void 0===e?void 0:e.getScrollElement(),a=(null==r?void 0:r.scrollTop)||-1;this.loaded=!1,null===(o=this.content)||void 0===o||o.scrollToTop();try{yield this.loadPage(this.attempt.currentpage)}finally{this.loaded=!0,-1!=a&&setTimeout((()=>{var t;null===(t=this.content)||void 0===t?void 0:t.scrollToPoint(0,a)}),50)}}catch(t){h.a.showErrorModalDefault(t,"Error performing action.")}finally{null==i?void 0:i.dismiss()}}))}changePage(t,e,o){var i;return Object(c.a)(this,void 0,void 0,(function*(){if(this.attempt&&(-1==t||this.attempt.state!=b.b.ATTEMPT_OVERDUE&&!this.attempt.finishedOffline)){if(t==this.attempt.currentpage&&!this.showSummary&&void 0!==o)return yield this.scrollToQuestion(o),void 0;if(!(t==this.attempt.currentpage&&!this.showSummary||e&&this.isSequential&&-1!=t||-1===t&&this.showSummary)){if(null===(i=this.content)||void 0===i?void 0:i.scrollToTop(),!this.showSummary){const t=yield h.a.showModalLoading("core.sending",!0);try{yield this.processAttempt(!1,!1),t.dismiss()}catch(e){return h.a.showErrorModalDefault(e,"addon.mod_quiz.errorsaveattempt",!0),t.dismiss(),void 0}this.reloadNavigation=!0}this.loaded=!1;try{this.autoSave.stopCheckChangesProcess(),-1===t?yield this.loadSummary():yield this.loadPage(t)}catch(t){this.showSummary||this.autoSave.startCheckChangesProcess(this.quiz,this.attempt,this.preflightData,this.offline),h.a.showErrorModalDefault(t,"addon.mod_quiz.errorgetquestions",!0)}finally{this.loaded=!0,void 0!==o&&(yield this.scrollToQuestion(o))}}}}))}fetchData(){return Object(c.a)(this,void 0,void 0,(function*(){try{this.quiz=yield b.a.getQuiz(this.courseId,this.cmId),_.a.blockOperation(b.b.COMPONENT,this.quiz.id),yield C.a.waitForSync(this.quiz.id),this.isSequential=b.a.isNavigationSequential(this.quiz),this.offline=!!b.a.isQuizOffline(this.quiz)||(yield b.a.isLastAttemptOfflineUnfinished(this.quiz)),this.quiz.timelimit&&this.quiz.timelimit>0&&(this.readableTimeLimit=q.a.formatTime(this.quiz.timelimit)),this.quizAccessInfo=yield b.a.getQuizAccessInformation(this.quiz.id,{cmId:this.quiz.coursemodule,readingStrategy:this.offline?1:2});const t=yield b.a.getUserAttempts(this.quiz.id,{cmId:this.quiz.coursemodule,readingStrategy:this.offline?1:2});if(!t.length)return this.newAttempt=!0,void 0;this.lastAttempt=yield y.a.setAttemptCalculatedData(this.quiz,t[t.length-1],!1,void 0,!0),this.newAttempt=b.a.isAttemptFinished(this.lastAttempt.state)}catch(t){h.a.showErrorModalDefault(t,"addon.mod_quiz.errorgetquiz",!0)}}))}finishAttempt(t,e){return Object(c.a)(this,void 0,void 0,(function*(){let o;try{e||this.attempt.state!=b.b.ATTEMPT_IN_PROGRESS||(yield h.a.showConfirm(p.J.instant("addon.mod_quiz.confirmclose"))),o=yield h.a.showModalLoading("core.sending",!0),yield this.processAttempt(t,e),f.b.trigger(b.b.ATTEMPT_FINISHED_EVENT,{quizId:this.quiz.id,attemptId:this.attempt.id,synced:!this.offline},u.b.getCurrentSiteId()),f.b.trigger(f.b.ACTIVITY_DATA_SENT,{module:"quiz"}),this.forceLeave=!0,m.a.back()}catch(t){h.a.showErrorModalDefault(t,"addon.mod_quiz.errorsaveattempt",!0)}finally{null==o?void 0:o.dismiss()}}))}fixSequenceChecks(){var t;return Object(c.a)(this,void 0,void 0,(function*(){const e=yield b.a.getAttemptData(this.attempt.id,this.attempt.currentpage,this.preflightData,{cmId:this.quiz.coursemodule,readingStrategy:this.offline?1:2}),o={};e.questions.forEach((t=>{const e=l.a.getQuestionSequenceCheckFromHtml(t.html);e&&(o[t.slot]=e)})),null===(t=this.questionComponents)||void 0===t||t.forEach((t=>{t.updateSequenceCheck(o)}))}))}getAnswers(){return l.a.getAnswersFromForm(document.forms["addon-mod_quiz-player-form"])}initTimer(){var t;if(!(null===(t=this.attemptAccessInfo)||void 0===t?void 0:t.endtime)||this.attemptAccessInfo.endtime<0)return;b.a.shouldShowTimeLeft(this.quizAccessInfo.activerulenames,this.attempt,this.attemptAccessInfo.endtime)?this.endTime=this.attemptAccessInfo.endtime:delete this.endTime}loadPage(t){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield b.a.getAttemptData(this.attempt.id,t,this.preflightData,{cmId:this.quiz.coursemodule,readingStrategy:this.offline?1:2});this.attempt=e.attempt,this.attempt.currentpage=t,this.questions=e.questions,this.nextPage=e.nextpage,this.previousPage=this.isSequential?-1:t-1,this.showSummary=!1,this.questions.forEach((t=>{t.readableMark=y.a.getQuestionMarkFromHtml(t.html),l.a.extractQuestionInfoBox(t,".info"),b.a.isQuestionBlocked(t)&&(t.type="description")})),g.a.ignoreErrors(b.a.logViewAttempt(this.attempt.id,t,this.preflightData,this.offline,this.quiz)),this.autoSave.startCheckChangesProcess(this.quiz,this.attempt,this.preflightData,this.offline)}))}loadSummary(){return Object(c.a)(this,void 0,void 0,(function*(){this.summaryQuestions=[],this.summaryQuestions=yield b.a.getAttemptSummary(this.attempt.id,this.preflightData,{cmId:this.quiz.coursemodule,loadLocal:this.offline,readingStrategy:this.offline?1:2}),this.showSummary=!0,this.canReturn=this.attempt.state==b.b.ATTEMPT_IN_PROGRESS&&!this.attempt.finishedOffline,this.preventSubmitMessages=b.a.getPreventSubmitMessages(this.summaryQuestions),this.dueDateWarning=b.a.getAttemptDueDateWarning(this.quiz,this.attempt),g.a.ignoreErrors(b.a.logViewAttemptSummary(this.attempt.id,this.preflightData,this.quiz.id,this.quiz.name))}))}loadNavigation(){return Object(c.a)(this,void 0,void 0,(function*(){this.navigation=yield b.a.getAttemptSummary(this.attempt.id,this.preflightData,{cmId:this.quiz.coursemodule,loadLocal:this.offline,readingStrategy:this.offline?1:2}),this.navigation.forEach((t=>{t.stateClass=l.a.getQuestionStateClass(t.state||"")}))}))}openNavigation(){var t;return Object(c.a)(this,void 0,void 0,(function*(){if(this.reloadNavigation){const t=yield h.a.showModalLoading();yield g.a.ignoreErrors(this.loadNavigation()),t.dismiss(),this.reloadNavigation=!1}const e=yield h.a.openSideModal({component:O.a,componentProps:{navigation:this.navigation,summaryShown:this.showSummary,currentPage:null===(t=this.attempt)||void 0===t?void 0:t.currentpage,isReview:!1}});e&&this.changePage(e.page,!0,e.slot)}))}prepareAnswers(){return l.a.prepareAnswers(this.questions,this.getAnswers(),this.offline,this.component,this.quiz.coursemodule)}processAttempt(t,e,o){return Object(c.a)(this,void 0,void 0,(function*(){let i={};this.showSummary||(i=yield this.prepareAnswers());try{yield b.a.processAttempt(this.quiz,this.attempt,i,this.preflightData,t,e,this.offline)}catch(i){if(!i||"submissionoutofsequencefriendlymessage"!=i.errorcode)throw i;try{yield this.fixSequenceChecks()}catch(t){throw i}if(o)throw i;return this.processAttempt(t,e,!0)}return this.autoSave.cancelAutoSave(),this.autoSave.hideAutoSaveError(),this.formElement&&z.a.triggerFormSubmittedEvent(this.formElement,!this.offline,u.b.getCurrentSiteId()),l.a.clearTmpData(this.questions,this.component,this.quiz.coursemodule)}))}scrollToQuestion(t){return Object(c.a)(this,void 0,void 0,(function*(){yield g.a.nextTick(),yield T.a.waitComponentsReady(this.elementRef.nativeElement,"core-question"),yield A.a.scrollToElement(this.elementRef.nativeElement,"#addon-mod_quiz-question-"+t)}))}showConnectionError(t){this.autoSave.showAutoSaveError(t)}start(){return Object(c.a)(this,void 0,void 0,(function*(){try{this.loaded=!1,this.quizDataLoaded||(yield this.fetchData(),this.quizDataLoaded=!0),yield this.startOrContinueAttempt()}finally{this.loaded=!0}}))}startOrContinueAttempt(){return Object(c.a)(this,void 0,void 0,(function*(){try{let t=this.newAttempt?void 0:this.lastAttempt;t=yield y.a.getAndCheckPreflightData(this.quiz,this.quizAccessInfo,this.preflightData,t,this.offline,!1,"addon.mod_quiz.startattempt"),this.attemptAccessInfo=yield b.a.getAttemptAccessInformation(this.quiz.id,t.id,{cmId:this.quiz.coursemodule,readingStrategy:this.offline?1:2}),this.attempt=t,yield this.loadNavigation(),this.attempt.state==b.b.ATTEMPT_OVERDUE||this.attempt.finishedOffline?yield this.loadSummary():(yield this.loadPage(this.attempt.currentpage),this.initTimer())}catch(t){h.a.showErrorModalDefault(t,"addon.mod_quiz.errorgetquestions",!0)}}))}timeUp(){this.timeUpCalled||(this.timeUpCalled=!0,this.finishAttempt(!1,!0))}}return AddonModQuizPlayerPage.ɵfac=function AddonModQuizPlayerPage_Factory(t){return new(t||AddonModQuizPlayerPage)(w.yc(w.j),w.yc(w.r))},AddonModQuizPlayerPage.ɵcmp=w.sc({type:AddonModQuizPlayerPage,selectors:[["page-addon-mod-quiz-player"]],viewQuery:function AddonModQuizPlayerPage_Query(t,e){var o;(1&t&&(w.ud(s.v,!0),w.ud(L,!0),w.ud(d.a,!0)),2&t)&&(w.dd(o=w.Nc())&&(e.content=o.first),w.dd(o=w.Nc())&&(e.formElement=o.first),w.dd(o=w.Nc())&&(e.questionComponents=o))},decls:22,vars:17,consts:[["slot","start"],[3,"text"],["contextLevel","module",3,"text","contextInstanceId","courseId",4,"ngIf"],["slot","end"],["fill","clear","id","addon-mod_quiz-connection-error-button","aria-haspopup","dialog",3,"hidden","click"],["name","fas-exclamation-circle","slot","icon-only","aria-hidden","true"],[3,"click",4,"ngIf"],["color","light",4,"ngIf"],[1,"limited-width"],[1,"has-spacer",3,"hideUntil"],["expand","block","class","ion-margin",3,"click",4,"ngIf"],["name","addon-mod_quiz-player-form",4,"ngIf"],["class","spacer-top",4,"ngIf"],["class","addon-mod_quiz-table",4,"ngIf"],[4,"ngIf"],["collapsible-footer","","appearOnBottom","","slot","fixed","class","list-item-limited-width",4,"ngIf"],["contextLevel","module",3,"text","contextInstanceId","courseId"],[3,"click"],["name","fas-bookmark","slot","icon-only","aria-hidden","true"],["color","light"],[3,"endTime","timerText","align","finished"],["expand","block",1,"ion-margin",3,"click"],["name","addon-mod_quiz-player-form"],["quizForm",""],[4,"ngFor","ngForOf"],[3,"id"],["class","inline",4,"ngIf"],["slot","end","class","ion-text-wrap ion-margin-horizontal addon-mod_quiz-question-note",4,"ngIf"],["contextLevel","module",1,"ion-text-wrap",3,"question","component","componentId","attemptId","usageId","offlineEnabled","contextInstanceId","courseId","preferredBehaviour","review","onAbort","buttonClicked"],[1,"inline"],["slot","end",1,"ion-text-wrap","ion-margin-horizontal","addon-mod_quiz-question-note"],["class","block",4,"ngIf"],[1,"block"],[1,"spacer-top"],["expand","block","fill","outline",1,"ion-text-wrap",3,"click"],["name","fas-chevron-left","slot","start","aria-hidden","true"],["expand","block","class","ion-text-wrap",3,"click",4,"ngIf"],["expand","block",1,"ion-text-wrap",3,"click"],["name","fas-chevron-right","slot","end","aria-hidden","true"],[1,"addon-mod_quiz-table"],[1,"ion-text-wrap"],[1,"ion-align-items-center"],["size","3",1,"ion-text-center","ion-hide-md-down"],["size","3",1,"ion-text-center","ion-hide-md-up"],["size","9",1,"ion-text-center"],["class","ion-text-wrap",4,"ngIf"],[3,"endTime","timerText","finished",4,"ngIf"],[3,"detail","button","click",4,"ngIf"],[3,"detail","button","click"],["size","3",1,"ion-text-center"],["size","9",1,"ion-text-center","ion-text-wrap"],[3,"endTime","timerText","finished"],[1,"item-heading"],["expand","block","class","ion-margin ion-text-wrap","fill","outline",3,"click",4,"ngIf"],["expand","block","fill","outline",1,"ion-margin","ion-text-wrap",3,"click"],["collapsible-footer","","appearOnBottom","","slot","fixed",1,"list-item-limited-width"],["expand","block","class","ion-margin ion-text-wrap","core-link","",3,"href","showBrowserWarning",4,"ngIf"],["expand","block","class","ion-margin ion-text-wrap",3,"click",4,"ngIf"],["expand","block","core-link","",1,"ion-margin","ion-text-wrap",3,"href","showBrowserWarning"],["name","fas-external-link-alt","slot","end","aria-hidden","true"],["expand","block",1,"ion-margin","ion-text-wrap",3,"click"]],template:function AddonModQuizPlayerPage_Template(t,e){1&t&&(w.Ec(0,"ion-header"),w.Ec(1,"ion-toolbar"),w.Ec(2,"ion-buttons",0),w.zc(3,"ion-back-button",1),w.Pc(4,"translate"),w.Dc(),w.Ec(5,"ion-title"),w.Ec(6,"h1"),w.nd(7,AddonModQuizPlayerPage_core_format_text_7_Template,1,3,"core-format-text",2),w.Dc(),w.Dc(),w.Ec(8,"ion-buttons",3),w.Ec(9,"ion-button",4),w.Mc("click",(function AddonModQuizPlayerPage_Template_ion_button_click_9_listener(t){return e.showConnectionError(t)})),w.Pc(10,"translate"),w.zc(11,"ion-icon",5),w.Dc(),w.nd(12,AddonModQuizPlayerPage_ion_button_12_Template,3,3,"ion-button",6),w.Dc(),w.Dc(),w.nd(13,AddonModQuizPlayerPage_ion_toolbar_13_Template,4,5,"ion-toolbar",7),w.Dc(),w.Ec(14,"ion-content",8),w.Ec(15,"core-loading",9),w.nd(16,AddonModQuizPlayerPage_ion_button_16_Template,3,3,"ion-button",10),w.nd(17,AddonModQuizPlayerPage_form_17_Template,3,1,"form",11),w.nd(18,AddonModQuizPlayerPage_ion_row_18_Template,3,2,"ion-row",12),w.nd(19,AddonModQuizPlayerPage_ion_card_19_Template,23,13,"ion-card",13),w.nd(20,AddonModQuizPlayerPage_ion_card_20_Template,6,4,"ion-card",14),w.nd(21,AddonModQuizPlayerPage_div_21_Template,3,2,"div",15),w.Dc(),w.Dc()),2&t&&(w.lc(3),w.Vc("text",w.Qc(4,13,"core.back")),w.lc(4),w.Vc("ngIf",e.quiz),w.lc(2),w.Vc("hidden",!e.autoSaveError),w.mc("aria-label",w.Qc(10,15,"addon.mod_quiz.connectionerror")),w.lc(3),w.Vc("ngIf",e.navigation.length),w.lc(1),w.Vc("ngIf",e.loaded&&e.endTime&&e.questions.length&&!e.quizAborted&&!e.showSummary),w.lc(2),w.Vc("hideUntil",e.loaded),w.lc(1),w.Vc("ngIf",!e.attempt),w.lc(1),w.Vc("ngIf",e.questions.length&&!e.quizAborted&&!e.showSummary),w.lc(1),w.Vc("ngIf",e.questions.length&&!e.quizAborted&&!e.showSummary),w.lc(1),w.Vc("ngIf",!e.quizAborted&&e.showSummary&&e.summaryQuestions.length),w.lc(1),w.Vc("ngIf",e.attempt&&(!e.questions.length&&!e.showSummary||e.quizAborted)),w.lc(1),w.Vc("ngIf",!e.quizAborted&&e.showSummary&&e.summaryQuestions.length&&e.loaded))},directives:[s.C,s.Ab,s.m,s.h,s.i,s.yb,E.t,Q.a,s.l,s.D,I.a,S.a,s.v,k.a,D.a,x.a,V.H,V.s,V.t,E.s,s.n,s.J,s.O,d.a,s.hb,s.u,s.p,s.r,s.I,N.a,F.a],pipes:[R.d],styles:["[_nghost-%COMP%]   .addon-mod_quiz-question-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:2px;margin-bottom:2px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border-bottom:1px solid var(--stroke)}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-0[_ngcontent-%COMP%]{background-color:#ca3120!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-0[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-0[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-0[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--white)}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-1[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.9333333333)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-1[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--white)}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-2[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.8666666667)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--white)}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-3[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.8)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-3[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-3[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--white)}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-4[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.7333333333)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-4[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-4[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--white)}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-5[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.6666666667)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-5[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-5[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--white)}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-6[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.6)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-6[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-6[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--white)}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-7[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.5333333333)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-7[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-7[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], [_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-7[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--white)}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-8[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.4666666667)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-9[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.4)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-10[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.3333333333)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-11[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.2666666667)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-12[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.2)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-13[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.1333333333)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-14[_ngcontent-%COMP%]{background-color:rgba(202,49,32,.0666666667)!important}[_nghost-%COMP%]   core-timer[_ngcontent-%COMP%]   .core-timer.core-timer-timeleft-15[_ngcontent-%COMP%]{background-color:rgba(202,49,32,0)!important}"]}),AddonModQuizPlayerPage})();const U=[{path:"",component:j,canDeactivate:[a.a]}];let B=(()=>{class AddonModQuizPlayerPageModule{}return AddonModQuizPlayerPageModule.ɵmod=w.wc({type:AddonModQuizPlayerPageModule}),AddonModQuizPlayerPageModule.ɵinj=w.vc({factory:function AddonModQuizPlayerPageModule_Factory(t){return new(t||AddonModQuizPlayerPageModule)},imports:[[n.m.forChild(U),i.a,r.a],n.m]}),AddonModQuizPlayerPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&w.kd(B,{declarations:[j],imports:[n.m,i.a,r.a],exports:[n.m]}))}}]);