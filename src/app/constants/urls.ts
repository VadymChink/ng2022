import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {
  auth:`${API}/auth`,
  users:`${API}/users`,
  cars:`${API}/cars`,
}
export {
  urls
}
