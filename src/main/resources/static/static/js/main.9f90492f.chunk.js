(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{21:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADmCAIAAABOCG7sAAAEpklEQVR42u3dQW7bMBBAUd2pp+1p04VRI4lEhrY05Ez0PrJQAtcI6AeWkmNq+5BKtRkCISshKyErZCVkJWSFrBoju20//kTIIousLjLKK7LIIqtzXh8dquUVWWSR1eklQUsnr8gii6xiTr94RbYeWSGLLLJCFllkhSyyQhZZZJE1CMgiK2SRRVYtstvXDBGyBciahpFFFllNIcsrss3+/F3wdbhgtZBFNi/Zh9rWLIssssXIUotsPbLUIluPLLXIZicrZJEVssgii6yQRVbIIossssgii6yQRRZZZJFFFlkhiyyyyCKLLLJCFllkkUUWWWSFLLLIIossssgKWWSRRRZZZJEVssgiiyyyyCIrZJFFFllkkUVWyCKLLLLIIovs/8H96b5fn3emd1cFZAvs4t13LGRzkW3RRBbZpLf3QBbZlWTfuO+XVQGy62fZ1k8GdfKKbBayz2NekS1Ddi+YV2Szk/22VHgc7Fe9+CK7jOzgI4VsMbLgIpudbOdLyBYjSy2y9chSi2w9suAiW5IstcjWI0stsvXIUotsPbLUIossssgGk6UW2XpkqUW2HllqkUUWWWSpRRZZZJGtTfbmapEtSfbOapFFFllkqa1OdvLHR/c7uDzqIOs/LCHZVXsqZvgk8CSynW9Dyb76oe0z8iaTfWMjj/Mjn2H7hfuSbQn7BWTjNqg781L2N9XLS3bywuDVKbYW2YfamXsqnnwpH//k5K8xey078/RrcCF7FbtVa9lBmpevZd8Wn4vs4fJ8fxB9htfaTeiNpW3yWXbynornX8oLZvp7Lgwu97qK7MiOdBeO+Y0WBtlOvwZPxUqQ7Uu6drRPPnlVstFqX9p4cPAKbnKynf+yr72SeualrHTFINu7X0G25r/7tX8P7A4bfSKLLLLpyf6avzG4518aIIvsFGfXXZXfQn/LVaNzK7ILx3kJ3O2lS/TSVZllbz27m2VVhmyhwSmwlkUWWVcMkPVBGmSRRRZZXpFFFllki5O99TijhiyyyPKKLLLIIluUrJBFFllkeUUWWWSRrUdWyCKLLLK8IossssjWIytkkUVWYWSFLLLIKoyskEUWWYWRFbLIIqswskIWWWQVRlbIIouswsgKWWSRVRhZIYsssjpHtnMnx+fzPA9m3mEdWWSHblzTubXntyc3wsjmItuniSyyKcgOTrHIIhvidfAu44cL2T5NXpGdNMsenmntD/pkeUU23cKAV2SLnX61gPKKbEayH18vxB6uj12aRXYl2dbbXVAiW4CsZQCyhckK2exkhSyyyCqMrJBFFlmFkRWyyCKrMLJCFllkFUZWyCKLrMLICllkkVUYWSGLLLIKIytkkUVWYWSFLLLIKoyskEUWWYWRFbLICtkwskIWWSEbRlbIIitkw8gKWWSFbBjZkYfZNRbZYmQ73wrZqWTfeBiyyFYiyyuyK70Ork0tZJHNO8senmm1buYhZC0MkJXTL2SRpRbZ7GSFLLLICllkkRWyyCIrZJFFVsgii6yQRRZZIYuskEUWWWQNArLICllkkRWyyErIClkJWQlZISshKyErZCVkJWSFrISshKyQlZCVkBWyErLSxf0DwqptE3OaivoAAAAASUVORK5CYII="},22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(19),o=n.n(r),i=n(7),s=(n(27),n(9)),c=n(10),u=n(3),h=n(12),m=n(11),d=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleOnChangeLogin=a.handleOnChangeLogin.bind(Object(u.a)(a)),a.handleOnChangePassword=a.handleOnChangePassword.bind(Object(u.a)(a)),a.handleOnSubmit=a.handleOnSubmit.bind(Object(u.a)(a)),a.state={login:"",password:""},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/access?mode=registration",{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){"YES"==t.error&&e.props.history.push("/main")}))}},{key:"handleOnChangeLogin",value:function(e){this.setState({login:e.target.value})}},{key:"handleOnChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleOnSubmit",value:function(e){if(e.preventDefault(),this.state.login&&this.state.password){var t={nickname:this.state.login,password:this.state.password};fetch("http://localhost:8080/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){document.getElementById("Message").innerHTML=e.message}))}else document.getElementById("Message").innerHTML="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f."}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleOnSubmit},l.a.createElement("p",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("div",null,l.a.createElement("label",null,"\u041b\u043e\u0433\u0438\u043d"),l.a.createElement("br",null),l.a.createElement("input",{onChange:this.handleOnChangeLogin,type:"text"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u041f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement("br",null),l.a.createElement("input",{onChange:this.handleOnChangePassword,type:"text"}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit"}))),l.a.createElement("div",{id:"Message"}),l.a.createElement("div",null,l.a.createElement(i.b,{to:"/login"},"\u0412\u0445\u043e\u0434")))}}]),n}(l.a.Component),p=n(1),E=(n(33),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleOnChangeLogin=a.handleOnChangeLogin.bind(Object(u.a)(a)),a.handleOnChangePassword=a.handleOnChangePassword.bind(Object(u.a)(a)),a.handleOnSubmit=a.handleOnSubmit.bind(Object(u.a)(a)),a.state={login:"",password:""},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/access?mode=login",{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){"YES"==t.error&&e.props.history.push("/main")}))}},{key:"handleOnChangeLogin",value:function(e){this.setState({login:e.target.value})}},{key:"handleOnChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleOnSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.login&&this.state.password){var n={nickname:this.state.login,password:this.state.password};fetch("http://localhost:8080/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw new Error;e.json().then((function(e){"NO"==e.error?(localStorage.setItem("token","Basic "+e.message),t.props.history.push("/main")):document.getElementById("Message").innerHTML=e.message}))})).catch((function(e){document.getElementById("Message").innerHTML="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c."}))}else document.getElementById("Message").innerHTML="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f."}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleOnSubmit},l.a.createElement("p",null,"\u0412\u0445\u043e\u0434"),l.a.createElement("div",null,l.a.createElement("label",null,"\u041b\u043e\u0433\u0438\u043d"),l.a.createElement("br",null),l.a.createElement("input",{onChange:this.handleOnChangeLogin,type:"text"}),l.a.createElement("br",null),l.a.createElement("label",null,"\u041f\u0430\u0440\u043e\u043b\u044c"),l.a.createElement("br",null),l.a.createElement("input",{onChange:this.handleOnChangePassword,type:"password"}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit"}))),l.a.createElement("div",{id:"Message"}),l.a.createElement("div",null,l.a.createElement(i.b,{to:"/registration"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))}}]),n}(l.a.Component)),y=n(21),g=n.n(y),b=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleOnSubmit=a.handleOnSubmit.bind(Object(u.a)(a)),a.handleOnChangeY=a.handleOnChangeY.bind(Object(u.a)(a)),a.logout=a.logout.bind(Object(u.a)(a)),a.state={x:"-4",y:"",r:"-4",massive:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/access?mode=main",{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){"YES"==t.error?e.props.history.push("/login"):fetch("http://localhost:8080/points",{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){return e.setState({massive:t})}))}))}},{key:"handleOnChangeRadioX",value:function(e){this.setState({x:e.target.value})}},{key:"handleOnChangeRadioR",value:function(e){this.setState({r:e.target.value})}},{key:"handleOnChangeY",value:function(e){this.setState({y:e.target.value})}},{key:"addRow",value:function(e){var t=document.getElementById("table"),n=document.createElement("tr"),a=document.createElement("td");a.appendChild(document.createTextNode(this.state.x));var l=document.createElement("td");l.appendChild(document.createTextNode(this.state.y));var r=document.createElement("td");r.appendChild(document.createTextNode(this.state.r));var o=document.createElement("td");o.appendChild(document.createTextNode(e.result)),n.appendChild(a),n.appendChild(l),n.appendChild(r),n.appendChild(o),t.appendChild(n)}},{key:"handleOnSubmit",value:function(e){var t=this;if(document.getElementById("Message").innerHTML="",e.preventDefault(),this.state.y){var n={x:this.state.x,y:this.state.y,r:this.state.r};fetch("http://localhost:8080/points",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw new Error;e.json().then((function(e){"YES"==e.error?document.getElementById("Message").innerHTML=e.result:t.addRow(e)}))})).catch((function(e){return console.log(e)}))}else document.getElementById("Message").innerHTML="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b Y"}},{key:"logout",value:function(e){var t=this;e.preventDefault(),fetch("http://localhost:8080/exit",{method:"POST",headers:{Authorization:localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){"NO"==e.error&&(localStorage.removeItem("token"),t.props.history.push("/login"))})).catch((function(e){return alert(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:g.a,height:"200",width:"200"}),l.a.createElement("form",{onSubmit:this.handleOnSubmit},l.a.createElement("p",null,"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430 X"),l.a.createElement("div",{id:"RadioX",onChange:this.handleOnChangeRadioX.bind(this)},l.a.createElement("label",null,"-4"),l.a.createElement("input",{type:"radio",name:"x",value:"-4",defaultChecked:!0}),l.a.createElement("label",null,"-3"),l.a.createElement("input",{type:"radio",name:"x",value:"-3"}),l.a.createElement("label",null,"-2"),l.a.createElement("input",{type:"radio",name:"x",value:"-2"}),l.a.createElement("label",null,"-1"),l.a.createElement("input",{type:"radio",name:"x",value:"-1"}),l.a.createElement("label",null,"0"),l.a.createElement("input",{type:"radio",name:"x",value:"0"}),l.a.createElement("label",null,"1"),l.a.createElement("input",{type:"radio",name:"x",value:"1"}),l.a.createElement("label",null,"2"),l.a.createElement("input",{type:"radio",name:"x",value:"2"}),l.a.createElement("label",null,"3"),l.a.createElement("input",{type:"radio",name:"x",value:"3"}),l.a.createElement("label",null,"4"),l.a.createElement("input",{type:"radio",name:"x",value:"4"})),l.a.createElement("p",null,"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430 Y"),l.a.createElement("input",{onChange:this.handleOnChangeY,type:"text"}),l.a.createElement("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 R"),l.a.createElement("div",{id:"RadioR",onChange:this.handleOnChangeRadioR.bind(this)},l.a.createElement("label",null,"-4"),l.a.createElement("input",{type:"radio",name:"r",value:"-4",defaultChecked:!0}),l.a.createElement("label",null,"-3"),l.a.createElement("input",{type:"radio",name:"r",value:"-3"}),l.a.createElement("label",null,"-2"),l.a.createElement("input",{type:"radio",name:"r",value:"-2"}),l.a.createElement("label",null,"-1"),l.a.createElement("input",{type:"radio",name:"r",value:"-1"}),l.a.createElement("label",null,"0"),l.a.createElement("input",{type:"radio",name:"r",value:"0"}),l.a.createElement("label",null,"1"),l.a.createElement("input",{type:"radio",name:"r",value:"1"}),l.a.createElement("label",null,"2"),l.a.createElement("input",{type:"radio",name:"r",value:"2"}),l.a.createElement("label",null,"3"),l.a.createElement("input",{type:"radio",name:"r",value:"3"}),l.a.createElement("label",null,"4"),l.a.createElement("input",{type:"radio",name:"r",value:"4"})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit"}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.logout},"\u0412\u044b\u0439\u0442\u0438")),l.a.createElement("div",{id:"Message"}),l.a.createElement("table",{id:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"X"),l.a.createElement("th",null,"Y"),l.a.createElement("th",null,"R"),l.a.createElement("th",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"))),l.a.createElement("tbody",null,this.state.massive.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.x),l.a.createElement("td",null,e.y),l.a.createElement("td",null,e.r),l.a.createElement("td",null,e.result))})))))}}]),n}(l.a.Component);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:d}),l.a.createElement(p.a,{path:"/login",component:E}),l.a.createElement(p.a,{path:"/registration",component:d}),l.a.createElement(p.a,{path:"/main",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.9f90492f.chunk.js.map