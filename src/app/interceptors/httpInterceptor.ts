import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const httpInterceptor = function (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>  {
  if (req.url.startsWith('http')) {
    return next(req);
  }

  const cloneReq = req.clone({ url: `http://localhost:4201${req.url}` });
  return next(cloneReq)
}
