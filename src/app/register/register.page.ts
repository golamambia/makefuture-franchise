import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { host } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

   isLoading = false;

 page:any;
  email: any;
  password: any;
  res: any;
  f_name: any;
  l_name: any;
  phone_number: any;
  password_confirmation: any;
  address: any;
  refcode:any;
   constructor(public http: Http, public navCtrl: NavController,
    public storage: Storage,public loadingController: LoadingController,
    public alertController: AlertController,
       private menu: MenuController
    ) { }
  ngOnInit() {
  }
async register(){
    const loading = await this.loadingController.create({
    message: 'Checking...'
  });
  const alert = await this.alertController.create({
     message: 'Username and Password is wrong',
      buttons: ['OK']
    });

const namealrt = await this.alertController.create({
     message: 'Please enter name',
      buttons: ['OK']
    });
const lnamealrt = await this.alertController.create({
     message: 'Please enter last name',
      buttons: ['OK']
    });

    const passalrt = await this.alertController.create({
     message: 'Please enter password',
      buttons: ['OK']
    });
    const emailalrt = await this.alertController.create({
     message: 'Please enter email',
      buttons: ['OK']
    });
const conpassalrt = await this.alertController.create({
     message: 'Please enter confirm password',
      buttons: ['OK']
    });
    const phonealrt = await this.alertController.create({
     message: 'Please enter phone no',
      buttons: ['OK']
    });
const addressalrt = await this.alertController.create({
     message: 'Please enter address',
      buttons: ['OK']
    });
const pass_notmatch = await this.alertController.create({
     message: 'Password & Confirm password not match!',
      buttons: ['OK']
    });
  let headers = new Headers();
  
  //       headers.append('Access-Control-Allow-Origin', '*');
 
  if(this.f_name == '' || this.f_name == null){
     
    loading.dismiss();
    namealrt.present();
  }
  else if(this.l_name == '' || this.l_name == null){
     
    loading.dismiss();
    lnamealrt.present();
  }
  else if(this.email == '' || this.email == null){
  loading.dismiss();
  emailalrt.present();
    
  }
  else if(this.phone_number == '' || this.phone_number == null){
  loading.dismiss();
  phonealrt.present();
    
  }
  else if(this.password == '' || this.password == null){
  loading.dismiss();
  passalrt.present();
    
  }else if(this.password_confirmation == '' || this.password_confirmation == null){
  loading.dismiss();
  conpassalrt.present();
    
  }
  else if(this.password != this.password_confirmation){
  loading.dismiss();
  pass_notmatch.present();
    
  }
  else if(this.address != this.address){
  loading.dismiss();
  addressalrt.present();
    
  }
  else{
  await loading.present();
  var data ={
    "f_name": this.f_name,
    "l_name": this.l_name,
    "email": this.email,
    "phone_number": this.phone_number,
     "address": this.address,
    "role_id": 2,
    "password": this.password,
    "password_confirmation": this.password_confirmation,
    "referral_code":this.refcode,
  }
const requestOptions = new RequestOptions({ headers: headers });
  this.http.post(host+'register', data, { headers: headers })
  .subscribe(res => {
    //console.log(res.json());
    this.res = res.json();
    if(this.res.status == 0){
    loading.dismiss();
    this.alertController.create({
      
      message: this.res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    
    }else if(this.res.status == 1){
    this.alertController.create({
      
      message: this.res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
    this.navCtrl.navigateForward('login');
    loading.dismiss();
    }else{
    //alert("Server error");
    loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    loading.dismiss();
  });

  }
  }
 

  onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}

}
