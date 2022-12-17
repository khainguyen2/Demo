import { createPinia } from 'pinia'
import {PiniaLogger} from 'pinia-logger';
const pinia = createPinia()
 
pinia.use(PiniaLogger({
    expanded: true,
}))
 
export default pinia