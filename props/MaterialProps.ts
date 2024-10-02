import { AccountProps } from "./UserProps";


export interface MaterialProps {
    "material_id": number,
    "material_url": string,
    "upload_date": string,
    "uploader": AccountProps,
    "job": number,
    "type": string,
    "validator": AccountProps | null,
    "validate_date": string | null,
}