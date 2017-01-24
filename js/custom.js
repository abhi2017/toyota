$(document).ready(function(){
    
    $('.flexslider').flexslider({
        animation: "fade",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a")
    });
    $( ".datepicker" ).datepicker();
var owl1 = $('#owl-4');
owl1.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
////
var owl2 = $('#owl-3');
owl2.owlCarousel({
    loop:true,
    margin:40,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
// Go to the next item
$('.customNextBtn').click(function() {
    owl1.trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function() {
    owl1.trigger('prev.owl.carousel', [300]);
})
$('.customNextBtn').click(function() {
    owl2.trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function() {
    owl2.trigger('prev.owl.carousel', [300]);
})
	$('.ckcat').on('click', function(){
    	// alert(1);
    	$('.visit_type').find('.slect-bg').removeClass('slect-bg');
    	$(this).parent().parent().parent().addClass('slect-bg');
    });
	$('input[type="radio"]').iCheck({
	    checkboxClass: 'icheckbox_minimal',
	    radioClass: 'iradio_minimal-blue',
	    increaseArea: '20%'
	});
	$('.range_slider').jRange({
	    from: 0,
	    to: 3500,
	    step: 1,
	    format: '%s',
	    width: 260,
	    showLabels: true,
	    isRange : true
	});
	$('.range_slider').jRange('setValue', '500,2500');
	//$('[data-toggle="popover"]').popover();   
});
	function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#image_upload_preview').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#inputFile").change(function () {
        readURL(this);
    });
    $(document).ready(function(){
    	$('.change_pic_btn').click(function(){
    		$('#inputFile').trigger('click');
    	});
    });
    function readURL1(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#image_upload_preview1').attr('src',e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#inputFile1").change(function () {
        readURL1(this);
    });
    $(document).ready(function(){
        $('.change_pic_btn1').click(function(){
            $('#inputFile1').trigger('click');
        });
    });
    $('.single_pack').on('click', function(){
        $('.special_cat').hide();
    });
     $('.three_pack').on('click', function(){
        $('.special_cat').show();
    });
    $(document).ready(function(){
        $('#suggest_doctr .doc_pt_pro').on('click', function(){
            $(this).parent().parent().parent().hide();
            $('.suggest_doc_info').show();
        });
        $('.suggest_doc_info .go_back').on('click', function(){
            $(this).parent().hide();
            $('#suggest_doctr').show();
        });
    });