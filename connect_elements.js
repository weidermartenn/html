jsPlumb.ready(function() {
    var instance = jsPlumb.getInstance({
        Connector: "Flowchart",
        PaintStyle: { stroke: "#262626", strokeWidth: 3 },
        Endpoint: ["Dot", { radius: 1 }],
        EndpointStyle: { fill: "#262626" },
        Container: "tp-1"
    });

    instance.connect({
        source: "block1",
        target: "block2",
        anchors: ["Right", "Left"]
    });

    instance.connect({
        source: "block2",
        target: "block3",
        anchors: ["Right", "Left"]
    });

    instance.connect({
        source: "block1",
        target: "v-3",
        anchors: ["Top", "Bottom"]
    });
    instance.connect({
        source: "block2",
        target: "v-3",
        anchors: ["Top", "Bottom"]
    });
    instance.connect({
        source: "block3",
        target: "v-3",
        anchors: ["Top", "Bottom"]
    });
    instance.connect({
        source: "s-12",
        target: "i-12",
        anchors: ["Bottom", "Top"]
    });
    instance.connect({
        source: "s-13",
        target: "i-13",
        anchors: ["Bottom", "Top"]
    });
    instance.connect({
        source: "meter1",
        target: "i-13",
        anchors: ["Top", "Bottom"]
    });
    instance.connect({
        source: "meter1",
        target: "i-12",
        anchors: ["Top", "Bottom"]
    });
    instance.connect({
        source: "s-14",
        target: "i-14",
        anchors: ["Bottom", "Top"]
    });
    instance.connect({
        source: "i-14",
        target: "meter2",
        anchors: ["Bottom", "Top"]
    });
    instance.connect({
        source: "s-15",
        target: "i-15",
        anchors: ["Bottom", "Top"]
    });
    instance.connect({
        source: "i-15",
        target: "meter3",
        anchors: ["Bottom", "Top"]
    });
});

jsPlumb.ready(function() {
    var instance = jsPlumb.getInstance({
        Connector: "Flowchart",
        PaintStyle: { stroke: "#262626", strokeWidth: 3 },
        Endpoint: ["Dot", { radius: 1 }],
        EndpointStyle: { fill: "#262626" },
        Container: "tp-2"
    });

    instance.connect({
        source: "block4",
        target: "block5",
        anchors: ["Right", "Left"]
    });

    instance.connect({
        source: "block5",
        target: "block6",
        anchors: ["Right", "Left"]
    });

    instance.connect({
        source: "block4",
        target: "v-4",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "block5",
        target: "v-4",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "block6",
        target: "v-4",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "s-22",
        target: "i-22",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "i-22",
        target: "meter4",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "s-23",
        target: "i-23",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "i-23",
        target: "meter5",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "s-24",
        target: "i-24",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "i-24",
        target: "meter6",
        anchors: ["Bottom", "Top"]
    });
});

jsPlumb.ready(function() {
    var instance = jsPlumb.getInstance({
        Connector: "Flowchart",
        PaintStyle: { stroke: "#262626", strokeWidth: 3 },
        Endpoint: ["Dot", { radius: 1 }],
        EndpointStyle: { fill: "#262626" },
        Container: "tp-3"
    });

    instance.connect({
        source: "block7",
        target: "block8",
        anchors: ["Right", "Left"]
    });

    instance.connect({
        source: "block7",
        target: "v-7",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "block8",
        target: "v-7",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "s-19",
        target: "i-19",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "i-19",
        target: "meter7",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "s-20",
        target: "i-20",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "i-20",
        target: "meter8",
        anchors: ["Bottom", "Top"]
    });
});

// ТП-5
jsPlumb.ready(function() {
    var instance = jsPlumb.getInstance({
        Connector: "Flowchart",
        PaintStyle: { stroke: "#262626", strokeWidth: 3 },
        Endpoint: ["Dot", { radius: 1 }],
        EndpointStyle: { fill: "#262626" },
        Container: "tp-5"
    });

    instance.connect({
        source: "block9",
        target: "block10",
        anchors: ["Right", "Left"]
    });

    instance.connect({
        source: "s-21",
        target: "v-8",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "l-9",
        target: "s-21",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "block9",
        target: "l-9",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "block10",
        target: "l-9",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "s-25",
        target: "i-25",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "i-25",
        target: "meter9",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "s-26",
        target: "i-26",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "i-26",
        target: "meter10",
        anchors: ["Bottom", "Top"]
    });  

    instance.connect({
        source: "c-1",
        target: "l-9",
        anchors: ["Left", "Right"]
    }); 
});

// ТП-6
jsPlumb.ready(function() {
    var instance = jsPlumb.getInstance({
        Connector: "Flowchart",
        PaintStyle: { stroke: "#262626", strokeWidth: 3 },
        Endpoint: ["Dot", { radius: 1 }],
        EndpointStyle: { fill: "#262626" },
        Container: "tp-6"
    });

    instance.connect({
        source: "block11",
        target: "block12",
        anchors: ["Right", "Left"]
    }); 

    instance.connect({
        source: "s-29",
        target: "i-29",
        anchors: ["Bottom", "Top"]
    }); 

    instance.connect({
        source: "i-29",
        target: "meter11",
        anchors: ["Bottom", "Top"]
    }); 

    instance.connect({
        source: "s-30",
        target: "i-30",
        anchors: ["Bottom", "Top"]
    }); 

    instance.connect({
        source: "i-30",
        target: "meter12",
        anchors: ["Bottom", "Top"]
    }); 

    instance.connect({
        source: "block11",
        target: "l-7",
        anchors: ["Top", "Bottom"]
    }); 

    instance.connect({
        source: "block12",
        target: "l-7",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "l-7",
        target: "s-27",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "s-27",
        target: "l-8",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "l-8",
        target: "c-2",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "l-7",
        target: "c-3",
        anchors: ["Right", "Left"]
    });
});

// ТП-7
jsPlumb.ready(function() {
    var instance = jsPlumb.getInstance({
        Connector: "Flowchart",
        PaintStyle: { stroke: "#262626", strokeWidth: 3 },
        Endpoint: ["Dot", { radius: 1 }],
        EndpointStyle: { fill: "#262626" },
        Container: "tp-7"
    });

    instance.connect({
        source: "block13",
        target: "l-3",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "block14",
        target: "l-3",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "l-3",
        target: "s-28",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "s-28",
        target: "l-4",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "l-4",
        target: "c-4",
        anchors: ["Top", "Bottom"]
    });

    instance.connect({
        source: "s-31",
        target: "i-31",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "s-32",
        target: "i-32",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "block13",
        target: "meter13",
        anchors: ["Bottom", "Top"]
    });

    instance.connect({
        source: "block14",
        target: "meter13",
        anchors: ["Bottom", "Top"]
    });
    
});