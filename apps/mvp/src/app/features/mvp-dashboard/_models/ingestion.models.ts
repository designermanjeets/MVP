export const INGESTION = {
    "Ingestion": [{
        "Operator": [
            {
                "OperatorName": "LIME",
                "Type": "MDS", 	// This is to indicate whether to use "MDS" table or "GBFS" table structure. Another value which could be expected is "GBFS".
                "API": [
                    {
                        "Name": "API Name 1",
                        "Accuracy": {
                            "Subject": "Deviations in 34 vehicles",
                            "RelatedInsights": {
                                "Description": "...",
                                "IsWarning": 1,
                            },
                        },
                        "Precision": {
                            "Latitutde": {
                                "Actual": 3,	// This number would tell how many "x" to display to indicate the precision of values being received from this API endpoint
                                "Expected": 2
                            },
                            "Longitude": {
                                "Actual": 3,	// This number would tell how many "x" to display to indicate the precision of values being received from this API endpoint
                                "Expected": 2
                            }
                        },

                        "Status": {
                            "Subject": "online",
                        },

                        "LastUpdated": {
                            "Subject": "1590863383194"
                        },

                        "MDS Check": {
                            "Subject": "Anomalies",
                            "RelatedInsights": {
                                "Description": "...",
                                "IsWarning": 1,
                            },
                        },

                        "Description": {
                            "Subject": "This API is responsible for getting events related details",
                        },

                        "Type": {
                            "Subject": "PROVIDER"
                        }
                    },
                    {
                        "Name": "API Name 2",
                        "Accuracy": {
                            "Subject": "Deviations in 34 vehicles",
                            "RelatedInsights": {
                                "Description": "...",
                                "IsWarning": 1,
                            },
                        },
                        "Precision": {
                            "Latitutde": {
                                "Actual": 2,	// This number would tell how many "x" to display to indicate the precision of values being received from this API endpoint
                                "Expected": 3
                            },
                            "Longitude": {
                                "Actual": 2,	// This number would tell how many "x" to display to indicate the precision of values being received from this API endpoint
                                "Expected": 3
                            }
                        },

                        "Status": {
                            "Subject": "online",
                        },

                        "LastUpdated": {
                            "Subject": "1590863383194"
                        },

                        "MDS Check": {
                            "Subject": "Anomalies",
                            "RelatedInsights": {
                                "Description": "...",
                                "IsWarning": 1,
                            },
                        },

                        "Description": {
                            "Subject": "This API is responsible for getting events related details",
                        },

                        "Type": {
                            "Subject": "PROVIDER"
                        }
                    },
                    
                    {
                        "Name": "API Name 3",
                        "Accuracy": {
                            "Subject": "Deviations in 34 vehicles",
                            "RelatedInsights": {
                                "Description": "...",
                                "IsWarning": 1,
                            },
                        },
                        "Precision": {
                            "Latitutde": {
                                "Actual": 3,	// This number would tell how many "x" to display to indicate the precision of values being received from this API endpoint
                                "Expected": 2
                            },
                            "Longitude": {
                                "Actual": 3,	// This number would tell how many "x" to display to indicate the precision of values being received from this API endpoint
                                "Expected": 2
                            }
                        },

                        "Status": {
                            "Subject": "offline",
                        },

                        "LastUpdated": {
                            "Subject": "1590863383194"
                        },

                        "MDS Check": {
                            "Subject": "Complete",
                            "RelatedInsights": {
                                "Description": "...",
                                "IsWarning": 1,
                            },
                        },

                        "Description": {
                            "Subject": "This API is responsible for getting events related details",
                        },

                        "Type": {
                            "Subject": "PROVIDER"
                        }
                    }
                ]

            },
            {
                "OperatorName": "HOPR",
                "Type": "GBFS", 	// This is to indicate whether to use "MDS" table or "GBFS" table structure. Another value which could be expected is "GBFS".
                "API": [
                    {
                        "Name": "API Name 1",
                        "Accuracy": {
                            "Subject": "Deviations in 34 vehicles",
                            "RelatedInsights": {
                                "Description": "...",
                                "IsWarning": 1,
                            },
                        },
                        "Precision": {
                            "Latitutde": {
                                "Actual": 3,	// This number would tell how many "x" to display to indicate the precision of values being received from this API endpoint
                                "Expected": 2
                            },
                            "Longitude": {
                                "Actual": 3,	// This number would tell how many "x" to display to indicate the precision of values being received from this API endpoint
                                "Expected": 2
                            }
                        },

                        "Status": {
                            "Subject": "online",
                        },

                        "LastUpdated": {
                            "Subject": "1590863383194"
                        },

                        "GBFS Check": {
                            "Subject": "Anomalies",
                            "RelatedInsights": {
                                "Description": "...",
                                "IsWarning": 1,
                            },
                        },

                        "Description": {
                            "Subject": "This API is responsible for getting events related details",
                        },

                        "Type": {
                            "Subject": "PROVIDER"
                        }
                    },
                    {
                        "Name": "API Name 2",
                        //...Another API object similar to above
                    }
                ]
            }
        ]
    }]
}
