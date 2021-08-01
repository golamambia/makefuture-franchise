import { Component, OnInit} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { host } from '../../environments/environment';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  isLoading = false;

 page:any;
  email: any;
 password: any;
  res: any;
   constructor(public http: Http,
   public navCtrl: NavController, 
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   
   ) {
   	
   }
  ngOnInit() {
  }
   async submit(){
const loading = await this.loadingController.create({
    message: 'Checking...'
  });
  const alert = await this.alertController.create({
     message: 'Username and Password is wrong',
      buttons: ['OK']
    });

const usernamealrt = await this.alertController.create({
     message: 'Please enter email',
      buttons: ['OK']
    });


  const erroralrt = await this.alertController.create({
     message: 'Sorry,something went wrong',
      buttons: ['OK']
    });
    const successalrt = await this.alertController.create({
     message: 'We have emailed your password',
      buttons: ['OK']
    });
 
var headers = new Headers();
	if(this.email == '' || this.email == null){
		 
		loading.dismiss();
		usernamealrt.present();
	}else{
	 await loading.present();
	var data ={
		"email": this.email,
		//"password": this.password
	}

	this.http.post(host+'reset-user-password', data, { headers: headers })
	.subscribe(res => {
		console.log(res.json());
		this.res = res.json();
			if(this.res.status == false){
		loading.dismiss();
		this.alertController.create({
      
      message: this.res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
		
		}else  if(this.res.status == true){
		//this.storage.set("userDetails", this.res);
		//this.storage.set("token", this.res.api_token);
		//this.navCtrl.navigateForward('home');
		successalrt.present();
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
}
