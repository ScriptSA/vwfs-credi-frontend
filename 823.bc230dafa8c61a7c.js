"use strict";(self.webpackChunkvwfs_credi_frontend=self.webpackChunkvwfs_credi_frontend||[]).push([[823],{5823:(S,c,i)=>{i.r(c),i.d(c,{LoginModule:()=>b});var p=i(6895),a=i(4006),u=i(8478),g=i(5861),t=i(4650),h=i(866),v=i(4903),r=i(9549),d=i(4144),l=i(4859),f=i(7392);const Z=[{path:"",component:(()=>{class n{constructor(o,e,s,m){this.formBuilder=o,this.authService=e,this.route=s,this.snackbar=m,this.hide=!0,this.loginForm=this.formBuilder.group({username:["",a.kI.required],password:["",a.kI.required]})}ngOnInit(){}onSubmit(){var o=this;return(0,g.Z)(function*(){if(o.loginForm.valid){const e=o.loginForm.value.username,s=o.loginForm.value.password;yield o.authService.login(e,s),o.authService.isAuthenticatedUser()?(o.snackbar.openSnackbar("Ingresaste",5e3),o.route.navigateByUrl("/main-frame")):o.snackbar.openSnackbar("revisa el user y la pass :(",5e3)}})()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(h.e),t.Y36(u.F0),t.Y36(v.H))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:26,vars:5,consts:[[1,"login-container"],[1,"login-card"],[1,"login-header"],[1,"logo_box"],[1,"title"],[1,"subtitle"],[3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","formControlName","username","placeholder","Usuario"],["matInput","","formControlName","password","type","password","placeholder","Contrase\xf1a",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["fontSet","material-symbols-outlined"],["mat-button","","type","submit",1,"accent-btn"],["href",""]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"div",3),t.TgZ(4,"h1",4),t._uU(5," VWFS Backoffice te da la Bienvenida"),t.qZA(),t.TgZ(6,"h3",5),t._uU(7," Ingresa tus credenciales para iniciar sesi\xf3n "),t.qZA()(),t.TgZ(8,"form",6),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t.TgZ(9,"mat-form-field",7)(10,"mat-label"),t._uU(11,"Ingresa tu Usuario"),t.qZA(),t._UZ(12,"input",8),t.qZA(),t.TgZ(13,"mat-form-field",7)(14,"mat-label"),t._uU(15,"Ingresa tu Contrase\xf1a"),t.qZA(),t._UZ(16,"input",9),t.TgZ(17,"button",10),t.NdJ("click",function(){return s.hide=!s.hide}),t.TgZ(18,"mat-icon",11),t._uU(19),t.qZA()()(),t.TgZ(20,"button",12),t._uU(21,"Ingresar al Sistema"),t.qZA(),t.TgZ(22,"p"),t._uU(23,"Si olvidaste tu clave, "),t.TgZ(24,"a",13),t._uU(25,"hac\xe9 click aqu\xed"),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("formGroup",s.loginForm),t.xp6(8),t.Q6J("type",s.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",s.hide),t.xp6(2),t.Oqu(s.hide?"visibility_off":"visibility"))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,r.KE,r.hX,r.R9,d.Nt,l.lW,l.RK,f.Hw],encapsulation:2})}return n})()}];let y=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(Z),u.Bz]})}return n})(),b=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[p.ez,a.u5,a.UX,y,r.lN,d.c,l.ot,f.Ps]})}return n})()}}]);