import { PeliculaApiService } from '@/services/pelicula-api.service';
import { Component, Input, forwardRef, Inject, INJECTOR, Injector, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '@/model/pelicula.model';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputWrapperComponent),
      multi: true
    },
  ],
})

export class InputWrapperComponent implements ControlValueAccessor{
  @Input() label: string;
  @Input() type: string = "text";
  @Input() name: string = "";
  @Input() ph: any = "";

  idRuta: string;
  idEdit: number;
  peli!: Pelicula;

  fieldValue = "";
  _formControl: FormControl = new FormControl;

  constructor (@Inject(INJECTOR) private injector: Injector, private route: ActivatedRoute, private peliApi: PeliculaApiService) {
    this.label = '';

    this.idRuta = this.route.snapshot.paramMap.get('id')!;
    this.idEdit = +this.idRuta;

    if (this.idRuta != null)
    {
      this.peliApi.getById(this.idEdit).subscribe(data => {this.peli = data});
    }
  }

  ngAfterViewInit(): void {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      setTimeout(() => {
        console.log(ngControl.path);
        this._formControl = ngControl.control as FormControl;
        });
      }
    }

  onChange: any = () => {}
  onTouch: any = () => {}
  set value(val: string) {
    this.fieldValue = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(obj: any): void {
    this.fieldValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
