import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { host } from '../../environments/environment';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

userData: any;
userDetails: any;
res: any;

  old_password: any;
  con_pass: any;
  new_pass: any;
   userId: any;
  action:any;
  
  
  constructor(public http: Http,
   public navCtrl: NavController,
   public storage: Storage,
   public loadingController: LoadingController,
   public alertController: AlertController,
   private location: Location
   ) {

this.storage.get("userDetails").then(val=>{
      if(val){
        this.userDetails = val;
            
      }
    });
   }

  ngOnInit() {
  }

async updatePassword(){
  const loading = await this.loadingController.create({
    message: 'Please wait...'
  });
  
const oldpassalrt = await this.alertController.create({
     message: 'Please enter old password',
      buttons: ['OK']
    });


    const conpassalrt = await this.alertController.create({
     message: 'Please enter confirm password',
      buttons: ['OK']
    });
    const newpassalrt = await this.alertController.create({
     message: 'Please enter new password',
      buttons: ['OK']
    });
    const checkpassalrt = await this.alertController.create({
     message: 'New and confirm password did not match',
      buttons: ['OK']
    });
    const notpassalrt = await this.alertController.create({
     message: 'Old password did not match',
      buttons: ['OK']
    });
    const erroralrt = await this.alertController.create({
     message: 'Sorry,something went wrong',
      buttons: ['OK']
    });
    const successalrt = await this.alertController.create({
     message: 'Password update successful',
      buttons: ['OK']
    });

    var headers = new Headers();
    //headers.append("Accept", 'application/json');
	if(this.old_password == '' || this.old_password == null){
		 
		loading.dismiss();
		oldpassalrt.present();
	}else if(this.new_pass == '' || this.new_pass == null){
	loading.dismiss();
	newpassalrt.present();
		
	}else if(this.con_pass == '' || this.con_pass == null){
	loading.dismiss();
	conpassalrt.present();
		
	}else if(this.con_pass != this.new_pass){
	loading.dismiss();
	checkpassalrt.present();
		
	}else{
	await loading.present();
	var data ={
		"old_password": this.old_password,
		"id": this.userDetails.response_data.id,
		"new_password": this.new_pass,
		"confirm_new_password": this.con_pass,
		
		
		
	}


	this.http.post(host+'update-user-password-al', data, { headers: headers })
	.subscribe(res => {
		//console.log(res.json());
		this.res = res.json();
		if(this.res.status == false){
		loading.dismiss();
		notpassalrt.present();
		}else if(this.res.status == true){
		this.old_password = '';
		this.new_pass = '';
		this.con_pass = '';
		successalrt.present();
		loading.dismiss();
		}else{
		erroralrt.present();
		loading.dismiss();
		}
	}, (err) => {
		console.log(err);
		loading.dismiss();
	});

	}


  }



  back(){
  
  		this.location.back();
  }
}
