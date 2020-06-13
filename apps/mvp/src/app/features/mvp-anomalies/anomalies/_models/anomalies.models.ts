export interface AnomaliesModel {
    Operator: string;
    Anomalies: string;
}

export interface DeviationsModel {
    Operator: string;
    Deviations: string;
}

export interface DeviationsPopModel {
    DateTimeStamp: number;
    Deviations: string;
}

export const ANOMALIES_DATA: AnomaliesModel[] = [
    { Operator: 'Lime', Anomalies: '42 (-5)' },
    { Operator: 'Hopr', Anomalies: '28 (+10)' }
];

export const DEVIATION_DATA: DeviationsModel[] = [
    { Operator: 'Lime', Deviations: '42 (-5)' },
    { Operator: 'Hopr', Deviations: '28 (+10)' }
];

export const DEVIATION_POP_DATA: DeviationsPopModel[] = [
    { DateTimeStamp: 1590863383194, Deviations: '6' },
    { DateTimeStamp: 1390863383194, Deviations: '6' },
    { DateTimeStamp: 1290863383194, Deviations: '6' },
    { DateTimeStamp: 1190863383194, Deviations: '6' }
];

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

export const anomalyData = {
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
            "Hopr":[
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
            ]
        }
    ]
};