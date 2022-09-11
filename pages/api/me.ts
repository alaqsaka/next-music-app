// this is just to get the user, it'll just get me
import { valideRoute } from "../../lib/auth";

export default valideRoute((req, res, user) => {
  res.json(user);
});
