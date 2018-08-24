// Global Variables

var questionPageHeaderElement=`<ul class="section__main__listView2" id="listView"><li><div><div style="width: 32px;float: left;"><img src="img/star1.png" alt="star"></div><div><a href="#"><h2>Questions for you</h2></a></div></div></li></ul>`;
var homePageHeaderElement=`<ul class="section__main__listView" id="listView"><li><div class="addQueProfileView"><img src="./img/test.png" alt="Profile Pic"><h3>UserName</h3></div><h1>What is your question?</h1></li></ul>`;
var homePageData=`<li><div class="addQueProfileView"><img src="./img/test.png" alt="Profile Pic"><div><h3 class="quePostedUsrName">UserName</h3><p>Asked 1 hr ago</p></div></div><h1 class="queTitle">Who wrote the google search algorithm?</h1><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis hic expedita voluptate earumodit voluptas eveniet in est aperiam, natus architecto illo ad vitae, aliquam nostrum? Minima,eius quae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis hic expedita voluptate earum odit voluptas eveniet in est aperiam, natus architecto illo ad vitae, aliquamnostrum? Minima, eius quae.</p><div class="bottomControll"><i class="fa fa-heart"></i><i class="fa fa-share"></i><span>100</span></div></li>`;
var questionPageData=`<li> <div class="addQueProfileView"> <div style="float: left;"> <p>Question added - </p> </div> <div> <p>Machine Learning</p> </div> <div style="width: 44%"></div> <a href="#"> <div style="float: right;"> <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="small_close" class="icon_svg-stroke" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666666" stroke-width="1.5"> <path d="M12,6 L12,18" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path> <path d="M18,12 L6,12" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path> </g> </svg> </div> </a> </div> <h1 class="queTitle2">How do neural networks have overwhelming accuracy and still generalize well on test sets?</h1> <div class="addQueProfileView"> <div style="float: left;"> <p>No answer yet - </p> </div> <div> <p>Last followed 7m ago</p> </div> </div> <div class="bottomControll"> <div class="ans-btn" style="float: left;"> <div style="float: left;"> <a href="#"> <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="answer" transform="translate(2.500000, 3.500000)" stroke="none" fill="none" fill-rule="evenodd"> <g id="pen" transform="translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)"> <path d="M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z" id="pen_body" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path> <polygon id="pen_tip" class="icon_svg-fill_as_stroke" fill="#666" transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20"></polygon> </g> <path d="M12,16 L17,16 L17,11 M7,1 L2,1 L2,6" id="bg" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path> </g> </svg> </a> </div> <span>Answer</span> </div> <p style="float: right;visibility: hidden;">Answer</p> <div class="ans-btn"> <div style="float: left;"> <a href="#"> <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="pass" stroke="none" fill="none" fill-rule="evenodd"> <g id="pen" transform="translate(11.485281, 12.485281) rotate(-315.000000) translate(-11.485281, -12.485281) translate(9.485281, 2.485281)"> <path d="M0,7.51471863 L2.22044605e-16,1.99994543 C8.67738547e-17,0.895375929 0.8954305,-5.45711382e-05 2,-5.45711382e-05 C3.1045695,-5.45711382e-05 4,0.895375929 4,1.99994543 L4,7.51471863 M4,12.5147186 L4,16 L2.00256278,20 L0,16 L0,12.5147186" id="Rectangle-5" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path> <polygon id="pen_tip" class="icon_svg-fill_as_stroke" fill="#666" transform="translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) " points="2 17.5 3.25 20 0.75 20"></polygon> </g> <path d="M4.63603897,5.63603897 L18.5,19.5" id="Line" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" stroke-linecap="round"></path> </g> </svg> </a> </div> <span>Pass</span> </div> <!-- --> </div> </li>`;


var model = $('.model_container');
var backdrop = $('.backdrop');
var body = $('body');


function openModel(e) {
    model.fadeIn(200);
    backdrop.show();
    body.css('overflow','hidden');
}

function closeModel(e) {
    model.hide();
    backdrop.fadeOut(500);
}


$(function(){
    loadHomePage();
    $('#Answer').click(function (e) { 
        e.preventDefault();
        removeActive();
        $(this).addClass('active');
        $('.section__main').html(questionPageHeaderElement);
        loadQuestionPageData();
    });
    $('#Question').click(function (e) { 
        e.preventDefault();
        removeActive();
        $(this).addClass('active');
    });
    $('#Home').click(loadHomePage);
    function removeActive(){
        $('#Home').removeClass('active');
        $('#Question').removeClass('active');
        $('#Answer').removeClass('active');
    }
    function loadHomePage(){
            removeActive();
            $('#Home').addClass('active');
            $('.section__main').html(homePageHeaderElement);
            loadHomePageData();
    }
    function loadHomePageData(){
        for(var i=0;i<10;i++){
            $('#listView').append(homePageData);
        }
    }
    function loadQuestionPageData(){
        for(var i=0;i<10;i++){
            $('#listView').append(questionPageData);
        }
    }
});