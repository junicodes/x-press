
export type SignInErrorType = { 
    email?: string, 
    password?: string 
}

export type SignUpErrorType = { 
    firstname?: string,
    lastname?: string,
    email?: string, 
    password?: string 
}

export type SignInFormValue = {
    email: string,
    password: string
}

export type SignUpFormValue = {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}