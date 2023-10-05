import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private apiKey: string = process.env.FIREBASE_KEY;
    constructor(private http: HttpClient) { }


    singUp(email: string, password: string) {
        this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .subscribe(res => {
                console.log(res);
            })

    }
}