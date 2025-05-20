$(window).scroll(function(){
    var scrollValue = $(window).scrollTop()
    if(scrollValue > 100){
        $('#logo').css({width: '290px'})
        $('#logo').css({transition: 'all 0.5s'})
        $('#btn-arrow-up').css({display: 'flex'})
    }

    if(scrollValue <= 20){
        $('#logo').css({width: '350px'})
        $('#logo').css({transition: 'all 0.5s'})
         $('#btn-arrow-up').css({display: 'none'})
    }
  


    console.log(scrollValue)
})


$(window).resize(function(){
    var reSize = $(window).innerWidth()

    if(reSize <= 1023){

        desktopServices()
        desktopMedicalTeam()
        desktopPatientResources()
        mobileMedicalTeam()
        mobileServices()
        mobilePatientResources()
    }
    else{
        mobileMenu()
         $('#icons').attr('d', 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
         isClickedMenu = true
    }
})




// ***********************************Desktop Menus***********************************

// Button Arrow Up

$('#btn-arrow-up').click(function(){
    $(window).scrollTop(0)
})

// Button Arrow Up

// Main Hover

$('main').mouseover(function(){
    desktopServices()
    desktopMedicalTeam()
    desktopPatientResources()
    mobileMedicalTeam()
    mobileServices()
    mobilePatientResources()
})

// Main Hover

//Medical Team Bio

var isBio = [true, true, true, true, true, true, true, true, true, true]

function bio(value){
    $('#bio-'+value).toggle()

    if(isBio[value]){
        $('#btn-bio-'+value).text('Hide Bio')
        isBio[value] = false
    }
    else{
        $('#btn-bio-'+value).text('Read Bio')
        isBio[value] = true

    }
    
}


//Medical Team Bio

//More Treatment

var isViewMore = true

$('#btn-more').click(function(){
   $('#more-treat').toggle()
    if(isViewMore){
        $('#btn-caption').text('Less more')
        isViewMore = false
    }
    else{
        $('#btn-caption').text('View more')
        isViewMore = true

    }
   
})

//More Treatment


// Home Menu

$('#btn-home').mouseover(function(){
     desktopServices()
     desktopMedicalTeam()
     desktopPatientResources()
})

// Home Menu


// Services Menu

$('#btn-services').mouseover(function(){
   // $('#desktop-services-menus').toggle()
    $('#desktop-services-menus').css({display: 'grid'})
    desktopMedicalTeam()
    desktopPatientResources()
})

function desktopServices(){
        $('#desktop-services-menus').css({display: 'none'})
}

// Services Menu

// Medical Team Menu

$('#btn-medical-team').mouseover(function(){
    //$('#desktop-medical-team-menus').toggle()
    $('#desktop-medical-team-menus').css({display: 'grid'})
     desktopServices()
     desktopPatientResources()
})


function desktopMedicalTeam(){
    $('#desktop-medical-team-menus').css({display: 'none'})

}

// Medical Team Menu

// Patient Resources Menu

$('#btn-patient-resources-menus').mouseover(function(){
    $('#desktop-patient-resources-menus').css({display:'flex'})
    desktopMedicalTeam()
    desktopServices()
})

function desktopPatientResources(){
    $('#desktop-patient-resources-menus').css({display:'none'})

}

// Patient Resources Menu

// Contact Menu

$('#btn-contact').mouseover(function(){
    desktopMedicalTeam()
    desktopPatientResources()
    desktopServices()
})

// Contact Menu

// ***********************************Desktop Menus***********************************

// ***********************************Mobile Menus***********************************


function mobileHideMenu(){
    // mobileMedicalTeam()
    // mobilePatientResources()
    // mobileServices()
    mobileMenu()
    $('#icons').attr('d', 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
    isClickedMenu = true
}


isClickedMenu = true

$('#btn-menu').click(function(){
    if(isClickedMenu){
    $('#icons').attr('d', 'M6 18 18 6M6 6l12 12')
    isClickedMenu = false
    }
    else{
        isClickedMenu = true
        $('#icons').attr('d', 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')
    }
    $('#mobile-menus').toggle()
    mobileMedicalTeam()
    mobilePatientResources()
    mobileServices()
})

function mobileMenu(){
    $('#mobile-menus').css({display: 'none'})

}


// Mobile Services Menus

$('#mobile-btn-services').click(function(){
    $('#mobile-services-menus').toggle()
    mobileMedicalTeam()
    mobilePatientResources()
})

function mobileServices(){
    $('#mobile-services-menus').css({display: 'none'})
}

// Mobile Services Menus

// Mobile Medical Team Menus

$('#mobile-btn-medical-team').click(function(){
    $('#mobile-medical-team-menus').toggle()
    mobileServices()
    mobilePatientResources()
})

function mobileMedicalTeam(){
    $('#mobile-medical-team-menus').css({display: 'none'})
}

// Mobile Medical Team Menus

// Mobile Patient Resources Menus

$('#mobile-btn-patient-resources').click(function(){
    $('#mobile-patient-resources-menus').toggle()
    mobileServices()
    mobileMedicalTeam()
})

function mobilePatientResources(){
    $('#mobile-patient-resources-menus').css({display: 'none'})
}

// Mobile Patient Resources Menus


// ***********************************Mobile Menus***********************************


