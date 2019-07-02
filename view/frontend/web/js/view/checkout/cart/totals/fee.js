define(
    [
        'Boolfly_PaymentFee/js/view/checkout/summary/fee'
    ],
    function (Component) {
        'use strict';

        return Component.extend({

            /**
             * @override
             */
            isDisplayed: function () {
                return this.getPrice() > 0;
            }
        });
    }
);