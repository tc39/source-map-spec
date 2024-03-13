import { t } from "http://localhost:4507/main.js";

t({ valueOf() { throw new Error() }})
