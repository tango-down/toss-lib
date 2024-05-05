import axios from "axios"

export class webClient {
    tossid : string;

    constructor(
        _tossid : string
    ) {
        this.tossid = _tossid
    }

    async cashList(tossid = this.tossid) {
        const res = await axios.get(this.cashListApi(tossid));
        if(res.data.resultType == "FAIL") return { res : res.data }
        return {res : res.data.success}
    }

    
    cashListApi(tossid : string) {
        return `https://api-public.toss.im/api-public/v3/cashtag/transfer-feed/received/list?inputWord=${tossid}`
    }
}