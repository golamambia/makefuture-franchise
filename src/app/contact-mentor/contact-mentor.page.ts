import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { host } from '../../environments/environment';
import { image_path } from '../../environments/environment';
@Component({
  selector: 'app-contact-mentor',
  templateUrl: './contact-mentor.page.html',
  styleUrls: ['./contact-mentor.page.scss'],
})
export class ContactMentorPage implements OnInit {
userData: any;
userDetails: any;
imag_path=image_path;
appUrl = "https://theitvibe.com/project/ihose/api/user";
appUpdate = "https://theitvibe.com/project/ihose/api/updateUserProfile";
res: any;
 address: any;
 aadhaar_number:any;
  userId: any;
  admission_list:any;
  payment_status:any;
  pt_status:any;
  studentlist:any;
  message:any;
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
        this.userId=this.userDetails.response_data.id;
        }
        });

    }
   ionViewWillEnter() {
  // this.getStudent();
}

  ngOnInit() {
  }
 async submit(){
 const loading = await this.loadingController.create({
    message: ''
  });
   const msgalrt = await this.alertController.create({
     message: 'Please enter message',
      buttons: ['OK']
    });
        var headers = new Headers();
       
  //headers.append('Authorization', 'Bearer ' + this.userDetails.api_token);
  let data={
    
    "user_id": this.userId,
    "message": this.message
       
  }
  if(this.message == '' || this.message == null){
		 
		loading.dismiss();
		msgalrt.present();
	}else{
 await loading.present();
   this.http.post(host+'get-contactmentor',data)
	.subscribe(res => {
		
		this.res = res.json();
		//console.log(this.res);
		 if(this.res.status){
		 	this.message='';
		 	loading.dismiss();
		this.alertController.create({
      
      message: this.res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
			
		}else{
		this.alertController.create({
      
      message: this.res.message,
      buttons: ['OK']
    }).then(resalert => {

      resalert.present();

    });
		loading.dismiss();
		}
	}, (err) => {
		//console.log(err);
		loading.dismiss();
	});
      
    }
  }

}
