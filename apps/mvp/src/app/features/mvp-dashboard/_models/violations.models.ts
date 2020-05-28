export const VIOLATIONS = {
    "Violations": {
        "TotalViolations": 100,
        "Operator": [
            {
                "OperatorName": "LIME",
                "LicenseSuspension": {
                    "Category": "TEMPORARY",
                    "DaysLeft": 48,
                    "TotalDays": 72,
                    "RelatedInsight": [
                        {
                            "Subject": "Escalation Detected",
                            "Description": "Operator over deployment detected....",
                            "DateTime": "DateTimeStamp",
                            "IsEscalated": 0 // if 0 show Escalate button, else if 1 dont show Escalate button
                        },
                        {
                            "Subject": "Reason for suspension",
                            "Description": "Operator failed to comply with polic1....\nOperator failed to comply with rebalancing...",
                            "DateTime": "DateTimeStamp",
                            "IsEscalated": 1
                        }
                    ], // RelatedInsight ends
                }, // LicenseSuspension ends
                "PolicyDistribution": [
                    {
                        "Name": "Policy1",
                        "Description": "policy bars deploying vehicles on 152...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 30
                    },
                    {
                        "Name": "Policy2",
                        "Description": "policy bars deploying vehicles on 72...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 20
                    },
                    {
                        "Name": "Policy3",
                        "Description": "policy bars deploying vehicles on 52...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 30
                    },
                    {
                        "Name": "Policy4",
                        "Description": "policy bars deploying vehicles on 62...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 20
                    }
                ],
                "LiasonDetails": {
                    "Name": "LIME SUPPORT",
                    "Call": "1800-....",
                    "Email": "VancouverSupport@li.me"
                },
                "PolicyViolations": [
                    {
                        "Area": "SURREY",
                        "Category": "POLICY",
                        "WhatHappened": {
                            "Subject": "10 improperly parked...",
                            "Description": "Details", // This will be displayed on pop over, not implemented yet.
                            "IsEscalated": 0
                        },
                        "When": "DateTimeStamp",
                        "Resolution": "....",
                        "STATUS": "ACTIVE"
                    },
                    {
                        "Area": "SURREY",
                        "Category": "SUBSCRIBED",
                        "WhatHappened": {
                            "Subject": "Vehicles standing...",
                            "Description": "Details", // This will be displayed on pop over, not implemented yet.
                            "IsEscalated": 1 // if 0 show Escalate button, else if 1 dont show Escalate button
                        },
                        "When": "DateTimeStamp",
                        "Resolution": "vehicle are moved away",
                        "STATUS": "DONE"
                    }
                ]
            }, // First Operator object ends.
            {
                "OperatorName": "BIRD",
                "LicenseSuspension": {
                    "Category": "TEMPORARY",
                    "DaysLeft": 28,
                    "TotalDays": 42,
                    "RelatedInsight": [
                        {
                            "Subject": "Escalation Detected",
                            "Description": "Operator over deployment detected....",
                            "DateTime": "DateTimeStamp",
                            "IsEscalated": 0 // if 0 show Escalate button, else if 1 dont show Escalate button
                        },
                        {
                            "Subject": "Reason for suspension",
                            "Description": "Operator failed to comply with polic1....\nOperator failed to comply with rebalancing...",
                            "DateTime": "DateTimeStamp",
                            "IsEscalated": 1
                        },
                        {
                            "Subject": "Reason for suspension",
                            "Description": "Operator failed to comply with polic1....\nOperator failed to comply with rebalancing...",
                            "DateTime": "DateTimeStamp",
                            "IsEscalated": 1
                        }
                    ], // RelatedInsight ends
                }, // LicenseSuspension ends
                "PolicyDistribution": [
                    {
                        "Name": "Policy1",
                        "Description": "policy bars deploying vehicles on 152...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 30
                    },
                    {
                        "Name": "Policy2",
                        "Description": "policy bars deploying vehicles on 72...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 20
                    },
                    {
                        "Name": "Policy3",
                        "Description": "policy bars deploying vehicles on 52...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 30
                    }
                ],
                "LiasonDetails": {
                    "Name": "BIRD SUPPORT",
                    "Call": "18001-....",
                    "Email": "VancouverSupport@li.me"
                },
                "PolicyViolations": [
                    {
                        "Area": "DOWNTOWN",
                        "Category": "POLICY",
                        "WhatHappened": {
                            "Subject": "10 improperly parked...",
                            "Description": "Details", // This will be displayed on pop over, not implemented yet.
                            "IsEscalated": 0
                        },
                        "When": "DateTimeStamp",
                        "Resolution": "....",
                        "STATUS": "ACTIVE"
                    }
                ]
            },
            {
                "OperatorName": "HOPR",
                "LicenseSuspension": {
                    "Category": "TEMPORARY",
                    "DaysLeft": 28,
                    "TotalDays": 42,
                    "RelatedInsight": [
                        {
                            "Subject": "Escalation Detected",
                            "Description": "Operator over deployment detected....",
                            "DateTime": "DateTimeStamp",
                            "IsEscalated": 0 // if 0 show Escalate button, else if 1 dont show Escalate button
                        }
                    ], // RelatedInsight ends
                }, // LicenseSuspension ends
                "PolicyDistribution": [
                    {
                        "Name": "Policy1",
                        "Description": "policy bars deploying vehicles on 152...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 10
                    },
                    {
                        "Name": "Policy2",
                        "Description": "policy bars deploying vehicles on 72...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 20
                    },
                    {
                        "Name": "Policy3",
                        "Description": "policy bars deploying vehicles on 52...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 20
                    },
                    {
                        "Name": "Policy4",
                        "Description": "policy bars deploying vehicles on 52...",
                        "IsEscalated": 0,
                        "ViolationsDate": "DateTimeStamp, DateTimeStamp, DateTimeStamp",
                        "Percentage": 50
                    }
                ],
                "LiasonDetails": {
                    "Name": "HOPR SUPPORT",
                    "Call": "18002-....",
                    "Email": "VancouverSupport@li.me"
                }
            }
        ]
    }
}

export const TEMP = [
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    },
    {
        OperatorName: "LIME",
        Area: "SURREY",
        Category: "POLICY",
        Resolution: "....",
        STATUS: "ACTIVE",
        WhatHappened: {Subject: "10 improperly parked...", Description: "Details", IsEscalated: 0},
        When: "DateTimeStamp"
    }
]