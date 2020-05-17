export interface TripElement {
    trip: string;
    lime: string;
    bird: string;
    members: string;
    casual: string
}
export const tripdata: TripElement[] = [
    { trip: 'Avg. Disatance (meters)', lime: '649', bird: '649', members: '649', casual: '649' }, // trip: 'avgdistance',
    { trip: 'Avg. Duration (min)', lime: '5:19', bird: '5:19', members: '5:19', casual: '5:19' },
    { trip: 'Avg. Trips per day',  lime: '750', bird: '750', members: '750', casual: '750' },
    { trip: 'Total Trips',  lime: '935, 500', bird: '600, 000', members: '1,567,890', casual: '1,110,134' }
];

export const displayedColsTrips: string[] = [ 'trip', 'lime', 'bird', 'members', 'casual' ]

export enum TRIPCONST {
    avgdistance = 'AVG Distance'
}

export const colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
};

export interface TripPurposeElement {
    tripStart: string;
    tripEnd: string;
    tripPercentage: string;
}

export const tripPurposedata: TripPurposeElement[] = [
    { tripStart: 'Public/Recreation', tripEnd: 'Public/Recreation, Commercial, Residential', tripPercentage: '62, 55, 29' },
    { tripStart: 'Public/Recreation', tripEnd: 'Public/Recreation, Commercial, Residential', tripPercentage: '32, 85, 69' },
    { tripStart: 'Public/Recreation', tripEnd: 'Public/Recreation, Commercial, Residential', tripPercentage: '52, 35, 19' }
];

export const displayedColsPurpose: string[] = [ 'tripStart', 'tripEnd', 'tripPercentage' ]
