import { AccountProps } from "./UserProps";


export interface MaterialProps {
    "material_id": number,
    "material_url": string,
    "upload_date": string,
    "uploader": AccountProps,
    "job": number
}