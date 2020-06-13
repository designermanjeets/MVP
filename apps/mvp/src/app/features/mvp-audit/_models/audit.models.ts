export interface AuditModel {
    Action: string;
    User: string;
    Office: string;
    IPAddress: string;
    DateTimeStamp: any;
}

export const AUDIT_DATA: AuditModel[] = [
    { Action: 'PDF Export', User: 'Tiffeny', Office: 'TransLink', IPAddress: '10.167.89.90', DateTimeStamp: '1590863383194' },
    { Action: 'PDF Export', User: 'John Doe', Office: 'City of Delta', IPAddress: '10.167.89.90', DateTimeStamp: '1590863383194' },
    { Action: 'PDF Export', User: 'Tiffeny', Office: 'TransLink', IPAddress: '10.167.89.90', DateTimeStamp: '1590863383194' },
    { Action: 'PDF Export', User: 'Tiffeny', Office: 'TransLink', IPAddress: '10.167.89.90', DateTimeStamp: '1590863383194' },
    { Action: 'PDF Export', User: 'John Doe', Office: 'City of Delta', IPAddress: '10.167.89.90', DateTimeStamp: '1590863383194' },
    { Action: 'PDF Export', User: 'John Doe', Office: 'City of Delta', IPAddress: '10.167.89.90', DateTimeStamp: '1590863383194' }
];