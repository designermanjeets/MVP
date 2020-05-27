export const fleetModes = {
    "Modes": [
        {
            modeName: "E-Bike",
            percentage: "31",
        },
        {
            modeName: "BIKES",
            percentage: "31",
        },
        {
            modeName: "SCOOTERS",
            percentage: "93",
        }
    ]
};

export const fleetInsights = {
"Fleet insights": [{
                  "LIME":
                  {
                      "WellParked": "75% (+18%)",
                      "Equity" : "935,000",
                      "Co2Footprint": "935,500",
                      "Maintenence" : {
                          "date": "dateTime",
                          "count": "50"
                      },
                      "Vehicledensity": {
                          "min": "SURREY",
                          "max": "DOWNTOWN"
                      },
                      "VehicleActivity": {
                          "min": "SURREY",
                          "max": "DOWNTOWN"
                      },
                      "TotalVehicles": {
                          "count": "500",
                          "capped": "450",
                          "available": "430",
                          "outOfService": "20"
                     },
                     "Utilization" : {
                      "timeline": [{
                        "07 PM": "1140",
                        "08 PM": "1110",
                        "09 PM": "1130",
                        "10 PM": "1100",
                        "11 PM": "1120"
                      }]
                     }
                  }  
              },{
                "BIRD":
                {
                    "WellParked": "75% (+26%)",
                    "Equity" : "935,000",
                    "Co2Footprint": "935,500",
                    "Maintenence" : {
                        "date": "dateTime",
                        "count": "50"
                    },
                    "Vehicledensity": {
                        "min": "SURREY",
                        "max": "DOWNTOWN"
                    },
                    "VehicleActivity": {
                        "min": "SURREY",
                        "max": "DOWNTOWN"
                    },
                    "TotalVehicles": {
                        "count": "500",
                        "capped": "450",
                        "available": "430",
                        "outOfService": "20"
                   },
                   "Utilization" : {
                    "timeline": [{
                      "07 PM": "1120",
                      "08 PM": "1130",
                      "09 PM": "1110",
                      "10 PM": "1110",
                      "11 PM": "1130"
                    }]
                   }
                }  
            },
              {
                "HOPR MEMBERS": 
                  {
                      "WellParked": "75% (-18%)",
                      "Equity" : "935,000",
                      "Co2Footprint": "935,500",
                      "Maintenence" : {
                          "date": "dateTime",
                          "count": "50"
                      },
                      "Vehicledensity": {
                          "min": "SURREY",
                          "max": "DOWNTOWN"
                      },
                      "VehicleActivity": {
                          "min": "SURREY",
                          "max": "DOWNTOWN"
                      },
                      "TotalVehicles": {
                          "count": "1500",
                          "capped": "2000",
                          "available": "830",
                          "outOfService": "50"
                     },
                     "Utilization" : {
                      "timeline": [{
                        "07 PM": "1110",
                        "08 PM": "1130",
                        "09 PM": "1120",
                        "10 PM": "1130",
                        "11 PM": "1100"
                      }]
                     }
                  }  
              },
              {
                "HOPR CASUAL": 
                  {
                      "WellParked": "75%",
                      "Equity" : "935,000",
                      "Co2Footprint": "935,500",
                      "Maintenence" : {
                          "date": "dateTime",
                          "count": "50"
                      },
                      "Vehicledensity": {
                          "min": "SURREY",
                          "max": "DOWNTOWN"
                      },
                      "VehicleActivity": {
                          "min": "SURREY",
                          "max": "DOWNTOWN"
                      },
                      "TotalVehicles": {
                          "count": "600",
                          "capped": "550",
                          "available": "30",
                          "outOfService": "80"
                     },
                     "Utilization" : {
                      "timeline": [{
                        "07 PM": "1140",
                        "08 PM": "1130",
                        "09 PM": "1110",
                        "10 PM": "1120",
                        "11 PM": "1100"
                      }]
                     }
                  }
              }
          ]
        }

        
export const colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
};

export const displayedColsfleet: string[] = [ 'tripstart', 'tripend', 'tripPercentage' ];

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