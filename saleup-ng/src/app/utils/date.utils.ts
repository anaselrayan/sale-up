export class DateUtils {
    public static getZonedDate(date: Date) {
        let ms = date.getTime();
        ms -= (date.getTimezoneOffset() * 60 * 1000);
        return new Date(ms);
    }
}