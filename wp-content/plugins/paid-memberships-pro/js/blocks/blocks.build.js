(()=>{var e={988:()=>{wp.i18n.setLocaleData({"":{}},"paid-memberships-pro")}},p={};function s(r){var i=p[r];if(void 0!==i)return i.exports;var t=p[r]={exports:{}};return e[r](t,t.exports,s),t.exports}(()=>{"use strict";const e=window.wp.element;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var p=1;p<arguments.length;p++){var s=arguments[p];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},p.apply(this,arguments)}s(988);const{__}=wp.i18n,{Component:r}=wp.element,{PanelBody:i,TextControl:t,SelectControl:o}=wp.components,{InspectorControls:a}=wp.blockEditor;class m extends r{constructor(){super(...arguments)}render(){const{attributes:{text:p,level:s,css_class:r},setAttributes:m}=this.props;return(0,e.createElement)(a,null,(0,e.createElement)(i,null,(0,e.createElement)(t,{label:__("Button Text","paid-memberships-pro"),help:__("Text for checkout button","paid-memberships-pro"),value:p,onChange:e=>m({text:e})})),(0,e.createElement)(i,null,(0,e.createElement)(o,{label:__("Membership Level","paid-memberships-pro"),help:__("The level to link to for checkout button","paid-memberships-pro"),value:s,onChange:e=>m({level:e}),options:window.pmpro.all_level_values_and_labels})),(0,e.createElement)(i,null,(0,e.createElement)(t,{label:__("CSS Class","paid-memberships-pro"),help:__("Additional styling for checkout button","paid-memberships-pro"),value:r,onChange:e=>m({css_class:e})})))}}const{__:c}=wp.i18n,{registerBlockType:l}=wp.blocks,{TextControl:n,SelectControl:b}=wp.components,{__:d}=(l("pmpro/checkout-button",{title:c("Membership Checkout Button","paid-memberships-pro"),description:c("Inserts a button that links directly to membership checkout for the selected level.","paid-memberships-pro"),category:"pmpro",icon:{background:"#FFFFFF",foreground:"#658B24",src:"migrate"},keywords:[c("buy","paid-memberships-pro"),c("level","paid-memberships-pro"),c("member","paid-memberships-pro"),c("paid memberships pro","paid-memberships-pro"),c("pmpro","paid-memberships-pro"),c("purchase","paid-memberships-pro")],supports:{},attributes:{text:{type:"string",default:"Buy Now"},css_class:{type:"string",default:"pmpro_btn"},level:{type:"string"}},edit:s=>{const{attributes:{text:r,level:i,css_class:t},className:o,setAttributes:a,isSelected:l}=s;return[l&&(0,e.createElement)(m,p({setAttributes:a},s)),(0,e.createElement)("div",{className:o},(0,e.createElement)("a",{className:t},r)),l&&(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)(n,{label:c("Button Text","paid-memberships-pro"),value:r,onChange:e=>a({text:e})}),(0,e.createElement)(b,{label:c("Membership Level","paid-memberships-pro"),value:i,onChange:e=>a({level:e}),options:window.pmpro.all_level_values_and_labels}),(0,e.createElement)(n,{label:c("CSS Class","paid-memberships-pro"),value:t,onChange:e=>a({css_class:e})}))]},save:()=>null}),wp.i18n),{Component:h}=wp.element,{PanelBody:u,CheckboxControl:g}=wp.components,{InspectorControls:k}=wp.blockEditor;class v extends h{constructor(){super(...arguments)}render(){const{attributes:{membership:p,profile:s,invoices:r,links:i},setAttributes:t}=this.props;return(0,e.createElement)(k,null,(0,e.createElement)(u,null,(0,e.createElement)(g,{label:d("Show 'My Memberships' Section","paid-memberships-pro"),checked:p,onChange:e=>t({membership:e})})),(0,e.createElement)(u,null,(0,e.createElement)(g,{label:d("Show 'Profile' Section","paid-memberships-pro"),checked:s,onChange:e=>t({profile:e})})),(0,e.createElement)(u,null,(0,e.createElement)(g,{label:d("Show 'Invoices' Section","paid-memberships-pro"),checked:r,onChange:e=>t({invoices:e})})),(0,e.createElement)(u,null,(0,e.createElement)(g,{label:d("Show 'Member Links' Section","paid-memberships-pro"),checked:i,onChange:e=>t({links:e})})))}}const{__:y}=wp.i18n,{registerBlockType:w}=wp.blocks,{__:C}=(w("pmpro/account-page",{title:y("PMPro Page: Account (Full)","paid-memberships-pro"),description:y("Dynamic page section to display the selected sections of the Membership Account page including Memberships, Profile, Invoices, and Member Links. These sections can also be added via separate blocks.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"admin-users"},keywords:[y("account","paid-memberships-pro"),y("billing","paid-memberships-pro"),y("invoice","paid-memberships-pro"),y("links","paid-memberships-pro"),y("member","paid-memberships-pro"),y("order","paid-memberships-pro"),y("paid memberships pro","paid-memberships-pro"),y("pmpro","paid-memberships-pro"),y("profile","paid-memberships-pro"),y("purchases","paid-memberships-pro"),y("quick link","paid-memberships-pro"),y("receipt","paid-memberships-pro"),y("user","paid-memberships-pro")],supports:{},attributes:{membership:{type:"boolean",default:!1},profile:{type:"boolean",default:!1},invoices:{type:"boolean",default:!1},links:{type:"boolean",default:!1}},edit:s=>{const{setAttributes:r,isSelected:i}=s;return[i&&(0,e.createElement)(v,p({setAttributes:r},s)),(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},y("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},y("Membership Account Page","paid-memberships-pro")))]},save:()=>null}),wp.i18n),{registerBlockType:E}=wp.blocks,{__:f}=(E("pmpro/account-membership-section",{title:C("PMPro Page: Account Memberships","paid-memberships-pro"),description:C("Dynamic page section to display the member's active membership information with links to view all membership options, update billing information, and change or cancel membership.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"groups"},keywords:[C("active","paid-memberships-pro"),C("member","paid-memberships-pro"),C("paid memberships pro","paid-memberships-pro"),C("pmpro","paid-memberships-pro"),C("purchases","paid-memberships-pro"),C("user","paid-memberships-pro")],supports:{},attributes:{title:{type:"string",default:C("My Memberships","paid-memberships-pro")}},edit:({attributes:p,setAttributes:s})=>[(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},C("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},C("Membership Account: My Memberships","paid-memberships-pro")),(0,e.createElement)("input",{placeholder:C("No title will be shown.","paid-memberships-pro"),type:"text",value:p.title,className:"block-editor-plain-text",onChange:e=>{s({title:e.target.value})}}))],save:()=>null}),wp.i18n),{registerBlockType:F}=wp.blocks,{__:_}=(F("pmpro/account-profile-section",{title:f("PMPro Page: Account Profile View","paid-memberships-pro"),description:f("Dynamic page section that displays the member's profile as read-only information with a link to edit fields or change their password.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"admin-users"},keywords:[f("fields","paid-memberships-pro"),f("member","paid-memberships-pro"),f("paid memberships pro","paid-memberships-pro"),f("pmpro","paid-memberships-pro"),f("user","paid-memberships-pro")],supports:{},attributes:{title:{type:"string",default:f("My Account","paid-memberships-pro")}},edit:({attributes:p,setAttributes:s})=>[(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},f("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},f("Membership Account: Profile","paid-memberships-pro")),(0,e.createElement)("input",{placeholder:f("No title will be shown.","paid-memberships-pro"),type:"text",value:p.title,className:"block-editor-plain-text",onChange:e=>{s({title:e.target.value})}}))],save:()=>null}),wp.i18n),{registerBlockType:P}=wp.blocks,{__:M}=(P("pmpro/account-invoices-section",{title:_("PMPro Page: Account Invoices","paid-memberships-pro"),description:_("Dynamic page section that displays a list of the last 5 membership invoices for the active member.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"archive"},keywords:[_("account","paid-memberships-pro"),_("member","paid-memberships-pro"),_("order","paid-memberships-pro"),_("paid memberships pro","paid-memberships-pro"),_("pmpro","paid-memberships-pro"),_("purchases","paid-memberships-pro"),_("receipt","paid-memberships-pro"),_("user","paid-memberships-pro")],supports:{},attributes:{title:{type:"string",default:_("Past Invoices","paid-memberships-pro")}},edit:({attributes:p,setAttributes:s})=>[(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},_("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"}," ",_("Membership Account: Invoices","paid-memberships-pro")),(0,e.createElement)("input",{placeholder:_("No title will be shown.","paid-memberships-pro"),type:"text",value:p.title,className:"block-editor-plain-text",onChange:e=>{s({title:e.target.value})}}))],save:()=>null}),wp.i18n),{registerBlockType:N}=wp.blocks,{__:A}=(N("pmpro/account-links-section",{title:M("PMPro Page: Account Links","paid-memberships-pro"),description:M("Dynamic page section that displays custom links available for the active member only. This block is only visible if other Add Ons or custom code have added links.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"external"},keywords:[M("access","paid-memberships-pro"),M("account","paid-memberships-pro"),M("link","paid-memberships-pro"),M("member","paid-memberships-pro"),M("paid memberships pro","paid-memberships-pro"),M("pmpro","paid-memberships-pro"),M("quick link","paid-memberships-pro"),M("user","paid-memberships-pro")],supports:{},attributes:{title:{type:"string",default:M("Member Links","paid-memberships-pro")}},edit:({attributes:p,setAttributes:s})=>[(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},M("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},M("Membership Account: Member Links","paid-memberships-pro")),(0,e.createElement)("input",{placeholder:M("No title will be shown.","paid-memberships-pro"),type:"text",value:p.title,className:"block-editor-plain-text",onChange:e=>{s({title:e.target.value})}}))],save:()=>null}),wp.i18n),{registerBlockType:B}=wp.blocks,{__:x}=(B("pmpro/billing-page",{title:A("PMPro Page: Billing","paid-memberships-pro"),description:A("Dynamic page section to display the member's billing information. Members can update their subscription payment method from this form.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"list-view"},keywords:[A("credit card","paid-memberships-pro"),A("member","paid-memberships-pro"),A("paid memberships pro","paid-memberships-pro"),A("payment method","paid-memberships-pro"),A("pmpro","paid-memberships-pro")],supports:{},attributes:{},edit:()=>[(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},A("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},A("Membership Billing Page","paid-memberships-pro")))],save:()=>null}),wp.i18n),{registerBlockType:L}=wp.blocks,{__:S}=(L("pmpro/cancel-page",{title:x("PMPro Page: Cancel","paid-memberships-pro"),description:x("Dynamic page section where members can cancel their membership and active subscription if applicable.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"no"},keywords:[x("member","paid-memberships-pro"),x("paid memberships pro","paid-memberships-pro"),x("payment method","paid-memberships-pro"),x("pmpro","paid-memberships-pro"),x("terminate","paid-memberships-pro")],supports:{},attributes:{},edit:()=>[(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},x("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},x("Membership Cancel Page","paid-memberships-pro")))],save:()=>null}),wp.i18n),{Component:T}=wp.element,{PanelBody:D,PanelRow:I,SelectControl:q}=wp.components,{InspectorControls:z}=wp.blockEditor;class O extends T{constructor(){super(...arguments)}render(){const{attributes:{pmpro_default_level:p},setAttributes:s}=this.props;return(0,e.createElement)(z,null,(0,e.createElement)(D,null,(0,e.createElement)(q,{label:S("Membership Level","paid-memberships-pro"),help:S("Choose a default level for Membership Checkout.","paid-memberships-pro"),value:p,onChange:e=>s({pmpro_default_level:e}),options:[""].concat(window.pmpro.all_level_values_and_labels)})))}}const{__:R}=wp.i18n,{registerBlockType:W}=wp.blocks,{SelectControl:j}=wp.components,{__:V}=(W("pmpro/checkout-page",{title:R("Membership Checkout Form","paid-memberships-pro"),description:R("Dynamic form that allows users to complete free registration or paid checkout for the selected membership level.","paid-memberships-pro"),category:"pmpro",icon:{background:"#FFFFFF",foreground:"#658B24",src:"list-view"},keywords:[R("member","paid-memberships-pro"),R("paid memberships pro","paid-memberships-pro"),R("pmpro","paid-memberships-pro"),R("buy","paid-memberships-pro"),R("purchase","paid-memberships-pro"),R("sell","paid-memberships-pro")],supports:{},attributes:{pmpro_default_level:{type:"string",source:"meta",meta:"pmpro_default_level"}},edit:s=>{const{attributes:{pmpro_default_level:r},className:i,setAttributes:t,isSelected:o}=s;return[o&&(0,e.createElement)(O,p({setAttributes:t},s)),(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},R("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},R("Membership Checkout Form","paid-memberships-pro")),(0,e.createElement)("hr",null),(0,e.createElement)(j,{label:R("Membership Level","paid-memberships-pro"),value:r,onChange:e=>t({pmpro_default_level:e}),options:window.pmpro.all_level_values_and_labels}))]},save:()=>null}),wp.i18n),{registerBlockType:G}=wp.blocks,{__:H}=(G("pmpro/confirmation-page",{title:V("PMPro Page: Confirmation","paid-memberships-pro"),description:V("Dynamic page section that displays a confirmation message and purchase information for the active member immediately after membership registration and checkout.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"yes"},keywords:[V("member","paid-memberships-pro"),V("buy","paid-memberships-pro"),V("paid memberships pro","paid-memberships-pro"),V("pmpro","paid-memberships-pro"),V("purchase","paid-memberships-pro"),V("receipt","paid-memberships-pro"),V("success","paid-memberships-pro")],supports:{},attributes:{},edit:()=>[(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},V("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},V("Membership Confirmation Page","paid-memberships-pro")))],save:()=>null}),wp.i18n),{registerBlockType:J}=wp.blocks,{__:K}=(J("pmpro/invoice-page",{title:H("PMPro Page: Invoice","paid-memberships-pro"),description:H("Dynamic page section that displays a list of all invoices (purchase history) for the active member. Each invoice can be selected and viewed in full detail.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"archive"},keywords:[H("history","paid-memberships-pro"),H("order","paid-memberships-pro"),H("paid memberships pro","paid-memberships-pro"),H("pmpro","paid-memberships-pro"),H("purchases","paid-memberships-pro"),H("receipt","paid-memberships-pro")],supports:{},attributes:{},edit:()=>[(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},H("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},H("Membership Invoices","paid-memberships-pro")))],save:()=>null}),wp.i18n),{registerBlockType:Q}=wp.blocks,{__:U}=(Q("pmpro/levels-page",{title:K("Membership Levels and Pricing Table","paid-memberships-pro"),description:K("Dynamic page section that displays a list of membership levels and pricing, linked to membership checkout. To reorder the display, navigate to Memberships > Settings > Levels.","paid-memberships-pro"),category:"pmpro",icon:{background:"#FFFFFF",foreground:"#658B24",src:"list-view"},keywords:[K("level","paid-memberships-pro"),K("paid memberships pro","paid-memberships-pro"),K("pmpro","paid-memberships-pro"),K("price","paid-memberships-pro"),K("pricing table","paid-memberships-pro")],supports:{},attributes:{},edit:()=>[(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},K("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},K("Membership Levels List","paid-memberships-pro")))],save:()=>null}),wp.i18n),{registerBlockType:X}=wp.blocks,{PanelBody:Y,CheckboxControl:Z,SelectControl:$}=wp.components,{InspectorControls:ee,InnerBlocks:pe}=wp.blockEditor,se=[{value:0,label:U("Non-Members","paid-memberships-pro")}].concat(pmpro.all_level_values_and_labels),{__:re}=(X("pmpro/membership",{title:U("Membership Required Block","paid-memberships-pro"),description:U("Nest blocks within this wrapper to control the inner block visibility by membership level or for non-members only.","paid-memberships-pro"),category:"pmpro",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"visibility"},keywords:[U("block visibility","paid-memberships-pro"),U("conditional","paid-memberships-pro"),U("content","paid-memberships-pro"),U("hide","paid-memberships-pro"),U("hidden","paid-memberships-pro"),U("paid memberships pro","paid-memberships-pro"),U("pmpro","paid-memberships-pro"),U("private","paid-memberships-pro"),U("restrict","paid-memberships-pro")],attributes:{levels:{type:"array",default:[]},uid:{type:"string",default:""},show_noaccess:{type:"string",default:"0"}},edit:p=>{const{attributes:{levels:s,uid:r,show_noaccess:i},setAttributes:t,isSelected:o}=p;if(""==r){var a=Math.random()+"";t({uid:a})}var m=se.map((function(p){return[(0,e.createElement)(Z,{label:p.label,checked:s.some((e=>e==p.value)),onChange:function(e){if(e&&!s.some((e=>e==p.value))){const e=s.slice();e.push(p.value+""),t({levels:e})}else if(!e&&s.some((e=>e==p.value))){const e=s.filter((e=>e!=p.value));t({levels:e})}}})]}));return[o&&(0,e.createElement)(ee,null,(0,e.createElement)(Y,null,(0,e.createElement)("p",null,(0,e.createElement)("strong",null,U("Which membership levels can view this block?","paid-memberships-pro"))),(0,e.createElement)("div",{className:"pmpro-block-inspector-scrollable"},m),(0,e.createElement)("hr",null),(0,e.createElement)("p",null,(0,e.createElement)("strong",null,U("What should users without access see?","paid-memberships-pro"))),(0,e.createElement)($,{value:i,help:U("Modify the 'no access' message on the Memberships > Advanced Settings page.","paid-memberships-pro"),options:[{label:U("Show nothing","paid-memberships-pro"),value:"0"},{label:U("Show the 'no access' message","paid-memberships-pro"),value:"1"}],onChange:e=>t({show_noaccess:e})}))),o&&(0,e.createElement)("div",{className:"pmpro-block-require-membership-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},U("Membership Required","paid-memberships-pro")),(0,e.createElement)("div",{className:"pmpro-block-inspector-scrollable"},(0,e.createElement)(Y,null,m)),(0,e.createElement)(pe,{templateLock:!1})),!o&&(0,e.createElement)("div",{className:"pmpro-block-require-membership-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},U("Membership Required","paid-memberships-pro")),(0,e.createElement)(pe,{templateLock:!1}))]},save:p=>{const{className:s}=p;return(0,e.createElement)("div",{className:s},(0,e.createElement)(pe.Content,null))}}),wp.i18n),{registerBlockType:ie}=wp.blocks,{__:te}=(ie("pmpro/member-profile-edit",{title:re("PMPro Page: Account Profile Edit","paid-memberships-pro"),description:re("Dynamic form that allows the current logged in member to edit their default user profile information and any custom user profile fields.","paid-memberships-pro"),category:"pmpro-pages",icon:{background:"#FFFFFF",foreground:"#1A688B",src:"admin-users"},keywords:[re("custom field","paid-memberships-pro"),re("fields","paid-memberships-pro"),re("paid memberships pro","paid-memberships-pro"),re("pmpro","paid-memberships-pro"),re("user fields","paid-memberships-pro")],edit:p=>(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},re("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},re("Member Profile Edit","paid-memberships-pro"))),save:()=>null}),wp.i18n),{Component:oe}=wp.element,{PanelBody:ae,SelectControl:me,ToggleControl:ce}=wp.components,{InspectorControls:le}=wp.blockEditor;class ne extends oe{constructor(){super(...arguments)}render(){const{attributes:p,setAttributes:s}=this.props,{display_if_logged_in:r,show_menu:i,show_logout_link:t,location:o}=p;return(0,e.createElement)(le,null,(0,e.createElement)(ae,null,(0,e.createElement)(ce,{label:te("Display 'Welcome' content when logged in.","paid-memberships-pro"),checked:r,onChange:e=>{this.props.setAttributes({display_if_logged_in:e})}}),(0,e.createElement)(ce,{label:te("Display the 'Log In Widget' menu.","paid-memberships-pro"),help:te("Assign the menu under Appearance > Menus.","paid-memberships-pro"),checked:i,onChange:e=>{this.props.setAttributes({show_menu:e})}}),(0,e.createElement)(ce,{label:te("Display a 'Log Out' link.","paid-memberships-pro"),checked:t,onChange:e=>{this.props.setAttributes({show_logout_link:e})}})))}}const{__:be}=wp.i18n,{registerBlockType:de}=wp.blocks,{Fragment:he}=wp.element;de("pmpro/login-form",{title:be("Login Form","paid-memberships-pro"),description:be("Dynamic form that allows users to log in or recover a lost password. Logged in users can see a welcome message with the selected custom menu.","paid-memberships-pro"),category:"pmpro",icon:{background:"#FFFFFF",foreground:"#658B24",src:"unlock"},keywords:[be("log in","paid-memberships-pro"),be("lost password","paid-memberships-pro"),be("paid memberships pro","paid-memberships-pro"),be("password reset","paid-memberships-pro"),be("pmpro","paid-memberships-pro")],supports:{},edit:p=>[(0,e.createElement)(he,null,(0,e.createElement)(ne,p),(0,e.createElement)("div",{className:"pmpro-block-element"},(0,e.createElement)("span",{className:"pmpro-block-title"},be("Paid Memberships Pro","paid-memberships-pro")),(0,e.createElement)("span",{className:"pmpro-block-subtitle"},be("Log in Form","paid-memberships-pro"))))],save:()=>null}),function(){const p=(0,e.createElement)("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 18 18"},(0,e.createElement)("path",{d:"M17.99,4.53c-0.35,0.12-0.7,0.26-1.06,0.4c-0.35,0.14-0.7,0.3-1.05,0.46c-0.35,0.16-0.69,0.33-1.03,0.51 c-0.34,0.18-0.68,0.37-1.02,0.56c-0.15,0.09-0.31,0.18-0.46,0.27c-0.15,0.09-0.3,0.19-0.45,0.28c-0.15,0.1-0.3,0.19-0.45,0.29 c-0.15,0.1-0.3,0.2-0.44,0.3c-0.08,0.05-0.16,0.11-0.23,0.16c-0.08,0.05-0.16,0.11-0.23,0.17c-0.08,0.06-0.15,0.11-0.23,0.17 c-0.08,0.06-0.15,0.11-0.23,0.17c-0.07,0.05-0.13,0.1-0.2,0.15c-0.07,0.05-0.13,0.1-0.2,0.15c-0.07,0.05-0.13,0.1-0.2,0.15 c-0.07,0.05-0.13,0.1-0.2,0.16c-0.04,0.03-0.09,0.07-0.13,0.1c-0.04,0.03-0.09,0.07-0.13,0.1C10,9.13,9.95,9.17,9.91,9.2 C9.87,9.24,9.83,9.27,9.79,9.31C9.77,9.32,9.75,9.33,9.74,9.35C9.72,9.36,9.71,9.37,9.69,9.39C9.67,9.4,9.66,9.42,9.64,9.43 C9.63,9.44,9.61,9.46,9.59,9.47C9.54,9.52,9.49,9.56,9.43,9.61C9.38,9.65,9.33,9.7,9.27,9.74C9.22,9.79,9.17,9.84,9.11,9.88 c-0.05,0.05-0.11,0.09-0.16,0.14c-0.27,0.24-0.54,0.49-0.81,0.75c-0.26,0.25-0.53,0.51-0.78,0.78c-0.26,0.26-0.51,0.53-0.76,0.81 c-0.25,0.27-0.49,0.55-0.73,0.84c-0.03,0.04-0.07,0.08-0.1,0.12c-0.03,0.04-0.07,0.08-0.1,0.12c-0.03,0.04-0.07,0.08-0.1,0.12 c-0.03,0.04-0.07,0.08-0.1,0.12c-0.03,0.04-0.07,0.08-0.1,0.12c-0.03,0.04-0.06,0.08-0.1,0.12c-0.03,0.04-0.06,0.08-0.1,0.12 c-0.03,0.04-0.06,0.08-0.1,0.12c0,0.01-0.01,0.01-0.01,0.02c0,0.01-0.01,0.01-0.01,0.02c0,0.01-0.01,0.01-0.01,0.02 c0,0.01-0.01,0.01-0.01,0.02c-0.03,0.03-0.05,0.07-0.08,0.1c-0.03,0.03-0.05,0.07-0.08,0.1c-0.03,0.03-0.05,0.07-0.08,0.11 c-0.03,0.03-0.05,0.07-0.08,0.11c-0.03,0.04-0.06,0.08-0.09,0.12c-0.03,0.04-0.06,0.08-0.09,0.12C4.5,14.96,4.47,15,4.44,15.05 c-0.03,0.04-0.06,0.08-0.09,0.13c0,0-0.01,0.01-0.01,0.01c0,0-0.01,0.01-0.01,0.01c0,0-0.01,0.01-0.01,0.01c0,0-0.01,0.01-0.01,0.01 c-0.15,0.22-0.31,0.44-0.46,0.67c-0.15,0.22-0.3,0.45-0.44,0.68c-0.14,0.23-0.29,0.46-0.43,0.7C2.85,17.52,2.71,17.76,2.58,18 c-0.08-0.19-0.16-0.38-0.23-0.56c-0.07-0.18-0.14-0.35-0.21-0.51c-0.07-0.16-0.13-0.32-0.19-0.47c-0.06-0.15-0.12-0.3-0.18-0.45 l-0.01,0.01l0.01-0.03c-0.01-0.03-0.02-0.05-0.03-0.08c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07 c-0.01-0.02-0.02-0.05-0.03-0.07c0-0.01-0.01-0.02-0.01-0.02c0-0.01-0.01-0.02-0.01-0.02c0-0.01-0.01-0.02-0.01-0.02 c0-0.01-0.01-0.02-0.01-0.02c-0.01-0.02-0.01-0.04-0.02-0.05c-0.01-0.02-0.01-0.04-0.02-0.05c-0.01-0.02-0.01-0.04-0.02-0.05 c-0.01-0.02-0.01-0.04-0.02-0.05c-0.01-0.03-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07 c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07c-0.01-0.02-0.02-0.05-0.03-0.07 c-0.01-0.02-0.02-0.05-0.03-0.07c-0.02-0.05-0.04-0.1-0.06-0.16c-0.02-0.05-0.04-0.1-0.06-0.16c-0.02-0.05-0.04-0.11-0.06-0.16 c-0.02-0.05-0.04-0.11-0.06-0.16c-0.08-0.23-0.16-0.47-0.25-0.72c-0.08-0.25-0.17-0.5-0.26-0.77c-0.09-0.27-0.18-0.55-0.27-0.84 c-0.09-0.29-0.19-0.6-0.29-0.93c0.05,0.07,0.1,0.15,0.15,0.22c0.05,0.07,0.1,0.14,0.14,0.2c0.05,0.07,0.09,0.13,0.14,0.19 c0.04,0.06,0.09,0.12,0.13,0.18c0.09,0.13,0.18,0.24,0.27,0.35c0.09,0.11,0.17,0.21,0.24,0.3c0.08,0.09,0.15,0.18,0.23,0.27 c0.07,0.09,0.15,0.17,0.22,0.25c0.02,0.02,0.03,0.04,0.05,0.06c0.02,0.02,0.03,0.04,0.05,0.06c0.02,0.02,0.03,0.04,0.05,0.06 c0.02,0.02,0.03,0.04,0.05,0.06c0.07,0.07,0.13,0.14,0.2,0.22c0.07,0.08,0.14,0.16,0.22,0.24c0.08,0.08,0.16,0.17,0.24,0.27 c0.09,0.1,0.18,0.2,0.27,0.31c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.02,0.02,0.03,0.03c0.01,0.01,0.02,0.02,0.03,0.04 c0.01,0.01,0.02,0.02,0.03,0.04c0.02-0.02,0.04-0.05,0.06-0.07c0.02-0.02,0.04-0.05,0.06-0.07c0.02-0.02,0.04-0.05,0.06-0.07 C2.96,14.03,2.98,14,3,13.98c0.03-0.03,0.05-0.06,0.08-0.09c0.03-0.03,0.05-0.06,0.08-0.09c0.03-0.03,0.05-0.06,0.08-0.09 c0.03-0.03,0.05-0.06,0.08-0.09c0.28-0.33,0.58-0.65,0.88-0.97c0.31-0.32,0.63-0.62,0.95-0.92c0.33-0.3,0.67-0.6,1.02-0.88 c0.35-0.29,0.72-0.57,1.09-0.84c0.06-0.04,0.11-0.08,0.17-0.12C7.49,9.83,7.55,9.79,7.6,9.75c0.06-0.04,0.11-0.08,0.17-0.12 c0.06-0.04,0.12-0.08,0.17-0.12C7.97,9.5,7.98,9.49,8,9.48c0.02-0.01,0.03-0.02,0.05-0.03C8.06,9.43,8.08,9.42,8.1,9.41 C8.11,9.4,8.13,9.38,8.14,9.37c0.05-0.03,0.1-0.06,0.14-0.1c0.05-0.03,0.1-0.06,0.14-0.1c0.05-0.03,0.1-0.06,0.14-0.1 c0.05-0.03,0.1-0.06,0.15-0.09C8.79,8.94,8.87,8.9,8.94,8.85C9.01,8.8,9.09,8.76,9.16,8.71c0.07-0.05,0.15-0.09,0.22-0.14 c0.07-0.05,0.15-0.09,0.22-0.14c0.09-0.05,0.17-0.11,0.26-0.16c0.09-0.05,0.17-0.1,0.26-0.16c0.09-0.05,0.18-0.1,0.27-0.15 c0.09-0.05,0.18-0.1,0.27-0.15c0.25-0.14,0.51-0.28,0.76-0.42c0.26-0.14,0.52-0.27,0.78-0.41c0.26-0.13,0.53-0.27,0.79-0.4 c0.27-0.13,0.54-0.26,0.81-0.38c0.01,0,0.02-0.01,0.03-0.01c0.01,0,0.02-0.01,0.03-0.01c0.01,0,0.02-0.01,0.03-0.01 c0.01,0,0.02-0.01,0.03-0.01c0.33-0.15,0.67-0.3,1-0.44c0.34-0.15,0.68-0.29,1.02-0.42c0.34-0.14,0.69-0.27,1.03-0.4 C17.31,4.77,17.65,4.64,17.99,4.53z M15.73,9.59l0.65,4.56l-10.4-0.05c-0.02,0.02-0.04,0.04-0.05,0.07 c-0.02,0.02-0.04,0.04-0.05,0.07c-0.02,0.02-0.04,0.04-0.05,0.07c-0.02,0.02-0.04,0.04-0.05,0.07c-0.02,0.02-0.03,0.04-0.05,0.06 c-0.02,0.02-0.03,0.04-0.05,0.06c-0.02,0.02-0.03,0.04-0.05,0.06c-0.02,0.02-0.03,0.04-0.05,0.06l11.23,0.2l-0.78-5.24L15.73,9.59z M6.75,13.2c-0.04,0.04-0.08,0.09-0.11,0.13c-0.04,0.04-0.08,0.09-0.11,0.13c-0.04,0.04-0.07,0.09-0.11,0.13l9.22-0.07L15.04,9.1 l-0.07-0.53l-0.39,0.04l0.55,4.3l-8.27,0.17C6.83,13.12,6.79,13.16,6.75,13.2z M13.78,7.66l-0.59,0.08 c-0.06,0.04-0.12,0.08-0.18,0.12c-0.06,0.04-0.12,0.08-0.18,0.12c-0.06,0.04-0.12,0.08-0.18,0.12c-0.06,0.04-0.12,0.08-0.18,0.12 c-0.08,0.05-0.16,0.11-0.24,0.16c-0.08,0.06-0.16,0.11-0.24,0.17c-0.08,0.06-0.16,0.11-0.24,0.17c-0.08,0.06-0.16,0.11-0.24,0.17 c-0.07,0.05-0.14,0.1-0.21,0.15c-0.07,0.05-0.14,0.1-0.21,0.15c-0.07,0.05-0.14,0.1-0.2,0.16c-0.07,0.05-0.14,0.11-0.2,0.16 c-0.04,0.03-0.09,0.07-0.13,0.1c-0.04,0.03-0.09,0.07-0.13,0.1c-0.04,0.04-0.09,0.07-0.13,0.11c-0.04,0.04-0.09,0.07-0.13,0.11 c-0.02,0.01-0.03,0.03-0.05,0.04c-0.02,0.01-0.03,0.03-0.05,0.04c-0.02,0.01-0.03,0.03-0.05,0.04c-0.02,0.01-0.03,0.03-0.05,0.04 c-0.06,0.05-0.11,0.09-0.16,0.14c-0.05,0.05-0.11,0.09-0.16,0.14c-0.05,0.05-0.11,0.09-0.16,0.14c-0.05,0.05-0.11,0.09-0.16,0.14 c-0.17,0.15-0.34,0.3-0.51,0.46c-0.17,0.16-0.33,0.31-0.5,0.47c-0.16,0.16-0.33,0.32-0.49,0.48c-0.16,0.16-0.32,0.33-0.48,0.49 l6.98-0.23l-0.48-4.16L13.78,7.66z M13.32,5.73c-0.06,0.03-0.11,0.05-0.17,0.08c-0.06,0.03-0.12,0.06-0.17,0.09 c-0.03,0.01-0.06,0.03-0.08,0.04c0,0,0,0,0,0c-0.02-0.01-0.04-0.03-0.06-0.04c-0.06-0.04-0.13-0.07-0.21-0.09 c-0.07-0.02-0.15-0.04-0.23-0.04c-0.08,0-0.16,0-0.24,0.01l-0.14,0.02c0.07-0.04,0.13-0.08,0.18-0.14c0.05-0.05,0.1-0.11,0.14-0.18 c0.04-0.06,0.06-0.13,0.08-0.2c0.02-0.07,0.02-0.15,0.01-0.22c-0.01-0.1-0.04-0.18-0.08-0.26c-0.05-0.08-0.11-0.14-0.18-0.19 c-0.07-0.05-0.16-0.08-0.25-0.1c-0.09-0.02-0.19-0.02-0.29,0c-0.1,0.02-0.19,0.06-0.27,0.11c-0.08,0.05-0.15,0.11-0.21,0.19 C11.08,4.9,11.03,4.98,11,5.07c-0.03,0.09-0.04,0.18-0.03,0.27c0.01,0.07,0.02,0.14,0.05,0.2c0.03,0.06,0.06,0.12,0.11,0.17 c0.05,0.05,0.1,0.09,0.16,0.12c0.06,0.03,0.13,0.06,0.2,0.07l-0.17,0.03C11.18,5.96,11.06,6,10.94,6.07 c-0.11,0.07-0.21,0.15-0.29,0.25c-0.08,0.1-0.14,0.21-0.19,0.33c-0.04,0.12-0.06,0.25-0.05,0.38l0.02,0.33 c-0.09,0.05-0.17,0.1-0.26,0.16c-0.02,0-0.05,0-0.07,0c0.02-0.01,0.04-0.02,0.06-0.03c-0.06-0.06-0.13-0.11-0.21-0.16 c-0.07-0.04-0.15-0.08-0.24-0.1C9.63,7.2,9.54,7.18,9.45,7.18c-0.09-0.01-0.18,0-0.27,0.01L9.01,7.21c0.08-0.05,0.16-0.1,0.23-0.17 C9.3,6.97,9.36,6.9,9.41,6.81C9.46,6.73,9.5,6.64,9.52,6.55c0.02-0.09,0.03-0.19,0.03-0.29C9.54,6.13,9.51,6.02,9.46,5.92 c-0.05-0.1-0.12-0.18-0.21-0.25C9.17,5.6,9.07,5.56,8.96,5.53c-0.11-0.02-0.22-0.03-0.34,0C8.5,5.55,8.39,5.6,8.29,5.66 C8.19,5.72,8.1,5.81,8.02,5.9C7.95,5.99,7.89,6.1,7.85,6.21C7.81,6.32,7.79,6.44,7.79,6.56c0,0.09,0.02,0.18,0.05,0.26 c0.03,0.08,0.07,0.16,0.12,0.22c0.05,0.07,0.11,0.12,0.18,0.17c0.07,0.04,0.15,0.08,0.23,0.1l-0.2,0.03 C8.01,7.37,7.85,7.42,7.72,7.51C7.58,7.59,7.46,7.7,7.35,7.82C7.25,7.95,7.17,8.1,7.11,8.25c-0.06,0.16-0.09,0.33-0.08,0.5 l0.01,0.74C6.98,9.53,6.93,9.58,6.88,9.62C6.81,9.49,6.74,9.38,6.65,9.28c-0.1-0.11-0.21-0.2-0.33-0.27 C6.2,8.94,6.07,8.89,5.93,8.87C5.8,8.84,5.66,8.83,5.51,8.85L5.3,8.88c0.1-0.06,0.2-0.13,0.29-0.22c0.09-0.09,0.16-0.19,0.23-0.3 c0.06-0.11,0.12-0.23,0.15-0.35C6,7.88,6.02,7.75,6.02,7.62c0-0.17-0.03-0.32-0.08-0.46C5.88,7.03,5.8,6.91,5.71,6.82 C5.61,6.73,5.5,6.67,5.37,6.63c-0.12-0.04-0.26-0.04-0.4-0.02c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0 c-0.14,0.03-0.28,0.08-0.4,0.16c-0.12,0.08-0.23,0.18-0.33,0.3C4.14,7.2,4.07,7.33,4.01,7.48c-0.06,0.15-0.09,0.3-0.1,0.46 c0,0.12,0.01,0.24,0.03,0.35c0.03,0.11,0.07,0.21,0.12,0.3c0.05,0.09,0.12,0.17,0.2,0.23c0.08,0.06,0.17,0.11,0.27,0.14L4.3,9 C4.1,9.03,3.92,9.09,3.75,9.2C3.58,9.3,3.43,9.44,3.3,9.6c-0.13,0.16-0.24,0.35-0.32,0.56c-0.08,0.21-0.13,0.43-0.14,0.67 l-0.12,2.26l-0.53-0.6l0.49-6.3C2.68,6.09,2.71,6,2.74,5.91c0.04-0.09,0.08-0.17,0.14-0.24c0.06-0.07,0.12-0.14,0.2-0.19 C3.15,5.44,3.23,5.4,3.32,5.38l0.71-0.17l0-0.02l0.18-0.04l0.06-1.19C4.3,3.56,4.39,3.15,4.55,2.77c0.16-0.38,0.37-0.75,0.64-1.08 C5.45,1.35,5.76,1.05,6.11,0.8c0.35-0.26,0.74-0.47,1.16-0.61C7.7,0.05,8.12-0.01,8.51,0c0.4,0.02,0.77,0.12,1.1,0.29 c0.33,0.18,0.62,0.43,0.83,0.75c0.21,0.33,0.35,0.73,0.38,1.19l0.1,1.36l0.3-0.07l0,0.02l0.89-0.21c0.13-0.03,0.25-0.03,0.36-0.02 c0.12,0.02,0.22,0.05,0.32,0.11c0.09,0.05,0.17,0.13,0.23,0.21c0.06,0.09,0.1,0.19,0.11,0.31L13.32,5.73z M9.46,3.96L9.4,2.61 C9.39,2.33,9.31,2.09,9.19,1.88C9.07,1.68,8.91,1.51,8.71,1.4C8.52,1.28,8.29,1.21,8.05,1.19C7.81,1.17,7.55,1.2,7.28,1.28 C7.01,1.37,6.76,1.49,6.53,1.65c-0.22,0.16-0.43,0.35-0.6,0.57C5.77,2.43,5.63,2.67,5.53,2.91c-0.1,0.25-0.16,0.5-0.17,0.76 L5.33,4.91L9.46,3.96z"}));wp.blocks.updateCategory("pmpro",{icon:p}),wp.blocks.updateCategory("pmpro-pages",{icon:p})}()})()})();