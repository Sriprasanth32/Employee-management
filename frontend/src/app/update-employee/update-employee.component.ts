import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id:number=0;
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,
    private route:ActivatedRoute,
    private router:Router) {
    
  }
  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id')!;
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    })
  }
  
    onSubmit(){
      this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
        this.getEmployeeList();
      });
      
    }
    getEmployeeList(){
      this.router.navigate(['/employees']);
    }

  
 

}
