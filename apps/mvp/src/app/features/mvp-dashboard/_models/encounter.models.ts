export const ENCOUNTER = {
    "Encounters": {
        "TotalEncounters": 200, 		//can be used for pagination for the table.
        "Modes": [
            {
                "Name": "E-Bikes",
                "Value": "31%",
                "RelatedInsights": {
                    "Description": "38% of the ....",
                    "IsEscalated": 1, //dont show the ESCALATE button
                    "TimeStamp": "1590863383194"
                }
            },
            {
                "Name": "Bikes",
                "Value": "38%",
                "RelatedInsights": {
                    "Description": "38% of the ....",
                    "IsEscalated": 1, //dont show the ESCALATE button
                    "TimeStamp": "1590863383194"
                }
            },
            {
                "Name": "Scooters",
                "Value": "16%",
                "RelatedInsights": {
                    "Description": "38% of the ....",
                    "IsEscalated": 1, //dont show the ESCALATE button
                    "TimeStamp": "1590863383194"
                }
            }
        ],
        "PedestrianInsights": {
            "MostRiderGenerators": {
                "Locations": ["SURREY", "UBC OKANAGAN"],
                "RelatedInsights": {
                    "Description": "Location where a significatn number of significatn number of significatn number of significatn number of significatn number of"
                }
            },
            "MostRiderAttractors": {
                "Locations": ["SURREY", "UBC OKANAGAN"],
                "RelatedInsights": {
                    "Description": "Location where a significatn number of significatn number of significatn number of significatn number of"
                }
            }
        },
        "Operator": [
            {
                "OperatorName": "LIME",
                "EncountersTimeLines": [
                    {
                        "TimeInterval": "1590863383194",
                        "Count": "4110"
                    },
                    {
                        "TimeInterval": "1590863383194",
                        "Count": "4200"
                    },
                    {
                        "TimeInterval": "1590863383194",
                        "Count": "4130"
                    }
                    //.. Time line for the past 24 hours
                ],
                "EncounterDetails": [
                    {
                        "Condition": {
                            "Subject": "Blocking pedestrian right of way...",
                            "RelatedInsight": {
                                "Description": "Pedestrian right of way....",
                                "Coordinates": {
                                    "Latitude": 134234,
                                    "Longitude": -1242455
                                }
                            }
                        },
                        "ConditionInsights": {
                            "Description": "CONDITIONS:...",
                        },
                        "Severity": {
                            "Subject": "PARTIAL",
                        },
                        "SubjectInsights": {
                            "Description": "SEVERITY:...",
                        },
                        "Category": {
                            "Subject": "ACTUAL"
                        },
                        "CategoryInsights": {
                            "Description": "CATEGORY:...",
                        },
                        "Area": {
                            "Subject": "UBC",
                            "Coordinates": {
                                "Latitude": 134234,
                                "Longitude": -1242455
                            }
                        },
                        "Zone": {
                            "Subject": "PUBLIC"
                        },

                        "Attribute": {
                            "Subject": "SIDEWALK"
                        },
                        "AttributeInsights": {
                            "Description": "ATTRIBUTES:...",
                        },

                        "When": {
                            "Subject": "1590863383194"
                        },

                        "Violation": {
                            "IsAdded": 1 // Show button to add it to violations if value is 0
                        }

                    }, // One row ends in the table for this operator

                ]
            },
            {
                "OperatorName": "BIRD",
                "EncountersTimeLines": [
                    {
                        "TimeInterval": "1590863383194",
                        "Count": "4130"
                    },
                    {
                        "TimeInterval": "1590863383194",
                        "Count": "4190"
                    },
                    {
                        "TimeInterval": "1590863383194",
                        "Count": "4200"
                    }
                    //.. Time line for the past 24 hours
                ],
                "EncounterDetails": [
                    {
                        "Condition": {
                            "Subject": "Blocking pedestrian right of way...",
                            "RelatedInsight": {
                                "Description": "Pedestrian right of way....",
                                "Coordinates": {
                                    "Latitude": 134234,
                                    "Longitude": -1242455
                                }
                            }
                        },
                        "ConditionInsights": {
                            "Description": "CONDITIONS:...",
                        },
                        "Severity": {
                            "Subject": "PARTIAL",
                        },
                        "SubjectInsights": {
                            "Description": "SEVERITY:...",
                        },
                        "Category": {
                            "Subject": "ACTUAL"
                        },
                        "CategoryInsights": {
                            "Description": "CATEGORY:...",
                        },
                        "Area": {
                            "Subject": "UBC",
                            "Coordinates": {
                                "Latitude": 134234,
                                "Longitude": -1242455
                            }
                        },
                        "Zone": {
                            "Subject": "PUBLIC"
                        },

                        "Attribute": {
                            "Subject": "SIDEWALK"
                        },
                        "AttributeInsights": {
                            "Description": "ATTRIBUTES:...",
                        },

                        "When": {
                            "Subject": "1590863383194"
                        },

                        "Violation": {
                            "IsAdded": 0 // Show button to add it to violations if value is 0
                        }

                    }, // One row ends in the table for this operator

                ]
            },
            {
                "OperatorName": "HOPR",
                "EncountersTimeLines": [
                    {
                        "TimeInterval": "1590863383194",
                        "Count": "4270"
                    },
                    {
                        "TimeInterval": "1590863383194",
                        "Count": "4110"
                    },
                    {
                        "TimeInterval": "1590863383194",
                        "Count": "4290"
                    }
                    //.. Time line for the past 24 hours
                ],
                "EncounterDetails": [
                    {
                        "Condition": {
                            "Subject": "Blocking pedestrian right of way...",
                            "RelatedInsight": {
                                "Description": "Pedestrian right of way....",
                                "Coordinates": {
                                    "Latitude": 134234,
                                    "Longitude": -1242455
                                }
                            }
                        },
                        "ConditionInsights": {
                            "Description": "CONDITIONS:...",
                        },
                        "Severity": {
                            "Subject": "PARTIAL",
                        },
                        "SubjectInsights": {
                            "Description": "SEVERITY:...",
                        },
                        "Category": {
                            "Subject": "ACTUAL"
                        },
                        "CategoryInsights": {
                            "Description": "CATEGORY:...",
                        },
                        "Area": {
                            "Subject": "UBC",
                            "Coordinates": {
                                "Latitude": 134234,
                                "Longitude": -1242455
                            }
                        },
                        "Zone": {
                            "Subject": "PUBLIC"
                        },

                        "Attribute": {
                            "Subject": "SIDEWALK"
                        },
                        "AttributeInsights": {
                            "Description": "ATTRIBUTES:...",
                        },

                        "When": {
                            "Subject": "1590863383194"
                        },

                        "Violation": {
                            "IsAdded": 0 // Show button to add it to violations if value is 0
                        }

                    }, // One row ends in the table for this operator

                ]
            }
        ] // Operator array ends
    }
}