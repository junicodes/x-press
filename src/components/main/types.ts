
export type SignInErrorType = { 
    business_email_address?: string, 
    password?: string 
}

export type SignUpErrorStepOneType = { 
    business_name?: string,
    business_email_address?: string,
    business_phone_number?: string,
    account_no?: string,
}

export type SignUpErrorStepTwoType = { 
    house_no?: string,
    street?: string,
    city?: string,
    contact_name?: string,
    contact_phone_number?: string,
    contact_email_adderess?: string,
    password?: string,
    confirm_password?: string
}

export type SignUpStepOneFromData = {
    business_category: string,
    image: null | {name: string}
}

export type SignUpStepOneFormValue = {
    business_name: string,
    business_email_address: string,
    business_phone_number: string,
    account_no: string,
}

export type SignUpStepTwoFromData = {
    state: string,
}

export type SignUpStepTwoFormValue = {
    house_no: string,
    street: string,
    city: string,
    contact_name: string,
    contact_phone_number: string,
    contact_email_adderess: string,
    password: string,
    confirm_password: string
}
export type SignInFormValue = {
    business_email_address: string,
    password: string
}