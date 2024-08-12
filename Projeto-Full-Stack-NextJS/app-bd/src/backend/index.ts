import getAll from "./user/getAll"
import saveUser from "./user/saveUser"

// Padrão Facade
export default class Backend {
    static readonly users = {
        saveUser,
        getAll,
    }
}