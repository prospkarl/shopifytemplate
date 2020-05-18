$(document).ready(function () {
    if ($('.product-recommendations').length) {
        getProductRecommendations();
    }

    if ($('.shopify-cart-qty').length) {
        updateShopifyDetails();
    }

    $('.add-to-cart').on('click', function () {
        const self = this;

        var itemData = {
            items: [
                {
                    quantity: 1,
                    id: $(this).attr('data-variant'),
                    properties: {
                        'First name': 'Caroline'
                    }
                }
            ]
        };

        $.ajax({
            url: '/cart/add.js',
            data: itemData,
            type: 'POST',
            beforeSend: function () {
                $(self).html('Please wait...');
            },
            complete: function () {
                updateShopifyDetails();
                $(self).html('Added to cart');
            }
        })
    })

    $('.product-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-images-nav'
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var newHeight = $('[data-slick-index="' + nextSlide + '"]').height();

        $('.product-images').css("height", newHeight);
    });

    $('.product-images-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-images',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
});

// Functions
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getProductRecommendations() {
    var $container = $('.product-recommendations');

    var baseUrl = $container.data('baseUrl');
    var productId = $container.data('productId');
    var limit = $container.data('limit');

    var getProductUrl = baseUrl + '?section_id=product-recommendations&limit=' + limit +
        '&product_id=' + productId;

    $.ajax({
        url: getProductUrl,
        type: 'get',
        success: function (res) {
            $container.html(res);
        }
    })
}


function updateShopifyDetails() {
    console.log('update');

    $.ajax({
        url: '/cart.js',
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            $('.shopify-cart-qty').html(res.item_count);

            if ($('.shopify-cart-total').length) {
                $('.shopify-cart-total').html(res.currency + numberWithCommas(res.total_price));
            }
        }
    })
}
