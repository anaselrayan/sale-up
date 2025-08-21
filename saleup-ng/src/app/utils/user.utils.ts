import { environment } from "@env/environment";
import { User } from "@module/users/models/user.model";

export class UserUtils {

    public static getUserImageSrc(user: User) {
        if (user.imageUrl)
            return environment.apiBaseUrl + '/user/image/' + user.userId + '/' + user.imageUrl;
        return 'assets/images/users/placeholder.png';
    }

    public static getUserImage(username: string | undefined) {
        if  (username)
            return (environment.apiBaseUrl + '/user/image/' + username) || 'assets/images/users/placeholder.png';
        return  'assets/images/users/placeholder.png';
    }

}