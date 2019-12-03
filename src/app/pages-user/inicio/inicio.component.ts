import { Component, OnInit, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { PublicacionesService } from './services/publicaciones.service';
import { publicaciones, comentarios } from './models/publicaciones';
//form
import { FormControl, FormGroup } from '@angular/forms';
//rutas
import { Router } from '@angular/router';
//alerta
import Swal from 'sweetalert2';

import { DatePipe } from '@angular/common';

import { debounceTime } from 'rxjs/operators';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { element } from 'protractor';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  value = "";
  public selectControl2 = new FormControl();
  public selectControl = new FormControl();
  constructor(private service: PublicacionesService, private router: Router, private renderer: Renderer2, public datepipe: DatePipe) { }
  //variables
  filter: any;
  p: any;
  comm:any;
  com: comentarios = {
    'ID_Usuario': '',
    'ID_Publicacion': '',
    'Comentario': ''
  }
  publi: publicaciones = {
    'Titulo': '',
    'Descripcion': '',
    'Usuario': '',
    'ID_Servicio': '',
    'Fecha': new Date(Date.now())
  }
  siT: any;
  an = [];
  usuario: any;
  modal: any;
  pubb: any;
  ok: any;
  user;
  img;
  puls: any;
  ser2: any;
  servicios2: any;
  ser: any;
  servicios: any;
  idSer: any;
  IdFil: any;
  Con: any;
  comen = '';
  ms: any;
  fech: any;
  fecha: any;
  token = "";
  //
  PalMal = ['puta', 'put4', 'Puta', 'PUTA', 'Pucta', 'Put4', 'PUT4', 'pucta', 'puct4', 'Puct4', 'PUCTA', 'PUCT4', 'PHUTA', 'phuta', 'PHUT4', 'phut4', 'Phut4', 'Put@', 'put@', 'PUT@', 'phut@', 'PHUT@', 'Phut@', 'putha', 'Putha', 'PUTHA', 'PUTH4', 'Puth4', 'puth4', 'Putah', 'putah', 'put4h', 'Put4h', 'PUTAH', 'PUT4H', 'prostituta', 'Prostituta', 'Prostitut4', 'PROSTITUTA', 'PROSTITUT4', 'Prostitutha', 'Prostituth4', 'PROSTITUTH4', 'PROSTITUTHA', 'prostitutha', 'prostitut4', 'Sexo', 'Sex0', 'sex0', 'SeXo', 'SEX0', 'SeX0', 'sexo', 'sExo', 'sEx0', 'XXX', 'xxx', 'Porn', 'porn', 'P0rn', 'PORN', 'P0RN', 'p0rn', 'p0RN', 'Porno', 'porno', 'P0rno', 'PORNO', 'P0RN0', 'PORN0', 'P0RNO', 'p0rno', 'porn0', 'p0RN0', 'poRN0', 'Porrno', 'P0rrno', 'P0RRNO', 'PORRN0', 'P0RRN0', 'xXx', 'XxX', 'perra', 'PERR4', 'PERRA', 'perr4', 'p3rra', 'p3rr4', 'P3rra', 'P3rr4', 'Perr4', 'Nopor', 'Nepe', 'nopor', 'nepe', 'NOPOR', 'NEPE', 'N0por', 'N3pe', 'Nop0r', 'Nep3', 'N0p0r', 'Perra', 'N3p3', 'N0P0R', 'N3P3', 'NOPOR', 'NEPE', 'anal', 'Anal', '4nal', '4NAL', 'an4l', 'An4l', '4n4l', '4N4L', 'ANAL', 'Escroto', 'escroto', '3scroto', 'Culero', 'culero', 'CULERO', 'Culer0', 'culer0', 'CULER0', 'puto', 'put0', 'Puto', 'PUTO', 'Pucto', 'Put0', 'PUT0', 'puct0', 'puct0', 'Puct0', 'PUCT0', 'PUCT0', 'PHUT0', 'phuto', 'PHUT0', 'phut0', 'Phut0', 'PutO', 'putO', 'PUTo', 'phutO', 'PHUTo', 'PhutO', 'putho', 'Puth0', 'PUTHO', 'PUTH0', 'Puth0', 'puth0', 'Putoh', 'putoh', 'put0h', 'Put0h', 'PUTOH', 'Cul3ro', 'cul3ro', 'Joto', 'joto', 'Putito', 'putito', 'travesti', 'Travesti', 'Transexual', 'transexual', 'Patriarcado', 'patriarcado', 'Hot', 'hot', 'h0t', 'H0t', 'HOT', 'H0T', 'Vagina', 'vagina', 'VAGINA', 'Vagin4', 'v4agina', 'jueputa', 'Jueputa', 'juepucta', 'Juepucta', 'JUEPUCTA', 'JUEPUTA', 'Pendejo', 'pendejo', 'PENDEJO', 'P3NDEJ0', 'P3NDEJO', 'PENDEJ0', 'pendej0', 'p3ndejo', 'p3ndej0', 'Pendej0', 'P3ndejo', 'P3ndej0', '', 'Pendeja', 'pendeja', 'PENDEJA', 'P3NDEJ4', 'P3NDEJA', 'PENDEJ4', 'pendej4', 'p3ndeja', 'p3ndej4', 'Pendej4', 'P3ndeja', 'P3ndej4', 'Mierda', 'mierda', 'MIERDA', 'CEROTE', 'Cerote', 'cerote', 'SEROTE', 'Serote', 'serote', 'Culo', 'culo', 'CULO', 'Coño', 'coño', 'COÑO', 'Senos', 'senos', 'SENOS', 'Panocha', 'Panochón', 'panochón', 'PANOCHÓN', 'Panochon', 'panochon', 'PANOCHON', 'Panoch4', 'PANOCHA', 'panocha', 'Ojete', 'ojete', 'OJETE', 'Pedorro', 'pedorro', 'PEDORRO', 'PEDORRA', 'Pedorra', 'pedorra', 'Tetas', 'tetas', 'TETAS', 'Mamada', 'mamada', 'MAMADA', 'CACA', 'caca', 'Caca', 'Pija', 'pija', 'PIJA', 'Orto', 'ORTO', 'orto', 'Chimar', 'chimar', 'CHIMAR', 'Coger', 'coger', 'COGER', 'FOLLAR', 'Follar', 'follar', 'Pisar', 'pisar', 'PISAR', 'Culear', 'culear', 'CULEAR', 'Masturbar', 'masturbar', 'MASTURBAR', 'ORGASMO', 'Orgasmo', 'orgasmo', 'Verga', 'VERGA', 'verga', 'Emputado', 'emputado', 'EMPUTADO', 'emputada', 'Emputada', 'EMPUTADA', 'ruca', 'Ruca', 'RUCA', 'Cagado', 'cagado', 'CAGADO', 'Pene', 'PENE', 'pene', 'Zurrar', 'zurrar', 'ZURRAR', 'Pedo', 'pedo', 'PEDO', 'MS', 'ms', 'MS13', 'ms13', 'Ms13', 'XV3', 'xv3', 'xviii', 'xvIII', 'emeese', 'XVIII', 'Maldito', 'maldito', 'MALDITOS', 'MALDITAS', 'MALDITO', 'MALDITA', 'malditos', 'Malditos', 'Malditas', 'malditas', 'Mongol', 'mongol', 'MONGOL', 'MONGOLITO', 'mongolito', 'Mongolito', 'Sexoservidora', 'sexoservidora', 'SEXOSERVIDORA', 'CHUCHA', 'chucha', 'Chucha', 'Pupu', 'PUPU', 'pupu', 'POPO', 'popo', 'Popo'];
  ngOnInit() {
    this.token = localStorage.getItem('x-access-token');
    this.fech = localStorage.getItem('fecha');
    this.usuario = localStorage.getItem('session');
    this.obtenesPublicaciones();
    //user
    this.getUser();
    //servicios
    this.getSer();
    this.getSer2();
    //filtrar
    this.Filtrar();

    this.select();

  }
  Filtrar() {

    this.selectControl.valueChanges
      .subscribe((subscriptionTypeId: number) => {
        const obj = this.servicios.find(item => item._id === subscriptionTypeId);
        this.IdFil = obj;
        if (this.IdFil._id == 'todo') {
          this.obtenesPublicaciones();
        }
        else {
          this.getidServicio();
        }
      });
  }
  getUser() {
    this.service.getIDUser()
      .subscribe(user => {
        this.user = user;
        this.img = this.user.usuario.pathImg;

      });
  }
  getSer() {
    this.service.getServicios()
      .subscribe(ser => {
        this.ser = ser;
        this.servicios = this.ser.servicios;
        this.servicios.unshift({ _id: 'todo', nombre: 'Mostrar todos los datos', descripcion: 'todo' });

      })
  }
  getSer2() {
    this.service.getServicios()
      .subscribe(ser => {
        this.ser2 = ser;
        this.servicios2 = this.ser2.servicios;
      })
  }
  obtenesPublicaciones() {
    this.service.getPublicaciones()
      .subscribe(pubb => {
        this.puls = pubb;
        this.pubb = this.puls.publicaciones;

        var id = this.usuario;
        var items = this.pubb.filter(function (item) {
          return item.Usuario._id != id;
        });
        this.pubb = items;
        this.pubb.sort(function (a, b) {
          a = new Date(a.Fecha);
          b = new Date(b.Fecha);
          return a > b ? -1 : a < b ? 1 : 0;
        });

      })
  }
  //seleccionar
  select() {
    this.selectControl2.valueChanges
      .subscribe((subscriptionTypeId: number) => {
        const obj = this.servicios2.find(item => item._id === subscriptionTypeId);
        this.publi.ID_Servicio = obj._id;
      });
  }
  //get r id de servicios
  getidServicio() {
    this.service.getIDServicio(this.IdFil._id)
      .subscribe(pubb => {
        this.puls = pubb;
        this.pubb = this.puls.publicaciones;
        var id = this.usuario;

        var items = this.pubb.filter(function (item) {
          return item.Usuario != id;
        });

        this.pubb = items;
        this.pubb.sort(function (a, b) {
          a = new Date(a.Fecha);
          b = new Date(b.Fecha);
          return a > b ? -1 : a < b ? 1 : 0;
        });
      })
  }
  //
  //Publicar para cada usuario xd d xd xd 
  publicar() {
    this.publi.Usuario = this.usuario;
    if (this.publi.Titulo != '' && this.publi.Descripcion != '') {
      var titu = this.publi.Titulo.split(" ");
      var des = this.publi.Descripcion.split(" ");
      titu.forEach(element => {
        var items = this.PalMal.filter(function (items) {
          return items == element
        })
        console.log(items);
        if (items.length > 0) {
          this.siT = items;
        }
        else {
          this.siT = this.an;
        }
      });
      des.forEach(element => {
        var items = this.PalMal.filter(function (items) {
          return items == element
        })
        if (items.length > 0) {
          this.siT = items;

        }
        else {
          if (this.siT.length <= 0) {
            this.siT = this.an;
          }
          else {
            console.log(this.siT);
          }

        }
      })
      console.log(this.siT);
      if (this.siT.length <= 0) {
        this.service.postPublicaciones(this.publi)
          .subscribe(pub => {
            Swal.fire(
              'Publicación creada con éxito',
              'Publicación realizada',
              'success'
            )
            console.log(pub);
            this.publi.Titulo = '';
            this.publi.Descripcion = '';
            this.obtenesPublicaciones();
          })
      }

      else {
        Swal.fire(
          'Error esta palabra no esta permitida:  ' + this.siT,
          'Al parecer has ingresado palabras que no son permitidas',
          'warning'
        )
      }
    }
    else {
      Swal.fire(
        'Error',
        'Todos los datos son requeridos',
        'warning'
      )
    }
    console.log(this.publi)
  }
  onKey(event: any){
    this.com.Comentario = event.target.value;
  }
  addComentarios(idP: string) {
    if (this.token != null) {
      this.com.ID_Publicacion = idP;
      this.com.ID_Usuario = this.usuario;
   
     if (this.com.ID_Publicacion != '' && this.com.ID_Usuario != '' && this.com.Comentario != '') {
        this.service.postComentarios(this.com)
          .subscribe(con => {
            Swal.fire(
              'comentario agregado',
              'Su comentario se agregó exitosamente',
              'success'
            )
            this.getComentarios(this.com.ID_Publicacion);
            this.com.Comentario = "";
            this.com.ID_Publicacion = "";
            this.com.ID_Usuario = "";
            console.log(this.com);
          })
      }
      else {
        Swal.fire(
          'Error',
          'Debes de llenar el campo de comentario',
          'warning'
        )
      }
    }
    else {
      Swal.fire({
        title: 'Deseas comentar',
        text: "Para poder realizar un comentario debes iniciar sesión primero",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['../login']);
        }
      });
    }
  }
  getComentarios(id: string) {
    if (this.token != null) {
      this.service.getComentarios(id)
        .subscribe(co => {
          this.Con = co;
          console.log(this.Con);
        })
    }
    else {
      Swal.fire({
        title: 'Deseas comentar',
        text: "Para poder realizar un comentario debes iniciar sesión primero",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['../login']);
        }
      });
    }

  }
  getidCom(id: string) {
    this.com.Comentario = "";
    this.service.getIDComentarios(id)
      .subscribe(s => {
        this.ms = s;
        this.comen = this.ms.Comentario;
        console.log(s);
      })
  }
  mod() {
    this.com.ID_Publicacion = this.ms.ID_Publicacion;
    this.com.ID_Usuario = this.ms.ID_Usuario;
    if (this.com.Comentario != '') {
      Swal.fire({
        title: '¿Desea modificar el comentario?',
        text: "Al modificar no se podrá recuperar el comentario!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, borrar!',
        cancelButtonText: 'No, Cancelar'
      }).then((result) => {
        if (result.value) {
          this.service.puComentario(this.ms._id, this.com)
            .subscribe(
              res => {
                return this.getComentarios(this.ms.ID_Publicacion);
              },
              err => console.log(err)
            )
          Swal.fire(
            'Modificardo!',
            'El comentario se modificó correctamente.',
            'success'
          )
          this.com.Comentario = "";
          this.com.ID_Publicacion = "";
          this.com.ID_Usuario = "";
        }
      });
    }
    else {
      this.com.Comentario = this.ms.Comentario;
      Swal.fire({
        title: '¿Desea modificar el comentario?',
        text: "Al modificar no se podrá recuperar el comentario!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, borrar!',
        cancelButtonText: 'No, Cancelar'
      }).then((result) => {
        if (result.value) {
          this.service.puComentario(this.ms._id, this.com)
            .subscribe(
              res => {
                return this.getComentarios(this.ms.ID_Publicacion);
              },
              err => console.log(err)
            )
          Swal.fire(
            'Modificado!',
            'El comentario se modificó correctamente.',
            'success'
          )
          this.com.Comentario = "";
          this.com.ID_Publicacion = "";
          this.com.ID_Usuario = "";
        }
      });
    }
  }
  eliComentario(id: string, idP: string) {
    Swal.fire({
      title: '¿Desea eliminar el comentario?',
      text: "Al eliminar no se podrá recuperar el comentario!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.value) {
        this.service.deleteComentarios(id)
          .subscribe(
            res => {
              return this.getComentarios(idP);
            },
            err => console.log(err)
          )
        Swal.fire(
          'Eliminado!',
          'El comentario se eliminó correctamente.',
          'success'
        )
      }
    });
  }
  redy(idU: string, id: string) {
    if (this.token != null) {
      this.router.navigate(['/detalles-publi', idU, id]);
    }
    else {
      Swal.fire({
        title: 'Deseas comentar',
        text: "Para poder realizar un comentario debes iniciar sesión primero",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['../login']);
        }
      });
    }
  }
}
