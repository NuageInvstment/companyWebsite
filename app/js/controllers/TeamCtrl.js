angular.module('nuageInvestment').controller('TeamCtrl', ['$rootScope', '$scope', '$state', '$sce', 'EmployeeModel',
    function($rootScope, $scope, $state, $sce, Employee) {
        'use strict';

        var employeesEn =  [
            new Employee({
                fullName : 'Christie Xie',
                title : 'Principal, Sales Manager',
                email : 'cxie@nuageinvrealty.com',
                phoneNumber : '1(617)678-3889',
                location : 'Boston',
                profileImageURI : './images/employees/cxie.jpg',
                language : 'English, Chinese (Mandarin)',
                certificate: 'CFP',
                wechatId: 'Christie_Xie',
                license: 'Series 7, 63,66',
                licenseUrl: 'https://brokercheck.finra.org/individual/summary/5236275'
            }),
            new Employee({
                fullName: 'Amy Chen',
                title:'Senior Associate, Rental Manager',
                email: 'achen@nuageinvrealty.com',
                phoneNumber: '1(617)480-7317',
                location: 'Boston',
                profileImageURI: './images/employees/achen.jpg',
                wechatId: 'fr348822',
                lineId: 'tainanamy',
                language: 'English, Chinese (Mandarin/Taiwanese)',
                certificate: null
            }),
            new Employee({
                fullName : 'Bin Shen',
                title : 'Senior Associate | Business Development Manager',
                email : 'shen.boston@gmail.com',
                phoneNumber : '1(617)817-1782',
                location : 'Boston',
                profileImageURI : './images/employees/bshen.jpg',
                language : 'English, Chinese (Mandarin)',
                certificate: null,
                wechatId: 'isen2006'
            }),
            new Employee({
                fullName : 'Grace Hui',
                title : 'Senior Associate',
                email : 'ghui@nuage.group',
                phoneNumber : '1(339)970-4114',
                location : 'Boston',
                profileImageURI : './images/employees/ghui.jpg',
                language : 'English, Chinese (Mandarin/Cantonese)',
                certificate: null,
                wechatId: 'gracedada'
            }),
            new Employee({
                fullName : 'Grace Liao',
                title : 'Senior Associate',
                email : 'gliao@nuageinvrealty.com',
                phoneNumber : '1(617)803-0079',
                location : 'Boston',
                profileImageURI : './images/employees/gliao.png',
                language : 'English, Chinese(Mandarin)',
                wechatId: 'liaogracej',
                certificate: null
            }),
            new Employee({
                fullName: 'Jing Mai',
                title:'Senior Associate',
                email: 'jmai@nuageinvrealty.com',
                phoneNumber: '1(207)458-9749',
                location: 'Boston',
                profileImageURI: './images/employees/jmai.jpg',
                language: 'English, Chinese (Cantonese)',
                wechatId:'jingrmai',
                certificate: 'CPA'
            }),
            new Employee({
                fullName: 'Chen Chen',
                title:'Senior Associate',
                email: 'nick6636@gmail.com',
                phoneNumber: '1(978)654-1109',
                location: 'Boston',
                profileImageURI: './images/employees/cchen.jpg',
                language: 'English, Chinese (Mandarin)',
                certificate: null
            }),
            new Employee({
                fullName: 'Lucas Zheng',
                title: 'Associate',
                email: 'lzheng@nuage.group',
                phoneNumber: '1(508)654-0789',
                location: 'Boston',
                profileImageURI: './images/employees/lzheng.jpg',
                certificate: 'CPA',
                language: ' English, Chinese (Mandarin & Fuzhouness)',
                wechatId: null
            }),
            new Employee({
                fullName: 'Chelsi Earls',
                title: 'Associate',
                email: 'cearls@gmail.com ',
                phoneNumber: '1(617)448-9194',
                location: 'Boston',
                profileImageURI: './images/employees/cearls.jpg',
                certificate: null,
                language: 'English, Chinese (Mandarin)',
                wechatId: 'ChelsiCS'
            }),
            new Employee({
                fullName: 'Vanessa Truong',
                title: 'Associate',
                email: 'vtruong@nuageinvrealty.com',
                phoneNumber: '1(508)654-0789',
                location: 'Boston',
                profileImageURI: './images/employees/vtruong.jpg',
                certificate: 'CFP',
                language: 'English, Chinese (Mandarin/Cantonese), Vietnamese',
                wechatId: null
            }),
            new Employee({
                fullName: 'Hannah Quan',
                title:'Associate',
                email: 'hannah.hao.quan@gmail.com',
                phoneNumber: '1(617)901-9160',
                location: 'Boston',
                profileImageURI: './images/employees/hquan.png',
                language: 'English, Chinese (Mandarin)',
                wechatId:'Hannah_Quan',
                certificate: null
            }),
            new Employee({
                fullName: 'Cora Zhang',
                title:'Associate',
                email: 'czhang@nuage.group',
                phoneNumber: '1(646)932-1503',
                location: 'Boston',
                profileImageURI: './images/employees/czhang.jpg',
                language: 'English, Chinese (Mandarin, Fuzhouness)',
                wechatId:'zhangcuihua888',
                certificate: null
            }),
            new Employee({
                fullName: 'Kino Song',
                title:'Principal',
                email: 'ksong@nuageinvrealty.com',
                phoneNumber: '1(917)972-1668',
                location: 'New York',
                profileImageURI: './images/employees/ksong.jpg',
                language: 'English, Chinese (Mandarin)',
                wechatId:'youriva',
                certificate: null,
                license: 'Series 82, 65',
                licenseUrl: 'https://brokercheck.finra.org/individual/summary/6565548'
            }),
            new Employee({
                fullName: 'Jeff Zhou',
                title:'Advisor',
                email: 'jeff.zhou@acertallc.com',
                phoneNumber: '1(860)532-9018',
                location: 'Connecticut',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'rzredge',
                certificate: null
            }),
            new Employee({
                fullName: 'Joey Jiang',
                title:'Shanghai Representative',
                email: 'jiangchao1103@hotmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'CJiang1103',
                certificate: null
            }),
            new Employee({
                fullName: 'Letian Xia',
                title:'Shanghai Representative',
                email: 'letianx@foxmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'letianxia1',
                certificate: null
            }),
            new Employee({
                fullName: 'Chun-Kai Wang',
                title:'Shandong Representative',
                email: 'phenomenoner@gmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin/Taiwanese)',
                wechatId:'chunkai1983',
                certificate: null
            }),
            new Employee({
                fullName: 'Pibin Teng',
                title:'Shandong Representative',
                email: 'pibinteng@gmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: 'English, Chinese (Mandarin)',
                wechatId:'teng8809',
                certificate: null
            })
        ];

        var employeesCN =  [
            new Employee({
                fullName : 'Christie Xie',
                title : '公司创办人',
                email : 'cxie@nuageinvrealty.com',
                phoneNumber : '1(617)678-3889',
                location : 'Boston',
                profileImageURI : './images/employees/cxie.jpg',
                language : '英文, 普通话',
                certificate: '注册理财规划师',
                wechatId: 'Christie_Xie',
                license: 'Series 7, 63,66',
                licenseUrl: 'https://brokercheck.finra.org/individual/summary/5236275'
            }),
            new Employee({
                fullName: 'Amy Chen',
                title:'高级顾问',
                email: 'achen@nuageinvrealty.com',
                phoneNumber: '1(617)480-7317',
                location: 'Boston',
                profileImageURI: './images/employees/achen.jpg',
                wechatId: 'fr348822',
                lineId: 'tainanamy',
                language: '英文, 普通话, 台语',
                certificate: null
            }),
            new Employee({
                fullName : 'Bin Shen',
                title : '高级顾问 | 业务发展经理',
                email : 'shen.boston@gmail.com',
                phoneNumber : '1(617)817-1782',
                location : 'Boston',
                profileImageURI : './images/employees/bshen.jpg',
                language : '英文, 普通话',
                certificate: null,
                wechatId: 'isen2006'
            }),
            new Employee({
                fullName : 'Grace Hui',
                title : '高级顾问',
                email : 'ghui@nuage.group',
                phoneNumber : '1(339)970-4114',
                location : 'Boston',
                profileImageURI : './images/employees/ghui.jpg',
                language : '英文, 普通话, 粤语',
                certificate: null,
                wechatId: 'gracedada'
            }),
            new Employee({
                fullName : 'Grace Liao',
                title : '高级顾问',
                email : 'gliao@nuageinvrealty.com',
                phoneNumber : '1(617)803-0079',
                location : 'Boston',
                profileImageURI : './images/employees/gliao.png',
                language : '英文, 普通话',
                wechatId: 'liaogracej',
                certificate: null
            }),
            new Employee({
                fullName: 'Jing Mai',
                title:'高级顾问',
                email: 'jmai@nuageinvrealty.com',
                phoneNumber: '1(207)458-9749',
                location: 'Boston',
                profileImageURI: './images/employees/jmai.jpg',
                language: '英文, 粤语',
                wechatId:'jingrmai',
                certificate: '注册会计师'
            }),
            new Employee({
                fullName: 'Chen Chen',
                title:'高级顾问',
                email: 'nick6636@gmail.com',
                phoneNumber: '1(978)654-1109',
                location: 'Boston',
                profileImageURI: './images/employees/cchen.jpg',
                language: '英文, 普通话',
                certificate: null
            }),
            new Employee({
                fullName: 'Lucas Zheng',
                title: '顾问',
                email: 'lzheng@nuage.group',
                phoneNumber: '1(508)654-0789',
                location: 'Boston',
                profileImageURI: './images/employees/lzheng.jpg',
                certificate: '注册会计师',
                language: '英文, 普通话, 福建話',
                wechatId: null
            }),
            new Employee({
                fullName: 'Chelsi Earls',
                title: '顾问',
                email: 'cearls@gmail.com',
                phoneNumber: '1(617)448-9194',
                location: 'Boston',
                profileImageURI: './images/employees/cearls.jpg',
                certificate: null,
                language: '英文, 普通话',
                wechatId: 'ChelsiCS'
            }),
            new Employee({
                fullName: 'Vanessa Truong',
                title: '顾问',
                email: 'vtruong@nuageinvrealty.com',
                phoneNumber: '1(508)654-0789',
                location: 'Boston',
                profileImageURI: './images/employees/vtruong.jpg',
                certificate: '注册理财规划师',
                language: '英文, 普通话, 粤语, 越南话',
                wechatId: null
            }),
            new Employee({
                fullName: 'Hannah Quan',
                title:'顾问',
                email: 'hannah.hao.quan@gmail.com',
                phoneNumber: '1(617)901-9160',
                location: 'Boston',
                profileImageURI: './images/employees/hquan.png',
                language: '英文, 普通话',
                wechatId:'Hannah_Quan',
                certificate: null
            }),
            new Employee({
                fullName: 'Cora Zhang',
                title:'顾问',
                email: 'czhang@nuage.group',
                phoneNumber: '1(646)932-1503',
                location: 'Boston',
                profileImageURI: './images/employees/czhang.jpg',
                language: '英文, 普通话, 福建话',
                wechatId:'zhangcuihua888',
                certificate: null
            }),
            new Employee({
                fullName: 'Kino Song',
                title:'公司创办人',
                email: 'ksong@nuageinvrealty.com',
                phoneNumber: '1(917)972-1668',
                location: 'New York',
                profileImageURI: './images/employees/ksong.jpg',
                language: '英文, 普通话',
                wechatId:'youriva',
                certificate: null,
                license: 'Series 82, 65',
                licenseUrl: 'https://brokercheck.finra.org/individual/summary/6565548'
            }),
            new Employee({
                fullName: 'Jeff Zhou',
                title:'顾问',
                email: 'jeff.zhou@acertallc.com',
                phoneNumber: '1(860)532-9018',
                location: 'Connecticut',
                profileImageURI: null,
                language: '英文, 普通话',
                wechatId:'rzredge',
                certificate: null
            }),
            new Employee({
                fullName: 'Joey Jiang',
                title:'顾问代表(上海)',
                email: 'jiangchao1103@hotmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: '英文, 普通话',
                wechatId:'CJiang1103',
                certificate: null
            }),
            new Employee({
                fullName: 'Letian Xia',
                title:'顾问代表(上海)',
                email: 'letianx@foxmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: '英文, 普通话',
                wechatId:'letianxia1',
                certificate: null
            }),
            new Employee({
                fullName: 'Chun-Kai Wang',
                title:'顾问代表(山东)',
                email: 'phenomenoner@gmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: '英文, 普通话, 台语',
                wechatId:'chunkai1983',
                certificate: null
            }),
            new Employee({
                fullName: 'Pibin Teng',
                title:'顾问代表(山东)',
                email: 'pibinteng@gmail.com',
                phoneNumber: '011(86)13764090590',
                location: 'China',
                profileImageURI: null,
                language: '英文, 普通话',
                wechatId:'teng8809',
                certificate: null
            })
        ];

        var getEmployeeCollectionByLocation = function(location, language) {
            var employeesByLocation = [];
            var employees = [];
            if(language === 'en_US') {
                employees = employeesEn;
            } else if (language === 'cn-simplified') {
                employees = employeesCN;
            }
            for(var i = 0; i < employees.length; i++) {
                if(employees[i].location === location) {
                    employeesByLocation.push(employees[i]);
                }
            }
            return employeesByLocation;
        };

        var getEmployees = function() {
            $scope.bostonEmployees = getEmployeeCollectionByLocation('Boston', $rootScope.selectLanguage);
            $scope.newYorkEmployees = getEmployeeCollectionByLocation('New York', $rootScope.selectLanguage);
        };

        getEmployees();

        $scope.$watch('selectLanguage', function(newValue, oldValue){
            if(newValue !== oldValue) {
                getEmployees();
            }
        });

    }]);
