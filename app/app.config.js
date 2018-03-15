(function () {

    'use strict';

    angular.module('FoodOrderingApp')
        .config(config);


    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];


    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'components/login/login.html',
                controller: 'LoginController as loginCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'components/dashboard/dashboard.html',
                controller: 'DashboardController as dashboardCtrl'
            })
            .state('restaurant', {
                url: '/restaurant',
                templateUrl: 'components/restaurant/restaurant.html',
                controller: 'RestaurantController as restaurantCtrl',
                params: {
                    restaurant: ''
                }
            })
            .state('order', {
                url: '/order',
                templateUrl: 'components/order-list/order-list.html',
                controller: 'OrderListController as orderListCtrl'
            })

            .state('userOrder', {
                url: '/order/:id',
                templateUrl: 'components/order/order.html',
                controller: 'OrderController as orderCtrl',
            })

            .state('register', {
                url: '/register',
                templateUrl: 'components/register/register.html',
                controller: 'RegisterController as registerCtrl'
            })
            .state('orderBill', {
                url: '/orderBill',
                templateUrl: 'components/order-bill/order-bill.html',
                controller: 'OrderBillController as orderBillCtrl',
                params: {
                    order: null
                }
            })
            .state('registrationSuccess', {
                url: '/registrationSuccess',
                templateUrl: 'components/registration-success/registration-success.html',
                controller: 'RegistrationSuccessController as registrationSuccessCtrl'
            })
            .state('users', {
                url: '/users',
                templateUrl: 'components/users/user.html',
                controller: 'UserController as userCtrl'
            })
            .state('order-log', {
                url: '/order-log',
                templateUrl: 'components/order-log/order-log.html',
                controller: 'OrderLogController as orderlogCtrl'
            })
            .state('orders', {
                url: '/orders',
                templateUrl: 'components/orders/orders.html',
                controller: 'OrdersController as ordersCtrl'
            })
            .state('orders.today', {
                url: '/today',
                templateUrl: 'components/orders/today/today.html',
                controller: 'TodayController as todaysCtrl'
            })
            .state('orders.month', {
                url: '/month',
                templateUrl: 'components/orders/month/month.html',
                controller: 'MonthController as monthsCtrl'
            })
        ;
        // $locationProvider.html5Mode(true);
    }

})();