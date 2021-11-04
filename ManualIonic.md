# Crear App Ionic

**Table of Contents**

## Crear

1.  Ejecutar `$ ionic start myApp blank`

        Nota
        myApp: Nombre app

## Ejecutar

1.  Para Ejecutar `$ ionic serve`

## Crear Pagina

1.  Ejecutar `$ ionic g page pages/inicio`

    podemos utilizar `$ --dry-run` y para no generar archivo de pruebas `--spec=false`

2.  Podremos Verificar en "app-routing.module.ts" las rutas que se crean automaticamente de cada página.

3.  crear un ibutton y en atributo poner `routerLink="/alert"` para navegar

## Crear Modulo

1. ionic g module components

## Crear componente

2.  ionic g component components/header

3.  components.module.ts cambiamos

        declarations -> incluimos el componente
        exports -> incluimos componente

4.  Nota todo Module va en imports

5.  en la pagina donde se utiliza ej: alert.module.ts -> imports: componentsModule

6.  en components.module.ts importamos ionicModule

## Crear una lista estatica

1.  En la pagina donde vamos poner la lista en .ts creamos

        interface Listas{
        atributo: tipoDato;
        titulo: string;
        }

2.  Luego de On init damos datos a lista

        lista: Listas[] = [

          {
                icon: 'american-football-outline',
                name: 'Action Sheet',
                redirecTo: '/action-sheet',
           },
        ];

3.  En page.html creamos

        <ion-list>

        <ion-item
        *ngFor="let c of Listas" [routerLink]="c.redirecTo" detail>

        <ion-icon [name]="c.icon" slot="start" color="primary">
        </ion-icon>

        {{c.name}}

        </ion-item>

        </ion-list>

## Obtener datos de externo (json placeholder) con servicio

1.  Creamos un servicio `$ ionic g service services/data`

2.  Nos dirigimos app.module.ts e importamos lo siguiente

        import { HttpClientModule } from '@angular/common/http';
        Nota: en Imports llamar a "HttpClientModule"

3.  Nos dirigimos a el archivo creado data.service.ts y llamamos al servicio http y creamos metodo getUsuarios.

        constructor(private http: HttpClient) {}

        getUsuarios() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
        }

4.  En la pagina que queremos obtener la data nos dirgimos a list.page.ts e importamos el dataService y luego lo llamamos y el observable verificar se impor de rxjs mediante el cual vamos a obtener los datos y mostrar.

        usuarios: Observable<any>;
        constructor(private dataService: DataService) {}

        ngOnInit() {
        this.usuarios = this.dataService.getUsuarios();
        }

5.  En el documento HTML cramos una lista y con ngfor llamamos al aareglo u ojeto que creamos usuarios luego utilizamos sus atributos

        <ion-list>
        <ion-item *ngFor="let user of usuarios | async">
        <ion-label>
                <h3>{{user.name}}</h3>
                <p>{{user.email}}</p>
        </ion-label>
        <ion-label slot="end" class="ion-text-end text-small">
                {{user.phone}}
        </ion-label>
        </ion-item>
        </ion-list>
