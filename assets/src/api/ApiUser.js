import ApiService from "../helpers/ApiService";
import {urlBacklogApi} from "../helpers/UrlBacklogService";

export const getUser = (locale, data) => {
    return ApiService.post(urlBacklogApi(locale) + "/api/users/check_user" ,data)
}