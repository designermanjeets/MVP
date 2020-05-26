export const tripData = {
    "TRIP":[
        {
            "total trips":"4861",
            "last updated":"5 mins ago",
            "lime":[
                {
                    "avg.distance":"659 (+16%)",
                    "avg.duration":"5:19 (-10%)",
                    "avg.trips":"750",
                    "totaltrips":"900,000",
                    "timeline":[
                        {
                            "07 PM":"800",
                            "08 PM":"1200",
                            "09 PM":"700",
                            "10 PM":"1600"
                        }
                    ]
                }
            ],
            "bird":[
                {
                    "avg.distance":"500 (+21%)",
                    "avg.duration":"5:19 (-14%)",
                    "avg.trips":"750 (+15%)",
                    "totaltrips":"900,000",
                    "timeline":[
                        {
                            "07 PM":"500",
                            "08 PM":"700",
                            "09 PM":"1100",
                            "10 PM":"1300"
                        }
                    ]
                }
            ],
            "members":[
                {
                    "avg.distance":"659 (+16%)",
                    "avg.duration":"5:19 (-4%)",
                    "avg.trips":"750",
                    "totaltrips":"900,000",
                    "timeline":[
                        {
                            "07 PM":"1000",
                            "08 PM":"900",
                            "09 PM":"1000",
                            "10 PM":"1100"
                        }
                    ]
                }
            ],
            "casual":[
                {
                    "avg.distance":"659 (+22%)",
                    "avg.duration":"5:19 (+15%)",
                    "avg.trips":"750",
                    "totaltrips":"900,000",
                    "timeline":[
                        {
                            "07 PM":"800",
                            "08 PM":"1100",
                            "09 PM":"1000",
                            "10 PM":"1300"
                        }
                    ]
                }
            ]
        }
    ]
};

export const tripPurposeData = {
    "TRIP PURPOSE": [
		{
		"tripstart" : "PUBLIC",
		"tripend": {
                "PUBLIC": "65%",
                "COMMERCIAL": "50%",
                "RESIDENTIAL": "60%"
            }
		},
        {
		"tripstart" : "COMMERCIAL",
		"tripend": {
                "PUBLIC": "65%",
                "COMMERCIAL": "50%",
                "RESIDENTIAL": "60%"
            }
		},
		{
		"tripstart" : "RESIDENTIAL",
		"tripend": {
                "PUBLIC": "65%",
                "COMMERCIAL": "50%",
                "RESIDENTIAL": "60%"
            }
		}
    ],
    "TRIP CATEGORY": {
        "COMMUTE": "30",
        "LEISURE": "25",
        "BUSINESS": "25",
        "OTHERS": "20"
    }
};

export const colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
};

export const displayedColsPurpose: string[] = [ 'tripstart', 'tripend', 'tripPercentage' ];

export const puposeInputCols: string[] = ['avg.distance', 'avg.duration', 'avg.trips', 'totaltrips'];

export const chartColors = [
    '#5AA454', 
    '#E44D25', 
    '#CFC0BB', 
    '#7aa3e5', 
    '#64E572', 
    '#FF9655', 
    '#FFF263', 
    '#6AF9C4'
]

export const dateTimeLabelFormats = {
    millisecond: '%a, %e %b, %H:%M:%S.%L',
    second: '%a, %e %b, %H:%M:%S',
    minute: '%a, %e %b, %H:%M',
    hour: '%a, %e %b, %H:%M',
    day: '%a, %e %b, %Y',
    week: 'Week from %a, %e %b, %Y',
    month: '%b %Y',
    year: '%Y'
  }
