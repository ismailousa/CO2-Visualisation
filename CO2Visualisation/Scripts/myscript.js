$(document).ready(function () {
    
    var item = $('#progressbar');
    function setValueColor() {
        if (item != null) {
            if (item.attr('value') <= 1000) {
                if (IEversion !== false) {
                    item.css({ color: 'green' });
                } else {
                    item.removeClass();
                    item.addClass('progressChromeGreen');
                }
            }
            else if (item.attr('value') > 1000 && item.attr('value') <= 2000) {
                if (IEversion !== false) {
                    item.css({ color: 'yellow' });
                } else {
                    item.removeClass();
                    item.addClass('progressChromeYellow');
                }
            }
            else {
                if (IEversion !== false) {
                    item.css({ color: 'red' });
                } else {
                    item.removeClass();
                    item.addClass('progressChromeRed');
                }
            }
        }
    };



    function detectIE() {
        var ua = window.navigator.userAgent;



        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }

    var IEversion = detectIE();

    setValueColor();

    function getValue() {
        $.ajax({
            type: 'get',
            url: 'Home/refresh/',
            success: function (data) {
                item.attr('value', data);
                $('.co2-amount').text(data);
                setValueColor();
            },
            error: function (errorData) {
                alert('ERROR');
            }
        });
    }

    setInterval(getValue, 10000);
}

);