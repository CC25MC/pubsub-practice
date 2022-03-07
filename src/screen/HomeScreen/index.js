import Action from "./action"
import View from "./view";

const HomeScreen = () => {
    const actions = Action();
    return <View  {...actions} />
}

export default HomeScreen;