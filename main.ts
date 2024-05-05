import { webClient } from "./src"

const tossId = "teajin"; //toss id 

(async () => {
    const tosslib = new webClient(tossId);

    const TossRes = await tosslib.cashList()

    console.log(TossRes)
})();