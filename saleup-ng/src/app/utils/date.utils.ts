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

}