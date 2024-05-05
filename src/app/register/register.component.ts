import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../auth/login/login.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  @Output() public loginEvent =  new EventEmitter<string>();
  regForm: FormGroup;
  validUser: boolean = false;


  constructor(private loginServ: LoginService, private router: Router, private http: HttpClient) {
    this.regForm = new FormGroup(
        {
          "firstname": new FormControl('', Validators.required),
          "lastname": new FormControl('', Validators.required),
          "email": new FormControl('', [Validators.required, this.matchRegex("@")]),
          "phone": new FormControl('', [Validators.required, Validators.pattern("\\d{10}"), this.matchLength(10)]),
          "zipcode": new FormControl('', [Validators.required, Validators.pattern("\\d{5}"), this.matchLength(5)]),
          "username": new FormControl('', Validators.required),
          "password": new FormControl('', Validators.required),
          "dob": new FormControl('', Validators.required),
          "status": new FormControl('', Validators.required)
        });
  }

  loginEventEmit(){
    this.loginEvent.emit()
  }

  ngOnInit(): void {

  }

  get firstname() {
    return this.regForm.get('firstname');
  }

  get lastname() {
    return this.regForm.get('lastname');
  }

  get email(){
    return this.regForm.get('email');
  }

  get phone(){
    return this.regForm.get('phone');
  }

  get zipcode(){
    return this.regForm.get('zipcode');
  }

  get username() {
    return this.regForm.get('username');
  }

  get password() {
    return this.regForm.get('password');
  }

  get dob(){
    return this.regForm.get('dob');
  }

  get status(){
    return this.regForm.get('status');
  }

  matchRegex(nameRe: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regexTest = control.value.includes(nameRe);
      return regexTest ? null : {matchRegex: {value: control.value}} ;
    }
  }

  matchLength(targetLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>{
      const lengthTest = control.value.length == targetLength;
      return lengthTest ? null : {matchLength: {value: control.value}};
    }
  }

  submitRegister(){

    const httpOptions = {
      headers: {"Content-Type": "application/json"}
    }
    const body = {"username": this.regForm.value.username, "email": this.regForm.value.email,
      "dob": this.regForm.value.dob, "phone": this.regForm.value.phone, "zipcode":this.regForm.value.zipcode,
      "password":this.regForm.value.password, "name": this.regForm.value.firstname + " " + this.regForm.value.lastname}
    this.http.post<{username: string, result: string}>(this.loginServ.urlStart + "register", body , this.loginServ.getHttpOptions()).subscribe({
      next: ()=>{
        // immediately login with new user credentials
        this.http.post<{ username: string, result: string }>(this.loginServ.urlStart + "login", {"username": body.username, "password": body.password}, this.loginServ.getHttpOptions()).subscribe({
          next: (response)=>{
            this.loginServ.setCurrentUsername(response.username);
            this.router.navigate(["main"]);
          },
          error: error=>{

          }
        })
      },
      error: error=>{
        this.validUser = true;
      }
    })

  }

}
