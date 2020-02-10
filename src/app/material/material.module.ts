import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatDialogConfig,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatSnackBarConfig,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSlideToggleModule
} from '@angular/material';


/*const MAT_DIALOG_GLOBAL_CONFIG : MatDialogConfig = {
  width: '700px',
  disableClose: true,
  hasBackdrop: true
};*/

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatSlideToggleModule
]

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 2500,
  verticalPosition: 'bottom',
  horizontalPosition: 'center'
};

@NgModule({
  imports: [],
  declarations: [],
  exports: [...MATERIAL_MODULES], //aby moduł był widoczny w innych modułach!
  providers: [
    //{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG}
  ]
})
export class MaterialModule { }
