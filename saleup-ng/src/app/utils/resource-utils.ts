import { environment } from "@env/environment";

export class ResourceUtils {
    public static getStaticResource(name: string) {
        return environment.apiBaseUrl + '/resource/' + name;
    }
}