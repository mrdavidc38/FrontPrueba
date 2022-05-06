export class RespuestaModelo <T> {
 data : T;
 mensaje : Mensaje;
}


export class Mensaje{
    error: boolean;
    mensaje : string;
}