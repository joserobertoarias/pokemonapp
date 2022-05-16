import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import * as moment from 'moment';
import { usuarioDTO } from 'src/app/models/usuario_perfil';
import { toBase64 } from 'src/app/utilidades';

@Component({
  selector: 'app-formulario-perfil',
  templateUrl: './formulario-perfil.component.html',
  styleUrls: ['./formulario-perfil.component.css']
})
export class FormularioPerfilComponent implements OnInit {

  @Output()
  onSubmit: EventEmitter<usuarioDTO> = new EventEmitter<usuarioDTO>();

  @Input()
  usuario_Perfil: usuarioDTO;

  maxDate: Date;
  minDate: Date;
  mayor18: boolean = false;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  hobieCtrl = new FormControl();
  filteredhobies: Observable<string[]>;
  hobies: string[] = [];
  allhobies: string[] = [    
  'Jugar Futboll',
  'Jugar Basketboll',
  'Jugar Tennis',
  'Jugar Voleibal',
  'Jugar Fifa',
  'Jugar Videojuegos'];

  @ViewChild('hobieInput') hobieInput: ElementRef<HTMLInputElement>;
  
  constructor(private formBuilder: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 18, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

   }

  form: FormGroup;

  ngOnInit(): void {

    this.filteredhobies = this.hobieCtrl.valueChanges.pipe(
      startWith(null),
      map((hobie: string | null) => (hobie ? this._filter(hobie) : this.allhobies.slice())),
    );

    this.form = new FormGroup({
      nombre: new FormControl('',{validators:[Validators.required]}),
      pasatiempo: new FormControl(''),
      cumpleanios: new FormControl('',{validators:[Validators.required]}),
      documento: new FormControl(''),
      foto: new FormControl(''),
      fotoBase64: new FormControl(''),
      edad: new FormControl('')
    });

    if (this.usuario_Perfil != undefined){
      this.form.patchValue(this.usuario_Perfil);
      this.usuario_Perfil.pasatiempo.forEach((valor: string)=> {
        this.hobies.push(valor);
      });
    }

  }

  setMayor18(){
    let fechaCumple = moment(this.form.get("cumpleanios").value);
    let fechaActual = moment();
    let years = fechaActual.diff(fechaCumple, 'years');
    if (years >= 18) {
      this.mayor18 = true;
    }else{
      this.mayor18 = false;
    }
    this.form.get("edad").setValue(years);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.hobies.push(value);
    }
    event.chipInput!.clear();

    this.hobieCtrl.setValue(null);
  }

  remove(hobie: string): void {
    const index = this.hobies.indexOf(hobie);

    if (index >= 0) {
      this.hobies.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.hobies.push(event.option.viewValue);
    this.hobieInput.nativeElement.value = '';
    this.hobieCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allhobies.filter(hobie => hobie.toLowerCase().includes(filterValue));
  }


  archivoSeleccionado(file){
    this.form.get("foto").setValue(file);
    let imgBase64: string;
    toBase64(file).then((value: string) => imgBase64 = value)
    .catch(error => console.log(error));
    this.form.get("fotoBase64").setValue(imgBase64);
  }

  Guardar():void{

    let pasatiempos = this.hobies.map(valor => valor);
    this.form.get("pasatiempo").setValue(pasatiempos);

    this.onSubmit.emit(this.form.value);
  }

}
