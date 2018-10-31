appModule.controller("SkillsController", function($scope){
    var skillbars = angular.element(document.querySelectorAll(".skillbar"));
    
    angular.forEach(skillbars, (skillbar) => {
        let percentage = skillbar.children[2].innerText;
        skillbar.children[1].style.width = percentage;
    });
});