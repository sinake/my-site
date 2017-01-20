//Calling all functions.
navAtTop();
smoothScroll();
openSection();
closeSection()
showProjectTitleAndMag();
openProjectPreview();
formValidation();

//Keeping nav menu at the top of the scroll window
function navAtTop(){
    var num = $('.left-nav').offset().top;

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.left-nav').addClass('fixed');
        } else {
            $('.left-nav').removeClass('fixed');
        }
    });
}

//Scrolling the page smoothly when clicking anchor link.
function smoothScroll(){
    $('a[href*="#"]').click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top}, 500);
    });
}

//Clicking a down arrow link will open the related section.
function openSection(){
    $('.section-down-link').click(function(){
        event.preventDefault();
        $(this).siblings('.section-content').show('slow');
        $(this).siblings('.section-up-link').addClass('active');
        $(this).addClass('not-active');
    });
}

//Clicking the up arrow link will close the related section
function closeSection(){
    $('.section-up-link').click(function(){
        event.preventDefault();
        $(this).siblings('.section-content').hide('slow');
        $(this).siblings('.section-down-link').removeClass('not-active');
        $(this).removeClass('active');
    });
}

//When hovering over project show project title and magnifying glass.
function showProjectTitleAndMag(){
    $('.project').on({
        mouseenter: function(){
            $(this).find('.project-title, .magnifying-icon').show();    
        },
        mouseleave: function(){
            $(this).find('.project-title, .magnifying-icon').hide();
        }
    })
    if ($(window).width() <= 1025){
        $('.project').off();
    };
}

//When clicking project preview show larger project image and project description.
function openProjectPreview(){
    $('.project').click(function(){
        $(this).find('.project-image-link').colorbox({
            transition:'elastic', 
            scalePhotos: true,
            maxWidth: '80%',
            returnFocus: false,
        });
    })
}

//Removing recaptcha error message.
function recaptchaCallback() {
    $('.hidden-recaptcha').valid();
}

//Validate form
function formValidation() {

    //validating the form function
    $(".contact-form").validate({
        ignore: ".ignore",
        debug: true,
        rules: {
            hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        submitHandler: function(form) {
            //Submitting form info to php file and showing thank you message once form is filled out.
            $.post('main.php', {
                email: $('.email-field').val(), 
                subject: $('.subject-field').val(), 
                message: $('.message-field').val(), 
                submit: '1'
            }, function(data) {
                $(".form-response").show('slow');
                $(".form-response").delay(4000).hide('slow');
                $('.contact-form')[0].reset(); /* Clear the inputs */
                grecaptcha.reset() //reset captcha after every message.
            });
        }
    })
}
