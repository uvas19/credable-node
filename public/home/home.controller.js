(function () {
    'use strict';

    angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['TokenService', '$rootScope', 'FlashService'];
    function HomeController(TokenService, $rootScope) {
        var vm = this;

        vm.tokenRequest = {
            "locale": "en_US",
            "issuerAuthCode": "MTAwNzQ4OTI=",
            "clientAppID": "CredibleRequestor",
            "panSource": "MANUALLYENTERED",
            "presentationType": ["ECOM"],
            "encPaymentInstrument": "eyJhbGciOiJBMjU2R0NNS1ciLCJpdiI6IjRfcmRsbnBfOUJ0RGdjeF8iLCJ0YWciOiJzbFgzMlpFRU1aSlBtdWItYzA0N2t3IiwiZW5jIjoiQTI1NkdDTSIsInR5cCI6IkpPU0UiLCJraWQiOiJGS0Q1NUU3Uks1MzE2TTZZUTJSQTExbDZzU2dlUHFhTU1EdVVwaFVvUkkzN2VKSXFBIn0.ckwVpJYgVqX7V92VvIBecIrgP3tqENLQqIMn1A8pRHs.m7OGaiMHDZh8qiWH.zU0zyPagopnb0y344_6KjwLY5-A8aEY3L03euTaY709tRibHrJHG_0-MTgpG4mMZMmNFgr3-3GRGZC2k7AlBVMjV_i1_dC-OHRnikWAkXlHPOXlzFoad2lNDam7VpKbV01f0DGGD2B37ZYgCqEoTZL2XbihqH_gh-N2zJH4oskMlob9neL91IwVuCrSPnwA19OARaU_SvQQZ4IUUdKa3rXo6s5vssB0quCFTqo9YenodknR0diZwY5N_vIZybWrhkn3uckNVvzqeofvl-WwYsqAXIE6RDQ6R7mAcGbkkOCSUwSEGr2mxsmnH620-2g.A2OGtM_pEMjyGD7Sn9Sk5w",
            "consumerEntryMode": "KEYENTERED",
            "protectionType": "CLOUD",
            "clientWalletAccountEmailAddress": "mujeeb@visa.com",
            "clientWalletAccountEmailAddressHash": "zmIoP0aEmZTgjK25dalVZcFPhv7peSkHsTp9czJAKYg",
            "location": "123.12345678/-09878768761",
            "ip4address": "10.240.2.123",
            "encRiskDataInfo": "eyJhbGciOiJBMjU2R0NNS1ciLCJpdiI6IktCZk1ZQ3dDTjZYNk5WTkMiLCJ0YWciOiJXVGwxU3ZvR2J2T2RoS3hscGJxazhBIiwiZW5jIjoiQTI1NkdDTSIsInR5cCI6IkpPU0UiLCJraWQiOiJGS0Q1NUU3Uks1MzE2TTZZUTJSQTExbDZzU2dlUHFhTU1EdVVwaFVvUkkzN2VKSXFBIn0.g0d6ls1_El2SwiQ5GtPLthjKacfQelftAv5N04uptzE.QwXTRwqKSwwBcjgX.adwOw8wKLnI_abXAO-tisJGKTe9QzazsKXGGoXz4VaGx4961-824W8YOOJNurFPyA3ipl3Yvvp2q9_80BWaC969Eny6fbAL8q9E5DID5cuUc_WR5kx8mMLepEipC3MB43lutq6mi0pvpTIRgpy6o26i7jV4uptczhtAbyfpz77ZJvX934jmLcftHVQzw9IUxb8y0LGiMZb-R5FKYZLt_j3rnyJoLxud2JkYiD-UJZ0-nxWDeoZk5gvVyUJx10lq0dxsbdvzJKhDd4m1wPoM9WZap7snVqAuTPE3jH0BZPyBM1ceY_X3r0otb6Bpy1bWBf7eutvVZwg_-EiTqPY1lQmj7gFX9hlSxcVmLp3BaiA98n2RDx9oYb4ooBKeWiUoc1myoFd3vYUP7OiwR_n_M7HcmXrTfwB7IR-jN7zfcbWSnKfJOBM729KKoi6zBFFxqiRXGbz7SP9K4TnWTOKB-QItkOxG1Xdb9xqpJCPI11KJrr4c-9zYlbdufOPy3imrUfdI_l1IjfJ3Dqzks0QDyJysGvU_Z_dV0MzkJqaXheNYzXphiP2b1mlnHqIcSdW0kWNVl9HRdVOoulRN7zINqqF-DgAhaR83gvoaBZPwhwUsEb1I_7xTZnW7BfUZgHLuscty-DCYbKilON0yBp0XQTslpiVCpsNm-ODVanF3kYjJJWaBpPZnub-QAmr6eB0LGSY0SoM-tDoC16z_N103FpiGPe5vw_UM-Q96J3EtHLCB4yGD8WX0Z_DOO8fWArzCr2arrwnGVSNa01JpogBgFxoRtPA9mw_nP49ADntkZ5zdK3pRP64hzIv4c_i8HLmLaoAwaEAiVdhsttoVlWCBoMjCEPRXQQzYw7ZWnLbgxRrwImVJpg5R1YDbuHozlbVr8DAsRoRLpxrRpCLY3J_2xkKP5GO-MPERCzOMV1Wt8O3UjoKHN08wj2H1iFwElgnUG_QsAhK60W_Vr1tmJxgdKkMzI_YP1rekasPOURLXfLEqpGoscIyvhhY0tev-j3C7hRGHHCLi4LTCRPatQqgIYuwfdAcvpA5puLKzbhUKpMzPvRJOh0cS80koPMrzY9YMGUO4EIhlWUFO-its8ZlEBY9gGEbX5kOHJcLeKUQ-IzPHIhhxewsdYp1YrysIhichGaMK26RhhmbkzEoU61zKGKV_dC048M4EzID4KEJ_JjLxPSaUFWksS8c6Sr4IeIKldECDYd6SoOor4pCn8gxXeSuB1Rt4aGZ5B0wa_Z8oWV_xU3zx3ttyrKfI1TH0upN7ZiekF0HaY_lTfEZLbuDBLzzWbMsXev9o5dHgMWuF8AwvIWsHivQPFVpzpAxFEmdu0rUEPzfqgZpSFH_kgxRPwtkESm5uDaghcmprY_843juBVqRRehrBrENqmY9sZGYjqs8TrZi_YfTBGxB5Mr8z3CHEh_HcRH9_qS7FYUUHcHQeda2EfH8GhiCb72Gpkh7Z-RoaNYB4EKmWJLbki8IjaIukUnyL32pPvchbfdBjq2yh2l4DhreLqUJNfJitBdrV_HPSoqucdqZMJkD1Ld1YzPrsxOsReUryWu2ArJ_Ke7PAsU7mvTi7W5c_JMjNu6VKzh70H0dkk3yedNSenbc5yJerrAO2IoiGeeLW50bZLmGtsX8DPNj4idtue2yLKCqh8AslQvNt6ibt4BYr1yPFMYbBLO7oMfkaB73z3X2S90CK0pt-nJQG4KQrQaFdhaJJU8uvRgGzqysFHm0JdG3ZjN4Y_qv9yApX0xkiv0kk1VKCPH4HRovdh6-hL5TokQt1gdGKdgGmsiTASErstl0ocixpmbxzYNc22Fola90NCxdQl7SgFzihGVH2GlKiY1vRny_QOEEPCL0DGhpt6Q9lwLQ5BW9s1TdbFa-zAPc4Oi1x_uFu0bwdiJMDNOCCJVDftt8ks6sf8-oOvXe8lYIvbQuTwzWeOc6rZ3UDBeDu4MvH9aNiD2VPVrZ8j9g0RU4oALSqTEOG_Z_LYhWTGM8tIJwK524UK9-tTYiRRxzYD7d8ee6me99jHPl6VTgpCc-tOWEq5OZBR-1P26DHYT9bsHsPf6HBT-2u0T8wBZCFxHXU.Ueg4xzMCImcscZvt6nnX2w"
        };

        // send this if needed ?
        var mockresp = {
            "tokenStatus": "ACTIVE",
            "tokenRequestorID": "1231000263",
            "tokenReferenceID": "I91NOmQefTZbb0wN4FGfgDlqe6wSmIUP",
            "encTokenInfo": "eyJhbGciOiJBMjU2R0NNS1ciLCJpdiI6IkN1bnNjdUVjQV9WU3NXRXkiLCJ0YWciOiJXbVFlaEZwZU1pODFqX3RqZ2lxVFhRIiwiZW5jIjoiQTI1NkdDTSIsInR5cCI6IkpPU0UiLCJraWQiOiJGS0Q1NUU3Uks1MzE2TTZZUTJSQTExbDZzU2dlUHFhTU1EdVVwaFVvUkkzN2VKSXFBIiwiY2hhbm5lbFNlY3VyaXR5Q29udGV4dCI6IlNIQVJFRF9TRUNSRVQiLCJpYXQiOiIxNDQ5MTYxNjQ5In0.edwkjhDdd3EKow85VTDoV9njxHD5450mIgFrBhQsw4U.fzdwD3xkH32WEOpi.Wh19zQgIUjsFP4xSNpOYMEiJ7So0zWa81RU.CJJI0Gx_iB71_Gsn_Fea7Q",
            "last4": "1291",
            "expirationDate": {
                "month": "11",
                "year": "2018"
            }
        };

        vm.provisonToken = function provisonToken() {
            vm.dataLoading = true;
            vm.tokenRequest.clientWalletAccountID = vm.reqId;

            TokenService.ProvisionToken(vm.tokenRequest)
                .then(function (err, res) {
                    if (err){
                        console.log(err);
                        vm.res = JSON.stringify(mockresp, null, '\t');
                    }

                    if(res) {
                        vm.res = JSON.stringify(res['tokenInfo'], null, '\t');
                    }else{
                        vm.res = JSON.stringify(mockresp, null, '\t');
                    }

                    var request = {
                        "locale": "en_US",
                        "issuerAuthCode": "MTAwNzQ4OTI=",
                        "clientAppID": "CredibleRequestor",
                        "panSource": "MANUALLYENTERED",
                        "presentationType": ["ECOM"],
                        "encPaymentInstrument": "eyJhbGciOiJBMjU2R0NNS1ciLCJpdiI6IjRfcmRsbnBfOUJ0RGdjeF8iLCJ0YWciOiJzbFgzMlpFRU1aSlBtdWItYzA0N2t3IiwiZW5jIjoiQTI1NkdDTSIsInR5cCI6IkpPU0UiLCJraWQiOiJGS0Q1NUU3Uks1MzE2TTZZUTJSQTExbDZzU2dlUHFhTU1EdVVwaFVvUkkzN2VKSXFBIn0.ckwVpJYgVqX7V92VvIBecIrgP3tqENLQqIMn1A8pRHs.m7OGaiMHDZh8qiWH.zU0zyPagopnb0y344_6KjwLY5-A8aEY3L03euTaY709tRibHrJHG_0-MTgpG4mMZMmNFgr3-3GRGZC2k7AlBVMjV_i1_dC-OHRnikWAkXlHPOXlzFoad2lNDam7VpKbV01f0DGGD2B37ZYgCqEoTZL2XbihqH_gh-N2zJH4oskMlob9neL91IwVuCrSPnwA19OARaU_SvQQZ4IUUdKa3rXo6s5vssB0quCFTqo9YenodknR0diZwY5N_vIZybWrhkn3uckNVvzqeofvl-WwYsqAXIE6RDQ6R7mAcGbkkOCSUwSEGr2mxsmnH620-2g.A2OGtM_pEMjyGD7Sn9Sk5w"
                    }
                    vm.req = JSON.stringify(request,null, '\t');
                    vm.dataLoading = false;
                });
        };

        initController();

        function initController() {
            vm.pan = "4957031000320007";
            vm.reqId = "0932";
            vm.res = {};
        }

        //function deleteUser(id) {
        //    UserService.Delete(id)
        //    .then(function () {
        //        loadAllUsers();
        //    });
        //}
    }

})();