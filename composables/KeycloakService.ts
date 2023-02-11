import Keycloak from 'keycloak-js'

const keycloakInstance = new Keycloak()

interface CallbackOneParam<T1 = void, T2 = void> {
  (param1: T1): T2
}
/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const Login = (onAuthenticatedCallback: CallbackOneParam) => {
  keycloakInstance
    .init({ onLoad: 'login-required' })
    .then(function (authenticated) {
      authenticated ? onAuthenticatedCallback() : alert('non authenticated')
    })
    .catch((e) => {
      console.dir(e)
      console.log(`keycloak init exception: ${e}`)
    })
}

const LogOut = () => {
  keycloakInstance.logout()
}

const KeyCloakService = {
  CallLogin: Login,
  CallLogOut: LogOut,
  instance: keycloakInstance
}

export default KeyCloakService
