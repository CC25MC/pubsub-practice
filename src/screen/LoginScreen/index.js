import Action from "./action";
import View from "./view";
const LoginScreen = () => {
    const actions = Action();
    return <View  {...actions} />
}

export default LoginScreen;