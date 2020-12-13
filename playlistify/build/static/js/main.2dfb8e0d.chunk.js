(this.webpackJsonpplaylistify=this.webpackJsonpplaylistify||[]).push([[0],{33:function(e,t,a){e.exports=a(61)},39:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),r=a.n(l),s=(a(38),a(39),a(1)),o=a(11),i=a(17),m=a(13),u=a(64),d=function(){return c.a.createElement(u.a,{bg:"light",expand:"lg"},c.a.createElement("button",{className:"navbar-brand nav-color border-0"},"Playlistify"),c.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement("div",{className:"navbar-nav mr-auto"},c.a.createElement("button",{className:"nav-link nav-color border-0"},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)")))))},b=function(e){var t=e.setIsAuth,a=Object(n.useState)(""),l=Object(s.a)(a,2),r=l[0],o=l[1],i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],d=m[1],b=Object(n.useState)(!1),f=Object(s.a)(b,2),E=f[0],p=f[1];return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("strong",null,"Login to Playlistify")),c.a.createElement("div",{className:"card-body"},E&&c.a.createElement("span",{className:"text-danger"},"Nope"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"username"},"Username"),c.a.createElement("input",{id:"username",type:"text",className:"form-control",onChange:function(e){return o(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"pass"},"Password"),c.a.createElement("input",{id:"pass",type:"password",className:"form-control",onChange:function(e){return d(e.target.value)}})),c.a.createElement("button",{className:"btn btn-primary",onClick:function(){(function(e,t){return"lucas"===e&&"yeet"===t})(r,u)?t(!0):p(!0)}},"Login")))},f=a(5),E=a.n(f),p="https://agile-brook-03586.herokuapp.com",v=a(7),N=function(e){var t=e.playlists,a=e.addPlaylist,l=e.editPlaylist,r=e.deletePlaylist,o=e.current,i=e.setCurrent,m=Object(n.useState)(""),u=Object(s.a)(m,2),d=u[0],b=u[1],f=Object(n.useState)(""),E=Object(s.a)(f,2),p=E[0],N=E[1],y=Object(n.useState)(!1),g=Object(s.a)(y,2),k=g[0],O=g[1],j=Object(n.useState)(""),h=Object(s.a)(j,2),S=h[0],C=h[1],_=Object(n.useState)(""),P=Object(s.a)(_,2),T=P[0],x=P[1];return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("strong",null,"Playlists")),c.a.createElement("div",{className:"card-body"},c.a.createElement("table",{className:"table table-hover"},c.a.createElement("tbody",null,c.a.createElement("tr",{key:"addPlaylist"},c.a.createElement("td",{className:"form-inline"},c.a.createElement("input",{className:"form-control ".concat(!1===T&&"is-invalid"),type:"text",value:d,onChange:function(e){b(e.target.value),x(!0)},placeholder:"New Playlist ".concat("X")}),!1===T&&c.a.createElement("div",{className:"invalid-feedback"},"Please enter a name"),c.a.createElement("button",{className:"btn btn-primary ml-3",onClick:function(){d?a(d):x(!1),b("")}},"Add"))),t.length>0?t.map((function(e){return c.a.createElement("tr",{key:e._id,className:"arrow ".concat(e._id===o&&"table-active")},c.a.createElement("td",{className:"flex-container",onClick:function(){return i(e._id)}},e._id===p?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"form-control",type:"text",value:S,onChange:function(e){return C(e.target.value)}}),c.a.createElement(v.a,{className:"ml-3 pointer",icon:"check",title:"Submit",onClick:function(){l(S,e._id),N(""),O(!1)}}),c.a.createElement(v.a,{className:"ml-3 pointer",icon:"times",title:"Cancel",onClick:function(){N(""),O(!1)}})):c.a.createElement(c.a.Fragment,null,e.name,c.a.createElement("span",null,c.a.createElement(v.a,{className:"ml-3 pointer",icon:["far","edit"],onClick:function(){k||(N(e._id),C(e.name),O(!0))}}),c.a.createElement(v.a,{className:"ml-3 pointer",icon:["far","trash-alt"],onClick:function(){return r(e._id)}})))))})):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Loading Playlists..."),c.a.createElement(v.a,{icon:"stroopwafel",spin:!0,size:"3x"}))))))},y=function(e){E.a.post("".concat(p,"/playlists/add"),{name:e}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},g=function(e,t){E.a.put("".concat(p,"/playlists/edit"),{name:e,_id:t}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},k=function(e){E.a.delete("".concat(p,"/playlists/delete"),{data:{_id:e}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},O=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){E.a.get("".concat(p,"/playlists")).then((function(e){return r(e.data)}))})),c.a.createElement(N,Object.assign({addPlaylist:y,editPlaylist:g,deletePlaylist:k,playlists:l},e))},j=function(e){var t=e.playlist,a=e.allTracks,l=e.addATrack,r=e.removeTrack,o=Object(n.useState)({}),i=Object(s.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(""),b=Object(s.a)(d,2),f=b[0],E=b[1];return c.a.createElement("div",{className:"card"},t&&t.name&&c.a.createElement("div",{className:"card-header"},c.a.createElement("strong",null,t.name)),c.a.createElement("div",{className:"card-body"},t&&t.name?c.a.createElement("table",{className:"table table-hover table-striped"},c.a.createElement("tbody",null,c.a.createElement("tr",{key:"addPlaylistTrack"},c.a.createElement("td",{className:"form-inline"},c.a.createElement("select",{className:"form-control ".concat(!1===f&&"is-invalid"),value:JSON.stringify(m),onChange:function(e){u(JSON.parse(e.target.value)),E(!0)}},c.a.createElement("option",{value:JSON.stringify({})},"Choose a song to add"),a&&a.map((function(e){return c.a.createElement("option",{key:e._id,value:JSON.stringify(e)},e.name)}))),c.a.createElement("button",{className:"btn btn-primary ml-3",onClick:function(){return function(e,t){0!==Object.entries(m).length?l(e,t):E(!1),u({})}(t,m)}},"Add"),!1===f&&c.a.createElement("div",{className:"invalid-feedback"},"Please select a song"))),t.tracks&&t.tracks.map((function(e){return c.a.createElement("tr",{key:e._id,className:"arrow"},c.a.createElement("td",{className:"flex-container"},e.name,c.a.createElement("span",null,c.a.createElement(v.a,{className:"pointer",icon:["far","trash-alt"],onClick:function(){return r(t._id,e._id)}}))))})))):c.a.createElement("span",null,"Select a playlist to view tracks")))},h=function(e,t){E.a.put("".concat(p,"/playlists/track/add"),{_id:e._id,id:t._id,name:t.name}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},S=function(e,t){E.a.put("".concat(p,"/playlists/track/remove"),{_idPlaylist:e,_idTrack:t}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},C=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)([]),i=Object(s.a)(o,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){e.current&&E.a.get("".concat(p,"/playlists/").concat(e.current)).then((function(e){return r(e.data)}))})),Object(n.useEffect)((function(){E.a.get("".concat(p,"/tracks")).then((function(e){return u(e.data)}))}),[]),c.a.createElement(j,{addATrack:h,removeTrack:S,playlist:l,allTracks:m})},_=a(9),P=function(e){var t=e.tracks,a=e.addTrack,l=e.deleteTrack,r=Object(n.useState)({track:!1,album:!1,artist:!1}),o=Object(s.a)(r,2),i=o[0],m=o[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),b=d[0],f=d[1],E=Object(n.useState)(""),p=Object(s.a)(E,2),N=p[0],y=p[1],g=Object(n.useState)(""),k=Object(s.a)(g,2),O=k[0],j=k[1],h=Object(n.useState)(""),S=Object(s.a)(h,2),C=S[0],P=S[1],T=Object(n.useState)(""),x=Object(s.a)(T,2),w=x[0],A=x[1],F=Object(n.useState)(""),J=Object(s.a)(F,2),B=J[0],L=J[1],I=function(){!C&&i.track?f(!1):f(!0),!w&&i.album?y(!1):y(!0),!B&&i.artist?j(!1):j(!0)};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("strong",null,"Track Library")),c.a.createElement("div",{className:"card-body"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Track"),c.a.createElement("th",{scope:"col"},"Album"),c.a.createElement("th",{scope:"col"},"Artist"),c.a.createElement("th",{scope:"col"},"Action"))),c.a.createElement("tbody",null,c.a.createElement("tr",{key:"addTrack"},c.a.createElement("td",null,c.a.createElement("input",{className:"form-control ".concat(!1===b&&"is-invalid"),type:"text",value:C,onChange:function(e){P(e.target.value),f(!0)},onBlur:I,onFocus:function(){return m(Object(_.a)(Object(_.a)({},i),{},{track:!0}))},placeholder:"New Track"}),!1===b&&c.a.createElement("div",{className:"invalid-feedback"},"Please enter a track name")),c.a.createElement("td",null,c.a.createElement("input",{className:"form-control ".concat(!1===N&&"is-invalid"),type:"text",value:w,onChange:function(e){A(e.target.value),y(!0)},onBlur:I,onFocus:function(){return m(Object(_.a)(Object(_.a)({},i),{},{album:!0}))},placeholder:"Album"}),!1===N&&c.a.createElement("div",{className:"invalid-feedback"},"Please enter an album name")),c.a.createElement("td",null,c.a.createElement("input",{className:"form-control ".concat(!1===O&&"is-invalid"),type:"text",value:B,onChange:function(e){L(e.target.value),j(!0)},onBlur:I,onFocus:function(){return m(Object(_.a)(Object(_.a)({},i),{},{artist:!0}))},placeholder:"Artist"}),!1===O&&c.a.createElement("div",{className:"invalid-feedback"},"Please enter an artist name")),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-primary",onClick:function(){!C&&f(!1),!w&&y(!1),!B&&j(!1),C&&w&&B&&(a({trackName:C,albumName:w,artistName:B}),P(""),A(""),L(""))}},"Add"))),t&&t.map((function(e){return c.a.createElement("tr",{key:e._id,className:"arrow"},c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.album),c.a.createElement("td",null,e.artists[0].name),c.a.createElement("td",{className:"text-center"},c.a.createElement(v.a,{className:"pointer",icon:["far","edit"]}),c.a.createElement(v.a,{className:"ml-3 pointer",icon:["far","trash-alt"],onClick:function(){return l(e._id)}})))}))))))},T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){E.a.get("".concat(p,"/tracks")).then((function(e){return l(e.data)}))})),c.a.createElement(P,{addTrack:function(e){E.a.post("".concat(p,"/tracks/add"),{name:e.trackName,album:e.albumName,artists:[{id:"-1",name:e.artistName}]}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},deleteTrack:function(e){E.a.delete("".concat(p,"/tracks/delete"),{data:{_id:e}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},tracks:a})};a(60);o.b.add(i.a,i.b,m.c,m.b,m.a,m.d);var x=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!0),o=Object(s.a)(r,2),i=o[0],m=o[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement("div",{className:"container-fluid"},i?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-3 col-md-5 mt-3"},c.a.createElement(O,{current:a,setCurrent:l})),c.a.createElement("div",{className:"col-xl-4 col-md-7 mt-3"},c.a.createElement(C,{current:a})),c.a.createElement("div",{className:"col-xl-5 mt-3"},c.a.createElement(T,null))):c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-4 mt-3"},c.a.createElement(b,{setIsAuth:m})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2dfb8e0d.chunk.js.map