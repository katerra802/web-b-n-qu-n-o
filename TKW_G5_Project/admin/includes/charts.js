window.onload = function () {

    var options1 = {
        animationEnabled: true,
        title: {
            text: "Doanh so 2020"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Doanh so (USD)",
            prefix: "$"
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [
                { x: new Date(2017, 0), y: 25060 },
                { x: new Date(2017, 1), y: 27980 },
                { x: new Date(2017, 2), y: 33800 },
                { x: new Date(2017, 3), y: 49400 },
                { x: new Date(2017, 4), y: 40260 },
                { x: new Date(2017, 5), y: 33900 },
                { x: new Date(2017, 6), y: 48000 },
                { x: new Date(2017, 7), y: 31500 },
                { x: new Date(2017, 8), y: 32300 },
                { x: new Date(2017, 9), y: 42000 },
                { x: new Date(2017, 10), y: 52160 },
                { x: new Date(2017, 11), y: 49400 }
            ]
        }]
    };
    $("#chartContainer1").CanvasJSChart(options1);

    var options2 = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "So don bi huy theo thang"
        },
        data: [
            {
                type: "splineArea",
                dataPoints: [
                    { y: 0 },
                    { y: 6 },
                    { y: 14 },
                    { y: 12 },
                    { y: 19 },
                    { y: 14 },
                    { y: 26 },
                    { y: 10 },
                    { y: 22 },
                    { y: 42 },
                    { y: 2 },
                    { y: 16 },
                    { y: 23 }
                ]
            }
        ]
    };
    $("#chartContainer2").CanvasJSChart(options2);


    var chart3 = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        title: {
            text: "Cong cu tim kiem trang web"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 79.45, label: "Google" },
                { y: 7.31, label: "Bing" },
                { y: 7.06, label: "Baidu" },
                { y: 4.91, label: "Yahoo" },
                { y: 1.26, label: "Others" }
            ]
        }]
    });
    chart3.render();
}