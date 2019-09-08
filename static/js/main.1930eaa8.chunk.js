(window["webpackJsonpnutrition-app"]=window["webpackJsonpnutrition-app"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=n(13),s=n(11),l=n(18),u=n(19),m=n(20),d=n(14),p=n(16),f=n(15);function h(e){console.log("ERROR: Nutritionix"),console.log(e.message)}var g=function(e){return function(t){t({type:"SEARCHBAR_DEFOCUS",payload:e})}},b=function(e){return function(t){t({type:"SET_INSPECT_FOCUS",payload:e})}},v=function(e){return function(t){var n={"x-app-id":"6e138a34","x-app-key":"6491fdaf1cf8d2bb710f624499b8dde3","Content-Type":"application/json"};if(e.hasOwnProperty("nix_item_id"))fetch("https://trackapi.nutritionix.com/v2/search/item?nix_item_id="+e.nix_item_id,{method:"GET",headers:n}).then(function(e){return e.json()}).then(function(e){e.hasOwnProperty("message")?h(e):t({type:"SET_INSPECT_FOOD",payload:e.foods[0]})}).catch(function(e){console.log("ERROR: occured when fetching.")});else if(e.hasOwnProperty("food_name")){var a={query:e.food_name};fetch("https://trackapi.nutritionix.com/v2/natural/nutrients",{method:"POST",body:JSON.stringify(a),headers:n}).then(function(e){return e.json()}).then(function(e){e.hasOwnProperty("message")?h(e):t({type:"SET_INSPECT_FOOD",payload:e.foods[0]})})}else t({type:"SET_INSPECT_FOOD",payload:{}})}},y=n(9),x=n(5),_=n(74),E=n.n(_),O=n(75),w=n.n(O);var j=Object(x.a)(function(e){return{icon:Object(y.a)({width:"20px",height:"20px",color:e.palette.primary.main},e.breakpoints.up("md"),{color:"white"})}})(function(e){var t=e.classes,n=e.direction,a=e.index,i=e.noOfDays,c=e.eventOnClick;return"back"===n?r.a.createElement(E.a,{className:t.icon,color:i>a+1?"primary":"disabled",onClick:function(){i>a+1&&c(a+1)}}):"forwards"===n?r.a.createElement(w.a,{className:t.icon,color:0<a?"primary":"disabled",onClick:function(){0<a&&c(a-1)}}):void 0}),k=n(57),D=n(165);function F(){var e=Object(d.a)(["\n  width: 100%;\n  margin: 0 0 10px 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: noWrap;\n  justify-content: space-between;\n  align-items: center;\n  @media(min-width: 960px){\n    max-width: 450px;\n    margin: 10px 0;\n  }\n"]);return F=function(){return e},e}var S=["January","February","March","April","May","June","July","August","September","October","November","December"],C=f.a.div(F()),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).constructDateString=function(e){var t=new Date;return t.setDate(t.getDate()-e),t.getDate()+" "+S[t.getMonth()]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.metaData,a=t.dateIndex,i=t.changeDate,c=new Date;switch(c.setDate(c.getDate()-a),a){case 0:e="Today";break;case 1:e="Yesterday";break;default:e=this.constructDateString(a)}return r.a.createElement(C,null,r.a.createElement(j,{direction:"back",index:a,noOfDays:n.data_points.length,eventOnClick:i}),r.a.createElement(D.a,{mdUp:!0},r.a.createElement(k.a,{variant:"h5",component:"h5"},e)),r.a.createElement(D.a,{smDown:!0},r.a.createElement(k.a,{variant:"h4",component:"h4"},e)),r.a.createElement(j,{direction:"forwards",index:a,noOfDays:n.data_points.length,eventOnClick:i}))}}]),t}(a.Component),I=Object(p.b)(function(e){return{metaData:e.metaData,dateIndex:e.dateIndex}},function(e){return{changeDate:function(t){return e((n=t,function(e){e({type:"CHANGE_DATE",payload:n})}));var n}}})(N),T=n(152);var A=Object(x.a)(function(e){return{avatar:Object(y.a)({width:"75px",height:"75px",margin:"10px",order:1},e.breakpoints.up("md"),{width:"125px",height:"125px",order:2})}})(function(e){var t=e.classes;return r.a.createElement(T.a,{alt:"Photo by @josephgardnerphotography from unsplash.com",src:"https://images.unsplash.com/photo-1458071103673-6a6e4c4a3413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",className:t.avatar})}),P=n(78),q=n.n(P);var B=Object(x.a)(function(e){var t;return{bubble:(t={borderRadius:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"75px",height:"75px",margin:"10px 0",backgroundColor:"#300076",order:3},Object(y.a)(t,e.breakpoints.up("md"),{backgroundColor:q.a[600],margin:"0",order:1}),Object(y.a)(t,"&:last-child",Object(y.a)({margin:"10px",order:3},e.breakpoints.up("md"),{margin:"0"})),t),typography:{color:"white",lineHeight:"1em"}}})(function(e){var t=e.classes,n=e.label,a=e.value;return r.a.createElement("div",{className:t.bubble},r.a.createElement(k.a,{className:t.typography,variant:"h5"},a),r.a.createElement(k.a,{className:t.typography,variant:"body2"},n))});var z=Object(x.a)(function(e){return{container:Object(y.a)({flexGrow:1,order:2,margin:"0 10px"},e.breakpoints.up("md"),{width:"100%",margin:"10px 0",textAlign:"center",order:4})}})(function(e){var t=e.classes,n=e.first_name,a=e.last_name;return r.a.createElement("div",{className:t.container},r.a.createElement(D.a,{mdUp:!0},r.a.createElement(k.a,{variant:"h5",component:"h5"},n)),r.a.createElement(D.a,{smDown:!0},r.a.createElement(k.a,{variant:"h5",component:"h5"},n," ",a)))}),R=n(153);function U(){var e=Object(d.a)(["\n  width: 100%; \n  max-width: 450px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center;\n  margin: 10px;\n  @media(min-width: 960px){\n    flex-wrap: wrap;\n  }  \n"]);return U=function(){return e},e}var W=f.a.div(U()),H=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.metaData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null,r.a.createElement(A,null),r.a.createElement(z,{first_name:e.first_name,last_name:e.last_name}),r.a.createElement(B,{label:"kg",value:e.weight_kg}),r.a.createElement(B,{label:"cm",value:e.height_cm})),r.a.createElement(D.a,{smDown:!0},r.a.createElement(R.a,null)))}}]),t}(a.Component),G=Object(p.b)(function(e){return{metaData:e.metaData}},function(e){return{}})(H),J=n(31),M=n(154),L=n(79),Q=n.n(L);var V=Object(x.a)(function(e){return{fab:{position:"fixed",bottom:0,right:0,margin:"20px",zIndex:0},extendedIcon:{margin:"10px"}}})(function(e){var t=e.classes,n=e.isFocused,a=e.focusFunction,i=e.defocusFunction;return r.a.createElement(M.a,{color:"primary","aria-label":"add",className:t.fab,onClick:function(){n?i():a()}},r.a.createElement(Q.a,null))}),K=n(80),Y=n.n(K),$=n(117);function X(){var e=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  max-width: 450px;\n  background-color: white;\n  border-radius: 5px;\n  align-items: center;\n  margin: 10px;\n"]);return X=function(){return e},e}function Z(){var e=Object(d.a)(["\n  display: flex;\n  min-height: 70px;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n"]);return Z=function(){return e},e}var ee=400,te=f.a.div(Z()),ne=f.a.div(X()),ae=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).focusSearchBar=function(){n.searchBarRef.current.focus()},n.defocusSearchBar=function(){n.props.setSearchFocus(!1),n.props.quickSearchFoods(""),n.setState({typing:!1,searchValue:""})},n.handleSearchChange=function(e){var t=Object(J.a)(n);t.state.typingTimeout&&clearTimeout(t.state.typingTimeout),t.setState({searchValue:e.target.value,typing:!1,typingTimeout:setTimeout(function(){t.props.quickSearchFoods(t.state.searchValue)},ee)})},n.state={searchValue:"",typing:!1,typingTimeout:0},n.searchBarRef=r.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.quickSearchData,a=t.searchBarFocus,i=t.setSearchFocus,c=t.setSearchDefocus,o=!1;return(a||n.common.length>0||n.branded.length>0)&&(o=!0),r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{style:o?{backgroundColor:"rgba(0,0,0,0.25)"}:{},onClick:function(){!0===o&&c()}},r.a.createElement(ne,null,r.a.createElement("div",{style:{margin:"0 5px 0 0"}},r.a.createElement(Y.a,{color:"secondary",style:{margin:"10px"}})),r.a.createElement($.a,{inputRef:this.searchBarRef,placeholder:"Search foods\u2026",inputProps:{"aria-label":"search"},style:{color:"black",flexGrow:1},onChange:function(t){return e.handleSearchChange(t)},onFocus:function(){return i(!0)},onBlur:function(){return i(!1)}}))),r.a.createElement(V,{isFocused:o,focusFunction:this.focusSearchBar,defocusFunction:c}))}}]),t}(a.Component),re=Object(p.b)(function(e){return{quickSearchData:e.quickSearchData,searchBarFocus:e.searchBarFocus}},function(e){return{setSearchFocus:function(t){return e((n=t,function(e){e({type:"SEARCHBAR_FOCUS",payload:n})}));var n},quickSearchFoods:function(t){return e((n=t,function(e){if(""===n)e({type:"SET_QUICK_SEARCH_DATA",payload:{common:[],branded:[]}});else{var t={query:n},a={"x-app-id":"6e138a34","x-app-key":"6491fdaf1cf8d2bb710f624499b8dde3","Content-Type":"application/json"};fetch("https://trackapi.nutritionix.com/v2/search/instant",{method:"POST",body:JSON.stringify(t),headers:a}).then(function(e){return e.json()}).then(function(t){t.hasOwnProperty("message")?h(t):e({type:"SET_QUICK_SEARCH_DATA",payload:t})}).catch(function(e){console.log("ERROR: occured when fetching.")})}}));var n},setSearchDefocus:function(){return e(g())}}})(ae),ie=n(155),ce=n(156);var oe=Object(x.a)(function(e){return{container:{width:"100%",display:"flex",padding:0},icon:{width:"45px",height:"45px",margin:"10px 15px 10px 10px",borderRadius:"10px"},textContainer:{display:"flex",padding:"5px 0",flexGrow:1,borderBottom:"1px solid grey"},listItemText:{textTransform:"capitalize","&:last-child":{padding:"0 10px 0 0"}}}})(function(e){var t=e.classes,n=e.data,a=e.setInspectFood;return r.a.createElement(ie.a,{button:!0,className:t.container,onClick:function(){return a(n)}},r.a.createElement("img",{alt:"Image of "+n.food_name,className:t.icon,src:n.photo.thumb}),r.a.createElement(ce.a,{className:t.listItemText,primary:n.food_name,secondary:n.hasOwnProperty("brand_name")?n.brand_name:""}))}),se=n(114),le=n(157),ue=n(158);var me=Object(x.a)(function(e){return{container:{width:"100vw",height:"calc(100vh - 70px)",position:"absolute",top:"70px"},background:{width:"100vw",height:"calc(100vh - 70px)",position:"absolute"},paper:{width:"calc(100% - 20px)",maxWidth:"450px",maxHeight:"calc(100% - 10px)",margin:"0 auto",overflowY:"scroll"},root:{paddingBottom:0},ul:{padding:0,backgroundColor:"#FFFFFF"},headings:{textTransform:"uppercase"}}})(function(e){var t=e.classes,n=e.data,a=e.searchBarFocus,i=e.setInspectFood,c=e.setSearchDefocus,o=!1;(n.common.length>0||n.branded.length>0)&&(o=!0);var s=!1;return(a||o)&&(s=!0),r.a.createElement("div",{className:t.container,style:s?{}:{display:"none"}},r.a.createElement("div",{className:t.background,style:s?{backgroundColor:"rgba(0,0,0,0.25)"}:{display:"none"},onClick:function(){!0===s&&c()}}),r.a.createElement(se.a,{className:t.paper,style:o?{}:{display:"none"}},r.a.createElement(le.a,{className:t.root,subheader:r.a.createElement("li",null)},["common","branded"].map(function(e){return r.a.createElement("li",{key:"section-".concat(e),className:t.listSection},r.a.createElement("ul",{className:t.ul},r.a.createElement(ue.a,{className:t.headings},e),n[e].filter(function(e,t){return t<5}).map(function(e,t){return r.a.createElement(oe,{key:t,data:e,setInspectFood:i})})))}))))}),de=n(81),pe=n.n(de);var fe=Object(x.a)(function(e){return{container:{padding:"10px 0"},imageWrapper:{display:"flex",justifyContent:"space-between",alignItems:"top"},thumbnailIcon:{width:"75px",height:"75px"}}})(function(e){var t=e.classes,n=e.data,a=e.handelCloseWindow;return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.imageWrapper},r.a.createElement("img",{className:t.thumbnailIcon,src:n.photo.thumb,alt:"Food Thumbnail"}),r.a.createElement(pe.a,{color:"primary",onClick:function(){return a()}})),r.a.createElement(k.a,{variant:"h4",style:{textTransform:"capitalize"}},n.food_name),r.a.createElement(k.a,{variant:"subtitle1",style:{color:"grey"}},n.brand_name))}),he=n(164);var ge=Object(x.a)(function(e){return{container:{padding:"10px 0",display:"flex",flexDirection:"nowrap",justifyContent:"space-between",alignItems:"top"},textField:{width:"40%",margin:0},statsContainer:{"&:last-child":{textAlign:"end"}}}})(function(e){var t,n,a=e.classes,i=e.data,c=e.servings,o=e.setServings,s=e.servingError;return Number(c)&&(t=c>0?c/i.serving_qty*i.nf_calories:0,i.hasOwnProperty("serving_weight_grams")&&(n=i.serving_weight_grams*c)),r.a.createElement("div",{className:a.container},r.a.createElement(he.a,{id:"filled-number",label:"Servings",value:c,onChange:function(e){return o(e)},type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"filled",helperText:i.serving_unit,className:a.textField,error:s}),r.a.createElement("div",{className:a.statsContainer},r.a.createElement(k.a,{variant:"h4"},n?n.toFixed(0):"0"),r.a.createElement(k.a,{variant:"subtitle1",style:{color:"grey"}},"grams")),r.a.createElement("div",{className:a.statsContainer},r.a.createElement(k.a,{variant:"h4"},t?t.toFixed(0):"0"),r.a.createElement(k.a,{variant:"subtitle1",style:{color:"grey"}},"calories")))}),be=n(159),ve=n(82);var ye=Object(x.a)(function(e){return{container:{padding:"10px 0"},menuTitle:{fontWeight:"400",color:"grey"},form:{width:"100%"},input:{width:"100%",padding:"10px",backgroundColor:"rgba(0, 0, 0, 0.09)",borderRadius:"5px"}}})(function(e){var t=e.classes,n=e.meal,a=e.setMeal,i=e.mealError;return r.a.createElement("div",{className:t.container},r.a.createElement(k.a,{varient:"overline",className:t.menuTitle},"ADD TO TODAY"),r.a.createElement(be.a,{className:t.form,error:i},r.a.createElement(ve.a,{className:t.input,value:n,onChange:function(e){return a(e)}},r.a.createElement("option",{value:""},"Meal..."),r.a.createElement("option",{value:"breakfast"},"Breakfast"),r.a.createElement("option",{value:"lunch"},"Lunch"),r.a.createElement("option",{value:"dinner"},"Dinner"),r.a.createElement("option",{value:"snack"},"Snack"))))}),xe=n(160),_e=n(161);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Oe(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n"]);return Oe=function(){return e},e}function we(){var e=Object(d.a)(["\n  margin: 5px 10px;\n"]);return we=function(){return e},e}function je(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n"]);return je=function(){return e},e}function ke(){var e=Object(d.a)(["\n  width: calc(100% - 20px);\n  max-width: 350px;\n  margin: 10px;\n  padding: 20px;\n"]);return ke=function(){return e},e}function De(){var e=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n  background-color: rgba(0,0,0,0.25);\n"]);return De=function(){return e},e}function Fe(){var e=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  z-index: 15;\n"]);return Fe=function(){return e},e}var Se=f.a.div(Fe()),Ce=f.a.div(De()),Ne=Object(f.a)(se.a)(ke()),Ie=f.a.div(je()),Te=Object(f.a)(R.a)(we()),Ae=f.a.div(Oe()),Pe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChangeServings=function(e){n.setState({servings:e.target.value})},n.handleSelectMeal=function(e){n.setState({meal:e.target.value})},n.handleAddFood=function(){var e=n.props,t=e.inspectFood,a=e.appendFood,r=n.state,i=r.servings,c=r.meal,o={servingError:!1,mealError:!1};+i<=0&&(o.servingError=!0),""===c&&(o.mealError=!0),o.servingError||o.mealError?n.setState(o):(a(t,i,c),n.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({servings:"1",meal:""},o)))},n.handelCancelInspect=function(){n.props.setInspectFood({}),n.props.setInspectFocus(!1)},n.state={servings:"1",meal:"",servingError:!1,mealError:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.servingError,a=t.mealError,i=this.props,c=i.inspectFoodFocus,o=i.inspectFood,s=!(Object.keys(o).length<=0);return r.a.createElement(Se,{style:c?{}:{display:"none"}},r.a.createElement(Ce,{style:c?{}:{display:"none"},onClick:function(){e.handelCancelInspect()}}),r.a.createElement(Ne,null,s?r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{data:o,handelCloseWindow:this.handelCancelInspect}),r.a.createElement(Te,null),r.a.createElement(ge,{data:o,servings:this.state.servings,setServings:this.handleChangeServings,servingError:n}),r.a.createElement(Te,null),r.a.createElement(ye,{meal:this.state.meal,setMeal:this.handleSelectMeal,mealError:a}),r.a.createElement(Ae,null,r.a.createElement(xe.a,{variant:"contained",color:"primary",onClick:function(){return e.handleAddFood()}}," ADD "))):r.a.createElement(Ie,null,r.a.createElement(_e.a,{style:{width:"75px",height:"75px",margin:"50px 25px"},color:"primary"}))))}}]),t}(a.Component),qe=Object(p.b)(function(e){return{metaData:e.metaData,quickSearchData:e.quickSearchData,inspectFoodFocus:e.inspectFoodFocus,inspectFood:e.inspectFood}},function(e){return{setInspectFood:function(t){return e(v(t))},appendFood:function(t,n,a){return e(function(e,t,n){return function(a){var r={food_name:e.food_name,serving_unit:e.serving_unit,serving_weight_grams:e.serving_weight_grams,serving_qty:e.serving_qty,nf_calories:e.nf_calories,serving_size:Number(t),meal_type:n,thumb:e.photo.thumb};e.nix_item_id&&(r.nix_item_id=e.nix_item_id),a({type:"ADD_FOOD",payload:r})}}(t,n,a))},setInspectFocus:function(t){return e(b(t))}}})(Pe),Be=n(162);function ze(){var e=Object(d.a)(["\n  box-shadow: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n"]);return ze=function(){return e},e}var Re=Object(f.a)(Be.a)(ze()),Ue=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handelSubmitItems=function(e){Promise.resolve(n.props.setInspectFocus(!0)).then(function(){n.props.setInspectFood(e)})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.quickSearchData,n=e.searchBarFocus,a=e.setSearchDefocus;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,{position:"relative"},r.a.createElement(re,null),r.a.createElement(D.a,{mdUp:!0},r.a.createElement(G,null)),r.a.createElement(D.a,{smDown:!0},r.a.createElement(I,null)),r.a.createElement(me,{data:t,searchBarFocus:n,setInspectFood:this.handelSubmitItems,setSearchDefocus:a}),r.a.createElement(qe,null)))}}]),t}(a.Component),We=Object(p.b)(function(e){return{quickSearchData:e.quickSearchData,searchBarFocus:e.searchBarFocus}},function(e){return{setInspectFood:function(t){return e(v(t))},setSearchDefocus:function(){return e(g())},setInspectFocus:function(t){return e(b(t))}}})(Ue);var He=Object(x.a)(function(e){return{container:{width:"100%",margin:"10px 0",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between"},cells:{display:"flex",flexDirection:"column",justifyContent:"start","&:last-child":{textAlign:"end"}}}})(function(e){var t=e.classes,n=e.goal,a=e.sum;return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.cells},r.a.createElement(k.a,{variant:"h5",component:"h5"},a.toFixed(0)," cal"),r.a.createElement(k.a,{variant:"body2",component:"p",style:{color:"grey"}},"consumed")),r.a.createElement("div",{className:t.cells},r.a.createElement(k.a,{variant:"h5",component:"h5"},n," cal"),r.a.createElement(k.a,{variant:"body2",component:"p",style:{color:"grey"}},"daily goal")))}),Ge=n(163);var Je=Object(x.a)(function(e){return{container:{width:"100%",margin:"10px 0",display:"flex",flexDirection:"column"},loadingBar:{width:"100%"},percentageText:{textAlign:"end"}}})(function(e){var t=e.classes,n=e.progress;return r.a.createElement("div",{className:t.container},r.a.createElement(Ge.a,{className:t.loadingBar,color:"primary",variant:"determinate",value:n>100?100:n}),r.a.createElement("div",{style:{display:"flex",wrap:"nowrap"}},r.a.createElement("div",{style:n>1?{flexGrow:(n+.05*(n-50)).toFixed(0)}:{}}),r.a.createElement(k.a,{style:n>0&&n<100?{flexGrow:1}:{},variant:"subtitle2",component:"p"},n.toFixed(0),"%"),r.a.createElement("div",{style:n<99?{flexGrow:(100-n-.05*(n-50)).toFixed(0)}:{}})))}),Me=["breakfast","lunch","dinner","snack"];var Le=Object(x.a)(function(e){return{container:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},cells:{width:(100/Me.length).toString()+"%",textAlign:"center"},mealCategory:{textTransform:"capitalize",color:"grey"}}})(function(e){var t=e.classes,n=e.foodList;return r.a.createElement("div",{className:t.container},Me.map(function(e,a){return r.a.createElement("div",{key:a,className:t.cells},r.a.createElement(k.a,{variant:"h5",component:"h5"},(i=n,c=e,i.filter(function(e){return e.meal_type===c}).reduce(function(e,t){return e+t.serving_size/t.serving_qty*t.nf_calories},0)).toFixed(0)),r.a.createElement(k.a,{variant:"body2",component:"p",className:t.mealCategory},e));var i,c}))});function Qe(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  @media(min-width: 960px){\n    max-width: 350px;\n    width: 100%;\n    background-color: #f5f5f5;\n    flex-grow: 1;\n  }\n"]);return Qe=function(){return e},e}var Ve=f.a.div(Qe()),Ke=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.metaData,n=e.dateIndex,a=t.data_points[n].intake_list.reduce(function(e,t){return e+t.serving_size/t.serving_qty*t.nf_calories},0);return r.a.createElement(Ve,null,r.a.createElement(D.a,{mdUp:!0},r.a.createElement(I,null)),r.a.createElement(D.a,{smDown:!0},r.a.createElement(G,null)),r.a.createElement(He,{sum:a,goal:t.daily_goal}),r.a.createElement(Je,{progress:a/t.daily_goal*100}),r.a.createElement(Le,{foodList:t.data_points[n].intake_list}))}}]),t}(a.Component),Ye=Object(p.b)(function(e){return{metaData:e.metaData,dateIndex:e.dateIndex}},function(e){return{}})(Ke);var $e=Object(x.a)(function(e){return{container:{width:"100%",display:"flex",padding:0},icon:{width:"45px",height:"45px",margin:"10px 15px 10px 10px",borderRadius:"10px"},textContainer:{display:"flex",padding:"5px 0",flexGrow:1,borderBottom:"1px solid grey"},listItemText:{"&:last-child":{padding:"0 10px 0 0",textAlign:"end"}},textCapitalize:{textTransform:"capitalize"}}})(function(e){var t,n,a=e.classes,i=e.data,c=i.serving_size/i.serving_qty*i.nf_calories;return i.hasOwnProperty("serving_weight_grams")?(t="("+(i.serving_weight_grams*i.serving_size).toFixed(0)+" g)",n=[i.serving_size.toString(),i.serving_unit,t].join(" ")):n=[i.serving_size.toString(),i.serving_unit].join(" "),r.a.createElement(ie.a,{className:a.container},r.a.createElement("img",{alt:"Image of "+i.food_name,className:a.icon,src:i.thumb}),r.a.createElement("div",{className:a.textContainer},r.a.createElement(ce.a,{className:a.listItemText,disableTypography:!0,primary:r.a.createElement(k.a,{className:a.textCapitalize,type:"body1"},i.food_name),secondary:r.a.createElement(k.a,{type:"body2",style:{color:"grey"}},n)}),r.a.createElement(ce.a,{className:a.listItemText,disableTypography:!0,primary:r.a.createElement(k.a,{type:"body1"},c.toFixed(0)+" cal"),secondary:r.a.createElement(k.a,{className:a.textCapitalize,type:"body2",style:{color:"grey"}},i.meal_type)})))}),Xe=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.metaData,n=e.dateIndex;return r.a.createElement(le.a,{style:{width:"100%"}},t.data_points[n].intake_list.map(function(e,t){return r.a.createElement($e,{key:t,data:e})}))}}]),t}(a.Component),Ze=Object(p.b)(function(e){return{metaData:e.metaData,dateIndex:e.dateIndex}},function(e){return{}})(Xe);var et=Object(x.a)(function(e){return{container:Object(y.a)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.breakpoints.up("md"),{flexDirection:"row",flexWrap:"nowrap",flexGrow:1})}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.container},r.a.createElement(Ye,null),r.a.createElement(Ze,null))}),tt=n(85),nt=n(83),at=n.n(nt);function rt(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n  min-height: 100vh;\n"]);return rt=function(){return e},e}var it=f.a.div(rt()),ct=Object(tt.a)({palette:{primary:{main:"#6200ee"},secondary:{main:"#000000"}}}),ot=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(it,null,r.a.createElement(at.a,{theme:ct},r.a.createElement(We,null),r.a.createElement(et,null)))}}]),t}(a.Component),st=Object(p.b)(function(e){return{}},function(e){return{}})(ot),lt=n(46),ut=n(84);function mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mt(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var pt={branded:[],common:[]},ft={metaData:{first_name:"Jane",last_name:"Appleseed",height_cm:163,weight_kg:57,daily_goal:1500,data_points:[{date:"",intake_list:[]},{date:"",intake_list:[{nix_item_id:"55c9298af0432259369100c4",food_name:"Italian sausage",serving_unit:"link",serving_weight_grams:75,serving_qty:1,nf_calories:258,serving_size:2,meal_type:"breakfast",thumb:"https://d1r9wva3zcpswd.cloudfront.net/55c92acdf04322593691010c.jpeg"},{food_name:"salmon salad",serving_unit:"cup",serving_weight_grams:407.01,serving_qty:1,nf_calories:389.27,serving_size:1.5,meal_type:"lunch",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"},{food_name:"boneless skinless chicken breasts",serving_qty:1,serving_unit:"breast",serving_weight_grams:120,nf_calories:198,serving_size:2,meal_type:"dinner",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/7820_thumb.jpg"},{food_name:"slice cheese",serving_qty:1,serving_unit:"slice",serving_weight_grams:28,nf_calories:113.12,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"},{food_name:"orange",serving_qty:1,serving_unit:'fruit (2-7/8" dia)',serving_weight_grams:140,nf_calories:68.6,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"}]},{date:"",intake_list:[{food_name:"fried eggs",serving_qty:1,serving_unit:"large",serving_weight_grams:46,nf_calories:90.16,serving_size:2,meal_type:"breakfast",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/1741_thumb.jpg"},{food_name:"chicken salad",serving_qty:.5,serving_unit:"cup",serving_weight_grams:112.1,nf_calories:253.99,serving_size:1,meal_type:"lunch",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"},{nix_item_id:"598c0695306b814040ff908b",food_name:"Boneless Skinless Chicken Breasts",serving_unit:"oz",serving_qty:4,nf_calories:110,serving_size:1,meal_type:"dinner",thumb:"https://d1r9wva3zcpswd.cloudfront.net/5c04d53ff01a65ec7b2089dd.jpeg"},{food_name:"slice cheese",serving_qty:1,serving_unit:"slice",serving_weight_grams:28,nf_calories:113.12,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"},{food_name:"orange",serving_qty:1,serving_unit:'fruit (2-7/8" dia)',serving_weight_grams:140,nf_calories:68.6,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"}]}]},dateIndex:0,searchBarFocus:!1,inspectFoodFocus:!1,quickSearchData:pt,inspectFood:{}},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATA":return dt({},e,{metaData:t.payload});case"CHANGE_DATE":return dt({},e,{dateIndex:t.payload});case"SEARCHBAR_FOCUS":return dt({},e,{searchBarFocus:t.payload});case"SEARCHBAR_DEFOCUS":return dt({},e,{quickSearchData:pt,inspectFood:{}});case"SET_QUICK_SEARCH_DATA":return dt({},e,{quickSearchData:t.payload});case"SET_INSPECT_FOCUS":return dt({},e,{inspectFoodFocus:t.payload});case"SET_INSPECT_FOOD":return dt({},e,{inspectFood:t.payload});case"ADD_FOOD":return dt({},e,{searchBarFocus:!1,quickSearchData:pt,inspectFoodFocus:!1,inspectFood:{},metaData:dt({},e.metaData,{data_points:e.metaData.data_points.map(function(e,n){return 0===n&&e.intake_list.push(t.payload),e})})});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p.a,{store:Object(lt.c)(ht,Object(lt.a)(ut.a))},r.a.createElement(st,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n(110)}},[[98,1,2]]]);
//# sourceMappingURL=main.1930eaa8.chunk.js.map