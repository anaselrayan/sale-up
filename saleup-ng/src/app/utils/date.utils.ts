export class DateUtils {
    public static getZonedDate(date: Date) {
        let ms = date.getTime();
        ms -= (date.getTimezoneOffset() * 60 * 1000);
        return new Date(ms);
    }

    public static getMonthName(month: number): string {
        switch(month) {
            case 1: return 'JAN';
            case 2: return 'FEB';
            case 3: return 'MAR';
            case 4: return 'APR';
            case 5: return 'MAY';
            case 6: return 'JUN';
            case 7: return 'JUL';
            case 8: return 'AUG';
            case 9: return 'SEP';
            case 10: return 'OCT';
            case 11: return 'NOV';
            case 12: return 'DEC';
            default: return '';
        }   
    }

    public static getStringTimestamp(): string {
        const now = new Date();
        const pad = (n: number) => n.toString().padStart(2, '0');

        const year = now.getFullYear();
        const month = pad(now.getMonth() + 1);
        const day = pad(now.getDate());
        const hours = pad(now.getHours());
        const minutes = pad(now.getMinutes());
        const seconds = pad(now.getSeconds());

        return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
    }

}