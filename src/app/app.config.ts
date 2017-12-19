export class AppConfig {
    static BACK_URL = 'http://127.0.0.1:15001/app_dev.php/api';
    static URL = {
        REGISTER : AppConfig.BACK_URL + '/register',
        LOGIN : AppConfig.BACK_URL + '/login_check',
        GET_USER : AppConfig.BACK_URL + '/user/{username}',
        USER_FOLLOW : AppConfig.BACK_URL + '/user/{id}/follows',
        USER_ABORT_FOLLOW : AppConfig.BACK_URL + '/user/{id}/abort-follows',
        USER_GET_I_FOLLOW : AppConfig.BACK_URL + '/user/{id}/i-follow',
        USER_GET_FOLLOWS_ME : AppConfig.BACK_URL + '/user/{id}/follows-me',
        GET_USER_NODES_POSITIONS : AppConfig.BACK_URL + '/user/{username}/nodes-positions',
        GET_NODE : AppConfig.BACK_URL + '/node/{id}',
        GET_NODES : AppConfig.BACK_URL + '/nodes',
    };
}
