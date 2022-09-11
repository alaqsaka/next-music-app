// this is just to get the user, it'll just get me
import { validateRoute } from "../../lib/auth";

export default validateRoute((req, res, user) => {
  res.json(user);
});
