(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,a,t){e.exports=t(337)},142:function(e,a,t){},144:function(e,a,t){},337:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(22),l=t.n(o),i=(t(142),t(14)),c=t(15),s=t(17),m=t(16),u=t(18),d=(t(144),t(21)),p=t(114),h=t.n(p),g=t(115),f=t.n(g),b=t(116),E=t.n(b),v=t(117),y=t.n(v),j=Object(d.createMuiTheme)({palette:{primary:{main:"#eee"}}}),O=Object(d.withStyles)({root:{border:"none",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}},expanded:{margin:"auto"}})(h.a),C=Object(d.withStyles)({root:{marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{}},expanded:{}})(function(e){return r.a.createElement(f.a,e)});C.muiName="ExpansionPanelSummary";var k=Object(d.withStyles)(function(e){return{root:{padding:2*e.spacing.unit}}})(E.a),x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={expanded:""},t.handleChange=function(e){return function(a,n){t.setState({expanded:!!n&&e})}},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.expanded;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("picture",null,r.a.createElement("source",{media:"(max-width: 480px)",srcSet:"/projetoPandora/img/logo-p.png"}),r.a.createElement("img",{src:"/projetoPandora/img/logo-g.png",alt:"Logomarca"}))),r.a.createElement("picture",null,r.a.createElement("div",{className:"headertxt"},r.a.createElement(d.MuiThemeProvider,{theme:j},r.a.createElement(O,{style:{backgroundColor:"rgba(0,0,0,0)"},expanded:"panel1"===e,onChange:this.handleChange("panel1")},r.a.createElement(C,{expandIcon:r.a.createElement(y.a,{color:"primary"})},r.a.createElement("h1",null,"Conosco seu sonho ganha for\xe7a")),r.a.createElement(k,null,r.a.createElement("h2",null,"Independente se ele \xe9 considerado maluco, diferente, inovador, ou um neg\xf3cio tradicional,  transformamos ele em seu foguete para o sucesso, acreditamos nele e vamos te ajudar a chegar l\xe1..."))))),r.a.createElement("source",{media:"(max-width: 480px)",srcSet:"/projetoPandora/img/Watching-the-Stars-sm.png"}),r.a.createElement("img",{src:"/projetoPandora/img/Watching-the-Stars.png",style:{width:"100%",zIndex:0}})))}}]),a}(n.Component),N=t(118),w=t.n(N),S=(n.Component,t(119)),I=t(71),T=t(5),B=t.n(T),M=t(120),P=t.n(M),z=t(121),W=t.n(z),q=t(36),D=t.n(q),F=t(42),V=t.n(F),R=t(129),A=t.n(R),H=t(134),$=t.n(H),J=t(131),L=t.n(J),U=t(132),G=t.n(U),Q=t(130),K=t.n(Q),X=t(69),Y=t.n(X),Z=t(23),_=t.n(Z),ee=t(122),ae=t.n(ee),te=t(124),ne=t.n(te),re=t(125),oe=t.n(re),le=t(128),ie=t.n(le),ce=t(126),se=t.n(ce),me=t(127),ue=t.n(me),de=t(41),pe=t.n(de),he=t(133),ge=t.n(he),fe=t(68),be=t.n(fe),Ee=t(123),ve=t.n(Ee),ye={success:ae.a,warning:ve.a,error:ne.a,info:oe.a};function je(e){return""!=e&&null!=e}function Oe(e){var a=e.inputRef,t=Object(I.a)(e,["inputRef"]);return r.a.createElement(P.a,Object.assign({},t,{ref:function(e){a(e?e.inputElement:null)},mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))}var Ce=Object(d.withStyles)(function(e){return{success:{backgroundColor:se.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:ue.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var a=e.classes,t=e.className,n=e.message,o=e.onClose,l=e.variant,i=Object(I.a)(e,["classes","className","message","onClose","variant"]),c=ye[l];return r.a.createElement(be.a,Object.assign({className:B()(a[l],t),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(c,{className:B()(a.icon,a.iconVariant)}),n),action:[r.a.createElement(pe.a,{key:"close","aria-label":"Close",color:"inherit",className:a.close,onClick:o},r.a.createElement(ie.a,{className:a.icon}))]},i))});function ke(e){return r.a.createElement(Y.a,Object.assign({direction:"up"},e))}var xe=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1,erro:!1,nome:"",email:"",empresa:"",mensagem:"",tel:"(\u2000) \u2000\u2000\u2000-\u2000\u2000\u2000\u2000 ",alerta:"Erro com o formul\xe1rio"},t.handleChange=function(e){return function(a){t.setState(Object(S.a)({},e,a.target.value))}},t.handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.validateForm=function(){var e,a=document.getElementById("nome").value,n=document.getElementById("email").value,r=document.getElementById("tel").value,o=document.getElementById("empresa").value,l=document.getElementById("mensagem").value;je(a)?/@/g.test(e=n)&&je(e)?"(\u2000\u2000) \u2000\u2000\u2000\u2000-\u2000\u2000\u2000\u2000\u2000"!=r?je(o)?je(l)?(!function(e){W.a.post("https://mailer-pandora.herokuapp.com/send",e).then(function(e){"success"===e.data.msg?alert("Sua mensagem foi enviada"):"fail"===e.data.msg&&alert("Oops alguma coisa deu errado ao enviar!")})}({nome:a,email:n,tel:r,emp:o,mensagem:l}),t.resetForm()):t.setState({erro:!0,alerta:"Mensagem vazia!"}):t.setState({erro:!0,alerta:"Qual a empresa?"}):t.setState({erro:!0,alerta:"Informe um telefone!"}):t.setState({erro:!0,alerta:"Email invalido!"}):t.setState({erro:!0,alerta:"Nome n\xe3o preenchido!"})},t.handleCloseS=function(e,a){"clickaway"!==a&&t.setState({erro:!1})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"resetForm",value:function(){this.setState({open:!1,erro:!1,nome:"",email:"",empresa:"",mensagem:"",tel:"(\u2000) \u2000\u2000\u2000-\u2000\u2000\u2000\u2000 ",alerta:"Erro com o formul\xe1rio"})}},{key:"render",value:function(){return r.a.createElement("div",{id:"contato",style:{marginBottom:300,marginTop:600}},r.a.createElement(_.a,{component:"h2",variant:"display3",color:"inherit"},"Entre em contato conosco"),r.a.createElement(V.a,{size:"large",style:{marginBottom:20,marginLeft:"auto",marginRight:"auto",marginTop:20},variant:"outlined",color:"primary",onClick:this.handleClickOpen},"Clique para nos contatar"),r.a.createElement(A.a,{open:this.state.open,TransitionComponent:ke,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(K.a,{id:"alert-dialog-slide-title"},"Por favor preencha os campos"),r.a.createElement(L.a,null,r.a.createElement(G.a,{id:"alert-dialog-slide-description"},r.a.createElement("form",{id:"contatoForm",noValidate:!0,autoComplete:"off",style:{display:"flex",flexDirection:"column"}},r.a.createElement(ge.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.erro,autoHideDuration:18e3,onClose:this.handleCloseS},r.a.createElement(Ce,{onClose:this.handleCloseS,variant:"error",message:this.state.alerta})),r.a.createElement(D.a,{id:"nome",name:"nome",label:"Nome",value:this.state.nome,onChange:this.handleChange("nome"),margin:"normal"}),r.a.createElement(D.a,{id:"email",name:"email",label:"Email",value:this.state.email,onChange:this.handleChange("email"),margin:"normal"}),r.a.createElement(D.a,{id:"tel",name:"tel",label:"Telefone",value:this.state.tel,onChange:this.handleChange("tel"),margin:"normal",InputProps:{inputComponent:Oe}}),r.a.createElement(D.a,{name:"empresa",id:"empresa",label:"Empresa",value:this.state.empresa,onChange:this.handleChange("empresa"),margin:"normal"}),r.a.createElement(D.a,{multiline:!0,rowsMax:"5",id:"mensagem",name:"mensagem",label:"Mensagem",value:this.state.mensagem,onChange:this.handleChange("mensagem"),margin:"normal"})))),r.a.createElement($.a,null,r.a.createElement(V.a,{onClick:this.handleClose,color:"secondary"},"Cancelar"),r.a.createElement(V.a,{color:"primary",onClick:this.validateForm},"Enviar"))))}}]),a}(n.Component),Ne=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"sobre",style:this.props.styles.Divs},r.a.createElement("div",{className:"titulo"},r.a.createElement(_.a,{style:this.props.styles.Typography,component:"h2",variant:"display3",color:"inherit"},"Um pouco sobre nos...")),r.a.createElement("div",{className:"textoEsquerda"},r.a.createElement(_.a,{variant:"h5",color:"inherit",gutterBottom:!0},r.a.createElement("p",null,"Um texto enorme contando sobre a historia da ag\xeancia,  como ela surgiu, de onde veio a iniciativa, e sobre o processo de encuba\xe7\xe3o, posteriormente essa se\xe7\xe3o pode ser espandida para abranger melhor a tragetoria da empresa."),r.a.createElement("p",null,"Vale a pena ja falar sobre os objetivos nessa se\xe7\xe3o tamb\xe9m, qual nossa meta para com o cliente, nosa vis\xe3o (onde queremos chegar), e nossos valores."))))}}]),a}(n.Component),we=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"servicos",style:this.props.styles.Divs},r.a.createElement("div",{className:"titulo"},r.a.createElement(_.a,{style:this.props.styles.Typography,component:"h2",variant:"display3",color:"inherit"},"Fazemos por voc\xea")),r.a.createElement("div",{className:"textoDireita"},r.a.createElement(_.a,{variant:"h5",color:"inherit",gutterBottom:!0},r.a.createElement("p",null,"Aqui na Pandora somos apaixonados por desafios, e pelo que fazemos. Gostamos de ver os resultados transformando a vida de nossos clientes."))))}}]),a}(n.Component),Se=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"})}}]),a}(n.Component),Ie={Typography:{marginTop:20,marginBottom:20},Divs:{marginTop:600}},Te=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(we,{styles:Ie}),r.a.createElement(Ne,{styles:Ie}),r.a.createElement(xe,null),r.a.createElement(Se,null))}}]),a}(n.Component),Be={Img:{width:"100%",zIndex:0}},Me=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("picture",null,r.a.createElement("div",{className:"headertxt"},r.a.createElement("h1",null,"Conosco seu sonho ganha for\xe7a"),r.a.createElement("h2",null,"Independente se ele \xe9 considerado maluco, diferente, inovador, ou um neg\xf3cio tradicional,  transformamos ele em seu foguete para o sucesso, acreditamos nele e vamos te ajudar a chegar l\xe1...")),r.a.createElement("img",{src:"/projetoPandora/img/Watching-the-Stars.png",style:Be.Img})))}}]),a}(n.Component),Pe=t(70),ze=t.n(Pe),We=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"corpo"},r.a.createElement("div",{id:"inicio"},r.a.createElement(ze.a,{maxWidth:859},r.a.createElement(x,null)),r.a.createElement(ze.a,{minWidth:860},r.a.createElement(Me,null))),r.a.createElement(Te,null))}}]),a}(n.Component),qe=t(43),De=t.n(qe),Fe=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("img",{src:"/projetoPandora/img/logo-branco-minor.png"}),r.a.createElement("div",{className:"navs"},r.a.createElement(De.a,{href:"#inicio",className:"mlink"},"Inicio"),r.a.createElement(De.a,{href:"#servicos",offset:function(){return 100},className:"mlink"},"Por Voc\xea"),r.a.createElement(De.a,{href:"#sobre",offset:function(){return 100},className:"mlink"},"Sobre N\xf3s"),r.a.createElement(De.a,{href:"#contato",offset:function(){return 200},className:"mlink"},"Contato")))}}]),a}(n.Component),Ve=t(135),Re=t.n(Ve),Ae=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"toggleMenu",value:function(){var e=document.getElementById("check");0==e.checked?e.checked=!0:e.checked=!1}},{key:"render",value:function(){var e=Object(d.createMuiTheme)({palette:{primary:{main:"#6a1b9a",dark:"#4a126b",contrastText:"#fff"},secondary:{main:"#f50057",dark:"#ab003c",contrastText:"#fff"}}});return r.a.createElement(d.MuiThemeProvider,{theme:e},r.a.createElement("div",{className:"app"},r.a.createElement("input",{type:"checkbox",id:"check"}),r.a.createElement("label",{id:"botaoM",for:"check"},r.a.createElement(pe.a,{className:"iconeMenu",color:"primary","aria-label":"Menu",onClick:this.toggleMenu.bind(this)},r.a.createElement(Re.a,null))),r.a.createElement(Fe,null),r.a.createElement(We,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(335);var He=t(136),$e=t.n(He);Object(d.createMuiTheme)({palette:{primary:$e.a,secondary:{main:"#f44336"}}});l.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,2,1]]]);
//# sourceMappingURL=main.a10ffe54.chunk.js.map