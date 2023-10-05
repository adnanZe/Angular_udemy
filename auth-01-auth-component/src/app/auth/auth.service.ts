import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private apiKey: string = process.env.FIREBASE_KEY;
    constructor(private http: HttpClient) { }

    singUp(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
                {
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }
            )
            .pipe(
                catchError((errorRes) => {
                    let errorMessage = "An unknown error occurred!";
                    if (!errorRes.error || !errorRes.error.error) {
                        return throwError(errorMessage);
                    }
                    switch (errorRes.error.error.message) {
                        case "EMAIL_EXISTS":
                            errorMessage = "This email exists already!";
                            break;
                        case "EMAIL_NOT_FOUND":
                            errorMessage = "This email does not exist!";
                            break;
                        case "INVALID_PASSWORD":
                            errorMessage = "This password is not correct!";
                            break;
                    }
                    return throwError(errorMessage);
                })
            );
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`, {
            email: email,
            password: password,
            returnSecureToken: true,
        })
    }
}
