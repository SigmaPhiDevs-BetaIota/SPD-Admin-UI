
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Major', 'Members'],
        ['Mechanical',18],
        ['Civil',5],
        ['Bio',5],
        ['CS', 9],
        ['Computer',6],
        ['Chemical',8],
        ['Aerospace',3],
        ['Other',4]
        ]);

    var options = {
        title: 'Breakdown of Majors',
        pieHole: 0.4,
        backgroundColor: 'rgba(0,0,0,0)',
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);

    $('rect').css('display','none');
    if($( window ).width() < 425){
        document.getElementsByTagName('svg')[0].childNodes[3].style.display='none';
    }
}

$(window).scroll(function() {
    $('.logo-cont').each(function(){
        var offset = $(this).offset().top,
        scroll = $(window).scrollTop(),
        itemheight = $(this).outerHeight(),
        windowheight = $(window).height();
        //console.log($(this).attr('src'),offset, scroll + windowheight, itemheight, windowheight);

        if((scroll+windowheight) >= (offset+itemheight)){
            $(this).addClass('scrolled');
        }
        else{
            $(this).removeClass('scrolled');
        }
    });
});

$( window ).resize(function(){
    if($( window ).width() < 425){
        document.getElementsByTagName('svg')[0].childNodes[3].style.display='none';
    }
    else{
        document.getElementsByTagName('svg')[0].childNodes[3].style.display='';
    }
});
