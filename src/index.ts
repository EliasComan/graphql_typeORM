import APP from "./app";
import { createConnect } from './db';

async function main () {
try {
    await createConnect()
    APP.listen(3000)
} catch (error) {
    console.log(error)
}
}

main()
