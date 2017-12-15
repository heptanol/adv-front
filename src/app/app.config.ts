export class AppConfig {
    static BACK_URL = 'http://127.0.0.1:15001/app_dev.php';
    static URL = {
        REGISTER : AppConfig.BACK_URL + '/api/register',
        LOGIN : AppConfig.BACK_URL + '/api/login_check',
        GET_USER : AppConfig.BACK_URL + '/api/user/{username}',
        USER_FOLLOW : AppConfig.BACK_URL + '/api/user/follows/{id}',
        USER_ABORT_FOLLOW : AppConfig.BACK_URL + '/api/user/abort-follows/{id}',
        GET_USER_NODES : AppConfig.BACK_URL + '/api/user/{username}/nodes',
        GET_NODE : AppConfig.BACK_URL + '/api/node/{id}',
    };
}
