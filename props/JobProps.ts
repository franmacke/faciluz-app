import { AccountProps } from "./UserProps";

export interface JobProps {
    "job_id": number,
    "priority": string,
    "shop": string,
    "category": Array<string>,
    "active": boolean,
    "description": string,
    "date_created": string,
    "date_scheduled": string | null,
    "date_completed": string | null,
    "complaint": number | null,
    "client": null | AccountProps,
    "worker": null | AccountProps,
    "creator": null | AccountProps,
    "state_history": Array<StateProps>
}

export interface StateProps {
    "id": number,
    "creator": AccountProps,
    "created": string,
    "status": string,
    "substatus": string,
    "description": string
}