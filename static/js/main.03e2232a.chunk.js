(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{2:function(e,t,a){e.exports={about:"About_about__100my",fit1:"About_fit1__M7tdo",descBox:"About_descBox__1xq31",desc1:"About_desc1__P4EhM",desc2:"About_desc2__2JRLU",btnbox:"About_btnbox__2MjOa",cvBtn:"About_cvBtn__VWFFn",contactBtn:"About_contactBtn__1LPJE",testiBox:"About_testiBox__NgZsv",testiContainer:"About_testiContainer__2D375",testiCard:"About_testiCard__101O6",profileCircle:"About_profileCircle__3mCpU",chatBubble:"About_chatBubble__2WLnF",textBox:"About_textBox__2CD0W",text:"About_text__3Vi2t",name:"About_name__2f68-",company:"About_company__1mvXm",empty:"About_empty__Y7HJY"}},28:function(e,t,a){e.exports=a.p+"static/media/calc.a3fc8176.png"},29:function(e,t,a){e.exports=a.p+"static/media/todolist.60d15030.jpg"},3:function(e,t,a){e.exports={contact:"Contact_contact__2WI8u",contactText:"Contact_contactText__n4Lz-",touchBox:"Contact_touchBox__IMqcU",detailsBox:"Contact_detailsBox__2Eo4e",title:"Contact_title__F2Y6N",titleEmail:"Contact_titleEmail__2BJ3y",content:"Contact_content__Rax-A",social:"Contact_social__2Cbz6",submitModal:"Contact_submitModal__3qjhO",submitClose:"Contact_submitClose__1BxWm",copyRight:"Contact_copyRight__Eh314"}},30:function(e,t,a){e.exports=a.p+"static/media/watchlist.620e93c6.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/fit1.5c09e976.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/juliana.4735efe2.jpg"},35:function(e,t,a){e.exports=a(65)},4:function(e,t,a){e.exports={resume:"Resume_resume__2PUwK",resbox:"Resume_resbox__1f5XN",edu:"Resume_edu__3NgQx",exp:"Resume_exp__29Iuf",date:"Resume_date__2XYNW",title:"Resume_title__31Ake",des:"Resume_des__1hRBZ",entity:"Resume_entity__Zp-zk"}},40:function(e,t,a){},41:function(e,t,a){},6:function(e,t,a){e.exports={portfolio:"Portfolio_portfolio__2NDji",portfolioContainer:"Portfolio_portfolioContainer__21eO0",portfolioPic:"Portfolio_portfolioPic__8j68P",portfolioCard:"Portfolio_portfolioCard__ldgWI",title:"Portfolio_title__16_nn",desc:"Portfolio_desc__266QX"}},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),o=a.n(c),i=(a(40),a(41),a(15)),s=a(5),r=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=50?c(!0):c(!1)})),l.a.createElement("nav",{className:a?"nav active":"nav"},l.a.createElement("div",{className:"link",onClick:function(){return s.animateScroll.scrollToTop()}},"HOME"),l.a.createElement(s.Link,{className:"link",to:"portfolio",smooth:!0,duration:1e3,offset:-80},"PORTFOLIO"),l.a.createElement(s.Link,{className:"link",to:"resume",smooth:!0,duration:1e3,offset:-80},"RESUME"),l.a.createElement(s.Link,{className:"link",to:"about",smooth:!0,duration:1e3,offset:-80},"ABOUT"),l.a.createElement(s.Link,{className:"link",to:"contact",smooth:!0,duration:1e3,offset:-80},"CONTACT"))},m=a(7),u=a.n(m),d=function(){return l.a.createElement("section",{id:"main",className:u.a.main},l.a.createElement("div",{className:u.a.titlebox},l.a.createElement("div",{className:u.a.p1},"Hello, I'm"),l.a.createElement("div",{className:u.a.p2},"Lucas Li"),l.a.createElement("div",{className:u.a.p3},"AND THIS IS MY PORTFOLIO")))},E=a(6),p=a.n(E),_=a(28),f=a.n(_),b=a(29),h=a.n(b),N=a(30),g=a.n(N),v=function(){function e(e){return l.a.createElement("div",{className:p.a.portfolioCard},l.a.createElement("img",{className:p.a.portfolioPic,src:e.image,alt:""}),l.a.createElement("div",{className:p.a.title},e.title),l.a.createElement("div",{className:p.a.desc},e.desc))}return l.a.createElement("section",{id:"portfolio",className:p.a.portfolio},l.a.createElement("div",{className:"sectionHeader"},"Portfolio"),l.a.createElement("div",{className:p.a.portfolioContainer},l.a.createElement(e,{link:"https://lucasli233.github.io/react-movie-watchlist-v1/",image:g.a,title:"Movie Watchlist",desc:"React"}),l.a.createElement(e,{link:"https://lucasli233.github.io/react-todo-v1/",image:h.a,title:"Todo List",desc:"React"}),l.a.createElement(e,{link:"https://lucasli233.github.io/js-calculator/",image:f.a,title:"Calculator",desc:"VanillaJS"})))},y=a(4),x=a.n(y),C=function(){function e(e){return l.a.createElement("div",{className:x.a.resbox},l.a.createElement("p",{className:x.a.date},e.date),l.a.createElement("p",{className:x.a.title},e.title),l.a.createElement("p",{className:x.a.des},e.des,l.a.createElement("br",null),e.gpa),l.a.createElement("p",{className:x.a.entity},e.entity))}return l.a.createElement("section",{id:"resume",className:x.a.resume},l.a.createElement("div",{className:"sectionHeader"},"Resume"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:x.a.edu},l.a.createElement("div",{className:"secondaryTitle"},"Education"),l.a.createElement(e,{date:"March 2019 - Present",title:"Bachelor of Science",des:"Major in Computer Science, Logic and Computation.",gpa:"7/9",entity:"University of Auckland"}),l.a.createElement(e,{date:"February 2018 - October 2018",title:"Bachelor of Engineering with Honours",des:"Major in Software Engineering. Discontinued and moved to Auckland after first year.",entity:"Victoria University of Wellington"})),l.a.createElement("div",{className:x.a.exp},l.a.createElement("div",{className:"secondaryTitle"},"Experience"),l.a.createElement(e,{date:"May 2019 - Jun 2021",title:"Property Management Assistant",des:"Part-time Airbnb host for a New Zealand based property management company specializing in short term rentals.",entity:"Toodle Airbnb Management"}),l.a.createElement(e,{date:"Jan 2020 - Feb 2020",title:"Software Testing Intern",des:"Took part in the development of a map labelling software. Key responsibilities: Integration, user interface testing.",entity:"Jiangsu Digitaland Technology Co., Ltd."}))))},w=a(2),k=a.n(w),A=a(31),B=a.n(A),M=a(32),L=a.n(M),S=function(e){return l.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},T=function(){function e(e){return l.a.createElement("div",{className:k.a.testiCard},l.a.createElement("img",{src:e.picture,alt:"",className:k.a.profileCircle}),l.a.createElement("div",{className:k.a.chatBubble},l.a.createElement("div",{className:k.a.textBox},l.a.createElement("p",{className:k.a.text},e.text),l.a.createElement("p",{className:k.a.name},e.name,l.a.createElement("span",{className:k.a.company},e.company)))))}return l.a.createElement("section",{id:"about",className:k.a.about},l.a.createElement("div",{className:"sectionHeader"},"ABOUT ME"),l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:B.a,className:k.a.fit1,alt:"guy in black hat and jacket"}),l.a.createElement("div",{className:k.a.descBox},l.a.createElement("span",{className:k.a.desc1},"Soon to be grad with BSc in CompSci and LogiComp.",l.a.createElement("ul",null,l.a.createElement("li",null,"Intellectually curious, tech & science passionate."),l.a.createElement("li",null,"Extremely responsible and meticulous."),l.a.createElement("li",null,"Constantly strive to improve and upskill myself."))),l.a.createElement("span",{className:k.a.desc2},l.a.createElement("span",null,"What I like to do in my spare time:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Learning more about technology, science, and philosophy"," ",l.a.createElement(S,{symbol:"\ud83e\udd13",label:"nerdface"})),l.a.createElement("li",null,"Reading ",l.a.createElement(S,{symbol:"\ud83d\udcd6",label:"book"})," watching a lot of critically acclaimed films ",l.a.createElement(S,{symbol:"\ud83c\udfac",label:"movie"})),l.a.createElement("li",null,"Listening to a wide range of music: classical"," ",l.a.createElement(S,{symbol:"\ud83c\udfbb",label:"violin"})," rock"," ",l.a.createElement(S,{symbol:"\ud83c\udfb8",label:"guitat"}),"techno",l.a.createElement(S,{symbol:"\ud83c\udfa7",label:"headset"})),l.a.createElement("li",null,"Watching fashion shows ",l.a.createElement(S,{symbol:"\ud83e\udde5",label:"jacket"})," ","looking for new clothes to buy"," ",l.a.createElement(S,{symbol:"\ud83d\udc5e",label:"shoes"})),l.a.createElement("li",null,"Working out at the gym"," ",l.a.createElement(S,{symbol:"\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f",label:"weightlifting"})))),l.a.createElement("div",{className:k.a.btnbox},l.a.createElement(s.Link,{className:k.a.contactBtn,to:"contact",smooth:!0,duration:1e3,offset:-80},"CONTACT ME"),l.a.createElement("a",{style:{display:"table-cell"},href:"https://drive.google.com/file/d/1gOYnWV-sSYLtpaTPSHdwmqFxrIFSx247/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:k.a.cvBtn},"DOWNLOAD CV")))),l.a.createElement("div",{className:k.a.testiBox},l.a.createElement("div",{className:"sectionHeader"},"Testimonials"),l.a.createElement("div",{className:k.a.testiContainer},l.a.createElement(e,{picture:L.a,text:"His positive can-do attitude is an asset to any situation. Anyone who is lucky enough to have Lucas as part of their team will have gained a hardworking, conscientious employee.",name:"Juliana Dur\xe1n, Supervisor ",company:"@Toodle Ltd."}),l.a.createElement("span",{className:k.a.empty}))))},O=a(33),R=a.n(O),P=a(34),j=a.n(P),W=a(8),I=a(9),D=a(3),H=a.n(D);function F(e){e.preventDefault(),R.a.sendForm("gmail","temp",e.target,"user_1zZ8PaBX2WHppm5mri95i").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}var J=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return l.a.createElement("section",{id:"contact",className:H.a.contact},l.a.createElement("div",{className:"sectionHeader"}," Get In Touch"),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("div",{className:"secondaryTitle"},"Email Me"),l.a.createElement("form",{onSubmit:F},l.a.createElement("div",{className:H.a.touchBox},l.a.createElement("input",{type:"text",placeholder:"Your Name",name:"name"}),l.a.createElement("input",{type:"email",placeholder:"Your Email",name:"email"}),l.a.createElement("input",{type:"text",placeholder:"Subject",name:"subject"}),l.a.createElement("textarea",{rows:6,placeholder:"Write a Message",name:"message"}),l.a.createElement("input",{type:"submit",value:"SEND MESSAGE",onClick:function(){return c(!0)}}),l.a.createElement(j.a,{className:H.a.submitModal,isOpen:a,onRequestClose:function(){return c(!1)}},l.a.createElement("p",null,"Message sent successfully"),l.a.createElement("button",{className:H.a.submitClose,onClick:function(){return c(!1)}},"Close"))))),l.a.createElement("div",{className:H.a.detailsBox},l.a.createElement("div",{className:"secondaryTitle"},"My Contact Details"),l.a.createElement("p",{className:H.a.titleEmail},"EMAIL"),l.a.createElement("p",{className:H.a.content},"sli.lucas233@gmail.com"),l.a.createElement("p",{className:H.a.title},"PHONE"),l.a.createElement("p",{className:H.a.content},"+64 022 1977 164"),l.a.createElement("p",{className:H.a.title},"ADDRESS"),l.a.createElement("p",{className:H.a.content},"12 Martin Square ",l.a.createElement("br",null),"Te Aro ",l.a.createElement("br",null),"Wellington 6011"),l.a.createElement("div",{className:H.a.social},l.a.createElement("a",{href:"https://www.linkedin.com/in/lucaslinz/"},l.a.createElement(W.a,{icon:I.d})),l.a.createElement("a",{href:"https://github.com/lucasli233/"},l.a.createElement(W.a,{icon:I.b})),l.a.createElement("a",{href:"https://twitter.com/lucasli_nz/"},l.a.createElement(W.a,{icon:I.e})),l.a.createElement("a",{href:"https://www.facebook.com/LucasShengqiLi/"},l.a.createElement(W.a,{icon:I.a})),l.a.createElement("a",{href:"https://www.instagram.com/lucassli_/"},l.a.createElement(W.a,{icon:I.c}))))),l.a.createElement("p",{className:H.a.copyRight},"\xa9 2021 by Lucas Li"))};function z(){return l.a.createElement("div",{className:"mobile"},"Website not optimized for small screens ",l.a.createElement("br",null),"please resize window and refresh ",l.a.createElement("br",null),"or view on desktop \ud83d\ude0b")}function Y(){return l.a.createElement("div",{className:"App"},l.a.createElement(r,null),l.a.createElement(d,null),l.a.createElement(v,null),l.a.createElement(C,null),l.a.createElement(T,null),l.a.createElement(J,null))}var U=function(){return window.innerWidth>=1040?l.a.createElement(Y,null):l.a.createElement(z,null)};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root"))},7:function(e,t,a){e.exports={main:"Main_main__3ZT2p",titlebox:"Main_titlebox__wRzv5",p1:"Main_p1__2wbO8",p2:"Main_p2__1h0RL",p3:"Main_p3__2KNkR"}}},[[35,1,2]]]);
//# sourceMappingURL=main.03e2232a.chunk.js.map