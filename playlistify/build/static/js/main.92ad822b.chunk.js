(this.webpackJsonpplaylistify=this.webpackJsonpplaylistify||[]).push([[0],{32:function(e,a,t){e.exports=t(60)},38:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(9),r=t.n(l),s=(t(37),t(38),t(3)),m=t(10),o=t(16),i=t(12),u=t(63),d=function(){return c.a.createElement(u.a,{bg:"light",expand:"lg"},c.a.createElement("button",{className:"navbar-brand nav-color border-0"},"Playlistify"),c.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement("div",{className:"navbar-nav mr-auto"},c.a.createElement("button",{className:"nav-link nav-color border-0"},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)")))))},E=function(e){var a=e.setIsAuth,t=Object(n.useState)(""),l=Object(s.a)(t,2),r=l[0],m=l[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],d=i[1],E=Object(n.useState)(!1),b=Object(s.a)(E,2),f=b[0],p=b[1];return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("strong",null,"Login to Playlistify")),c.a.createElement("div",{className:"card-body"},f&&c.a.createElement("span",{className:"text-danger"},"Nope"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"username"},"Username"),c.a.createElement("input",{id:"username",type:"text",className:"form-control",onChange:function(e){return m(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"pass"},"Password"),c.a.createElement("input",{id:"pass",type:"password",className:"form-control",onChange:function(e){return d(e.target.value)}})),c.a.createElement("button",{className:"btn btn-primary",onClick:function(){"lucas"===r&&"yeet"===u?a(!0):p(!0)}},"Login")))},b=t(8),f=t.n(b),p="https://agile-brook-03586.herokuapp.com",N=t(7),v=function(e){var a=e.playlists,t=e.addPlaylist,l=e.current,r=e.setCurrent,m=Object(n.useState)(""),o=Object(s.a)(m,2),i=o[0],u=o[1],d=Object(n.useState)(""),E=Object(s.a)(d,2),b=E[0],f=E[1],p=Object(n.useState)(!1),v=Object(s.a)(p,2),g=v[0],y=v[1],h=Object(n.useState)(""),k=Object(s.a)(h,2),O=k[0],j=k[1];return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("strong",null,"Playlists")),c.a.createElement("div",{className:"card-body"},c.a.createElement("table",{className:"table table-hover"},c.a.createElement("tbody",null,c.a.createElement("tr",{key:"addPlaylist"},c.a.createElement("td",{className:"form-inline"},c.a.createElement("input",{className:"form-control",type:"text",value:i,onChange:function(e){return u(e.target.value)},placeholder:"New Playlist ".concat("X")}),c.a.createElement("button",{className:"btn btn-primary ml-3",onClick:function(){return t(i)}},"Add"))),a.length>0?a.map((function(e){return c.a.createElement("tr",{key:e._id,className:"arrow ".concat(e._id===l._id&&"table-active")},c.a.createElement("td",{className:"flex-container",onClick:function(){return r(e)}},e._id===b?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"form-control",type:"text",value:O,onChange:function(e){return j(e.target.value)}}),c.a.createElement(N.a,{className:"ml-3 pointer",icon:"check",onClick:function(){g&&(f(""),y(!1))}}),c.a.createElement(N.a,{className:"ml-3 pointer",icon:"times",onClick:function(){g&&(f(""),y(!1))}})):c.a.createElement(c.a.Fragment,null,e.name,c.a.createElement(N.a,{className:"ml-3 pointer",icon:["far","edit"],onClick:function(){g||(f(e._id),j(e.name),y(!0))}}))))})):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Loading Playlists..."),c.a.createElement(N.a,{icon:"stroopwafel",spin:!0,size:"3x"}))))))},g=function(e){f.a.post("".concat(p,"/playlists/add"),{name:e}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},y=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){f.a.get("".concat(p,"/playlists")).then((function(e){return r(e.data)}))}),[]),c.a.createElement(v,Object.assign({addPlaylist:g,playlists:l},e))},h=function(e){var a=e.tracks,t=e.addATrack,l=e.current,r=Object(n.useState)({}),m=Object(s.a)(r,2),o=m[0],i=m[1];return c.a.createElement("div",{className:"card"},l.name&&c.a.createElement("div",{className:"card-header"},c.a.createElement("strong",null,l.name)),c.a.createElement("div",{className:"card-body"},l.name?c.a.createElement("table",{className:"table table-hover table-striped"},c.a.createElement("tbody",null,c.a.createElement("tr",{key:"addPlaylistTrack"},c.a.createElement("td",{className:"form-inline"},c.a.createElement("select",{className:"form-control",onChange:function(e){i(JSON.parse(e.target.value))}},c.a.createElement("option",null,"Choose a song to add"),a&&a.map((function(e){return c.a.createElement("option",{key:e._id,value:JSON.stringify(e)},e.name)}))),c.a.createElement("button",{className:"btn btn-primary ml-3",onClick:function(){return t(l,o)}},"Add"))),l.tracks&&l.tracks.map((function(e){return c.a.createElement("tr",{key:e._id,className:"arrow"},c.a.createElement("td",{className:"flex-container"},e.name,c.a.createElement("span",null,c.a.createElement(N.a,{className:"pointer",icon:["far","trash-alt"]}),c.a.createElement(N.a,{className:"ml-2 pointer",icon:"grip-lines"}))))})))):c.a.createElement("span",null,"Select a playlist to view tracks")))},k=function(e,a){f.a.put("".concat(p,"/playlists/track/add"),{_id:e._id,id:a._id,name:a.name}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},O=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){f.a.get("".concat(p,"/tracks")).then((function(e){return r(e.data)}))}),[]),c.a.createElement(h,Object.assign({addATrack:k,tracks:l},e))},j=function(e){var a=e.tracks,t=e.addTrack,l=Object(n.useState)(""),r=Object(s.a)(l,2),m=r[0],o=r[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),d=u[0],E=u[1],b=Object(n.useState)(""),f=Object(s.a)(b,2),p=f[0],v=f[1];return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("strong",null,"Track Library")),c.a.createElement("div",{className:"card-body"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Track"),c.a.createElement("th",{scope:"col"},"Album"),c.a.createElement("th",{scope:"col"},"Artist"),c.a.createElement("th",{scope:"col"},"Action"))),c.a.createElement("tbody",null,c.a.createElement("tr",{key:"addTrack"},c.a.createElement("td",null,c.a.createElement("input",{className:"form-control",type:"text",value:m,onChange:function(e){return o(e.target.value)},placeholder:"New Track"})),c.a.createElement("td",null,c.a.createElement("input",{className:"form-control",type:"text",value:d,onChange:function(e){return E(e.target.value)},placeholder:"Album"})),c.a.createElement("td",null,c.a.createElement("input",{className:"form-control",type:"text",value:p,onChange:function(e){return v(e.target.value)},placeholder:"Artist"})),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t({trackName:m,albumName:d,artistName:p})}},"Add"))),a&&a.map((function(e){return c.a.createElement("tr",{key:e._id,className:"arrow"},c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.album),c.a.createElement("td",null,e.artists[0].name),c.a.createElement("td",{className:"text-center"},c.a.createElement(N.a,{className:"pointer",icon:["far","edit"]})))}))))))},C=function(e){f.a.post("".concat(p,"/tracks/add"),{name:e.trackName,album:e.albumName,artists:[{id:"-1",name:e.artistName}]}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},S=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){f.a.get("".concat(p,"/tracks")).then((function(e){return r(e.data)}))}),[]),c.a.createElement(j,{addATrack:C,tracks:l})};t(59);m.b.add(o.a,o.b,i.c,i.b,i.a,i.d);var x=function(){var e=Object(n.useState)({}),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!0),m=Object(s.a)(r,2),o=m[0],i=m[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement("div",{className:"container-fluid"},o?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-3 col-md-5 mt-3"},c.a.createElement(y,{current:t,setCurrent:l})),c.a.createElement("div",{className:"col-xl-4 col-md-7 mt-3"},c.a.createElement(O,{current:t})),c.a.createElement("div",{className:"col-xl-5 mt-3"},c.a.createElement(S,null))):c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-4 mt-3"},c.a.createElement(E,{setIsAuth:i})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.92ad822b.chunk.js.map