import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';



const listPersonas: Persona[] = [
  { Nombre: "Tomas", Apellido: "Perez", Correo: "tperez@gmail.com", TipoDocumento: "DPI", Documento:"1234 11233 0608", FechaNacimiento: new Date },
  { Nombre: "Juan", Apellido: "Toc", Correo: "jtoc@gmail.com", TipoDocumento: "DPI", Documento:"2345 223344 0608", FechaNacimiento: new Date },

];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})

export default class ListPersonasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'tipoDocumento', 'documento', 'fechaNacimiento'];
  //dataSource = listPersonas;
  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator!: MatPaginator | undefined;

  constructor() {
    this.dataSource = new MatTableDataSource(listPersonas);
   }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      //this.dataSource.paginator = this.paginator;
  }


}
