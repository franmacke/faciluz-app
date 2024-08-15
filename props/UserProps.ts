

export interface UserProps {
    "id": number,
    "username": string,
    "email": string,
    "last_login": Date | null,
    "date_joined": Date,
    "is_active": boolean,
    "is_staff": boolean,
    "is_superuser": boolean
}

export interface AccountProps {
    "account_id": number,
    "first_name": string,
    "last_name": string,
    "phone_number": string,
    "date_created": Date
}