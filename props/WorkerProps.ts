import { AccountProps } from "./UserProps"



export type SpecialityProps = {
    "id": number,
    "name": string
}


export type WorkerProps = {	
    "id": number,
    "account": AccountProps,
    "shop": {
        "id": number,
        "name": string
    },
    "specialities": SpecialityProps[]
}




