$(document).ready(function () {
    if ($('.product-recommendations').length) {
        getProductRecommendations();
    }

    if ($('.shopify-cart-qty').length) {
        updateShopifyDetails();
    }

    if ($('#customer_login').length) {
        customerEventListeners();
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

function customerEventListeners() {
    $('#RecoverPassword, #HideRecoverPasswordLink').on('click', function () {
        $('#RecoverPasswordForm, #CustomerLoginForm').slideToggle(300);
    });
    var locationHash = window.location.hash.substring(1);

    console.log(locationHash);
    
    if (locationHash == 'recover') {
        $('#RecoverPasswordForm, #CustomerLoginForm').slideToggle(300);
    }
}

/**
 *
 *  Show/hide customer address forms
 *
 */
function customerAddressForm() {
    var $newAddressForm = $('#AddressNewForm');
    var $newAddressFormButton = $('#AddressNewButton');

    if (!$newAddressForm.length) {
        return;
    }

    // Initialize observers on address selectors, defined in shopify_common.js
    if (Shopify) {
        // eslint-disable-next-line no-new
        new Shopify.CountryProvinceSelector(
            'AddressCountryNew',
            'AddressProvinceNew',
            {
                hideElement: 'AddressProvinceContainerNew'
            }
        );
    }

    // Initialize each edit form's country/province selector
    $('.address-country-option').each(function () {
        var formId = $(this).data('form-id');
        var countrySelector = 'AddressCountry_' + formId;
        var provinceSelector = 'AddressProvince_' + formId;
        var containerSelector = 'AddressProvinceContainer_' + formId;

        // eslint-disable-next-line no-new
        new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
            hideElement: containerSelector
        });
    });

    // Toggle new/edit address forms
    $('.address-new-toggle').on('click', function () {
        var isExpanded = $newAddressFormButton.attr('aria-expanded') === 'true';

        $newAddressForm.toggleClass('hide');
        $newAddressFormButton.attr('aria-expanded', !isExpanded).focus();
    });

    $('.address-edit-toggle').on('click', function () {
        var formId = $(this).data('form-id');
        var $editButton = $('#EditFormButton_' + formId);
        var $editAddress = $('#EditAddress_' + formId);
        var isExpanded = $editButton.attr('aria-expanded') === 'true';

        $editAddress.toggleClass('hide');
        $editButton.attr('aria-expanded', !isExpanded).focus();
    });

    $('.address-delete').on('click', function () {
        var $el = $(this);
        var target = $el.data('target');
        var confirmMessage = $el.data('confirm-message');

        // eslint-disable-next-line no-alert
        if (
            confirm(
                confirmMessage || 'Are you sure you wish to delete this address?'
            )
        ) {
            Shopify.postLink(target, {
                parameters: { _method: 'delete' }
            });
        }
    });
}
