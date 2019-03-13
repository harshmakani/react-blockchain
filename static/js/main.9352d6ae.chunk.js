(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(53)},30:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(21),s=t.n(c),r=(t(30),t(55)),m=t(57),o=t(56),i=t(6),u=t(7),h=t(9),d=t(8),E=t(10),v=t(22),N=t.n(v).a.create({baseURL:"https://blockchain.info/",params:{cors:!0,format:"json"}}),b=t(54),p=function(e){function a(){var e,t;Object(i.a)(this,a);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={data:[]},t.renderBlocks=function(){return(t.state.data.blocks?t.state.data.blocks:[]).map(function(e){return n.a.createElement(b.a,{to:"/block/".concat(e.hash),className:"list-group-item list-group-item-action flex-column align-items-start",key:e.hash},n.a.createElement("div",{className:"d-flex w-100 justify-content-between mb-3"},n.a.createElement("h5",{className:"mb-1"},"Hash"),n.a.createElement("small",null,e.hash)),n.a.createElement("div",{className:"d-flex w-100 justify-content-between"},n.a.createElement("h5",{className:"mb-1"},"Height"),n.a.createElement("small",null,e.height?e.height:"N/A"),n.a.createElement("h5",{className:"mb-1"},"Time"),n.a.createElement("small",null,e.time?e.time:"N/A"),n.a.createElement("h5",{className:"mb-1"},"Main Chain"),n.a.createElement("small",{className:"text-center"},e.main_chain?n.a.createElement("i",{className:"material-icons text-success"},"done"):n.a.createElement("i",{className:"material-icons text-danger"},"clear"))))})},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.get("blocks").then(function(a){return e.setState({data:a.data})})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"List of Today's Blocks")),n.a.createElement("div",{className:"list-group"},this.renderBlocks()))}}]),a}(l.Component),f=function(e){var a=e.data;return n.a.createElement("div",{className:"block-info-root"},n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Block Index"),n.a.createElement("small",null,a.block_index?a.block_index:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Bits"),n.a.createElement("small",null,a.bits?a.bits:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Fee"),n.a.createElement("small",null,a.fee?a.fee:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Height"),n.a.createElement("small",null,a.height?a.height:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Size"),n.a.createElement("small",null,a.size?a.size:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Number of Transactions"),n.a.createElement("small",null,a.n_tx?a.n_tx:"N/A"))),a.n_tx>0?n.a.createElement("div",{className:"mt-5 text-center"},n.a.createElement("h3",null,"Transactions"),function(e){return e.map(function(e){return n.a.createElement(b.a,{to:"/transaction/".concat(e.hash),className:"list-group-item list-group-item-action flex-column align-items-start",key:e.hash},n.a.createElement("div",{className:"d-flex w-100 justify-content-between mb-3"},n.a.createElement("h5",{className:"mb-1"},"Hash"),n.a.createElement("small",null,e.hash)),n.a.createElement("div",{className:"d-flex w-100 justify-content-between"},n.a.createElement("h5",{className:"mb-1"},"Fee"),n.a.createElement("small",null,e.fee),n.a.createElement("h5",{className:"mb-1"},"Time"),n.a.createElement("small",null,e.time),n.a.createElement("h5",{className:"mb-1"},"Version"),n.a.createElement("small",null,e.ver)))})}(a.tx?a.tx:[])):"")},g=function(e){function a(){var e,t;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={data:[]},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.get("latestblock").then(function(a){return e.setState({data:a.data})})}},{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",{className:"block-root"},n.a.createElement("div",{className:"starter-template"},n.a.createElement("h1",null,"Block"),n.a.createElement("p",{className:"lead"},this.hash)),n.a.createElement("div",{className:"list-group"},n.a.createElement(f,{data:e})))}}]),a}(l.Component),x=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(h.a)(this,Object(d.a)(a).call(this,e))).state={data:[]},t.hash=t.props.match.params.hash,t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.get("rawblock/".concat(this.hash)).then(function(a){return e.setState({data:a.data})})}},{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",null,n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Block"),n.a.createElement("p",{className:"sub-title"},this.hash)),n.a.createElement("div",{className:"list-group"},n.a.createElement(f,{data:e})))}}]),a}(l.Component),k=function(e){var a=e.data;return n.a.createElement("div",{className:"transaction-info-root"},n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Version"),n.a.createElement("small",null,a.ver?a.ver:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Weight"),n.a.createElement("small",null,a.weight?a.weight:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"VIN Size"),n.a.createElement("small",null,a.vin_sz?a.vin_sz:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"VOUT Size"),n.a.createElement("small",null,a.vout_sz?a.vout_sz:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Size"),n.a.createElement("small",null,a.size?a.size:"N/A")),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("h3",null,"Time"),n.a.createElement("small",null,a.time?a.time:"N/A"))))},j=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(h.a)(this,Object(d.a)(a).call(this,e))).state={data:[]},t.hash=t.props.match.params.hash,t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.get("rawtx/".concat(this.hash)).then(function(a){return e.setState({data:a.data})})}},{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",{className:"transaction-root"},n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Transaction"),n.a.createElement("p",{className:"sub-title"},this.hash)),n.a.createElement("div",{className:"list-group"},n.a.createElement(k,{data:e})))}}]),a}(l.Component),w=n.a.createElement(m.a,null,n.a.createElement(o.a,{exact:!0,path:"/",component:p}),n.a.createElement(o.a,{exact:!0,path:"/latest-block",component:g}),n.a.createElement(o.a,{exact:!0,path:"/block/:hash",component:x}),n.a.createElement(o.a,{exact:!0,path:"/transaction/:hash",component:j})),y=function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-primary"},n.a.createElement("div",{className:"container"},n.a.createElement(b.a,{to:"/",className:"navbar-brand"},"Home"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement(b.a,{to:"/latest-block",className:"nav-link"},"Latest Block")))))))},O=n.a.createElement(r.a,null,n.a.createElement("div",null,n.a.createElement(y,null),n.a.createElement("div",{className:"container"},w)));s.a.render(O,document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.9352d6ae.chunk.js.map