function diaryController($scope) {
    $scope.title = "Diario";
    $scope.entries = [
        {
            "title": "Title 1",
            "content": "Testing 123",
            "date": "13/3/2014"
        },
        {
            "title": "Title 2",
            "content": "Testing 123",
            "date": "13/3/2014"
        },
        {
            "title": "Title 3",
            "content": "Testing 123",
            "date": "13/3/2014"
        }
    ];
    $scope.currentdate = new Date();

    $scope.range = function (num) {
        return new Array(num);
    }
}