import { Component } from '@angular/core';
import { EmployeeService } from '../Service/Employee.service';
import { Employee } from '../Model/employee';

@Component({  
  templateUrl: './CustomerApp.SupplierView.html',  
})

export class SupplierComponent {
  employees = new Array<Employee>();

  constructor( empService:EmployeeService ) {

    empService.getEmployees().subscribe(response => 
    {
      this.employees = response.map(item => 
      {
        return new Employee( 
            item.id,
            item.name,
            item.status
        );
      });
    });

  }

}//End of the Class
