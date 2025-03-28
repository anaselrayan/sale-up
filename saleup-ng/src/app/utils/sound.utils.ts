export class SoundUtils {
    public static playSaleEffect() {
        var audio = new Audio('assets/sounds/sale-pulse.mp3');
        audio.play();
    }
}