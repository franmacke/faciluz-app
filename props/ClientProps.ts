import { AccountProps } from "./UserProps"


export interface ClientProps {
    "id": number,
    "account": AccountProps,
    "address": AddressProps
}

export interface AddressProps {
    "id": number,
    "address_name": string,
    "street_number": string,
    "floor": string | null,
    "door_number": string | null,
    "neiborhood": string
}