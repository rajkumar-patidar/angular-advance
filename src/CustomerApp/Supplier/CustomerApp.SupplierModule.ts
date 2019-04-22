import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import { HttpClientModule } from '@angular/common/http'; 
import { EmployeeService } from '../Service/Employee.service';

@NgModule({
  declarations: [    
    SupplierComponent
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule, FormsModule, HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
