export const fleetModes = {
    "Modes": [{
            modeName: 'E-Bike',
            percentage: '31',
        },
        {
            modeName: 'BIKES',
            percentage: '31',
        },
        {
            modeName: 'SCOOTERS',
            percentage: '93',
        }
    ]
};

export const fleetInsights = {
"Fleet insights": [{
                  "LIME":
                  {
                      "WellParked": "75%",
                      "Equity" : "935,000",
                      "Co2Footprint": "935,500",
                      "Maintenence" : {
                          "date": "dateTime",
                          "count": "50"
                      },
                      "Vehicle density": {
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
              },
              {
                "HOPR MEMBERS": 
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
                          "count": "500",
                          "capped": "450",
                          "available": "430",
                          "outOfService": "20"
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
                'HOPR CASUAL': 
                  {
                      "WellParked": '75%',
                      "Equity" : '935,000',
                      "Co2Footprint": '935,500',
                      "Maintenence" : {
                          "date": 'dateTime',
                          "count": '50'
                      },
                      "Vehicledensity": {
                          "min": 'SURREY',
                          "max": 'DOWNTOWN'
                      },
                      "VehicleActivity": {
                          "min": 'SURREY',
                          "max": 'DOWNTOWN'
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