import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { UsuarioAcesso } from "../model/usuario-acesso";
import { Usuario } from "../model/usuario";
import { catchError } from 'rxjs/operators';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) {}

  existeEmail(email: string): Observable<Boolean> {
    return this.http.get<Boolean>(
      `${environment.server}usuario/public/existeEmail?email=${email}`
    );
  }

  login(usuario: UsuarioAcesso): Observable<string> {
    return this.http.post(
      `${environment.server}login`,  usuario,  {responseType: 'text'}
    ).pipe<string>(
      catchError(this.handleError<any>('login', [], 'Senha inválida!'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T, message = 'Ocorreu algum problema!') {
    return (error: any): Observable<T> => {

      if ( error.error.message ) {
        alert( error.error.message );
      } else {
        alert( message );
      }

      console.log(`log: ${error}`);
      console.log(`${operation} failed: ${error.error.message}`);

      return;
    };
  }


  cadastro( usuario: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>(
      `${environment.server}usuario/public`, usuario
    );
  }

  obterUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(
      `${environment.server}usuario/obterDadosUsuario`
    );
  }

}
