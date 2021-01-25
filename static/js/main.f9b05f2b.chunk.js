(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{2:function(e,t,a){e.exports={about:"About_about__100my",photo:"About_photo__37kcB",descBox:"About_descBox__1xq31",desc1:"About_desc1__P4EhM",desc2:"About_desc2__2JRLU",btnbox:"About_btnbox__2MjOa",cvBtn:"About_cvBtn__VWFFn",contactBtn:"About_contactBtn__1LPJE",testiBox:"About_testiBox__NgZsv",testiContainer:"About_testiContainer__2D375",testiCard:"About_testiCard__101O6",chatBubble:"About_chatBubble__2WLnF",textBox:"About_textBox__2CD0W",text:"About_text__3Vi2t",name:"About_name__2f68-",company:"About_company__1mvXm",invis:"About_invis__CqamN"}},23:function(e,t,a){e.exports={portfolio:"Portfolio_portfolio__2NDji",portfolioContainer:"Portfolio_portfolioContainer__21eO0",portfolioCard:"Portfolio_portfolioCard__ldgWI"}},3:function(e,t,a){e.exports={contact:"Contact_contact__2WI8u",contactText:"Contact_contactText__n4Lz-",touch:"Contact_touch__8KZ_Z",touchBox:"Contact_touchBox__IMqcU",detailsBox:"Contact_detailsBox__2Eo4e",title:"Contact_title__F2Y6N",content:"Contact_content__Rax-A",social:"Contact_social__2Cbz6",submitModal:"Contact_submitModal__3qjhO",submitClose:"Contact_submitClose__1BxWm"}},34:function(e,t,a){e.exports=a(65)},39:function(e,t,a){},4:function(e,t,a){e.exports={resume:"Resume_resume__2PUwK",resbox:"Resume_resbox__1f5XN",edu:"Resume_edu__3NgQx",exp:"Resume_exp__29Iuf",date:"Resume_date__2XYNW",title:"Resume_title__31Ake",des:"Resume_des__1hRBZ",entity:"Resume_entity__Zp-zk"}},40:function(e,t,a){},50:function(e,t,a){},6:function(e,t,a){e.exports={main:"Main_main__3ZT2p",titlebox:"Main_titlebox__wRzv5",p1:"Main_p1__2wbO8",p2:"Main_p2__1h0RL",p3:"Main_p3__2KNkR"}},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),o=a.n(l),s=(a(39),a(40),a(33)),i=a(14),r=a(5),m=(a(50),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1);Object(s.a)(o);return window.addEventListener("scroll",(function(){window.scrollY>=50?l(!0):l(!1)})),c.a.createElement("nav",{className:a?"nav active":"nav"},c.a.createElement("div",{className:"link home",onClick:function(){return r.animateScroll.scrollToTop()}},"HOME"),c.a.createElement(r.Link,{className:"link resume",to:"resume",smooth:!0,duration:1e3,offset:-80},"RESUME"),c.a.createElement(r.Link,{className:"link about",to:"about",smooth:!0,duration:1e3,offset:-80},"ABOUT"),c.a.createElement(r.Link,{className:"link contact",to:"contact",smooth:!0,duration:1e3,offset:-80},"CONTACT"))}),u=a(6),d=a.n(u),_=function(){return c.a.createElement("section",{id:"main",className:d.a.main},c.a.createElement("div",{className:d.a.titlebox},c.a.createElement("div",{className:d.a.p1},"Hello, I'm"),c.a.createElement("div",{className:d.a.p2},"Lucas Li"),c.a.createElement("div",{className:d.a.p3},"AND THIS IS MY RESUME")))},E=(a(23),a(4)),p=a.n(E),b=function(){function e(e){return c.a.createElement("div",{className:p.a.resbox},c.a.createElement("p",{className:p.a.date},e.date),c.a.createElement("p",{className:p.a.title},e.title),c.a.createElement("p",{className:p.a.des},e.des,c.a.createElement("br",null),e.gpa),c.a.createElement("p",{className:p.a.entity},e.entity))}return c.a.createElement("section",{id:"resume",className:p.a.resume},c.a.createElement("div",{className:"sectionHeader"},"Resume"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:p.a.edu},c.a.createElement("div",{className:"secondaryTitle"},"Education"),c.a.createElement(e,{date:"March 2019 - Present",title:"Bachelor of Science",des:"Majoring in Computer Science and Logic & Computation.",gpa:"7/9",entity:"University of Auckland"}),c.a.createElement(e,{date:"February 2018 - October 2018",title:"Bachelor of Engineering with Honours",des:"Majored in Software Engineering. Discontinued and moved to Auckland after first year.",entity:"Victoria University of Wellington"})),c.a.createElement("div",{className:p.a.exp},c.a.createElement("div",{className:"secondaryTitle"},"Experience"),c.a.createElement(e,{date:"May 2019 - Present",title:"Property Management Assistant",des:"Part-time Airbnb host for a New Zealand based property management company specializing in short term rentals.",entity:"Toodle Airbnb Management"}),c.a.createElement(e,{date:"December 2019 - January 2020",title:"Software Testing Intern",des:"Took part in the development of a map labelling software. Key responsibilities: Integration, user interface testing.",entity:"Jiangsu Digitaland Technology Co., Ltd."}))))},f=a(2),N=a.n(f),v=function(){function e(e){return c.a.createElement("div",{className:N.a.testiCard},c.a.createElement("div",{className:e.picture}),c.a.createElement("div",{className:N.a.chatBubble},c.a.createElement("div",{className:N.a.textBox},c.a.createElement("p",{className:N.a.text},e.text),c.a.createElement("p",{className:N.a.name},e.name,c.a.createElement("span",{className:N.a.company},e.company)))))}return c.a.createElement("section",{id:"about",className:N.a.about},c.a.createElement("div",{className:"sectionHeader"},"ABOUT  ME"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:N.a.photo}),c.a.createElement("div",{className:N.a.descBox},c.a.createElement("p",{className:N.a.desc1},"Intellectually curious, tech & science passionate. ",c.a.createElement("br",null),"Enjoy solve problem solving, and a self-learner."),c.a.createElement("p",{className:N.a.desc2},c.a.createElement("span",null,"What I like to do in my spare time:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Learning more about technology, science, and philosophy\ud83e\udd13"),c.a.createElement("li",null,"Reading\ud83d\udcd6 and watching a lot of critically acclaimed films\ud83c\udfac"),c.a.createElement("li",null,"Listening to a wide range of music: classical\ud83c\udfbb, rock\ud83c\udfb8, techno\ud83c\udfa7"),c.a.createElement("li",null,"Watching fashion shows\ud83e\udde5 and looking for new clothes to buy\ud83d\udc5e"),c.a.createElement("li",null,"Working out at the gym\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f"))),c.a.createElement("div",{className:N.a.btnbox},c.a.createElement(r.Link,{className:N.a.contactBtn,to:"contact",smooth:!0,duration:1e3,offset:-80},"HIRE ME"),c.a.createElement("a",{style:{display:"table-cell"},href:"https://drive.google.com/file/d/1VZJbqgTXnxGQIm9SRAp4qzjoJWe9_nTb/view?usp=sharing",target:"_blank",className:N.a.cvBtn},"DOWNLOAD CV")))),c.a.createElement("div",{className:N.a.testiBox},c.a.createElement("div",{className:"sectionHeader"},"Testimonials"),c.a.createElement("div",{className:N.a.testiContainer},c.a.createElement(e,{picture:"profileCircle juli",text:"His assertive attitude is always very helpful in a range of different situations. Anyone who has him in his team can consider very lucky as you can always count on him.",name:" Juliana Dur\xe1n, Supervisor ",company:"@ Toodle Ltd."}),c.a.createElement("div",{className:N.a.invis},c.a.createElement(e,{picture:"profileCircle"})))))},h=a(31),x=a.n(h),y=a(32),g=a.n(y),C=a(16),A=a(17),B=a(3),M=a.n(B);function k(e){e.preventDefault(),x.a.sendForm("gmail","temp",e.target,"user_1zZ8PaBX2WHppm5mri95i").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}var w=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return c.a.createElement("section",{id:"contact",className:M.a.contact},c.a.createElement("div",{className:"sectionHeader"}," Get  In  Touch"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:M.a.touch},c.a.createElement("div",{className:"secondaryTitle"},"Email Me"),c.a.createElement("form",{onSubmit:k},c.a.createElement("div",{className:M.a.touchBox},c.a.createElement("input",{type:"text",placeholder:"Your Name",name:"name"}),c.a.createElement("input",{type:"email",placeholder:"Your Email",name:"email"}),c.a.createElement("input",{type:"text",placeholder:"Subject",name:"subject"}),c.a.createElement("textarea",{rows:5,placeholder:"Write a Message",name:"message"}),c.a.createElement("input",{type:"submit",value:"SEND MESSAGE",onClick:function(){return l(!0)}}),c.a.createElement(g.a,{className:M.a.submitModal,isOpen:a,onRequestClose:function(){return l(!1)}},c.a.createElement("p",null,"Message sent successfully"),c.a.createElement("button",{className:M.a.submitClose,onClick:function(){return l(!1)}},"Close"))))),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"secondaryTitle"},"My Contact Details"),c.a.createElement("div",{className:M.a.detailsBox},c.a.createElement("p",{className:M.a.title},"EMAIL"),c.a.createElement("p",{className:M.a.content},"sli.lucas233@gmail.com"),c.a.createElement("p",{className:M.a.title},"PHONE"),c.a.createElement("p",{className:M.a.content},"+64 022 1977 164"),c.a.createElement("p",{className:M.a.title},"ADDRESS"),c.a.createElement("p",{className:M.a.content},"8B/33 Mount Street ",c.a.createElement("br",null),"Auckland CBD ",c.a.createElement("br",null),"Auckland 1010"),c.a.createElement("div",{className:M.a.social},c.a.createElement("a",{href:"https://www.linkedin.com/in/lucasli233/"},c.a.createElement(C.a,{icon:A.c})),c.a.createElement("a",{href:"https://github.com/lucasli233/"},c.a.createElement(C.a,{icon:A.b})),c.a.createElement("a",{href:"https://www.facebook.com/LucasShengqiLi/"},c.a.createElement(C.a,{icon:A.a})))))))};var S=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(_,null),c.a.createElement(b,null),c.a.createElement(v,null),c.a.createElement(w,null))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f9b05f2b.chunk.js.map